import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from '../Components/Footer';
import Cursor from '../Components/Cursor';

const Shop = () => {
  const scrollRef = useRef()
  const goodRef = useRef()
  const thingRef = useRef()
  const textRef = useRef()

  const imageData = [
    {
      src: 'https://cdn.sanity.io/images/w8f1ak3c/production/2285a9a86490345f28eff52adb8526b22c399553-5000x5000.png/6.png?w=1280&h=1280&auto=format',
      alt: 'Product 1',
      description: 'Alimaiz food is love lunch set',
      price: '$425'
    },
    {
      src: 'https://cdn.sanity.io/images/w8f1ak3c/production/ee658cdd0e3a23d7c6ec86001a9e098934c1109e-5000x5000.png/66.png?w=1280&h=1280&auto=format',
      alt: 'Product 2',
      description: 'the inside scoop good feels cracker box',
      price: '$79'
    },
    {
      src: 'https://cdn.sanity.io/images/w8f1ak3c/production/98a17ca570614f20c517689729350faf6afcfab6-5000x5000.png/63.png?w=1280&h=1280&auto=format',
      alt: 'Product 3',
      description: 'two higs n bar bear set',
      price: '$50'
    },
    {
      src: 'https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1280&h=1280&auto=format',
      alt: 'Product 4',
      description: 'two higs n bar bear set',
      price: '$50'
    },
    {
      src: 'https://cdn.sanity.io/images/w8f1ak3c/production/e0aa639482e1c96b1085a427f4dca7437a29042c-5000x5000.png/69.png?w=1280&h=1280&auto=format',
      alt: 'Product 5',
      description: 'two higs n bar bear set',
      price: '$50'
    },
    {
      src: 'https://cdn.sanity.io/images/w8f1ak3c/production/23480d8e50c66a44e33ec4e88418f961579cc72e-5000x5000.png/67.png?w=1280&h=1280&auto=format',
      alt: 'Product 6',
      description: 'two higs n bar bear set',
      price: '$50'
    },
    {
        src: 'https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=1280&h=1280&auto=format',
        alt: 'Product 7',
        description: 'two higs n bar bear set',
        price: '$50'
    },
    {
        src: 'https://cdn.sanity.io/images/w8f1ak3c/production/873ae3ef78f1d1c5cf31e70ef1ee600a4d482ddb-5000x5000.png/Strawberry-Gum-Pepperberry-Curing-Salt-Two-Good-Co.png?w=1280&h=1280&auto=format',
        alt: 'Product 8',
        description: 'two higs n bar bear set',
        price: '$50'
    },
    {
        src: 'https://cdn.sanity.io/images/w8f1ak3c/production/f71ee8c3def2b396daf01e5e9eaaa266dfa531cc-5000x5000.png/Website%20Products%20-%20G4G%202024.png?w=1280&h=1280&auto=format',
        alt: 'Product 9',
        description: 'two higs n bar bear set',
        price: '$50'
    },
  ];

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

  // text animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      goodRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" }
    ).fromTo(
      thingRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
      "-=0.5"
    ).fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
    )
  }, []);

  return (
    <>
    <Navbar />
    <Cursor/>
    <div ref={scrollRef} className='bg-[#F7F7F7]'>  
      <div className='max-w-[100vw] lg:min-h-[100vh] flex justify-between items-center lg:px-10 px-3'>
        <div className='lg:text-[11vw] font-[futura] leading-[10vw] tracking-medium'>
          <h2 ref={goodRef} className='uppercase'>good</h2>
          <h2 ref={thingRef} className='uppercase'>things</h2>
        </div>
        <div className='lg:w-[25vw]'>
          <p ref={textRef} className='text-sm'>
            We create high quality, sustainable, luxurious products - toiletries, apparel, blankets, candles. Basically, things that feel like home. The best part? With every single purchase, you have the potential to change the course of someone’s life.
          </p>
        </div>
      </div>

      <div id='products'>
        <div className='max-w-[100vw] h-[100vh] flex justify-center items-center pb-32 lg:gap-32 gap-16 lg:px-7 px-10'>
          <div className='w-[40%] lg:min-h-[80vh] h-[20vh]'>
            <img
              className='w-full h-full object-cover'
              src='https://cdn.sanity.io/images/w8f1ak3c/production/4bb75d35e0a1dd486766939fc3a4971960327b08-5000x5000.png/3.png?w=1920&h=1920&auto=format'
              alt=''
            />
            <div className='mt-14 pb-4 text-center'>
              <p className='text-sm pb-1'>ALEMAIS COOK IN COLOUR APRON</p>
              <p className='text-xs'>$190</p>
            </div>
          </div>
          <div className='w-[40%] lg:min-h-[80vh] h-[20vh]'>
            <img
              className='w-full h-full object-cover'
              src='https://cdn.sanity.io/images/w8f1ak3c/production/19c26dbfee7d5deee6abb8bdd25cfe6ff084611f-5000x5000.png/5.png?w=1920&h=1920&auto=format'
              alt=''
            />
            <div className='mt-14 pb-4 text-center'>
              <p className='text-sm pb-1'>ALEMAIS COOK IN COLOUR KIT</p>
              <p className='text-xs'>$225</p>
            </div>
          </div>
        </div>

        <div className='max-w-[100vw] py-10'>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 space-y-32'>
            {imageData.map((item, index) => (
              <div key={index} className='lg:w-[400px] w-[150px] h-[150px] lg:h-[400px]'>
                <img className='w-full h-full object-cover hover:scale-105 transform-all duration-300' src={item.src} alt={item.alt} />
                <p className='lg:text-md text-sm font-[helvetica] text-center uppercase'>{item.description}</p>
                <p className='text-xs font-[helvetica] text-center'>{item.price}</p>
              </div>
            ))}
          </div>
        </div>         
      </div>
        
      <div className='px-7'>
      <hr />
            <input className="uppercase lg:text-[7vh] text-[3vh] font-[futura] outline-none w-full" placeholder="enter your email for good"/>
      </div>

      <Footer/>
    </div>
    </>
  );
};

export default Shop;
