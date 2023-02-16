import useScrollDirection from "./ScrollDirection";
import './Header.scss';


export default function Header() {

    const scrollDirection = useScrollDirection();


    return (
        <div className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
             <h2>Cambiar por el logo</h2>
        </div>
    )
}