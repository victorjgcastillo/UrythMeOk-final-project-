import { Link } from 'react-router-dom';
import './Header.scss';


export default function Header() {

  return (
 <div className="header">
   <Link to={'/'}><h1 className="header__Title">Upgradify</h1></Link>
      
    <div className="noot-1">
        &#9835; &#9833;
    </div>

    <div className="noot-2">
      &#9833;
    </div>

    <div className="noot-3">
      &#9839; &#9834;
    </div>

    <div className="noot-4">
      &#9834;

    </div>

</div> 
)
}