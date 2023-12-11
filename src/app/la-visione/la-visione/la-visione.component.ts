import {Component, OnInit} from '@angular/core';
import {CAROUSEL_DATA, CarouselItemModel} from "../carousel-item.model";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-la-visione',
  templateUrl: './la-visione.component.html',
  styleUrls: ['./la-visione.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class LaVisioneComponent implements OnInit {

  carouselItems: CarouselItemModel[] = CAROUSEL_DATA;
  showNavigationIndicators: boolean = true;
  showNavigationArrows: boolean = true;

  constructor(private config: NgbCarouselConfig) {
  }

  ngOnInit(): void {
    this.config.showNavigationArrows = true;
    this.config.showNavigationIndicators = true;
  }

}
