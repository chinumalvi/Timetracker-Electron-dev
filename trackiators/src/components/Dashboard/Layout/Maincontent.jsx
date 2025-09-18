import { Box, Flex, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import MainContentLeft from './MainContentLeft'
// import MainContentLeft from './components/Dashboard/Layout/MainContentLeft'
// import MainContentRight from './components/Dashboard/Layout/MainContentRight'
import MainContentRight from './MainContentRight'

function Maincontent() {
  return (
    <div style={{width:"85%"}}>
      
     <Flex gap={"10px"} w={"100%"}>
        <div style={{width:"20%",border:"1px solid red"}}>
            <MainContentLeft/>
        </div>
        <div style={{width:"80%" ,border:"1px solid green"}}> 
            <MainContentRight/>
        </div>
     </Flex>
      
    </div>
  )
}

export default Maincontent
