// import { Flex } from "@chakra-ui/react";
// import * as Tabs from "@radix-ui/react-tabs";
import DashboardPageSec from "./DashboardPageSec";
import DatePickerTop from "../ReusableItems/DatePickerTop";
import DatePickerRange from "../ReusableItems/DatePickerRange";
import DatePickerMonth from "../ReusableItems/DatePickerMonth";
import DatePickerWeak from "../ReusableItems/DatePickerWeak";
import { Flex, Tabs } from "@chakra-ui/react";

function MainContentRight() {
  return (
    <>
      {/* Top Controls */}
      <Flex
        className="top-controls"
        align="center"
        justify="space-between"
        p={0}
        borderBottom="1px solid"
        borderColor="gray.200"
        gap={4}
      >
        {/* Leftmost: Username */}
        <div className="top-controls-left">
          <p className="use-name" style={{ fontWeight: "600" }}>
            Chandrakanta Malviya
          </p>
        </div>

        {/* Middle: Tabs Container */}
        <Tabs.Root defaultValue="datebyday" style={{ flex: 1 }}>
          <Flex align="center" justify="space-between" gap={4}>
            {/* Left Section: Date Pickers */}
            <Flex className="date-section" align="center">
              <Tabs.Content value="datebyday" style={{ padding: 0 }}>
                <DatePickerTop />
              </Tabs.Content>
              <Tabs.Content value="datebyweek">
                <DatePickerWeak />
              </Tabs.Content>
              <Tabs.Content value="datebymonth">
                <DatePickerMonth />
              </Tabs.Content>
              <Tabs.Content value="datebyrange">
                <DatePickerRange />
              </Tabs.Content>
            </Flex>

            {/* Right Section: Tabs */}
            <Flex className="tabs-section" align="center">
              <Tabs.List
                style={{
                  display: "flex",
                  gap: "8px",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                <Tabs.Trigger value="datebyday">Day</Tabs.Trigger>
                <Tabs.Trigger value="datebyweek">Week</Tabs.Trigger>
                <Tabs.Trigger value="datebymonth">Month</Tabs.Trigger>
                <Tabs.Trigger value="datebyrange">Range</Tabs.Trigger>
              </Tabs.List>
            </Flex>
          </Flex>
        </Tabs.Root>
      </Flex>

      {/* Dashboard Section */}
      <div>
        <DashboardPageSec />
      </div>
    </>
  );
}

export default MainContentRight;
