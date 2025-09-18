import { Stack, Tabs, useTabs, } from "@chakra-ui/react";
import DashboardTabBox from "./DashboardTabBox";
import AttendanceTabBox from "./AttendanceTabBox";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { MdOutlineDashboard, MdAddchart } from "react-icons/md";
import { FaRegCalendarCheck, FaRegCalendarAlt } from "react-icons/fa";
import { FcHeatMap } from "react-icons/fc";
import { Row } from "rsuite";
import WorkHoursAvg from "./WorkHoursAvg";
function DashboardTabs() {
  // Tabs data array (later you can fetch from DB)
  const tabsData = [
    {
      value: "dashboard",
      label: "Dashboard",
      icon: MdOutlineDashboard,
      content: <DashboardTabBox />,
    },
    {
      value: "attendance",
      label: "Attendance",
      icon: FaRegCalendarAlt,
      content: <AttendanceTabBox />,
    },
    {
      value: "time-claim",
      label: "Time Claim",
      icon: FaRegCalendarCheck,
      content: "Time Claim Content",
    },
    {
      value: "heat-maps",
      label: "Heat Maps",
      icon: FcHeatMap,
      content: "Heat Maps Content",
    },
    {
      value: "chart",
      label: "Chart",
      icon: MdAddchart,
      content: "Chart Content",
    },
  ];
  //       const tabs = useTabs({
  //     defaultValue: "members",
  //   })

  const tabs = useTabs({
    defaultValue: "dashboard",
  });

  return (
    <>
      <Row>
        <div className="dashboard-tabs" width={"100%"}>
          <Stack align="flex-start">
            <Tabs.RootProvider w={"full"} value={tabs}>
              {/* Tab List */}
              <Tabs.List>
                {tabsData.map(({ value, label, icon: Icon }) => (
                  <Tabs.Trigger key={value} value={value}>
                    <Icon style={{ marginRight: "6px" }} />
                    {label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              {/* Tab Panels */}
              {tabsData.map(({ value, content }) => (
                <Tabs.Content key={value} value={value}>
                  {content}
                </Tabs.Content>
              ))}
            </Tabs.RootProvider>
          </Stack>
        </div>
      </Row>
  
    </>
  );
}

export default DashboardTabs;
