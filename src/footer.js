import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles/Footer.css';
const Footer=()=>{
    return (
        <div className="footer">
            <div className="footer-icons">
                <TwitterIcon/> <InstagramIcon/> <LinkedInIcon/>
            </div>
            <p> &copy; 2022 Tops pizza</p>


        </div>
    )
}
export default Footer;