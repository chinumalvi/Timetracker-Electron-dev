import {  Table } from "@chakra-ui/react";

function TableContainer({columns,items}) {
  // Define columns dynamically
 
  return (
    <div>
      {/* <Card.Root>
        <Card.Body gap="2">
          <Card.Title mt="2">Work Hours (Avg)</Card.Title>
          <Card.Description> */}
            <Table.Root size="md">
              <Table.Header>
                <Table.Row>
                  {columns.map((col) => (
                    <Table.ColumnHeader key={col.key}>
                      {col.label}
                    </Table.ColumnHeader>
                  ))}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {items.map((item) => (
                  <Table.Row key={item.id}>
                    {columns.map((col) => (
                      <Table.Cell key={col.key}>{item[col.key]}</Table.Cell>
                    ))}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          {/* </Card.Description>
        </Card.Body>
      </Card.Root> */}
    </div>
  );
}

export default TableContainer;
