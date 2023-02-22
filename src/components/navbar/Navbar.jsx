import Clock from '../../clock/Clock';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <div>
            <span className="logo">Ziad Booking</span>
            </div>
            <div className="clock">
              <Clock/>
            </div>
            <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar