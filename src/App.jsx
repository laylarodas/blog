import './App.css'
import Home from './Home'
import Articles from './components/pages/Articles'
import Create from './components/pages/Create'

function App() {

  return (
    <div className='App'>
      <h1>Blog with React</h1>
      <Home />
      <Articles/>
      <Create/>
    </div>
  )
}


export default App;