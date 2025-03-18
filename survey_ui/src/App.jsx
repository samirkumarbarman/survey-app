import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Survey from './pages/Survey.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Survey App</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/admin">Admin Dashboard</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:id" element={<Survey />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
