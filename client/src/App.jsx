import './App.css'
import About from './component/About'
import Home from './component/Home'
import NavBar from './component/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
    //  <div>vite-app</div>
  )
}

export default App
