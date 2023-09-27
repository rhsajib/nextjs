import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my Rest Countries</h1>
            <nav className='menu'>
                <a href='/'>Home</a>
                <a href='/'>Countries</a>
                <a href='/'>Area</a>
                
            </nav>
        </div>
    );
};

export default Header;