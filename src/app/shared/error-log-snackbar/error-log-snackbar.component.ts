import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-log-snackbar',
  templateUrl: './error-log-snackbar.component.html',
  styleUrls: ['./error-log-snackbar.component.scss']
})
export class ErrorLogSnackbarComponent implements OnInit {
  error: any;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
    this.error = this.data.error.data.split("error:")[1]
  }

}
