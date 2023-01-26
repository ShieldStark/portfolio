import insta from './icons/instap.png'
import linked from './icons/linkedin.png'
import github from './icons/github.png'
import gmail from './icons/gmail.png'
import footC from './Foot.css'
const Foot=()=>{
    return (
        <footer>
            <p>Piyush Abhiranjan</p>
          <p>National Institute of Technology, Patna 800005</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/piyushabhiranjan/">
              <img src={insta} alt=""></img>
            </a>
            <a href="https://www.linkedin.com/in/piyushabhiranjan/">
              <img src={linked} alt=""></img>
            </a>
            <a href="https://github.com/ShieldStark">
              <img src={github} alt=""></img>
            </a>
            <a href="mailto:piyushabhiranjan@gmail.com">
              <img src={gmail} alt=""></img>
            </a>
          </div>
          <p class="copyright">Copyright by @ 2023 Piyush</p>
        </footer>
    );
};
export default Foot;