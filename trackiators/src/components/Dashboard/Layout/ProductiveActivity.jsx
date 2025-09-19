import { Card } from "@chakra-ui/react"
import DonutChartContainer from "../ReusableItems/DonutChartContainer"
function ProductiveActivity() {
  return (
    <div>
      <Card.Root>
                  <Card.Body gap="2">
                      <Card.Title mt="2">Productive Activity</Card.Title>
                      <Card.Description>
                      <DonutChartContainer/>
                      </Card.Description>
                  </Card.Body>
              </Card.Root>
    </div>
  )
}

export default ProductiveActivity
