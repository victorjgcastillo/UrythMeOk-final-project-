import './Header.scss';
import useScrollDirection from './ScrollDirection';


export default function Header() {

    const scrollDirection = useScrollDirection();
  
  return (
    <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-yellow-300 transition-all duration-500`}>
      <div className="p-5 font-bold">Cambiar por imagen</div>
    </div>
    );
}