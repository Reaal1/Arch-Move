
import Logos2 from '././assets/logooh - Copy.png';
import vector from '././assets/ic-searhc.png';
import moon from '././assets/moon.png';
import sun from '././assets/sun.png';
import hamburger from '././assets/tabler_menu.png';

const Navbar = () => {
   var moon_icon = document.getElementById("moon_icon");
    moon_icon.onclick = function () {
        document.body.classList.toggle("dark-theme"); 
        if(document.body.classList.contains('dark-theme')){
            moon_icon.src = sun;}
    else{
            moon_icon.src = moon;
        }
    } 
    return ( 
        <nav className="navbar">
            <div className='arch-logo'>
            <img className='navbar-photo' src={Logos2} alt="" />
            </div>
            <div className="navbar-links">
            <a className="navbar-links_content" href="/">How it Works</a>
                <a className='navbar-links_content' href="/create" >Design Gallery</a>
                <a  className='navbar-links_content' href="/">Architects</a>
                <a className='navbar-links_content' href="/">Articles</a>
                <div className='navbar-buttons'>
                    <div className="vector">
                <img src={vector} alt='logo' />
                </div>
                <a className='clickin' href="/">sign in</a>
                <button className='clickup'>Sign Up</button>
                </div>
                </div>
                <div className="hamburger">
                <img className='bar' src={hamburger} alt="" />
            </div>
                <img id='moon_icon'  src={moon} alt="/" />
            
        </nav>
     );
}
 
export default Navbar;