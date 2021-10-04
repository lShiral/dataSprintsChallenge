import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { SnackBarService } from 'src/app/services/snack-bar.service';
// import { ModalConfirmacaoComponent } from 'src/app/shared/modal-confirmacao/modal-confirmacao.component';
// import { takeUntilDestroy } from 'src/assets/utils/take-until-destroy';

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
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    // private _snackBarService: SnackBarService,
    // private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  voltar() {
    this.router.navigate(["/pagina-inicial"]);
  }

  close(res) {
    this.close(res);
  }

  confirmarTrasferencia() {
  //   this.dialog
  //   .open(ModalConfirmacaoComponent, {
  //     maxWidth: "40vw",
  //     data: {
  //       titulo: `Confirmar cadastro?`,
  //     },
  //   })
  //   .afterClosed()
  //   .pipe(takeUntilDestroy(this))
  //   .subscribe((res) => {
  //     this._snackBarService.success(res.data);
  //     this.close(true);
  //   },  error => {
  //     this._snackBarService.error("Falha ao tentar cadastrar Dev!");
  // });
  }

}
