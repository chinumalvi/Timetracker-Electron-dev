import { Button, Menu, Portal } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu"
import menu from "../../../config/menu";
import { Link, NavLink } from "react-router-dom";
function Sidebar() {
  return (

    <div style={{width:"15%"}}>
      <aside style={{padding: "1rem", borderRight: "1px solid #ddd" }}>
      
      <ul style={{ listStyle: "none", padding: "25px" }}>
        {menu.map(item => (
          <div style={{padding: "5px" }}>
           { (item.child && item?.child?.length > 0 )?(
          <Menu.Root>
            
      <Menu.Trigger asChild>
        <Link >
         {item.label}
        
        </Link>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
              {item.child.map((childItem)=>(
 <Menu.Item value="new-txt">
  <NavLink to={childItem.path}>{childItem.label}</NavLink>
 </Menu.Item>
              ))}
           
          
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
           ):(
 <li key={item.path} style={{ margin: "0.5rem 0" }}>
            <Link to={item.path}>{item.label}</Link>
          </li>
           )}
         
          {/* { item.child && item?.child?.length > 0 &&
            item.child.map((childItem)=>(
              <p style={{color:"red"}}>{childItem.label}</p>
            ))
          } */}
          </div>
        ))}
      </ul>
    </aside>
    </div>
   
  )
}

export default Sidebar
