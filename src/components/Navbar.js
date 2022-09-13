import React, {useState} from 'react';
import { Button } from './Button';
import Dropdown from './Dropdown.js';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                <i class="fa-sharp fa-solid fa-fire">WS</i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                    <a href='#frontpage' className='nav-links' onClick={closeMobileMenu}>
                            Home
                    </a>
                    </li>

                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <a href='#projectsection' className='nav-links' onClick={closeMobileMenu}>
                            Projects <i className='fas fa-caret-down' />
                        </a>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <a href='#skillsection' className='nav-links' onClick={closeMobileMenu}>
                            Skills
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experiencesection' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experiencespace' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experiencespace' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li>
                    

                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Resume
                        </Link>
                    </li>

                </ul>
                <Button />

            </nav>
        </>
    )
}



export default Navbar;