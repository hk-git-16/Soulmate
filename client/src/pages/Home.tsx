import { NavLink } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import HighLightText from '../components/home/HighlightTest'
import CTAButton from "../components/core/Button"
import ExploreMore from '../components/home/ExploreMore'
import Banner from "../assets/therapy.mp4"
import Footer from "../components/core/Footer"

const Home = () => {
  return (
    <div className='bg-white min-h-screen'>
        {/* Section 1 */}
        <div className='relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center 
        text-white justify-between bg-white'>
            <NavLink to="/signup">
                <div className='group mx-auto rounded-full bg-fblue-200 font-bold text-white
                transition-all duration-200 hover:scale-95 w-fit mt-16 p-1'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                    transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become a Therapist</p>
                        <FaArrowRight />
                    </div>
                </div>
            </NavLink>

            <div className='text-center text-4xl font-semibold mt-7 text-richblack-800'>
                Nurture Your Well-being with {" "}
                <HighLightText text={"Mingfulness"} />
            </div>

            <div className='w-[90%] text-center text-lg font0bold text-richblack-300 mt-4 '>
            With our wellness programs, you can grow at your own pace, from anywhere, with access to a variety of resources, guided exercises, and personalized support to help you along your journey.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkto={"login"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className='shadow-blue-200 mx-3 my-12 w-[50rem]'>
                <video  
                muted
                loop
                autoPlay>
                    <source src={Banner} type='video/mp4' />
                </video>
                {/* <div className='bg-richblack-600 w-[68rem] h-[1rem]'></div> */}
            </div>

            {/* Explore More Section */}
            <ExploreMore />

            <Footer />

        </div>   
    </div>
  )
}

export default Home