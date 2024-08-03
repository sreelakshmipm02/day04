import { Component } from '@angular/core';
import { CardsComponent } from "../../units/cards/cards.component";
import { AccordionComponent } from "../../units/accordion/accordion.component";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardsComponent, AccordionComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
