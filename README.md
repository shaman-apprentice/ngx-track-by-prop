# trackByProp

When using Angular's `*ngFor` it is annoying to write a custom `trackBy` function as member of your component class:

- When you write the stupid boiler code it pulls you out of your meaningful thoughts about what elements you were about to write.
- Every time you touch the class, your mind gets distracted by a view stupid lines.

This library lets you declare a `trackBy` function as `trackByProp` directive, which will use given property name. It is type-safe, meaning you can only provide an existing property of given iterable.

## Usage

```ts
import { Component } from '@angular/core';
import { NgForTrackByPropDirective } from "@shaman-apprentice/ngx-track-by-prop"

@Component({
  selector: 'demo-app',
  template: `
    <ul>
      <li *ngFor="let item of list; trackByProp: 'id'">
        Item's id: {{ item.id }}
      </li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule, NgForTrackByPropDirective],
})
export class AppListComponent {
  public list: { id: string }[] = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}
```
