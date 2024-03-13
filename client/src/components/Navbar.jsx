import { Link } from 'react-router-dom';

export default function Navbar() {
    // const currentPage = useLocation().pathname;
    return (
        <div className='bg-rose-100 height-[4vh] flex justify-between'>
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