import { Header } from './component/Header';
import { Body } from './component/Body';
import { Footer } from './component/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function Hello() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Hello World! 👋</h1>
      <p>This is a basic route.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Header />

      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '1rem',
        background: '#eee'
      }}>
        <Link to="/home" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>INCIDENTS</Link>
        <Link to="/hello" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>MISCELLANEOUS</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path="/hello" element={<Hello />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;