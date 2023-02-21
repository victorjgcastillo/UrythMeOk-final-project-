import { IoHomeOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline, IoSettingsOutline } from "react-icons/io5";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useEffect } from "react";


export default function Navbar() {


    useEffect(() => {
        const list = document.querySelectorAll(".list");
    
        function activeLink() {
          list.forEach((item) => item.classList.remove("active"));
          this.classList.add("active");
        }
    
        list.forEach((item) => item.addEventListener("click", activeLink));
    
        return () => {
          list.forEach((item) => item.removeEventListener("click", activeLink));
        };
      }, []);

    return(

        <div className="homePage">

        <div className="main">
        </div>

        <div className="footer">


        <div className="navbarcont">

        <div className="navbar">
            <ul className='ul'>
                <li className="list active">
                    <a href="#" className='link'>
                        <span className="icon">
                        <IoPersonOutline></IoPersonOutline>
                        </span>
                        <span className="text">Perfil</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#" className='link'>
                        <span className="icon">
                        <IoSearchOutline></IoSearchOutline>
                        </span>
                        <span className="text">Buscar</span>
                    </a>
                </li>
                
                <li className="list">
                    <Link to="/">
                    <a href="#" className='link' Link>
                        <span className="icon">
                        <IoHomeOutline></IoHomeOutline>
                        </span>
                        <span className="text">Home</span>
                    </a>
                    </Link>
                </li>

                <li className="list">
                    <a href="#" className='link'>
                        <span className="icon">
                        <IoTicketOutline></IoTicketOutline>
                        </span>
                        <span className="text">Conciertos</span>
                    </a>
                </li>

                <li className="list">
                    <a href="#" className='link'>
                        <span className="icon">
                        <IoSettingsOutline></IoSettingsOutline>
                        </span>
                        <span className="text">Configuración</span>
                    </a>
                </li>

                <div className="indicator"></div>
            </ul>

        </div>

        </div>
        
        </div>  
</div>
        
    )
    
}