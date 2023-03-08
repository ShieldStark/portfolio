import cont from './Career.css'
import image1 from './icons/we1.png'
import image2 from './icons/we3.jfif'
import image3 from './icons/I1.jfif'
import image4 from './icons/I2.png'
const Career = ()=>{
    return(
    <div >
        <h1 className="h1">Work Experience</h1>
        <div className="container">
            <img src={image1} alt=''/>
            <div className='text'>
            <p>Software Engineer-I</p>
            <p>Jun-2022 - Present</p>
            <p>Android Application Development, Implemented new Features as per the requirement
            Designed class Diagrams for the new features, Also Designed LLD for the new features.
            Fixed various defects related to the application. Added Unit Testing for the new feature implementation
            Implemented new Features using React.js</p>
            </div>
        </div>
        <div className="container">
            <img src={image2} alt=''/>
            <div className='text'>
            <p>Assocaite-Projects</p>
            <p>Jul-2021 - May-2022</p>
            <p>Working in the Domain of Designing microservices
            Created a Contact Management System which is focused on maintaining a Person's name and mobile
            number.
            Contact Management System gives users various capabilities. Users can view, add and delete a contact
            from the system.
            The Contact Management System is designed using Spring Framework, Spring Boot, JAVA, JSP, JSP
            fragments, and MySQL as a Database.</p>
            </div>
        </div>
        <div className="container">
            <img src={image3} alt=''/>
            <div className='text'>
            <p>Intern</p>
            <p>Jun-2020 - Aug-2020</p>
            <p>Credit card Fraud Detection Using Machine Learning
            The challenge is to recognize fraudulent credit card transactions so that the customers of credit card
            companies are not charged for items that they did not purchase.
            There have always been people who will find new ways to access someone’s finances illegally.
            This has become a major problem in the modern era.</p>
            </div>
        </div>
        <div className="container">
            <img src={image4} alt=''/>
            <div className='text'>
            <p>Intern</p>
            <p>May-2019 - Jun-2019</p>
            <p>Designed a New Service Connection Portal which provides personalized capabilities to its Visitor and
            Local Users, also providing a pathway to other content.
            Users can Sign Up and set their password for future Log In.
            A Signed Up user can request a new connection from the company. Users also view various pages
            about the Company.
            The main aim of the project was to develop an application that provides ease in requesting a Company
            for a new Connection.</p>
            </div>
        </div>
    </div>
        
    );
};
export default Career;