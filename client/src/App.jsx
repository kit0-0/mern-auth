import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Nav from "./components/Nav"
function App() {

  return (
    <BrowserRouter>
    <Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signin" element={<Signin/>}/>
  <Route path="/signup" element={<Signin/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App
