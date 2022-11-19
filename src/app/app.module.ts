import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ApagarclienteComponent } from './pages/apagarcliente/apagarcliente.component';
import { AtualizarclienteComponent } from './pages/atualizarcliente/atualizarcliente.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CadastroComponent,
    ClienteComponent,
    ListaClientesComponent,
    ApagarclienteComponent,
    AtualizarclienteComponent,
    CadastroEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
