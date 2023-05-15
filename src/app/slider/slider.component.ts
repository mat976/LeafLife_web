import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  images: string[] = ["assets/galerie1.jpg", "assets/galerie2.jpg", "assets/galerie3.png"];
  currentIndex = 0;

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  getPrevIndex(): number {
    return (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  getNextIndex(): number {
    return (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}
