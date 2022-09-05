import { Component } from '@angular/core';

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
  constructor() {}

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
      icon: 'log-out-outline',
      name: 'log Out',
      redirecTo: '/home'
    },
  ];

}
