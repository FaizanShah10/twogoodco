import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar'
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import PlayCursor from '../Components/PlayCursor'
import Footer from '../Components/Footer'


const WholeSale = () => {

    const scrollRef = useRef()
    const video = useRef()
    const headingOne = useRef()
    const headingTwo = useRef()

    //locomotive scroller
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

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          headingOne.current,
          { y: "80%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power4.out" }
        ).fromTo(
          headingTwo.current,
          { y: "80%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
          "-=0.5"
        );
      }, []);


  return (
    <>
        <PlayCursor/>
        <Navbar/>
        <div ref={scrollRef}>  
            <div  className='max-w-[100vw] min-h-[100vh]'>
                <div className='lg:text-[16vw] text-[14vw] uppercase font-[futura] leading-[14vw] tracking-tighter pt-60 lg:px-7 px-3'>
                    <h2 ref={headingOne}>buy soap</h2>
                    <h2 ref={headingTwo}>give hope.</h2>
                </div>
                {/* img */}
                <div className='flex justify-between lg:px-7 px-3 gap-10 pt-8'>
                    <div className='max-w-[100vw] max-h-[100vh] '>
                        <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/8a379761371c4f616ee067f3ec605131129344ec-3120x1463.png/Soaps%20(1).png?rect=213,0,2694,1463&w=2560&h=1390&fit=min&auto=format" alt="" />
                    </div>

                    
                </div>
            </div>

            <div className='w-[100vw] min-h-[100vh]'>
                <div className='flex justify-center items-center lg:pt-32 pt-2'>
                    <h2 className='lg:text-[4vw] text-[10vw] lg:w-[55vw] md:w-[55vw] w-[90vw] font-[futura] text-center lg:leading-[3.7vw] leading-[10vw]'>CHOOSE WHOLESALE SOAPS THAT INSPIRE WHOLE COMMUNITIES.</h2>
                </div>

                <div className='lg:flex lg:flex-row flex-col-reverse justify-center gap-16 px-3 pt-32'>
                    <div className='lg:w-[25%] flex flex-col gap-10 min-h-[100vh]'>
                        <h2 className='font-bold text-2xl'>GOOD FOR BUSINESS,
                        GOOD FOR THE COMMUNITY.</h2>
                        <p className='text-left'>We're a registered social enterprise with NFP status, who run and innovate like a business: product first. We've partnered with industry leaders to explore the best practice for commercial Tier 1 operators, and then added meaningful, local social impact, using our unique Two Good Co lens.</p>
                        <p className='text-left'>Our wholesale products span from high-quality washroom consumables, to anti-bacterial hand wash and sanitiser for high-traffic areas, to premium Hardware + Dispensing solutions. We treat every order with equal respect, with a dedicated team focussed on quality assurance, in-house account management, stock management and on-time delivery.</p>
                        <p className='text-left'>With wholesale pricing and national fulfilment across Commercial Property, Hotel, Hospitality, Residential, Tech, Media and Professional Services clients, we've worked hard to scale our operations to sustainably deliver large-scale solutions that create real social impact in local communities...and we can't wait to see all the GOOD we can create together.</p>
                    </div>
                    <div className='lg:w-[33%] w-[90%] min-h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/20e77c4a35bd935dcd8061acbd5c7b0aa86f7e0b-1080x1920.png/Untitled%20design%20(4).png?fp-x=0.5&fp-y=0.5073624454148473&w=1024&h=1515&fit=crop&crop=focalpoint&auto=format" alt="" />
                    </div>
                    <div className='lg:w-[33%] w-[90%] min-h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/0f35966b30bd16ffdd2a80b404277e5d8c3dcf87-2713x3983.png/Ev-MDS_6479%20copy.png?fp-x=0.5&fp-y=0.37971119133574&w=1280&h=1893&fit=crop&crop=focalpoint&auto=format" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-[100vw] min-h-[100vh] px-3 mt-16'>
                <div className='flex justify-between uppercase text-xs'>
                    <p>buy soap</p>
                    <p>give hope.</p>
                </div>
                <hr />

                <div className='flex flex-col justify-center items-center text-center gap-10 pt-32 pb-32'> 
                    <h2 className='text-[6vw] lg:text-[2.5vw] font-[futura]'>BROWSE TWO GOOD'S WHOLESALE SOAPS TODAY.</h2>
                    <p>PURCHASING SMALL VOLUMES?</p>
                    <p>If you're enquiring to order soap in volumes of less than 5 litres, please purchase directly from our shopfront.</p>

                    <button className='w-auto lg:w-auto px-18 font-semibold py-5 bg-black text-white rounded-full  mx-auto font-[helvetica] text-sm'>
                        BROWSE SOAPS FAQs.
                    </button>
                    
                    <button className='w-auto lg:w-auto px-18 font-semibold py-5 bg-black text-white rounded-full  mx-auto font-[helvetica] text-sm'>
                        REQUEST A WHOLESALE SOAPS BROCHURE.
                    </button>
                    
                    <button className='w-auto lg:w-auto px-18 font-semibold py-5 bg-black text-white rounded-full  mx-auto font-[helvetica] text-sm'>
                        LOGIN TO TWO GOOD'S WHOLESALE SOAPS PORTAL.
                    </button>
                </div>

                <hr className='px-7 mb-4'/>

            </div>

            <div className='w-[100vw] min-h-[100vh] flex flex-col lg:flex-row justify-center gap-10'>
                <div className="lg:flex lg:flex-row flex-col justify-center gap-10 relative mb-10">
                    <div className="flex justify-center items-center lg:w-[30vw] w-[90vw]  lg:h-[100vh] h-[80vh] relative">
                        <img  data-scroll data-scroll-speed="1" 
                        className="w-full h-full object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/06dac0cbccbec66e8c76afc0cc323e5241cc508b-3000x5000.png/Website%20Slider%20Slice%20Images%20(18).png?rect=0,1,3000,4999&w=1280&h=2133&auto=format"
                        alt=""
                        />
                        <div  className="absolute top-1/2 left-1/2 lg:w-90 w-80 lg:h-14 h-12 bg-[#FFF6DE] rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center text-black text-sm flex justify-between px-10">
                        <p>SHOP</p>
                        <p className="font-bold">THE PREMIUM RANGE</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center lg:w-[30vw] w-[90vw]  lg:h-[100vh] h-[80vh] relative">
                        <img  data-scroll data-scroll-speed="1" 
                        className="w-full h-full object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/708dec5a2d0165d8c3513a2ab82a290cd9d1e035-3000x5000.png/3.png?rect=0,1,3000,4999&w=1280&h=2133&auto=format"
                        alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 lg:w-90 w-80 lg:h-14 h-12 bg-[#FFF6DE] rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center text-black text-sm flex justify-between px-10">
                        <p>SHOP</p>
                        <p className="font-bold">THE EVERYDAY RANGE</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center lg:w-[30vw] w-[90vw]  lg:h-[100vh] h-[80vh] relative">
                        <img  data-scroll data-scroll-speed="1" 
                        className="w-full h-full object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/2956933c6f32951062c223535cd9f9213af7ab86-3000x5000.png/10.png?rect=0,1,3000,4999&w=1280&h=2133&auto=format"
                        alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 lg:w-90 w-80 lg:h-14 h-12 bg-[#FFF6DE] rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center text-black text-sm flex justify-between px-10">
                        <p>SHOP</p>
                        <p className="font-bold">THE BRACKETS</p>
                        </div>
                    </div>
                
                </div>
            </div>

            {/* VIDEO */}
            <div className='w-[100vw] lg:h-[100vh] h-[20vh] lg:p-10 p-2'>
                <video id='videoSection' ref={video} loop autoPlay muted src="./video.mp4"></video>    
            </div>

            <div className='w-[100vw] min-h-[100vh] lg:px-7 lg:mt-10 mt-2'>
                
                <div className='flex lg:flex-row flex-col justify-center gap-16 px-3 lg:pt-32 pt-18'>
                    <div className='lg:w-[25%] md:w-[30%] w-[90%] flex flex-col gap-10 min-h-[100vh]'>
                        <h2 className='font-bold text-2xl'>WE’RE NOT JUST IN THE BUSINESS OF SELLING SOAP; WE'RE IN THE BUSINESS OF GIVING HOPE.</h2>
                        <p className='text-left'>As an accredited social enterprise, 50% of all profits are reinvested into supporting, empowering and employing women with lived experience of domestic violence and homelessness.</p>
                        <p className='text-left'>Through our Work Work program, we employ and empower vulnerable women to believe in themselves again, bridging a 'love and skills' gap in the workplace as they re-establish their self worth and independence. We currently employ around 58 women a year...but our goal is to employ 80 women a year, every year. And we need your help. The more soap we sell, the more women we can employ, and the more impact we can make in your local community.</p>
                        <p className='text-left'>...which means you can Change The Course of vulnerable women's lives, just through buying washroom consumables you're already purchasing.</p>
                    </div>
                    <div className='lg:w-[33%] md:w-[30%] w-[90%] min-h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/604e2d0eb091d7e1abd20e8530c081ac82aef905-5504x8256.jpg/WWW_1316.jpg?rect=0,58,5504,8140&w=1280&h=1893&fit=min&auto=format" alt="" />
                    </div>
                    <div className='lg:w-[33%] md:w-[30%] w-[90%] min-h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/dbcda18ea72fa176c2b9f8797c7ebee933c0f4ab-1080x1920.png/XXX%20BUILDINGS%20ACROSS%20AUSTRALIA.png?rect=0,161,1080,1598&w=1024&h=1515&fit=min&auto=format" alt="" />
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default WholeSale