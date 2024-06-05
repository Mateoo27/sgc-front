import { Component, OnInit } from '@angular/core';
import { Cobro } from '../cobro';
import { CobroService } from '../cobro.service';
import { Router } from 'express';

@Component({
  selector: 'app-registrar-cobro',
  standalone: true,
  imports: [],
  templateUrl: './registrar-cobro.component.html',
  styleUrl: './registrar-cobro.component.css'
})
export class RegistrarCobroComponent implements OnInit {

    cobro : Cobro = new Cobro();

    constructor(private cobroService: CobroService, private router: Router) { }

    ngOnInit(): void {
      
    }

    guardarCobro(): void {
      this.cobroService.registrarCobro(this.cobro).subscribe(
        dato => {
          console.log(dato);
          this.irListaCobros();
        },
        error => console.log(error)
      );
    }

  irListaCobros() {
    this.router.navigate(['/cobros']);
  }

    onSubmit(): void {
      this.guardarCobro();

  }
}
