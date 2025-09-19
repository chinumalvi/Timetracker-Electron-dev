import { Box, Flex, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import MainContentLeft from './MainContentLeft'
// import MainContentLeft from './components/Dashboard/Layout/MainContentLeft'
// import MainContentRight from './components/Dashboard/Layout/MainContentRight'
import MainContentRight from './MainContentRight'

function Maincontent() {
  return (
    <div style={{width:"85%", padding: "16px"}}>
      
     <Flex gap={"10px"} w={"100%"}>
        <div style={{width:"20%"}}>
            <MainContentLeft/>
        </div>
        <div style={{width:"80%" }}> 
            <MainContentRight/>
        </div>
     </Flex>
      
    </div>
  )
}

export default Maincontent
