import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LogIN from './components/logIN'
import ContactMessages from './components/ContactMessages'
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIN />} />
        <Route path="/contact-messages" element={<ContactMessages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App