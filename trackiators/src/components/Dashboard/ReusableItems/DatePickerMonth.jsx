// import { DatePicker } from "rsuite";
import { DatePicker, Stack, InputGroup } from "rsuite";
import TimezoneSelector from "./TimezoneSelector";
import { Flex } from "@chakra-ui/react";

const DatePickerMonth = () => {
  const today = new Date();
  return (
    <div>
      

    <Flex>
      <Stack spacing={2} direction="row" alignItems="flex-end">
        <DatePicker size="sm" defaultValue={today} format="MMM yyyy" />
 
      </Stack>


    </Flex>

    </div>
  )
}

export default DatePickerMonth
