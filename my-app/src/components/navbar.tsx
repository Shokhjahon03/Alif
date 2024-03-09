'use client'
const Navbar = () => {
  return (
    <>

     <nav className="mt-[20px]">
        <div className="container">
            <div className="navbar w-full flex items-center justify-between">
                <div className="flex justify-between items-center gap-x-[20px]">
                    <img className="w-[112px] h-[31.15px]" src="https://alifshop.uz/_ipx/w_112/images/alifshop-logo.svg" alt="alt" />
                    <button className="w-[165px] h-[45px] bg-yellow-500 rounded-lg flex justify-around items-center">
                    <i className='bx bx-menu'></i>
                    Tovarlar Katalogi
                    </button>
                    <input type="search" className="h-[45px] rounded-lg w-[400px] border-2 pl-[10px] border-yellow-400" placeholder="Tovarlar izlash" />
                </div>
                <div className="flex justify-between items-center gap-x-[20px] ">
                    <button className="h-[45px] flex flex-col items-center justify-around hover:text-yellow-300">
                    <i className='bx bx-cart text-[20px]'></i>
                    <p className="text-[11px]">Savat</p>                       
                    </button>
                    <button className="h-[45px] flex flex-col items-center justify-around hover:text-yellow-300">
                    <i className='bx bx-heart text-[20px]'  ></i>
                    <p className="text-[11px]">Saralanganlar</p>                       
                    </button>
                    <button className="border border-yellow-400 h-[45px] rounded-lg pl-[10px] pr-[10px] hover:bg-yellow-300">
                        Krish
                    </button>
                </div>
            </div>
        </div>
     </nav>

    </>
  )
}

export default Navbar
