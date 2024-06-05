import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cobro } from './cobro';

@Injectable({
  providedIn: 'root'
})
export class CobroService {

  // URL del listado del backend
  private baseURl = 'http://localhost:8080';

  constructor(private httpClient : HttpClient) { }

  // Obtener todos los cobros
  obtenerListaCobros():Observable<Cobro[]> {
    return this.httpClient.get<Cobro[]>(`${this.baseURl}`);
  }

  registrarCobro(cobro:Cobro) : Observable<Cobro> {
    return this.httpClient.post<Cobro>(`${this.baseURl}`, cobro);

  }
  
}
