import { Component } from '@angular/core';
import { Cliente } from './models/cliente';
import { Empresa } from './models/empresa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientesapi';
  clientes: Cliente[] = [];
  empresas: Empresa[] = [];
}
