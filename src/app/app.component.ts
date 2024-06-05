import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCobrosComponent } from "./lista-cobros/lista-cobros.component";
import { NgFor, NgForOf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, ListaCobrosComponent, NgFor, NgForOf]
})
export class AppComponent {
  title = 'Sistema Gestión de Cobros';
}
