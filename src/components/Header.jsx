import './Header.css'
import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Hamburger from '../components/Hamburger';

function Header() {
    const location = useLocation();
    const containerRef = useRef(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [menuExpanded, setMenuExpanded] = useState(false);

    useEffect(() => {
        function updateIndicator() {
            const active = containerRef.current?.querySelector('a.active');
            setIndicatorStyle({
                left: active?.offsetLeft ?? 0,
                width: active?.offsetWidth ?? 0,
            });
        }

        updateIndicator();
        setMenuExpanded(false); 

        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [location]);

    return(
        <div className='headerWrapper col'>
            <div className="header row">
                <div className='headerLogoBox row'>
                    <span className='h1'>Jagger Adams</span>
                </div>
                <div className='headerAnimationBox col'>
                    <div className='headerBtnBox row h3' ref={containerRef}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/resume">Resume</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <div className='headerIndicator' style={{ ...indicatorStyle, transition: 'all 0.3s ease' }} />
                </div>
                <Hamburger className='hamburger' isOpen={menuExpanded} onClick={() => setMenuExpanded(!menuExpanded)} />
            </div>
            {menuExpanded&&
                <div className='headerMenu col'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            }
        </div>
        
    );
}

export default Header;