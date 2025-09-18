// import Sidebar from "./components/Dashboard/Layout/Sidebar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Avatar, Menu, Portal, Text, Flex, Box } from "@chakra-ui/react";
import Maincontent from "./Maincontent";
// import logo from '../../../assets/logo-tracker.png'

export default function AppLayout({ children }) {
  return (
    <>
         <Header/>    

    <div style={{ display: "flex", height: "100vh",gap:"10px" }}>  
     
      <Sidebar />      
      
      <Maincontent/>
    </div>
  
    </>
  );
}
