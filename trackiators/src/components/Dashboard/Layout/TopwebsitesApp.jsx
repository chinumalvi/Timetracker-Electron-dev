import { Card } from "@chakra-ui/react"
// import DonutChartContainer from "../ReusableItems/DonutChartContainer"
import BarChartContainer from "../ReusableItems/BarChartContainer"

function TopwebsitesApp() {
  return (
    <div>
        <Card.Root >
            <Card.Body gap="2">
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
  {/* <DonutChartContainer/> */}
  <BarChartContainer/>
                </Card.Description>
            </Card.Body>
        </Card.Root>
    </div>
  )
}

export default TopwebsitesApp
