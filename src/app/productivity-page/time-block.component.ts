import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeBlockService } from './time-block.service';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.css'],
})
export class TimeBlockComponent implements OnInit {
  timeBlocks!: string[];
  timeBlocksObservable!: Observable<
    { value: string; idx: number; errors: string }[]
  >;
  constructor(private slService: TimeBlockService) {}

  ngOnInit() {
    this.timeBlocks = [];
    this.timeBlocksObservable = this.slService.subscribeToTimeBlocks();
    this.timeBlocksObservable.subscribe((x) => {
      const newBlocks = x.map((x: { value: string }) => x.value);
      this.timeBlocks = newBlocks;
    });
  }
  getValuesFromTimeBlocks(): string[] {
    return this.slService.retrieveTimeBlocks();
  }
  getValuesFromTimeBlock(idx: number): string {
    return this.slService.retrieveTimeBlocks()[idx];
  }
  isAnyError() {
    return this.slService.retrieveEntryErrorValues().filter((r) => r?.length)
      .length;
  }
  displayErrorValues() {
    return this.slService.retrieveEntryErrorValues();
  }
}
