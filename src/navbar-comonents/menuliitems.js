import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
const Menuitems=({image,name,price})=>{
    return(
        <div className="menuitems"> 
         <div style={{backgroundImage:`url(${image})`}}></div>
         <h1>{name}</h1>
         <p><CurrencyPoundIcon/>{price}</p>

        </div>
    )
}
export default Menuitems;