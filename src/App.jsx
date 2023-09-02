import Greeting from './Components/Greeting'
import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation'

function App() {

  return (
    <div className="relative flex flex-col h-auto justify-center items-center">
      <Navbar/>
      <Presentation/>
      <Greeting/>
    </div>
  )
}

export default App
