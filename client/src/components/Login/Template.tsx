// import { FcGoogle } from "react-icons/fc";
// import { useSelector } from "react-redux";

import frameImg from "../../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface TemplateProps {
  title: string;
  description1: string;
  description2: string;
  image: string;
  formType: "signup" | "login";
}

// interface RootState {
//   auth: {
//     loading: boolean;
//   };
// }

function Template({ title, description1, description2, image, formType }: TemplateProps) {
  // Mock loading state for frontend testing
  const loading = false; // Replace this with a hardcoded value for now.

  // const { loading } = useSelector((state: RootState) => state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblue-600">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblue-400">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <LoginForm /> : <SignupForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
