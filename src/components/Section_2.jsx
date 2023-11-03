export default function Section_2() {
    return (
        <section className="second-section h-screen flex flex-col items-center justify-center mb-8 relative top-[-25%]">

        <div class="absolute inset-0 flex items-center justify-center mt-44 lg:mt-0">
            <div class="bg-[#FB3D3D] rounded-full relative -z-10 w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[35vw] lg:h-[35vw]"></div>
        </div>

            {/* Centered div for "photo m8", moved slightly upwards */}
            <div style={{ marginTop: '-3rem' }} className="w-1/2 flex items-center justify-center mb-8 relative top-[-25%]"> 
                <h1 className="text-5xl sm:text-4xl md:text-4xl lg:text-7xl text-white whitespace-nowrap font-ranga">Photos and videos in 8k</h1>
            </div>

            {/* Centered div for "Say Cheese!", moved slightly downwards */}
            <div className="w-3/4 lg:w-1/2 flex flex-col items-center justify-center relative bottom-[-25%]">
                <div className="text-center text-white">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 font-manrope">Crafted Precision</h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg font-manrope">8K at 60fps raw video & full frame sensor</p>
                </div>
            </div>
        </section>
    )
}

