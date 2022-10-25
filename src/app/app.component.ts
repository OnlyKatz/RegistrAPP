import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController,
              private navController: NavController,) {}


  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Seguro que deseas cerrar sesión?',
      buttons: [
        {
          text: 'No, seguir dentro',
          handler: () =>{

          }
        },{
          text: 'Si, estoy seguro',
          handler: () => {
            localStorage.removeItem('ingresado');
            localStorage.removeItem('alumno');
            localStorage.removeItem('profesor');
            this.navController.navigateRoot('home');
          }
        }
      ]
    });
    await alert.present();
  }

  componentes : Componente[] = [
    { 
      icon: 'person-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/geneqr'
    },
    {
      icon: 'camera',
      name: 'Leer QR',
      redirecTo: '/readqr'
    },
    {
      icon: 'book-outline',
      name: 'About',
      redirecTo: '/about'
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
  ];

}
