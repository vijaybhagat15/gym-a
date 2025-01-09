import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBoxOpen,
  FaHeart,
  FaUserCircle,
  FaSignInAlt,
  FaCog,
} from 'react-icons/fa';

export default function BottomLinks() {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-br from-[#283618] to-[#606c38] text-[white] md:hidden sticky top-0 z-50 font-sans">
      <div className="container mx-auto flex justify-center py-1 px-1">
        <div className="grid grid-cols-5 sm:grid-cols-6  text-center text-xs">
          {/* Home Link */}
          <Link
            to="/"
            className={`${
              isActive('/') ? 'bg-primary scale-110 rounded-lg transition-transform underline' : ''
            }  flex flex-col items-center border-2 border-[#283618] p-2 hover:bg-primary hover:scale-110 hover:rounded-lg transition-transform`}
          >
            <FaHome size={20} />
            <span>Home</span>
          </Link>

          {/* Products Link */}
          <Link
            to="/products"
            className={`${
              isActive('/products') ?  'bg-primary scale-110 rounded-lg transition-transform underline' : ''
            }  flex flex-col items-center border-2 border-[#283618] p-2 hover:bg-primary hover:scale-110 hover:rounded-lg transition-transform`}
          >
            <FaBoxOpen size={20} />
            <span>Products</span>
          </Link>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className={`${
              isActive('/wishlist') ? 'bg-primary scale-110 rounded-lg transition-transform underline' : ''
            }  flex flex-col items-center border-2 border-[#283618] p-2 hover:bg-primary hover:scale-110 hover:rounded-lg transition-transform`}
          >
            <FaHeart size={20} />
            <span>Wishlist</span>
          </Link>

          {/* Profile Link (if authenticated) */}
          {isAuthenticated && (
            <Link
              to="/profile"
              className={`${
                isActive('/profile') ? 'bg-primary scale-110 rounded-lg transition-transform underline' : ''
              }  flex flex-col items-center border-2 border-[#283618] p-2 hover:bg-primary hover:scale-110 hover:rounded-lg transition-transform`}
            >
              <FaUserCircle size={20} />
              <span>Profile</span>
            </Link>
          )}

          {/* Login (if not authenticated) */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className={`${
                isActive('/login') ?  'bg-primary scale-110 rounded-lg transition-transform underline' : ''
              }  flex flex-col items-center border-2 border-[#283618] p-2 hover:bg-primary hover:scale-110 hover:rounded-lg transition-transform`}
            >
              <FaSignInAlt size={20} />
              <span>Login</span>
            </Link>
          )}

          {/* Settings */}
          <Link
            to="/forgot-password"
            className={`${
              isActive('/forgot-password')
                ?  'bg-primary scale-110 rounded-lg transition-transform underline' : ''
              }  flex flex-col items-center border-2 border-[#283618] p-2 hover:bg-primary hover:scale-110 hover:rounded-lg transition-transform`}
            >
            <FaCog size={20} />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
