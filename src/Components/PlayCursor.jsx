import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PlayCursor = () => {
  const playCursorRef = useRef();

  useEffect(() => {
    const cursor = playCursorRef.current;
    const videoSection = document.querySelector("#videoSection");

    const moveCursor = (e) => {
      if (cursor) {
        // Adjust offset to center the circle on the pointer
        const rect = cursor.getBoundingClientRect();
        const offsetX = rect.width / 2;
        const offsetY = rect.height / 2;

        gsap.to(cursor, {
          x: e.clientX - offsetX,
          y: e.clientY - offsetY,
          duration: 0.3,
          ease: "power2.out",
            });
          }
        } 

    const showCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 0.9,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const hideCursor = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    videoSection.addEventListener("mouseenter", showCursor);
    videoSection.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      videoSection.removeEventListener("mouseenter", showCursor);
      videoSection.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      ref={playCursorRef}
      className='fixed top-0 left-0 opacity-0 scale-0 w-[100px] h-[100px] rounded-full bg-black text-white flex justify-center items-center z-50 pointer-events-none'
    >
      <p className='uppercase font-[Helvetica] font-bold text-sm tracking-wide'>
        play
      </p>
    </div>
  );
};

export default PlayCursor;
