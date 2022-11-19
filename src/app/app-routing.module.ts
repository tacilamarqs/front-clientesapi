import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ApagarclienteComponent } from './pages/apagarcliente/apagarcliente.component';
import { AtualizarclienteComponent } from './pages/atualizarcliente/atualizarcliente.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cliente/novo", component: CadastroComponent },
  { path: "empresa/novo", component: CadastroEmpresaComponent },
  { path: "cliente/:id", component: CadastroComponent },
  { path: "lista-clientes", component: ListaClientesComponent },
  { path: "atualizarcliente", component: AtualizarclienteComponent },
  { path: "apagarcliente", component: ApagarclienteComponent },
  { path  : "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
