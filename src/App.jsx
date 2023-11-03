import CanvasContainer from './components/CanvasContainer'
import Navbar from './components/Navbar'
import Section_1 from './components/Section_1'
import Section_2 from './components/Section_2'
import Section_3 from './components/Section_3'
import Section_4 from './components/Section_4'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Gradient Background */}
      <div className="fixed top-0 left-0 min-h-[100vh] min-w-[100vw] -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" style={{ "--tw-gradient-stops": "#605D5D, #1F1E1E" }}></div>

      {/* Content */}
      <Navbar />
      <div className="relative z-9 overflow-hidden max-w-full">
        <div className="h-screen w-full fixed top-0">
          <CanvasContainer />
        </div>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </div>
      <Footer />
    </>
  )
}

export default App;
