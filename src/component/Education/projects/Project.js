import css from './Project.css'
const Project = ()=>{
    return(
        <div>
            <div className="project-container">
                    <div className='project-text'>  
                    <p>INTRUSION DETECTION SYSTEM</p>
                    <p></p>
                    <p>An intrusion detection system is a device or software application, It monitors a network for malicious
                    activity or policy violations.
                    Any malicious activity or violation is typically reported or collected centrally using a security information
                    and event management system.
                    Some IDS are capable of responding to detected intrusion upon discovery</p>
                    </div>
            </div>
            <div className="project-container">
                    <div className='project-text'>  
                    <p>SENTIMENT ANALYSIS OF RESTAURANT REVIEWS</p>
                    <p></p>
                    <p>The purpose of this analysis is to build a prediction model to predict whether a review of
                    the restaurant is positive or negative.
                    Sentiment analysis of customer reviews has a crucial impact on a business's development
                    strategy.
                    In this work, we present a variant of online random forests to perform sentiment analysis
                    on customers' reviews.
                    Our model can achieve accuracy similar to offline methods and comparable to other online
                    models</p>
            </div>
            </div>
            <div className="project-container">
                    <div className='project-text'>  
                    <p>ONLINE EXAMINATION SYSTEM</p>
                    <p></p>
                    <p>Online examination will reduce the hectic job of assessing the answers given by the
                    candidates manually.
                    Being an integrated Online examination system will reduce paperwork
                    It will allow the faculty to create tests and answer keys.
                    To allow automatic grading and manual grading which can be recorded per test.
                    The result will be shown immediately to the participating student.
                    The project allows the faculties to create their own tests. It would enable educational
                    institutes to perform tests and quizzes</p>
                    </div>
            </div>
         </div>
    );
};
export default Project;