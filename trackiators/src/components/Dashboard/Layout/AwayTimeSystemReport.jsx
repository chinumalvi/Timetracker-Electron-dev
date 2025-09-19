import { Card, Table } from "@chakra-ui/react";
import TableContainer from "../ReusableItems/TableContainer";

function AwayTimeSystemReport() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "mandays", label: "Man Days" },
    { key: "avgworkhours", label: "Work Hours (Avg)" },
    { key: "new", label: "new Hours (Avg)" },
  ];

  // Data
  const items = [
    { id: 1, name: "Chandrakanta Malviya", mandays: "1", avgworkhours: "05:05" ,new:0},
    { id: 2, name: "Rahul Sharma", mandays: "2", avgworkhours: "06:30" ,new:9},
  ];
  return (
    <div>
      
      <Card.Root>
                  <Card.Body gap="2">
                      <Card.Title mt="2">Time Away From System Report</Card.Title>
                      <Card.Description>
                      <TableContainer columns={columns} items={items}/>
                      </Card.Description>
                  </Card.Body>
              </Card.Root>
    </div>
  )
}

export default AwayTimeSystemReport
