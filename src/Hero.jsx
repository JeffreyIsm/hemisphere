import SidebarButton from "./SidebarButton";

function Hero(){
    return(
        <div className='bg-hemi-pink flex-col w-screen h-screen place-content-center'>
            <SidebarButton/>
            
            <h1 className='font-lora text-5xl flex justify-center animate-fade-in-scale'>hemisphere</h1>
            <h2 className='font-lora text-xl flex justify-center mt-4 animate-fade-in-scale-delayed'>one mind at a time</h2>
        </div>
    );
}
export default Hero