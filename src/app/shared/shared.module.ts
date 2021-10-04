import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorLogSnackbarComponent } from './error-log-snackbar/error-log-snackbar.component';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';

@NgModule({
  declarations: [
    ModalConfirmacaoComponent,
    ErrorLogSnackbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    FormsModule
  ],
  entryComponents: [
    ModalConfirmacaoComponent,
    ErrorLogSnackbarComponent,
  ],
  providers: []
})
export class SharedModule { }
