import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  onOptionSelected(event: MatSelectChange) {
    console.log('Selected option: ', event.value);
    // Xử lý tùy chọn đã chọn ở đây
  }
}
