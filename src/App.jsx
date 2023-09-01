import Greeting from './Components/Greeting'
import Presentation from './Components/Presentation'

function App() {

  return (
    <div className="flex flex-col h-auto justify-center items-center bg-gradient-to-br from-slate-700 to-zinc-900">
      <Presentation/>
      <Greeting/>
    </div>
  )
}

export default App
