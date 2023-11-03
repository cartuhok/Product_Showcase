export default function Section_1() {
    return (
        <section className="h-screen relative">
            <div style={{ marginTop: '-3rem' }} className="absolute top-0 left-0 w-1/2 h-1/2 flex items-center justify-center"> 
                <h1 style={{ marginLeft: '33%' }} className="text-5xl sm:text-4xl md:text-4xl lg:text-7xl text-white whitespace-nowrap font-ranga">photo m8</h1>
            </div>

            <div className="absolute bottom-8 right-0 w-3/4 lg:w-1/2 h-1/2 flex flex-col items-start justify-center mr-4 lg:mr-0 mb-16 sm:mb-0">
                <div className="text-left ml-24 text-white">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 text-center font-manrope">Say Cheese!</h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-center font-manrope">Dive into the world of impeccable photography.</p>
                </div>
            </div>
        </section>
    )
}
