import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Inject, ScheduleComponent,ViewsDirective,ViewDirective, Day, Week, WorkWeek, Month, Agenda,MonthAgenda,TimelineViews,TimelineMonth,EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

function App() {
  // const localData: EventSettingsModel = {
  //   dataSource: [{
  //     EndTime: new Date(2024, 5, 11, 6, 30),
  //     StartTime: new Date(2024, 5, 11, 4, 0),
  //   }]
  // };
  // const remoteData = new DataManager({
  //   url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
  //   adaptor: new WebApiAdaptor,
  //   crossDomain: true
  // });

  return (
    <ScheduleComponent >
            {/* <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective> */}
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
    </ScheduleComponent>
  );
}

export default App;
