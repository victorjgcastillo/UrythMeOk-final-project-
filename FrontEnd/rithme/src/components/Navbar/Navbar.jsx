import { IoHomeOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline, IoSettingsOutline } from "react-icons/io5";
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {


    const list = document.querySelectorAll(".list");
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));

            this.classList.add('active');
        }

        list.forEach((item) => 
        item.addEventListener('click', activeLink));

    return(
        <div className="navbarcont">

        <div className="navbar">
            <ul className='ul'>

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
                        <Link to="/login">
                            <span className="icon">
                            <IoPersonOutline></IoPersonOutline>
                            </span>
                            <span className="text">Perfil</span>
                        </Link>
                    </a>
                </li>
                

                <li className="list">
                <Link to="/my-concerts">
                    <a href="#" className='link'>
                        <span className="icon">
                        <IoTicketOutline></IoTicketOutline>
                        </span>
                        <span className="text">Conciertos</span>
                    </a>
                </Link>
                </li>

                <li className="list">
                <Link to="/config">
                    <a href="#" className='link'>
                        <span className="icon">
                        <IoSettingsOutline></IoSettingsOutline>
                        </span>
                        <span className="text">Configuración</span>
                    </a>
                </Link>
                </li>

                {/* <div className="indicator"></div> */}
            </ul>

        </div>

        </div>
        
    )
    
}