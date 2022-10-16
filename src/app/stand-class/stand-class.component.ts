import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stand-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-class.component.html',
  styleUrls: ['./stand-class.component.scss']
})
export class StandClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
