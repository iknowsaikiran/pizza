import MenuList from "./menulist";
import Menuitems from "./menuliitems";
import '../styles/Menu.css';
const Menu=()=>{
    return (
        <div className="menu">
            <h1 className="menutitle">our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuitem,i)=>{
                return(
                    <Menuitems 
                    key={i}
                    image={menuitem.image}
                    name={menuitem.name}
                    price={menuitem.price}
                    />
                )
            }

            )}</div>

        </div>
    )

};
export default Menu;