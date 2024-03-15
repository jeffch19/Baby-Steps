import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
    // const currentPage = useLocation().pathname;
    return (
        <div className='bg-amber-50 border border-lightblue flex justify-center'>
            <ul className='flex justify-between'>
                <li>
                    <Link to="/" className='mx-2'>Home</Link>
                </li>
                <li>
                    <Link to="/journal" className='mx-2'>Journal</Link>
                </li>
                <li>
                    <Link to="/calendar" className='mx-2'>Calendar</Link>
                </li>
            </ul>
            <Link to='/login' className='mx-2'>Login</Link>
        </div>
    )
}