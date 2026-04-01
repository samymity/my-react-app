import { Header } from './component/Header';
import { Body } from './component/Body';
import { Footer } from './component/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import { MyComponent } from './component/MyComponent';
import { MyComponent2 } from './component/MyComponent2';
import { Garage } from './component/Garage';

import { Car } from './component/Car';
import Parent from './component/Parent';

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
        <Link to="/mycomponent" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>MYCOMPONENT</Link>
        <Link to="/mycomponent2" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>MYCOMPONENT2</Link>
        <Link to="/garage" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>GARAGE</Link>
        <Link to="/car" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>CAR</Link>
        <Link to="/parent" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>PARENT</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="/mycomponent2" element={<MyComponent2 brand="Toyota" color="red" />} />
        <Route path="/garage" element={<Garage />} />

        <Route path="/car" element={<Car />} />

        <Route path="/parent" element={<Parent />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;