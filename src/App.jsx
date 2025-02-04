import React, {useEffect, useRef, useState} from "react";
import Navbar from "./Components/Navbar";
import gsap from 'gsap'
import LocomotiveScroll from "locomotive-scroll"
import Cursor from "./Components/Cursor";
import DraggableMessages from "./Components/DraggableMessages";
import Footer from "./Components/Footer";
import useLocoScroll from "./hooks/useLocoScroll"; 
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'


const App = () => {

  const [start, setStart] = useState(false);
  const scrollRef = useRef()
  const changeRef = useRef()
  const courseRef = useRef()
  const imageRef = useRef()
  const productRef = useRef()

  gsap.registerPlugin(ScrollTrigger);


 
  // locomotive Scroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,  
    });

    return () => {
      if (scroll) scroll.destroy(); 
    };
  }, []);  

  // Gsap Animation - Main Heading
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      changeRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" }
    ).fromTo(
      courseRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
      "-=0.5"
    );
  }, []);

  // gsap animation - Image Reference
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      imageRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" }
    ).fromTo(
      imageRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
      "-=0.5"
    );
  }, []);

  // scroll trigger animation
  useGSAP(() => {
    gsap.from("#productImg img", {
      duration: 1.5,
      y:80,
      opacity:0,
    })
  })

  return (
    <>
      <Navbar />    
      <Cursor/>
      <div className="bg-[#F7F7F7]" ref={scrollRef}>
        <div className="max-w-[100vw] lg:min-h-[100vh]  max-height-[100vh] lg:mb-0 lg:pb-32 pb-4 ">
          <div className="lg:pt-52 pt-32">
            <div className="">
              <h1 className="lg:text-[15.7vw] text-[14vw] font-bold leading-[14vw] tracking-tighter font-[Futura] px-3 overflow-hidden">
              <span ref={changeRef} className="block">CHANGE</span>
              <span ref={courseRef} className="block">THE COURSE.</span>
              </h1>
            </div>
            <div data-scroll data-scroll-speed="0.7" className="max-w-[100vw] max-h-[100vh] px-3 mt-1">
              <img className="w-full h-full object-cover" src="https://cdn.sanity.io/images/w8f1ak3c/production/b183ed175d0b3aa67ecef72cfb4d146cd5fc9b2e-1500x1000.jpg/Teaser%20-%20A7R00739_DexterKim.jpg?rect=0,93,1500,814&w=1280&h=695&fit=min&auto=format" alt="" />
            </div>
          </div>       
        </div>
        
        <div className="max-w-[100vw] min-h-[100vh] pt-10">
          <div className="lg:px-7 px-3">

            <div className="flex justify-between">
              <p className="uppercase text-sm">buy good</p>
              <p className="uppercase text-sm">do good</p>
            </div>
            <hr className="mb-4"/>
            
            <div className="lg:flex lg:flex-row flex-col justify-center gap-10 relative mb-10">
              <div className="flex justify-center items-center lg:w-[30vw] w-[90vw]  lg:h-[100vh] h-[80vh] relative">
                <img ref={imageRef} data-scroll data-scroll-speed="1" 
                  className="w-full h-full object-cover"
                  src="https://cdn.sanity.io/images/w8f1ak3c/production/3639fc290272fe62d269e8750eff907b2664fc77-3000x5000.png/1.png?rect=0,1,3000,4999&w=1280&h=2133&auto=format"
                  alt=""
                />
                  <div  className="absolute top-1/2 left-1/2 lg:w-90 w-80 lg:h-14 h-12 bg-[#FFF6DE] rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center text-black text-sm flex justify-between px-10">
                  <p>SHOP</p>
                  <p className="font-bold">GIFTS FOR YOU</p>
                  </div>
              </div>

              <div className="flex justify-center items-center lg:w-[30vw] w-[90vw]  lg:h-[100vh] h-[80vh] relative">
                <img ref={imageRef} data-scroll data-scroll-speed="1" 
                  className="w-full h-full object-cover"
                  src="https://cdn.sanity.io/images/w8f1ak3c/production/9b0a45cc68406b9288b970064c64511ce937d911-5000x5000.png/Website%20Products%20-%20Alemais%202024.png?rect=1000,0,3000,5000&w=1280&h=2133&fit=min&auto=format"
                  alt=""
                />
                  <div className="absolute top-1/2 left-1/2 lg:w-90 w-80 lg:h-14 h-12 bg-[#FFF6DE] rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center text-black text-sm flex justify-between px-10">
                  <p>SHOP</p>
                  <p className="font-bold">ALEMAIS</p>
                  </div>
              </div>

              <div className="flex justify-center items-center lg:w-[30vw] w-[90vw]  lg:h-[100vh] h-[80vh] relative">
                <img ref={imageRef} data-scroll data-scroll-speed="1" 
                  className="w-full h-full object-cover"
                  src="https://cdn.sanity.io/images/w8f1ak3c/production/06dac0cbccbec66e8c76afc0cc323e5241cc508b-3000x5000.png/Website%20Slider%20Slice%20Images%20(18).png?rect=0,1,3000,4999&w=1280&h=2133&auto=format"
                  alt=""
                />
                  <div className="absolute top-1/2 left-1/2 lg:w-90 w-80 lg:h-14 h-12 bg-[#FFF6DE] rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center text-black text-sm flex justify-between px-10">
                  <p>SHOP</p>
                  <p className="font-bold">SOAPS FOR HOPE</p>
                  </div>
              </div>
            </div>

            <div className="lg:flex lg:flex-row flex-col justify-between items-center  h-[50vh] lg:px-16 px-3 mb-10">
              <div className="">
                <h2 className="font-[futura] lg:text-[4vw] text-[5vh] lg:leading-[4vw] leading-[8.5vw] tracking-tight lg:text-left text-center lg:w-[50vw] w-full">WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES AGAIN.</h2>
              </div>
              <div className="lg:w-[20vw] w-[90vw] flex flex-col gap-6 lg:text-left text-center lg:mt-0 mt-4">
                <p>Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.</p>
                <p>With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</p>
              </div>
            </div>
          </div>

        </div>

        <div id="products" className="max-w-[100vw] h-[100vh] flex justify-center items-center lg:gap-32 gap-16 lg:px-7 px-5 ">
          <div id="productImg" className="w-[40%] lg:min-h-[80vh] h-[20vh]">
            <img className="w-full h-full object-cover" src="https://cdn.sanity.io/images/w8f1ak3c/production/4bb75d35e0a1dd486766939fc3a4971960327b08-5000x5000.png/3.png?w=1920&h=1920&auto=format" alt="" />
            <div className="mt-14 pb-4  text-center">
              <p className="text-sm pb-1">ALEMAIS COOK IN COLOUR APRON</p>
              <p className="text-xs">$190</p>
            </div>
          </div>
          <div  className="w-[40%] lg:min-h-[80vh] h-[20vh]">
          <img  className="w-full h-full object-cover" src="https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1920&h=1920&auto=format" alt="" />
          <div className="mt-14 pb-4  text-center">
              <p className="text-sm pb-1">ALEMAIS COOK IN COLOUR APRON</p>
              <p className="text-xs">$190</p>
            </div>
          </div>
        </div>

        <div>
          <DraggableMessages/>
        </div>

        {/* Impact section */}
        <div className="max-w-[100vw] min-h-[100vh]  px-7 lg:pt-40 pt-10 pb-10">
          <div  className="flex lg:flex-row flex-col-reverse  justify-between">
            <div className="flex flex-col gap-8 lg:w-[22vw] w-full">
              <h2 className="font-[futura] uppercase lg:text-[1.5vw] text-[6vw] mt-4">our impact.</h2>
              <p>The thing is, we don't save anyone.</p>
              <p>What we do is provide a safe space for women to change the course of their own lives.</p>
              <p>After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.</p>
              <a className="text-sm underline" href="#">HERE'S HOW WE DO IT</a>
            </div>

            {/* Image Divs */}
            <div className="flex gap-6">
              <div className="lg:h-[100vh] h-[25vh] lg:w-[30vw] w-[50vw] bg-red-400">
                <img className="w-full h-full object-cover" src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=1280&h=1893&fit=crop&crop=focalpoint&auto=format" alt="" />
              </div>
              <div className="lg:h-[100vh] h-[25vh] lg:w-[30vw] w-[50vw] bg-red-400">
                <img className="w-full h-full object-cover" src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,58,5504,8140&w=1280&h=1893&fit=min&auto=format" alt="" />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <input className="uppercase lg:text-[7vh] text-[3vh] mt-14 font-[futura] outline-none w-full" placeholder="enter your email for good"/>
          </div>

          <hr />
        </div>

        {/* Footer */}
        <Footer/>
      

      </div>
    </> 
  );
};

export default App;