import Greeting from './Components/Greeting'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'
import Projects from './Components/Projects'

function App() {

  return (
    <div className="relative flex flex-col h-auto justify-center items-center">
      <Navbar/>
      <Presentation/>
      <Greeting/>
      <Projects/>
    </div>
  )
}

export default App
