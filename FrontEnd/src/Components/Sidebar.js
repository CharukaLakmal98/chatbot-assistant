import React from "react";
import { TiDelete, TiArrowRightOutline } from "react-icons/ti";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  chats,
  handleStartNewChat,
  handleSelectChat,
  handleDeleteChat,
  messages,
  currentChat,
  setCurrentChat,
}) {
  return (
    <>
      <div>
        <button
          className={`fixed top-[53%]  transform -translate-y-1/2 z-10 p-2  text-white rounded-tr-full rounded-br-full transition-transform duration-300 ml-10 bg-purple-700  border border-gray shadow-lg hover:bg-purple-600 w-7  hover:border-gray-400 hover:shadow-xl ${
            isSidebarOpen ? "translate-x-[20rem]" : "translate-x-0 ml-[-0.1cm]"
          }`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <MdArrowBackIos className="w-4 m-1 h-[4cm] p-0 text-white hover:text-purple-100 " />
          ) : (
            <MdArrowForwardIos className="w-4 m-0 h-[4cm] p-0 text-white hover:text-purple-100" />
          )}
        </button>
      </div>

      <div
        className={`fixed w-[10cm] mt-14 h-[17cm] bg-white shadow-xl p-3 transform transition-transform duration-300 pl-6 pr-5 rounded-3xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="w-full p-2 mt-4 mb-6 text-white bg-gray-800 rounded-lg"
          style={{ fontSize: "1.2rem" }}
          onClick={() => messages.length > 0 && handleStartNewChat()}
        >
          + Start New Chat
        </button>
        <div className="h-[470px] p-2 pt-5 pb-10 overflow-y-scroll no-scrollbar bg-white rounded-xl">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`relative p-2 pl-6 mb-2 border-2 border-gray-900 text-black font-bold rounded-lg cursor-pointer ${
                index === currentChat
                  ? "bg-gray-800 text-white hover:bg-gray-800"
                  : "bg-white "
              } hover:bg-gray-600`}
              onClick={() => handleSelectChat(index)}
            >
              <span>Chat {index + 1}</span>
              <button
                className="absolute p-1 text-white rounded-full top-1 right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteChat(index);
                }}
              >
                <TiDelete className="rounded-full h-7 w-7 border-spacing-2 bg-wite hover:bg-gray-900" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
