import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-apagarcliente',
  templateUrl: './apagarcliente.component.html',
  styleUrls: ['./apagarcliente.component.scss']
})
export class ApagarclienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { this.clienteForm = this.fb.group({
    id: [''],
    nome: ['', [Validators.required]],
    telefone: [''],
    datanascimento: [''],
    dataultimacompra: [''],
    valorultimacompra: [''],
    valortotalcompras: [''],
  })}

  ngOnInit(): void {
  }

  salvar() {
    if (this.clienteForm.valid) {
      this.clienteService
      .cadastrarCliente(this.clienteForm.value)
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
