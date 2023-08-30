import { BsFillSunFill } from 'react-icons/bs';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { useAuth, useTheme } from '../../hooks';

function Navbar() {
  const { toggleTheme } = useTheme();
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;

  return (
    <div className='bg-secondary shadow-sm shadow-gray-500'>
      <Container className='p-2'>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <img src='./logo.png' alt='' className='h-10' />
          </Link>
          <ul className='flex items-center space-x-4'>
            <li>
              <button
                onClick={toggleTheme}
                className='dark:bg-white bg-dark-subtle p-1 rounded'
              >
                <BsFillSunFill className='text-secondary' size={24} />
              </button>
            </li>
            <li>
              <input
                type='text'
                className='border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition'
                placeholder='search...'
              />
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className='font-semibold text-lg text-white'
                >
                  Log out
                </button>
              ) : (
                <Link
                  to='/auth/signin'
                  className='font-semibold text-lg text-white'
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
