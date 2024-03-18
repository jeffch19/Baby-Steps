import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
    // const currentPage = useLocation().pathname;
    return (
        <div className='navbar h-[60px] flex justify-center items-center'>
            <ul className='flex justify-between'>
                <li>
                    <Link to="/" className='mx-2'>Home</Link>
                </li>
                <li>
                    <Link to="/journal" className='mx-2'>Journal</Link>
                </li>
                <li>
                    <Link to="/calendar" className='mx-2'>Counter & Calendar</Link>
                </li>
            </ul>
            <Link to='/login' className='mx-2'>Login</Link>
        </div>
    )
}