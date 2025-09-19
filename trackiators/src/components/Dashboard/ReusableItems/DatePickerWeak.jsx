import { useState } from "react";
import { DatePicker, Stack } from "rsuite";
import { Flex } from "@chakra-ui/react";
import { differenceInCalendarWeeks, startOfMonth } from "date-fns";

const DatePickerWeak = () => {
  const today = new Date();

  // function to calculate week number inside a month
  const getWeekOfMonth = (date) => {
    const startMonth = startOfMonth(date);
    return differenceInCalendarWeeks(date, startMonth, { weekStartsOn: 1 }) + 1;
  };

  const [weekNumber, setWeekNumber] = useState(getWeekOfMonth(today));

  const handleChange = (date) => {
    if (date) {
      const week = getWeekOfMonth(date);
      setWeekNumber(week);
      console.log("Selected Week of Month:", week);
    }
  };

  return (
    <Flex>
      <Stack spacing={2} direction="row" alignItems="center">
        <DatePicker
          size="sm"
          defaultValue={today}
          format="MMM yyyy"
          oneTap
          onChange={handleChange}
          placeholder="Select Week"
        />
        <span style={{ fontSize: "14px", fontWeight: "500", color: "gray" }}>
          Week {weekNumber} 
        </span>
      </Stack>
    </Flex>
  );
};

export default DatePickerWeak;
