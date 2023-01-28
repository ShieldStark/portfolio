import mainC from './Main.css'
const Main= ()=>{
    return(
        <div class="text-container">
        <p>Hello,</p>
        <p>I'm Piyush</p>
        <p>I am a Software Engineer</p>
        <h3>Currently Working at Samsung</h3>
        <button class="hire-btn"
        type='button'
        onClick={(e)=>
          {
            e.preventDefault();
            window.location.href='mailto:piyushabhiranjan30@gmail.com';
          }
        }
        >Hire me</button>
        <button class="down-cv" 
        type='button' 
        onClick={(e)=>
          {
            e.preventDefault();
            window.location.href='https://drive.google.com/file/d/1kXxRUN1L9818-psXUS8bMWg4kSlQ3-0Q/view?usp=share_link';
          }
        }
        >Download CV</button>
      </div>
    );
};
export default Main;