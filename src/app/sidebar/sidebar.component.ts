import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarStyle = null;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    console.log('Toggle Sidebar');
    if (this.sidebarStyle == null) {
      this.sidebarStyle = {
        'display': 'block'
      }
    } else {
      this.sidebarStyle = null;
    }
  }

}
