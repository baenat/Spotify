import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {

      if (args === null) {
        return value
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          }

          if (a[args] > b[args]) {
            return 1;
          }

          return 0;
        });

        return (sort === 'asc') ? tmpList : tmpList.reverse();

      };



    } catch (error) {
      console.log('Error pipe', error);
      return value;
    }
    return value;
  }

}
