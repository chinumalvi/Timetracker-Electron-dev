import { Code, Stack, Tabs, useTabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

function DashboardTabs() {
      const tabs = useTabs({
    defaultValue: "members",
  })

  return (
 
    <>
   
      <div class="dashboard-tabs">
            <Stack align="flex-start">
            {/* <Code>selected: {tabs.value}</Code> */}
            <Tabs.RootProvider value={tabs}>
                <Tabs.List>
                <Tabs.Trigger value="dashboard">
                    <LuUser />
                    Dashboard
                </Tabs.Trigger>
                <Tabs.Trigger value="attendance">
                    <LuFolder />
                    Attendance
                </Tabs.Trigger>
                <Tabs.Trigger value="time-claim">
                    <LuSquareCheck />
                    Time Claim
                </Tabs.Trigger>
                <Tabs.Trigger value="heat-maps">
                    <LuSquareCheck />
                    Heat Maps
                </Tabs.Trigger>
                <Tabs.Trigger value="chart">
                    <LuSquareCheck />
                    Chart
                </Tabs.Trigger>
                
                </Tabs.List>
                <Tabs.Content value="dashboard">
                    
                    Dashboard1

                </Tabs.Content>
                <Tabs.Content value="attendance">Attendance</Tabs.Content>
                <Tabs.Content value="time-claim">Time Claim</Tabs.Content>
                <Tabs.Content value="heat-maps">Heat Maps</Tabs.Content>
                <Tabs.Content value="chart">Chart</Tabs.Content>
            </Tabs.RootProvider>
        </Stack>
      </div>
   </>
  )
}

export default DashboardTabs
