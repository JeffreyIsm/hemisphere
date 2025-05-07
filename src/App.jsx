import { HashRouter as Router, Routes, Route } from "react-router-dom"
{/* BrowserRouter instead of HashRouter for real, this is just for github */}
import SideBar from "./Sidebar"
import Hero from "./Hero"
import About from "./About"
import Learn from "./Learn"
import Shop from "./Shop"
import Join from "./Join"
function App() {

  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  )
}

export default App
