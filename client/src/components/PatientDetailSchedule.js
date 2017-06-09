import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

export default props => {
  return (
    <div>
      <BigCalendar
        {...props}
        selectable
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={(slotInfo) => alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
          `\nend: ${slotInfo.end.toLocaleString()}`
        )}
        events={props.patient ? props.patient.events : []}
        defaultDate={new Date(2017, 7, 1)}
      />
    </div>
  );
};
