import homes from './Home.css';
import Navigation from './navigation/Navigation.js'
import Main from './main/Main.js'
import Foot from './foot/Foot.js'
import ImageSlider from './Slider/ImageSlider';
import { SliderData } from './Slider/SliderData';

const Home =()=>{
    return (
      <div>
        <section>
          <ImageSlider/>
          <Main></Main>
        </section>
      </div>
    );
};
export default Home;