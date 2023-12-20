import Navbar from  './Navbar';
import Home from './Home';
import Rooms from './Rooms';
import Photos from './Photos';
import Build from './Build';
import Testimonial from './Testimonial';
import Project from './Project';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div>
        <Rooms />
      </div>
      <Photos />
      <Build />
      <Testimonial />
      <Project />
      <Footer />
      </div>
  );
}

export default App;
