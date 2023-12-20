import Logoz from '././assets/Logoz.png';
import Logoz1 from '././assets/Logoz (7).png';
import Logoz2 from '././assets/Logoz (8).png';
import Logoz3 from '././assets/Logoz (9).png';
import Logoz4 from '././assets/Logoz (10).png';
import Logoz5 from '././assets/Dunez.png';
import Logos1 from '././assets/logooh.png';



const Footer = () => {
 
return ( 
        <footer className='Footer-head-archmove'>
        <div><p className='footer-paragraph'>Our Partners</p>
        <div className="footer_partners"> 
        <div className='footer_partners1'>
            <img className='footer-image1' src={Logoz} alt="" />
            <img className='footer-image2' src={Logoz1} alt="" />
            <img className='footer-image3' src={Logoz2} alt="" />
            </div>
            <div className='footer_partners2'>
            <img className='footer-image4' src={Logoz3} alt="" />
            <img className='footer-image5' src={Logoz4} alt="" />
            <img className='footer-image6' src={Logoz5} alt="" />
            </div>
         </div>
        <hr />
        <div className='footer-contacts'>
            <div className='footer-contact-info'>
            <p ><a  className='footer-paragph-content' href="/">About us</a></p>
            <p ><a  className='footer-paragph-content' href="/">How it Works</a></p>
            <p ><a  className='footer-paragph-content' href="/">FAQ</a></p>
            <p ><a  className='footer-paragph-content' href="/">Contact Us</a></p>
            <p ><a  className='footer-paragph-content' href="/">Privacy Policy</a></p>
            </div>
            <div className='footer_logos'>
                <img id='footer_photo' src={Logos1} alt="" />
            </div>
        </div>
           
        </div>
        </footer>
     );
}
 
export default Footer;