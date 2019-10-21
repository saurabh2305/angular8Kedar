import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(quantity:number,emptyMessage:string="Out of Stock",
  instockMessage:string="In Stock"): string {
    if(quantity>0)
    return "Available";
    else
    return "Not available";
    
  }

}
