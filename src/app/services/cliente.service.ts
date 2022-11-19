import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { clienteDTO } from '../models/clienteDTO';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [];

  constructor(private http: HttpClient) { }

  getClientes(): Observable<clienteDTO> {
    return this.http.get<clienteDTO>(environment.apiUrl + "/api/ClientesControlador/");
  }

  cadastrarCliente(cliente: Cliente) {
    return this.http
    .post(environment.apiUrl + "/api/ClientesControlador/", cliente);
  }

  removerCliente(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/ClientesControlador/${id}`);
  }

  atualizarCliente(id: number, cliente: Cliente) {
    return this.http.put(`${environment.apiUrl}/api/ClientesControlador/${id}`, cliente);
  }

}
