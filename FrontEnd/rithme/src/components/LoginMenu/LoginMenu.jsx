import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './LoginMenu.scss';

export default function LoginMenu () {
    
    const [menu, setMenu] = useState(false);

    useEffect(()=> {
        console.log(menu)
    }, [menu])

    const handdleMenu = () => {
        (menu===false)?setMenu(true):setMenu(false);
    }
    
    return (<>
        {menu===true && 
            (<div className='login-menu'>
                <div className="login-menu__container">
                    <Link to="/Login"><button className='login-menu__container--button'>Log In</button></Link>
                    <Link to="/Register"><button className='login-menu__container--button'>Register</button></Link>
                </div>
            </div>)
        }
        <footer className='fiu'>
            <button onClick={handdleMenu}>Show Menu</button>
        </footer>
        </>
    );
}
