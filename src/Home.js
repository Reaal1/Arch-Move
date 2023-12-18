import Asset from '././assets/Image.png';
const Home = () => {

    
    
    return (  
        <div className="home">
            <h2 className="dreamhome">Build Your 
            <br />Dream <span className="spanhome">House</span></h2>
            <p className="homeparag">100% guaranteed build safe, 
            <br /> comfortable and transparent with a 
            <br />project management for the best result.</p>
            <button className="consult-button">Free Consultation</button>
            <div className='homeimage'>
            <img src={Asset} alt="asset" />
            </div>

        </div>
                    
        
    );
}

 
export default Home;