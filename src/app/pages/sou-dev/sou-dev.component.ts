import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cidade } from "src/app/interfaces/cidade";
import { Especialidade } from "src/app/interfaces/especialidade";
import { Formacao } from "src/app/interfaces/formacao";
import { ModalConfirmacaoComponent } from 'src/app/shared/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-sou-dev',
  templateUrl: './sou-dev.component.html',
  styleUrls: ['./sou-dev.component.css']
})
export class SouDevComponent implements OnInit {
  especSelecionada: string;
  formacaoSelecionada: string;
  cidadeSelecionada: string;
  selectedCar: string;

  especialidades: Especialidade[] = [
    {value: 'angular', viewEspec: 'Angular'},
    {value: 'react', viewEspec: 'React'},
    {value: 'c', viewEspec: 'C++'},
    {value: 'js', viewEspec: 'Js'},
  ];

  formacoes: Formacao[] = [
    {value: 'fundamental', viewFormacao: 'Fundamental'},
    {value: 'medio', viewFormacao: 'Médio'},
    {value: 'sup-incompleto', viewFormacao: 'Superior Incompleto'},
    {value: 'sup-completo', viewFormacao: 'Superior Completo'},
  ];

  cidades: Cidade[] = [
    {value: 'bh', viewCidade: 'Belo Horizonte'},
    {value: 'sabara', viewCidade: 'Sabará'},
    {value: 'betim', viewCidade: 'Betim'},
    {value: 'nova-lima', viewCidade: 'Nova Lima'},
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(["/pagina-inicial"]);
  }

  close(res) {
    this.close(res);
  }

  enviar() {
    this.dialog
    .open(ModalConfirmacaoComponent, {
      maxWidth: "40vw",
      data: {
        titulo: `Confirmar cadastro?`,
      },
    })
  }

}
