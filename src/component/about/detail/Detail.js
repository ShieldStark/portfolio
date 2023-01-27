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
			<button class="hire-btn">Hire Me</button>
			<button class="down-cv">Download Cv</button>
			</div>
		 </div>
    );
};
export default Detail;