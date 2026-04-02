import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import { MyComponent } from './components/MyComponent';
import { MyComponent2 } from './components/MyComponent2';
import { Garage } from './components/Garage';
import TestUseState1 from './components/TestUseState';



import { Car } from './components/Car';
import Parent from './components/Parent';

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
        <Link to="/test" style={{ color: '#d32f2f', fontWeight: 'bold', textDecoration: 'none' }}>TEST</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="/mycomponent2" element={<MyComponent2 brand="Toyota" color="red" />} />
        <Route path="/garage" element={<Garage />} />

        <Route path="/car" element={<Car />} />

        <Route path="/parent" element={<Parent />} />

        <Route path="/test" element={<TestUseState1 />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;