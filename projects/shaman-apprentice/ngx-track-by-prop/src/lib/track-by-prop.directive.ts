import { NgForOf } from "@angular/common";
import { Directive, Host, Input, NgIterable } from "@angular/core";

@Directive({
  selector: "[ngForTrackByProp]",
  standalone: true,
})
export class NgForTrackByPropDirective<T> {

  @Input({ required: true }) ngForOf!: NgIterable<T>;
  @Input({ required: true }) ngForTrackByProp!: keyof T;

  constructor(@Host() private ngFor: NgForOf<T>) {
    this.ngFor.ngForTrackBy = (_index: number, item: T) => {
      return item[this.ngForTrackByProp];
    };
  }
}