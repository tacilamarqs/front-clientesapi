import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-atualizarcliente',
  templateUrl: './atualizarcliente.component.html',
  styleUrls: ['./atualizarcliente.component.scss']
})
export class AtualizarclienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { 
    this.clienteForm = this.fb.group({
      id: [''],
      nome: ['', [Validators.required]],
      telefone: [''],
      datanascimento: [''],
      dataultimacompra: [''],
      valorultimacompra: [''],
      valortotalcompras: [''],
    })
  }

  ngOnInit(): void {
  }

  get id() {
    return this.clienteForm.get('id');
  }

  get nome() {
    return this.clienteForm.get('nome');
  }

  get telefone() {
    return this.clienteForm.get('telefone');
  }

  get datanascimento() {
    return this.clienteForm.get('datanascimento');
  }
  
  get dataultimacompra() {
    return this.clienteForm.get('dataultimacompra');
  }
  
  get valorultimacompra() {
    return this.clienteForm.get('valorultimacompra');
  }
  
  get valortotalcompras() {
    return this.clienteForm.get('valortotalcompras');
  }

  
  salvar() {
    if (this.clienteForm.valid) {
      this.clienteService.atualizarCliente(this.clienteForm.value(this.id), this.clienteForm.value)
      .subscribe(() => {
        this.router.navigate([""]);

      }, error => {
        alert("Não foi possível realizar o cadastro.");
      }); 
    } else {
      alert ("Verifigue os campos obrigatórios!");
    }
  }

  
}
