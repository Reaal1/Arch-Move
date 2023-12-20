import Image5 from '././assets/img-5.png';
import Icon from '././assets/icon.png';
import Icon1 from '././assets/icon (1).png';
import Icon2 from '././assets/icon (2).png';

const Build = () => {
    return ( 
        <div className='build-section'>
            <div className='buildbody'>
            <div className='buildroom'>
        <img className='buildimage' src={Image5} alt="" srcset="" />
        </div>
        <div className='build-cover'>
            <h2 className='buildproject'>Build your needs <br />
            with Archmove</h2>
            <div className='buildcontent'>
            <div className='buildicon1'>
            <img className='buildsupport_images'  src={Icon} alt="" />
            <div className='buildvalues'>
            <p className='buildvalues-support'>100% guaranteed project completion</p>
            <p className='buildvalues-sub_support'>Build safe, comfortable and transparent with a project management application with a joint account.</p>
            </div>
            </div>
            <div className='buildicon2'>
            <img className='buildsupport_images' src={Icon1} alt="" />
            <div className='buildvalues'>
            <p className='buildvalues-support'>No additional fees</p>
            <p className='buildvalues-sub_support'>There are no hidden costs. The value of the offer you get is the value you paid.</p>
            </div>
            </div>
            <div className='buildicon3'>
            <img className='buildsupport_images' src={Icon2} alt="" />
            <div className='buildvalues'>
            <p className='buildvalues-support'>Get escort from the Team</p>
            <p className='buildvalues-sub_support'>Monitor reports from the Arsitag team who check directly in the field.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className='build-consult'>
                <button className='build-consult_button'>Free Consultation</button>
            </div>
            </div>
    );
}
 
export default Build;