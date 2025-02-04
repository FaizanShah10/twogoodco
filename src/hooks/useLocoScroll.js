import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("[data-scroll-container]");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({ scroller: scrollEl });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    console.log("Locomotive Scroll with ScrollTrigger initialized.");

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, [start]);
};

export default useLocoScroll;
