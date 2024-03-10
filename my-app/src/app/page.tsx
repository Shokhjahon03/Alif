'use client'
import Ehro from "@/components/Ehro";
import Main from "@/components/Main";
import Navbar from "@/components/navbar";
import produxt from "@/store/store";

export default function Home() {
  let {productlar,settorf,torf}:any=produxt()
 
  
  return (
    <>
    <Navbar/>
    <Ehro/>
    <Main/>
    </>
  );
}
