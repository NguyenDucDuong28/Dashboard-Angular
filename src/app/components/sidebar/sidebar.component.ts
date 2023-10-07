import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isShow: { [key: string]: boolean } = {};
  handleShow(section: string) {
    this.isShow[section] = !this.isShow[section];
    for (const key in this.isShow) {
      if (key !== section) {
        this.isShow[key] = false;
      }
    }
  }
}
