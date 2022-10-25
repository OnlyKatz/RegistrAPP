import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarios : Usuario[] = [];

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private registroService: RegistroserviceService,) { }

  ngOnInit() {
    
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  
}
