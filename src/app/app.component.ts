import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./Dashboard/server-status/server-status.component";
import { TrafficComponent } from "./Dashboard/traffic/traffic.component";
import { TicketsComponent } from "./Dashboard/tickets/tickets.component";
import { DashBoardItemComponent } from "./Dashboard/dash-board-item/dash-board-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashBoardItemComponent,
    DashBoardItemComponent],
})
export class AppComponent {

}
