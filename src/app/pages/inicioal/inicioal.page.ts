import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicioal',
  templateUrl: './inicioal.page.html',
  styleUrls: ['./inicioal.page.scss'],
})
export class InicioalPage implements OnInit {

  constructor(private menuController: MenuController,) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }

}
