import { Component, OnInit } from '@angular/core';
import {Carousel2ItemModel, CAROUSEL_2_DATA} from "./carousel-2-item.model";
import {CAROUSEL_DATA} from "../la-visione/carousel-item.model";

@Component({
  selector: 'app-tappe-progetto',
  templateUrl: './tappe-progetto.component.html',
  styleUrls: ['./tappe-progetto.component.scss']
})
export class TappeProgettoComponent implements OnInit {

 carousel2Items: Carousel2ItemModel[] = CAROUSEL_2_DATA;
  showNavigationIndicators: boolean = false;
  showNavigationArrows: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly CAROUSEL_DATA = CAROUSEL_DATA;
}
