import { create } from "zustand";

let produxt= create((set)=>({
    productlar:[],
    torf:false,
    settorf:()=>{
        set((state:any) => ({
            productlar:[],
            torf: state.torf? false:true
          }));
    }
}))

export default produxt