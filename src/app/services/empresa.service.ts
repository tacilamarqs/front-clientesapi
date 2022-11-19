import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { empresaDTO } from '../models/empresaDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresas: Empresa[] = [];

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<empresaDTO> {
    return this.http.get<empresaDTO>(environment.apiUrl + "/api/EmpresasControlador/");
  }

  cadastrarEmpresa(empresa: Empresa) {
    return this.http.post(environment.apiUrl + "/api/EmpresasControlador/", empresa);
  }

}
