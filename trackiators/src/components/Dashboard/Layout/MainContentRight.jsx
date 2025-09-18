import { Flex, Tabs } from "@chakra-ui/react"
import DatePickerTop from "../ReusableItems/DatePicker"
// import DashboardTabs from "./DashboardTabs"
import DashboardPageSec from "./DashboardPageSec"
function MainContentRight() {
  return (
    <>
    {/* Top Controls */}
      <Flex class="top-controls" align="center" justify="space-between" p={1} borderBottom="1px solid"
      borderColor="gray.200" gap={1}>
         <div class="top-controls-left">
          <p class=' use-name'>Chandrakanta Malviya</p>
        </div>
        <div class="top-controls-midle">
          <DatePickerTop/>
        </div> 
        <div class="top-controls-right">
          <Tabs.Root variant="enclosed"  size="md" maxW="md" fitted defaultValue={"tab-1"}>
            <Tabs.List style={{fontSize: '10px'}}>
              <Tabs.Trigger size='xs' h='25px' value="tab-1">Day</Tabs.Trigger>
              <Tabs.Trigger size='xs' h='25px' value="tab-2">Weak</Tabs.Trigger>
              <Tabs.Trigger size='xs' h='25px' value="tab-3">Month</Tabs.Trigger>
              <Tabs.Trigger size='md' h='25px' value="tab-4">Date Range</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </Flex>
      <div>
        <DashboardPageSec/>
      </div>
    </>
    
  )
}

export default MainContentRight
