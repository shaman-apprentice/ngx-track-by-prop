import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { NgForTrackByPropDirective } from "@shaman-apprentice/ngx-track-by-prop"

@Component({
  selector: 'demo-app',
  standalone: true,
  imports: [CommonModule, ItemComponent, NgForTrackByPropDirective],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  ids: {id: string}[] = [{ id: "3" }, { id: "1" }, { id: "2" }];

  updateIds(ids: string) {
    this.ids = ids.split(",").map(id => ({ id }));
  }
}
