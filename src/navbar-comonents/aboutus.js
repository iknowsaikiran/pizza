import '../styles/About.css'
import multiplePizzas from '../images/multiplePizzas.jpeg' 
const AboutUs=()=>{
    return (
       <div className="aboutpage">
        <div className="about-top" style={{backgroundImage:`url(${multiplePizzas})`}}>

        </div>
        <h1 className='heading text-muted'> About Us</h1>
        
        <div className="about-bottom">
            
            <img className="makinglogo" src="makingpizza.jpeg"/>
            <p>Pizza is a modern-day favorite—but did you know it existed in ancient Greece? 
                A recent study linked the word “pizza” to “pita,” a food prevalent around the 
                Mediterranean. From the eighth to fifth century BCE, the Greeks colonized southern Italy, 
                bringing along their “plakous,” a round cheese pie with a crust that doubled as a handle.
                Pizza spelled the way we recognize it today first appeared on a rental agreement in 997 BCE promising
                 the landlord payment in pork and pizza. Its origins are as street food in Naples, Italy, during the early 18th century. 
                 Initially, it consisted of bread covered in pork fat or olive oil topped with cheese, but that changed with the introduction of 
                  tomatoes in 1760.
                  
                  </p>

        </div>

       </div>
    )
        
};
export default AboutUs