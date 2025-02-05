import React from "react";
import { FooterLink } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/logo2.png"

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// Type Definitions
interface FooterLink {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}

const BottomFooter: string[] = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources: string[] = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans: string[] = ["Paid memberships", "For students", "Business solutions"];
const Community: string[] = ["Forums", "Chapters", "Events"];

const Footer: React.FC = () => {
  return (
    <div className="bg-fblue-100 mt-12">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-full max-w-maxContent text-white leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-fblue-100">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-fblue-100 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="Logo" className="object-contain" />
              <h1 className="text-white font-semibold text-[16px]">Company</h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <div
                    key={i}
                    style={{ color: "#DEEEFE" }}
                    className="text-[14px] text-fblue-50 !important cursor-pointer hover:text-white transition-all duration-200"
                  >
                    <Link to={ele.toLowerCase()}>{ele}</Link>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-white font-semibold text-[16px]">Resources</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] text-fblue-50 cursor-pointer hover:text-white transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                  </div>
                ))}
              </div>

              <h1 className="text-white font-semibold text-[16px] mt-7">Support</h1>
              <div className="text-[14px] text-fblue-50 cursor-pointer hover:text-white transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-white font-semibold text-[16px]">Plans</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <div
                    key={index}
                    style={{ color: "#DEEEFE" }}
                    className="text-[14px] text-fblue-50 cursor-pointer hover:text-white transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                  </div>
                ))}
              </div>

              <h1 className="text-white font-semibold text-[16px] mt-7">Community</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer text-fblue-50 hover:text-white transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink.map((ele: FooterLink, i: number) => (
              <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-white font-semibold text-[16px]">{ele.title}</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer text-fblue-50 hover:text-white transition-all duration-200"
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-white mx-auto pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-fblue-100 cursor-pointer hover:text-white text-fblue-50 transition-all duration-200"
                } px-3`}
              >
                <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
