import './Header.scss';
import useScrollDirection from './ScrollDirection';


export default function Header() {

    const scrollDirection = useScrollDirection();
  
  return (
    <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-yellow-300 transition-all duration-500`}>
      <div class="muzieknootjes">
      <h1>Hupgradify</h1>
  <div class="noot-1">
  &#9835; &#9833;
</div>
<div class="noot-2">
  &#9833;
</div>
<div class="noot-3">
  &#9839; &#9834;
</div>
<div class="noot-4">
  &#9834;
</div>
</div>
    </div>
    );
}