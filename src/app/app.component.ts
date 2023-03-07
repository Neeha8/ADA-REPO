import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
  HeaderComponent,
]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe App Works!';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
