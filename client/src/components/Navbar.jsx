import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    return (
        <ul className='bg-rose-100'>
            <li>
                <Link to="/">Testing</Link>
            </li>
        </ul>
    )
}