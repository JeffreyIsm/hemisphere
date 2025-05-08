import { HashRouter as Router, Routes, Route  } from "react-router-dom"
import { SidebarProvider } from "./SidebarContext"
{/* BrowserRouter instead of HashRouter for real, this is just for github */}

import Hero from "./Hero"
import About from "./About"
import Learn from "./Learn"
import Shop from "./Shop"
import Join from "./Join"

import SideBar from "./Sidebar"

function App() {
  return (
    <SidebarProvider>
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
    </SidebarProvider>
  )
}

export default App
