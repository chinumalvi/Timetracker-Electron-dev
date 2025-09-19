import BarChartContainer from "../ReusableItems/BarChartContainer";
import { Card } from "@chakra-ui/react";

function WorkLifeBalance() {
  return (
    <>
      <div>
        <Card.Root>
          <Card.Body gap="2">
            <Card.Title mt="2">Work vs Life Balance</Card.Title>
            <Card.Description>
              {/* <DonutChartContainer/> */}
              <BarChartContainer />
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </div>
    </>
  );
}

export default WorkLifeBalance;
