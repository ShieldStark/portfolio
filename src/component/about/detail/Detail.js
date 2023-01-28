import detailC from './Detail.css'
import imageC from './1.png'
const Detail=()=>{
    return(
        <div class="about-container">
			 <img src={imageC} alt=''/>
			<div class="about-text">
			<p>About Me</p>
			<p>Developer, Designer & Machine learning Enthusiast</p>
			<p>
				Hello, My name is Piyush Abhiranjan. I am a Responsible,Innovative, Passionate and commited Professional. 
				Currently working as a Software Engineer at Samsung. I have completed my Computer Science Engineering from National Institute of Technology Patna in 2021.
				My Hobbies are Riding Bikes, Photography
			</p>
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
		 </div>
    );
};
export default Detail;