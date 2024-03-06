import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    return (
        <ul>
            <li>
                <Link to="/">Testing</Link>
            </li>
        </ul>
    )
}