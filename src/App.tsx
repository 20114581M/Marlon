import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LogIN from './components/logIN'
import ContactMessages from './components/ContactMessages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Marlon/" element={<Home />} />
        <Route path="/Marlon/login" element={<LogIN />} />
        <Route path="/Marlon/contact-messages" element={<ContactMessages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App