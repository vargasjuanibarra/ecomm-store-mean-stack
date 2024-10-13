import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.css'
})
export class SidepanelComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
