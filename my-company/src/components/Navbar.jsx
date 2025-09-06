import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#007bff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Link
          to="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '10px',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '10px',
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '10px',
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '10px',
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;