import { Link } from 'react-router-dom';
import Pizza from '../images/pizza.jpeg';
import '../styles/Home.css';
const Home=()=>{
    return (
        <div className="home" style={{backgroundImage:`url(${Pizza})`}}>

            
            <div className="content">
                <h1>Top's Pizzeria</h1>
                <h2>A SLICE A DAY KEEPS THE SAD AWAY</h2>
                <Link  to="/menu">
                <button className="btn btn-dark">OrderNow</button>
                </Link>

            </div>

        </div>
    )
};
export default Home;