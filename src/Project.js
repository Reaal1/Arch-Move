import House from '././assets/img.png';
const project = () => {
    return ( 
        <div className='project-section'>
            <div><img className='project-image' src={House} alt="" /></div>
            <div className='Project-realization-archmove'>
            <h4 className='Project-realization'>Realize your 
            <br />dream project 
            <br />with <span className='project-span'>Archmove</span></h4>
            <button className='project-button'>Free Consultation</button>
            </div>
        </div>
     );
}
 
export default project;