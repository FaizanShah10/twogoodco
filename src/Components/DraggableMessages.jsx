import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap'


const messages = [
  { id: "001", name: "Holly, Purpose Conference.", text: "My package just arrived and the presentation is so beautiful...elegant, magical and meaningful at the same time." },
  { id: "002", name: "Diane M.", text: "This is hands down the best experience I've had. The quality and love in the package are evident." },
  { id: "003", name: "Barbara.", text: "Absolutely stunning! The detail and thoughtfulness that went into this is unmatched." },
  { id: "004", name: "Annabel.", text: "Received my package and I am beyond impressed. Such a meaningful touch!" },
  { id: "005", name: "Lukus W.", text: "Every little detail in the packaging made this an unforgettable experience." },
];



const DraggableMessages = () => {
  const [selectedId, setSelectedId] = useState(messages[0].id);
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);

  const messageRef = useRef()

  const handleSelection = (message) => {
    setSelectedId(message.id);
    setSelectedMessage(message);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
        messageRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" }
    ).fromTo(
        messageRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, ease: "power4.out" },
      "-=0.5"
    );
  }, []);

  return (
        <div className="max-w-[100vw] min-h-screen px-3 pt-10">
            <div className="px-3">
                <div className="flex justify-between pt-4">
                    <p className="text-xs uppercase">Words of Goodness</p>
                    <p className="text-xs uppercase">Messages of Love & Support</p>
                </div>
                <hr className="mb-4"/>
            </div>   
            <div className="flex flex-col items-center  ">
                
            {/* Draggable Items */}
            <div className="overflow-x-auto flex items-center border-b pb-4 mt-6 pt-6 px-4 w-full max-w-6xl justify-between">
                {messages.map((msg) => (
                <label
                    key={msg.id}
                    className={`cursor-pointer flex flex-col items-center text-center transition-all duration-300 ${
                    selectedId === msg.id ? " scale-110" : "opacity-70"
                    }`}
                    onClick={() => handleSelection(msg)}
                >
                    <input type="radio" name="messages" checked={selectedId === msg.id} onChange={() => {}} className="hidden" />
                    <div className={`w-4 h-4 border-2 rounded-full ${selectedId === msg.id ? "bg-black" : "bg-white border-gray-400"}`}></div>
                    <span className="mt-2 text-[2vh] px-6 font-[helvetica]">{`m// ${msg.id}`}</span>
                    <span className="text-sm">{msg.name}</span>
                </label>
                ))}
            </div>

            {/* Selected Message Display */}
            <div ref={messageRef} className="lg:mt-32 mt-10 text-center font-[futura] lg:w-[70vw]">
                <h1 className="md:text-5xl lg:text-[4vw] text-[4vw] uppercase">{selectedMessage.text}</h1>
            </div>

            <div className="lg:mt-16 mt-10 flex flex-col">
                <button className="px-4 py-5 bg-black rounded-full text-white uppercase text-sm lg:w-[23vw] w-[70vw] hover:text-gray-300 cursor-pointer tranform-all duration-300 font-[helvetica]">send your own message</button>
                <p className="text-center mt-6 pb-12 font-[helvetica] text-sm">Sometimes it’s the smallest actions <br /> that can make the biggest impact.</p>
            </div>
            </div>
        </div>
  );
};

export default DraggableMessages;
