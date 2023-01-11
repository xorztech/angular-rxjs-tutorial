import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit{
  ngOnInit(): void {
    const source = from([1, 2, 3, 4, 5]); 

    source.pipe(
      mergeMap(async (res) => res * 10)
    ).subscribe(res =>{
      console.log(res);
    });
    }
}
