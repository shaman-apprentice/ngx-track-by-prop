import { Component, Input } from "@angular/core";

@Component({
  selector: "demo-item",
  template: `<p>{{ prefix }}: My id is "{{ id }}"</p>`,
  standalone: true
})
export class ItemComponent {
  @Input({ required: true }) prefix!: string
  @Input({ required: true }) id!: string 
}