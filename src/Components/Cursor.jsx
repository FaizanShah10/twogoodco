import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Cursor = () => {
    const cursorRef = useRef()


  useEffect(() => {
    const cursor = cursorRef.current;
    const productsSection = document.querySelector("#products");

    const moveCursor = (e) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX - 75, 
          y: e.clientY - 75,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const showCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0.7,
        duration: 0.7,
        ease: "power2.out",
      });
    };

    const hideCursor = () => {
      gsap.to(cursor, {
        scale: 0, 
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    productsSection.addEventListener("mouseenter", showCursor);
    productsSection.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      productsSection.removeEventListener("mouseenter", showCursor);
      productsSection.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    
        <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[220px] h-[220px] rounded-full bg-white opacity-0 scale-0 pointer-events-none z-10"
      ></div>
    
  )
}

export default Cursor