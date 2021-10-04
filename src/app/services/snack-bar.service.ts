import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorLogSnackbarComponent } from 'src/app/shared/error-log-snackbar/error-log-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  open(msg: string, duration?: number) {
    this._snackBar.open(msg, null, { duration: duration || 2000, panelClass: ['info-snackbar'] });
  }

  error(msg: string, duration?: number) {
    this._snackBar.open(msg, null, { duration: duration || 2000, panelClass: ['error-snackbar'] });
  }

  warning(msg: string, duration?: number) {
    this._snackBar.open(msg, null, { duration: duration || 2000, panelClass: ['warning-snackbar'] });
  }

  success(msg: string, duration?: number) {
    this._snackBar.open(msg, null, { duration: duration || 2000, panelClass: ['success-snackbar'] });
  }

  fromComponent(data) {
    this._snackBar.openFromComponent(ErrorLogSnackbarComponent, { data: data, panelClass: ['error-api-snackbar'], duration: 15000 });
  }

}
