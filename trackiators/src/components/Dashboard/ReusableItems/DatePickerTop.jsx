// import { DatePicker } from "rsuite";
import { DatePicker, Stack, InputGroup } from "rsuite";
import TimezoneSelector from "./TimezoneSelector";
import { Flex } from "@chakra-ui/react";

function DatePickerTop() {
  

  const today = new Date();
  return (
    <Flex>
      <Stack spacing={2} direction="row" alignItems="flex-end">
        <DatePicker size="sm" defaultValue={today} format="dd MMM yyyy" />
        {/*  Static timezone text */}
      </Stack>


      {/* <TimezoneSelector /> */}
    </Flex>
  );
}

export default DatePickerTop;
