import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Row } from "rsuite";
import TopwebsitesApp from "./TopwebsitesApp";
import WorkHoursAvg from "./WorkHoursAvg";
import ProductivitySplit from "./ProductivitySplit";
import ProductiveActivity from "./ProductiveActivity";
import WorkTimeMetrics from "./WorkTimeMetrics";
import WorkLifeBalance from "./WorkLifeBalance";
import AwayTimeSystemReport from "./AwayTimeSystemReport"
import AwayTimeReport from "./AwayTimeReport";




function DashboardTabBox() {
  const dashboardTabData = [
    {
      title: "Start Time ",
      value: "10:40",
    },
    {
      title: "Working Time ",
      value: "02:20",
    },
    {
      title: "Last Seen ",
      value: "13:00",
    },
    {
      title: "Productive Time ",
      value: "02:20",
    },
    {
      title: "Non-Productive Time ",
      value: "00:00",
    },
    {
      title: "Neutral Time ",
      value: "00:00",
    },
    {
      title: "Away Time ",
      value: "00:00",
    },
  ];

  return (
    <>
      <div >
        <Flex gap={2}>
          {dashboardTabData?.map((item) => (
            <Box
              p={5}
              border="1px solid #ddd"
              borderRadius="md"
              mb={3}
              textAlign="center"
              _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
              transition="all 0.15s"
            >
              <p style={{ fontSize: "12px", fontWeight: "600" }}>
                {item.title}
              </p>
              <p>{item.value}</p>
            </Box>
          ))}
        </Flex>
        <Row >
        <Flex w={"full"} style={{alignItems: 'stretch'}} >
        {/* <Flex> */}
          <div style={{width:'50%'}}>
            <TopwebsitesApp />
          </div>
          <div style={{width:'50%'}}>
            <WorkHoursAvg />
          </div>
        {/* </Flex> */}
        </Flex>
        </Row>
        
      </div>

      <Flex align="stretch">
        <div style={{width:'50%'}}>
          <ProductiveActivity/>
        </div>
        <div style={{width:'50%'}}>
        <ProductivitySplit/>
        </div>
      </Flex>
      <div>
        <WorkTimeMetrics/>
      </div>
      <div>
        <WorkLifeBalance/>
      </div>
      <div>
        <AwayTimeSystemReport/>
      </div>
      <div>
        <AwayTimeReport/>
      </div>
    </>
  );
}

export default DashboardTabBox;
