import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center space-x-6">
      <Link to="/" className="hover:text-amber-200 transition">Home</Link>
      <Link to="/about" className="hover:text-amber-200 transition">About</Link>
      {user ? (
        <>
          <Link to="/dashboard" className="hover:text-amber-200 transition">Dashboard</Link>
          <button 
            onClick={logout}
            className="bg-amber-600 hover:bg-amber-700 px-4 py-1 rounded transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:text-amber-200 transition">Login</Link>
          <Link 
            to="/register" 
            className="bg-amber-600 hover:bg-amber-700 px-4 py-1 rounded transition"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;