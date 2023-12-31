
import Logos2 from '././assets/logooh - Copy.png';
import vector from '././assets/ic-searhc.png';
import moon from '././assets/moon.png';
import sun from '././assets/sun.png';
import hamburger1 from '././assets/tabler_menu.png';

const Navbar = () => {
    
    /* PLS TAKE NOTE - This works on my device after deployment with react,
     but tends to give an error later, noticed this while using react to develop app, 
     but this codes works perfectly on my local device(server) i.e developing without react,
     misbehaves with react , but works after trying it out a couple of times */

   /* So Kindly take the symbols of the comment off to enable the black and white background change,
    when moon button is clicked */

  /* var moon_icon = document.getElementById("moon_icon");
    moon_icon.onclick = function () {
        document.body.classList.toggle("dark-theme"); 
        if(document.body.classList.contains('dark-theme')){
            moon_icon.src = sun;}
    else{
            moon_icon.src = moon;
        }
    } */

 /*  const hamburgerBar = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar-links");
hamburgerBar.addEventListener("click",(e) =>{
      const currentButton = e.target.parentElement.querySelector(".hamburger");
      currentButton.classList.toggle("active");
      navBar.classList.toggle("active");
});

document.querySelectorAll(".navbar-links_content").forEach(n => n.addEventListener("click",()=>{
      hamburgerBar.classList.remove("active");
      navBar.classList.remove("active");
})); */
    return ( 
        <nav className="navbar">
            <div className='arch-logo'>
            <img className='navbar-photo' src={Logos2} alt="" />
            </div>
            <div id="navbar-linksz" className="navbar-links">
            <a id="navbar-linksz1" className="navbar-links_content" href="/">How it Works</a>
                <a id="navbar-linksz1" className='navbar-links_content' href="/create" >Design Gallery</a>
                <a id="navbar-linksz1"  className='navbar-links_content' href="/">Architects</a>
                <a id="navbar-linksz1" className='navbar-links_content' href="/">Articles</a>
                <div className='navbar-buttons'>
                    <div className="vector">
                <img src={vector} alt='logo' />
                </div>
                <a className='clickin' href="/">sign in</a>
                <button className='clickup'>Sign Up</button>
                </div>
                </div>
                <div className="hamburger">
                <img className='bar' src={hamburger1} alt="" />
            </div>
                <img  id='moon_icon'  src={moon} alt="/" />
            </nav>
     );
}
 
export default Navbar;