import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeddingHome from './pages/WeddingHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeddingHome />} />
      </Routes>
    </Router>
  );
}

export default App;
