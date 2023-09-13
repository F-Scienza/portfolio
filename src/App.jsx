import Footer from './Components/Footer'
import Greeting from './Components/Greeting'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import Projects from './Components/Projects'
import Tecnologies from './Components/Tecnologies'

function App() {

  return (
    <div className="relative flex flex-col h-auto justify-center items-center">
      <Navbar />
      <Presentation />
      <Greeting />
      <Tecnologies />
      <Projects />
      <Footer/>
    </div>
  )
}

export default App
