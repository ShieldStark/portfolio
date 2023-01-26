import homes from './Home.css';
import Navigation from './navigation/Navigation.js'
import Main from './main/Main.js'
import Foot from './foot/Foot.js'

const Home =()=>{
    return (
      <div>
        <section>
          <Navigation></Navigation>
          <Main></Main>
        </section>
        <Foot></Foot>
      </div>
    );
};
export default Home;