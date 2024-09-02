import { AddIcon, HeaderLogo } from "../../utils/icon.util"

export const MainPage = () => {

    
    return (
        <div className="flex flex-col items-center min-h-screen">

            <header className="flex flex-row items-center justify-center gap-3 font-black text-[40px]/[48.41px] bg-[#0D0D0D] w-full h-52 relative">
                <HeaderLogo />
                <p className="text-[#5E60CE]"><span className="text-secondary">to</span>do</p>
                {/* SearchBar */}
                <div className="flex absolute -bottom-3 gap-2 w-[763px]">
                    <input className='text-base font-normal text-[#808080] bg-[#262626] p-4 rounded-lg border border-[#0D0D0D] w-full' type="search" placeholder="Write your note and press “Enter” ..." />
                    <button className="text-sm bg-[#1E6F9F] text-primary/[19.6px] p-4 rounded-lg">
                        <span className="flex gap-2 items-center font-bold">
                            Add
                            <AddIcon />
                        </span>
                    </button>
                </div>
            </header>

            <main className="flex w-[763px] items-center flex-grow">
                
            </main>
        </div>
    )
}