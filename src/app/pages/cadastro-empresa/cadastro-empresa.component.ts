import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent implements OnInit {

  empresaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    private router: Router
  ) { 
    this.empresaForm = this.fb.group({
      nomeempresa: [''],
      filial: [''],
    })

  }

  ngOnInit(): void {
  }

  get nomeempresa() {
    return this.empresaForm.get('nomeempresa');
  }

  get filial() {
    return this.empresaForm.get('filial');
  }

  salvar() {
    if (this.empresaForm.valid) {
      this.empresaService
      .cadastrarEmpresa(this.empresaForm.value)
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
