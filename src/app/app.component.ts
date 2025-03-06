import { Component } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { NgIfComponent } from "./Components/ng-if/ng-if.component";
import { NgForComponent } from "./Components/ng-for/ng-for.component";
import { NgClassComponent } from "./Components/ng-class/ng-class.component";
import { NgStyleComponent } from "./Components/ng-style/ng-style.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DataBindingComponent,NgIfComponent,NgForComponent,NgClassComponent,NgStyleComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP1';
  
}
