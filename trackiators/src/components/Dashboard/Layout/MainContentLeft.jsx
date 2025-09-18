import { Link, Tabs } from "@chakra-ui/react"
import { useState } from "react"

function MainContentLeft() {
const [teamAllotedToMe,setTeamAlloedToMe] = useState("Developement");

    const employeeData=[
        {
            name:"Chandrakanta Malviya",
            team:"Developement"
        },
        {
            name:"Madhu",
            team:"Developement"
        },
        {
            name:"Amit Mishra",
            team:"Marketing"
        },
        {
            name:"OP",
            team:"Developement"
        },
        {
            name:"JJ",
            team:"Marketing"
        },
        {
            name:"Kamini",
            team:"Content"
        },
        {
            name:"Shruti",
            team:"Sales"
        },
    ]

  // Group employees by their teams
  const teamMembers = employeeData.reduce((acc, employee) => {
    const { team } = employee;
    if (!acc[team]) {
      acc[team] = [];
    }
    acc[team].push(employee);
    return acc;
  }, {});

   // Get the members of the team allocated to you (filtered by the selected team)
  const filteredTeamMembers = teamMembers[teamAllotedToMe] || [];


  console.log(filteredTeamMembers,teamMembers)
  return (
    <div>
      <Tabs.Root defaultValue="allmembers">
        <Tabs.List>
            {/* Tab for All Members */}
            <Tabs.Trigger value="allmembers" asChild>
                <Link unstyled href="#allmembers">
                Employees
                </Link>
            </Tabs.Trigger>
            {/* Tab for Team Members (Filtered by teamAllotedToMe) */}
          <Tabs.Trigger value="teammembers" asChild>
            <Link unstyled href="#teammembers">
              Team
            </Link>
          </Tabs.Trigger>
        </Tabs.List>
        {/* Tab Content for All Employees */}
        <Tabs.Content value="allmembers">
          {/* Display all team members here */}
          {employeeData.map((employee) => (
            <p key={employee.name}>{employee.name}</p>
          ))}
        </Tabs.Content>
         {/* Tab Content for Team Members (Filtered by the selected team) */}
        <Tabs.Content value="teammembers">
          {/* Display members of the selected team */}
          {filteredTeamMembers.map((teammember) => (
            <p key={teammember.name}>{teammember.name}</p>
          ))}
        </Tabs.Content>
        {/* <Tabs.Content value="teammembers">{filteredTeamMembers.map(teammember =>(<p>{teammember.name}</p>))}</Tabs.Content>
        <Tabs.Content value="allmembers">{filteredTeamMembers.map(team=>(<p>{team.name}</p>))}</Tabs.Content> */}
        </Tabs.Root>
    </div>
  )
}

export default MainContentLeft
