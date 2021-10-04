import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {
  titulo: string;
  subtitulo: string;
  confirmar: string = 'SIM';
  naoConfirmar: string = 'NÃO';

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.titulo = this.data.titulo;

    if (this.data.subtitulo) {
      this.subtitulo = this.data.subtitulo;
    }
    if (this.data.confirmar) {
      this.confirmar = this.data.confirmar;
    }
    if (this.data.naoConfirmar) {
      this.naoConfirmar = this.data.naoConfirmar;
    }
  }

  close(value) {
    this.dialogRef.close(value);
  }

}
