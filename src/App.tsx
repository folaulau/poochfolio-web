import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing from "./pages/Landing"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <div className="font-body text-gray-700 text-15 font-500 min-w-[1024px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
