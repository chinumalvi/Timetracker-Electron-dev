import { Box, Flex, Card } from "@chakra-ui/react";
import ProgressBarContainer from "../ReusableItems/ProgressBarContainer";
import TableContainer from "../ReusableItems/TableContainer";

function AttendanceTabBox() {
  const attendanceTabData = [
    {
      title: "Total Working Time ",
      value: "03:31",
    },
    {
      title: "Time Spent ",
      value: "03:54",
    },
    {
      title: "Productive Time ",
      value: "03:31 ",
    },
    {
      title: "Idle Time ",
      value: "00:22",
    },
    {
      title: "Away Time ",
      value: "00:22",
    },
  ];

  const columns = [
    { key: "name", label: "Name" },
    { key: "mandays", label: "Man Days" },
    { key: "avgworkhours", label: "Work Hours (Avg)" },
    { key: "new", label: "new Hours (Avg)" },
  ];

  // Data
  const items = [
    {
      id: 1,
      name: "Chandrakanta Malviya",
      mandays: "1",
      avgworkhours: "05:05",
      new: 0,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      mandays: "2",
      avgworkhours: "06:30",
      new: 9,
    },
  ];
  return (
    <>
      <div>
        <Flex gap={2}>
          {attendanceTabData?.map((item) => (
            <Box
              p={5}
              w={"20%"}
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
        <div>
          <ProgressBarContainer />
        </div>
        <div>
          <Card.Root>
            <Card.Body gap="2">
              {/* <Card.Title mt="2">Work Hours (Avg)</Card.Title> */}
              <Card.Description>
                <TableContainer columns={columns} items={items} />
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </div>
      </div>
    </>
  );
}

export default AttendanceTabBox;
