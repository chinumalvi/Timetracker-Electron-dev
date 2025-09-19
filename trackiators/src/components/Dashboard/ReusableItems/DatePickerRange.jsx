import { DateRangePicker } from 'rsuite';
import { addDays } from 'date-fns';

const DatePickerRange = () => {

    const predefinedRanges = [
  {
    label: 'Today',
    value: [new Date(), new Date()],
    placement: 'left'
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: 'left'
  },
  {
    label: 'Last 7 Days',
    value: [addDays(new Date(), -7), new Date()],
    placement: 'left'
  },
  {
    label: 'Last 30 Days',
    value: [addDays(new Date(), -30), new Date()],
    placement: 'left'
  }
];

  return (
    <div>
       <>
    <DateRangePicker showOneCalendar ranges={predefinedRanges} size="sm"  format="dd MMM yyyy"/>

  </>
    </div>
  )
}

export default DatePickerRange
