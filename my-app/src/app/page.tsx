'use client'
import Ehro from "@/components/Ehro";
import Navbar from "@/components/navbar";
import produxt from "@/store/store";

export default function Home() {
  let {productlar,settorf,torf}:any=produxt()
 
  
  return (
    <>
    <Navbar/>
    <Ehro/>
    </>
  );
}
