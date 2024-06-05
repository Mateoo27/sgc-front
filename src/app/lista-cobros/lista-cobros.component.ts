import { Component, OnInit } from '@angular/core';
import { Cobro } from '../cobro';
import { NgFor } from '@angular/common';
import { CobroService } from '../cobro.service';

@Component({
  selector: 'app-lista-cobros',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-cobros.component.html',
  styleUrl: './lista-cobros.component.css'
})
export class ListaCobrosComponent {

  cobros:Cobro[];

  constructor(private cobroService:CobroService) { }

  ngOnInit(): void {
    this.obtenerCobros();
    
  }
  
  private obtenerCobros(){
    this.cobroService.obtenerListaCobros().subscribe(dato => {
      this.cobros = dato;
    } 
    );
  }

}
