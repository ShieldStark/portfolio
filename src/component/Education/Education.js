import css from './Education.css'
import image1 from './icons/I1.jfif'
import Project from './projects/Project';
const Education=()=>{
    return(
        <div>
            <div className="education-container">
                <img src={image1} alt=''/>
                <div className='education-text'>  
                <p>Computer Science Engineering</p>
                <p>July-2017 - Apr-2021</p>
                <p>B.Tech from National Institute of Technology Patna</p>
                </div>
            </div>
            <h1 className='h1'>Projects</h1>
            <Project/>
        </div>
    );
};
export default Education;