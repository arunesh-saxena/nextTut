import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <Link href="/"><a className="navbar-brand">Navbar</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><Link href='/'><a className="nav-link">Home</a></Link></li>
                <li className="nav-item"><Link href='/about'><a className="nav-link">About</a></Link></li>
            </ul>
        </div>
        {/* <style jsx>{`
            ul {
                background: #333;
                color: #fff;
                list-style: none;
                display: flex;
            }
            ul li {
                font-size: 18px;
                margin-right: 20px;
            }
            ul li a {
                color: #fff;
                text-decoration: none;
            }
        `}</style> */}
    </nav>
);

export default Navbar;