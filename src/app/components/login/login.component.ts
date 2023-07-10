import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })

  }
  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'matias' && password == 123 ){
      //Redireccionamos al dashboard
    this.fakeloading();
    }else{
      //Mostramos un mensaje de error
    this.error()
    this.form.reset()
    }
  }
error(){
  this._snackBar.open('Usuario o contraseña incorrectos', '', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition:"bottom"
  })
}

fakeloading(){
  this.loading = true;
  setTimeout(()=> {
    this.loading = false
  }, 1500);
}

}
