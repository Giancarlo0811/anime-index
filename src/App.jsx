import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:name" element={<Details/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
