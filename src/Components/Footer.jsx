import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-screen h-screen  text-gray-900 flex flex-col justify-between lg:px-7 px-3 py-12">
      {/* Top Section: Three Columns */}
      <div className="flex justify-between items-start w-full pt-32">
        {/* Left - Social Links */}
        <div>
          <h3 className="uppercase text-sm font-medium tracking-wide mb-2">Connect with us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        {/* Center - Logo & Legal Links */}
        <div className="lg:flex md:flex hidden flex-col items-center">
          {/* Logo */}
          <div className="mb-6 w-[210px] h-[210px]">
            <img className="w-full h-full object-cover" src="https://sydneylawgroup.com.au/wp-content/uploads/2021/03/twogoodlogo-dark-300x300.png" alt="" />
          </div>
          <p className="text-xs text-gray-500 mt-2">© TWO GOOD CO. 2025</p>
          <div className="flex space-x-4 text-xs text-gray-500 mt-1">
            <a href="#" className="hover:underline">TERMS OF USE</a>
            <a href="#" className="hover:underline">PRIVACY POLICY</a>
          </div>
        </div>

        {/* Right - Additional Links */}
        <div>
          <h3 className="uppercase text-sm font-medium tracking-wide mb-2">The Nitty Gritties</h3>
          <ul className="space-y-1 text-sm text-right">
            <li><a href="#" className="hover:underline">Good Things FAQs</a></li>
            <li><a href="#" className="hover:underline">Good Food FAQs</a></li>
            <li><a href="#" className="hover:underline">Good Places</a></li>
            <li><a href="#" className="hover:underline">Pathways</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Wholesale</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom - Land Acknowledgment */}
      <div className="lg:text-center md:text-center text-left text-sm max-w-4xl mx-auto pb-8">
        We are proud and privileged to have our home on this land, and to be able to continue the long tradition of 
        community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together 
        on this unceded land, we acknowledge our First Nations people, the original custodians of this land, and we recognize 
        their deep connection to land, water, sky, and community which continues today. We pay our deep respects to community 
        elders, past, present, and emerging, for they hold the memories, traditions, culture, and hopes of Aboriginal and 
        Torres Strait Islander peoples. Always was, always will be Aboriginal land.
      </div>
    </footer>
  );
};

export default Footer;
