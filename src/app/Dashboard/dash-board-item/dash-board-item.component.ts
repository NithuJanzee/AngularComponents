import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dash-board-item',
  standalone: true,
  imports: [],
  templateUrl: './dash-board-item.component.html',
  styleUrl: './dash-board-item.component.css'
})
export class DashBoardItemComponent {
  // @Input({ required: true }) image!: { src: string; alt: string; }
  // @Input({required:true}) title!:string;

  image = input.required<{ src: string; alt: string; }>()
  title = input.required<string>()
}
