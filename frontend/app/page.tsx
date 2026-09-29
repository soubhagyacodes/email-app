"use client"


import clsx from "clsx";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";


export default function Home() {
  const [hide, setHide] = useState(true)
  return (
    <>
      <div className={clsx("bg-pink-300 pt-20 px-10 text-2xl w-md h-screen transition-all opacity-0 duration-700 translate-x-0", hide && "opacity-100 translate-x-2")}>
        
      </div>
      <div className="m-10">
        <div></div>
        <FiAlignJustify size={30} className="fixed top-10 cursor-pointer" onClick={() => {
          setHide(prev => !prev)
        }}/>
      </div>
    </>
  )
}
