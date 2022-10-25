import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};


  constructor(private alertController: AlertController,
              private registroService: RegistroserviceService,
              private toast: ToastController, 
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
                  'apellido' : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]], 
                  'correo' : ["", [Validators.required, Validators.email]], 
                  'rol' : new FormControl("", Validators.required), 
                  'password': ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],  
                  'confirmaPass': ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]], 
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      this.alertError();
    }
    else{
    this.newUsuario.nomUsuario=form.nombre;
    this.newUsuario.apeUsuario=form.apellido;
    this.newUsuario.correoUsuario=form.correo;
    this.newUsuario.rolUsuario=form.rol;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario=form.confirmaPass;
    this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
      this.newUsuario=<Usuario>{};
      this.showToast('Usuario Creado!');
    });
    this.formularioRegistro.reset();
  }
  }//findelmetodo

  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }


}
