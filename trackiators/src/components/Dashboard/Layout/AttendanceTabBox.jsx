import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function AttendanceTabBox() {
    const attendanceTabData = [
        {
            title:"Total Working Time ",
            value:"03:31"
        },
        {
            title:"Time Spent ",
            value:"03:54"
        },
        {

            
            title:"Productive Time ",
            value:"03:31 "
        },
        {
            title:"Idle Time ",
            value:"00:22"
        },
        {
            title:"Away Time ",
            value:"00:22"
        },
    ]
  return (
    <Flex gap={2} >
      
          {
            attendanceTabData?.map(item=>(
                <Box p={5} 
                w={"20%"}
                border="1px solid #ddd"
                borderRadius="md"       
                mb={3}
                textAlign="center"
                
                _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.15s"
                >
                    <p style={{fontSize:"12px", fontWeight:"600"}}>{item.title}</p>
                    <p>{item.value}</p>
                </Box>
            ))
          }
        </Flex>
  )
}

export default AttendanceTabBox
