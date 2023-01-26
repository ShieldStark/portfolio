import homes from './Home.css';
import Navigation from './Navigation/Navigation.js'
import Main from './Main/Main.js'
import Foot from './Foot/Foot.js'

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