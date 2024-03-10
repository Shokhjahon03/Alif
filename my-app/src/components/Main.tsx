'use client'

import produxt from "@/store/store"
import Cards from "./Cards"
import { useEffect } from "react";

const Main = () => {
    let {productlar,torf,getmal}:any=produxt()
    console.log(productlar);
    useEffect(()=>{
        getmal()
    },[])
  return (
    <>
      <div className="mt-[40px]">
        <div className="container">
            <div className="flex items-center mb-[30px]">
                <p className="text-[40px]  font-medium text-slate-800">Chegirmalar 🔥</p>
                <div className="flex items-center text-blue-600 font-semibold text-[20px]">Hammasini ko'rish <i className='bx bx-chevron-right'></i></div>
            </div>
          <div className="w-full flex gap-4 ">
          {
                productlar.map((e:{
                    id:number,
            img:string,
            mal:string,
            price:number
                },i:number)=>(
                    <div className=" cursor-progress relative" key={i}>
                        <img src={e.img} alt="alt" />
                        <p className="text-[10px]">{e.mal}</p>
                        <p className="text-[12px] bg-[#ffca48] rounded-md pl-3 border border-amber-600">dan <span className=" tex-[12px] font-semibold">85 969</span> so'm/oyga</p>
                        <p className="text-[11px] line-through text-slate-400">1 399 000</p>
                        <p><span className=" text-[15px] font-semibold">{e.price}</span> so'm</p>
                        <button>savatg</button>
                        <span className=" absolute "></span>
                        <span className=" absolute bottom-0 left-0">-15%</span>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
