import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/home" element={<Portfolio />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/projects/:projectId" element={<Portfolio />} />
      <Route path="/about" element={<Portfolio />} />
      <Route path="/skills" element={<Portfolio />} />
      <Route path="/contact" element={<Portfolio />} />

      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  )
}

export default App