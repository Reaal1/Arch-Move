import Image1 from '././assets/img-01.png';
import Image2 from '././assets/img-02.png';
import Image3 from '././assets/img-03.png';
import Image4 from '././assets/img-04.png';


const Photo = () => {
    return ( 
        <div className='roomimages'>
            <img className='roomsphoto' src={Image1} alt="" srcset="" />
            <img className='roomsphoto' src={Image2} alt="" srcset="" />
            <img className='roomsphoto' src={Image3} alt="" srcset="" />
            <img className='roomsphoto' src={Image4} alt="" srcset="" />
            
        </div>
         
        
     );

     
}


 
export default Photo;