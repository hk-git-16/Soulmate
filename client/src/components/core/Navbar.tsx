import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from "../../assets/logo.png"
import logo2 from "../../assets/logo2.png"
import { NavbarLinks } from "../../data/navbar-links"
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

interface SubLink {
  name: string;
  courses: { id: number }[]; // Adjust the course structure as needed
}

const Navbar: React.FC = () => {
  const location = useLocation();

  const [subLinks, setSubLinks] = useState<SubLink[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Mocked fetch data (replace this with actual API if required)
    const fetchData = async () => {
      setLoading(true);
      try {
        const mockResponse: SubLink[] = [
          { name: 'Web Development', courses: [{ id: 1 }] },
          { name: 'Data Science', courses: [{ id: 2 }] },
        ];
        setSubLinks(mockResponse);
      } catch (error) {
        console.error('Could not fetch categories.', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const matchRoute = (route: string): boolean => {
    return location.pathname.startsWith(route);
  };

  return (
    <div
      className={`flex h-14 items-center relative top-[-18px] justify-center border-b-[1px] border-b-gray-300 bg-white
      transition-all duration-200`}
    >
      <div className="flex w-10/12 max-w-maxContenttop-[-100px] items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo2} alt="Logo" width={90} height={90} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-gray-900">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === 'Catalog' ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute('/catalog/:catalogName')
                        ? 'text-blue-500'
                        : 'text-gray-900'
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-100 p-4 text-gray-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-100"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length > 0 ? (
                        subLinks.map((subLink, i) => (
                          <Link
                            to={`/catalog/${subLink.name
                              .split(' ')
                              .join('-')
                              .toLowerCase()}`}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-gray-200"
                            key={i}
                          >
                            <p>{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? 'text-fblue-300'
                          : 'text-black'
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Buttons */}
        <div className="hidden items-center gap-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-[8px] border border-gray-300 bg-fblue-200 text-white px-[12px] py-[8px]">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded-[8px] border border-gray-300 bg-fblue-200 px-[12px] text-white py-[8px]">
              Sign up
            </button>
          </Link>
          {/* <Link to="/dashboard/cart" className="relative">
            <AiOutlineShoppingCart className="text-2xl text-gray-900" />
            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-gray-600 text-center text-xs font-bold text-yellow-100">
              0
            </span>
          </Link> */}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
