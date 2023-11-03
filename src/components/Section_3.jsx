export default function Section_3() {
  return (
      <section className="third-section h-screen relative flex items-center md:items-end lg:items-center justify-between px-10">
          {/* Left content */}
          <div className="flex flex-col items-start space-y-4  mt-64 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl text-white font-ranga">Super Sensor</h1>
              <p className="text-sm sm:text-base md:text-base lg:text-lg font-manrope text-white max-w-xs">Experience photography redefined with our groundbreaking sensor technology. Every shot captures vibrant details, bringing your vision to life with unparalleled accuracy.</p>
          </div>

          {/* Right content */}
          <div className="flex flex-col items-start space-y-4 mt-64 lg:mt-0 ml-2 lg:ml-0">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl text-white font-ranga">Limitless Lens</h2>
              <p className="text-sm sm:text-base md:text-base lg:text-lg font-manrope text-white max-w-xs">Step into a new era of imagery with our state-of-the-art lens. Designed for perfection, it offers unrivaled clarity, ensuring every moment is captured in its purest form.</p>
          </div>
      </section>
  )
}
