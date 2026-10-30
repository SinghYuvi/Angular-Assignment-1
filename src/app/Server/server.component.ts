import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  styleUrl: './server.component.css',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverName: string = 'My Server';
  serverStatus: string = 'Online';
  serverId: number = 12345;
  serverLocation: string = 'New York';
}
