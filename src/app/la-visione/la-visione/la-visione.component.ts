import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {CAROUSEL_DATA, CarouselItemModel} from "../carousel-item.model";
import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-la-visione',
  templateUrl: './la-visione.component.html',
  styleUrls: ['./la-visione.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class LaVisioneComponent implements OnInit,AfterViewInit {

  @ViewChild('myCarousel') myCarousel!: NgbCarousel;
  @ViewChild('touchArea') touchArea!: ElementRef;

  touchStartX = 0;
  touchEndX = 0;

  carouselItems: CarouselItemModel[] = CAROUSEL_DATA;
  showNavigationIndicators: boolean = true;
  showNavigationArrows: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    event.preventDefault();  // Previene lo scorrimento della pagina
    this.touchStartX = event.changedTouches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    event.preventDefault();  // Previene lo scorrimento della pagina
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    if (this.touchEndX < this.touchStartX) {
      this.myCarousel.next();
    }
    if (this.touchEndX > this.touchStartX) {
      this.myCarousel.prev();
    }
  }

}
