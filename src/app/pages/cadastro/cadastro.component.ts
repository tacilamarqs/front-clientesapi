import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { 
    this.clienteForm = this.fb.group({
      nome: [''],
      telefone: [''],
      datanascimento: ['', [Validators.required, Validators.pattern (/^\d{1,2}\.\d{1,2}\.\d{4}$/)]],
      dataultimacompra: ['', [Validators.required, Validators.pattern (/^\d{1,2}\.\d{1,2}\.\d{4}$/)]],
      valorultimacompra: [''],
      valortotalcompras: [''],
      empresaId: ['']
    })

  }

  ngOnInit(): void {
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

  get empresaId() {
    return this.clienteForm.get('empresaId');
  }

  salvar() {
    if (this.clienteForm.valid) {
      this.clienteService
      .cadastrarCliente(this.clienteForm.value)
      .subscribe(() => {
        this.clienteService.cadastrarCliente(this.clienteForm.value);
        this.router.navigate([""]);

      }, error => {
        alert("Não foi possível realizar o cadastro.");
      }); 
    } else {
      alert ("Verifigue os campos obrigatórios!");
    }
  }
}
