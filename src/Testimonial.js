import Mark from '././assets/mark.png';
import Across1 from '././assets/button icon (4).png';
import Across2 from '././assets/button icon (5).png';

const Testimonial = () => {
    return ( 
        <div className='Testimonial-section'>
            <h3 className='Testimonial-section_header'>Sound Too Good 
            <br />To Be True?</h3>
            <div className='Testimonial-cover'>
            <div className='Testimonial-section_content'>
            <img className='Testimonial-section_mark' src={Mark} alt="" />
            <p className='Testimonial-section_paragraph'>“We just wanted to thank you for this fantastic website!
                 We are so grateful for being able to advertise our Petite cabin and receive 
                 feedback from people from all over the U.S. and even further.”</p>
            </div>
            <div className='Testimonial-section_paragraph_end'>
                <p className='Testimonial-section_paragraph1'>Adam Morph — CEO Alfatech</p>
                <div className='Testimonial-section_photo'>
                <img className='Testimonial-section_photo_content' src={Across1} alt="" />
                <img className='Testimonial-section_photo_content' src={Across2} alt="" />
                </div>
                </div>
                </div>
        </div>
     );
}
 
export default Testimonial;