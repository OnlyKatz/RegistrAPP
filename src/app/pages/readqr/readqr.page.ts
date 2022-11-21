import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-readqr',
  templateUrl: './readqr.page.html',
  styleUrls: ['./readqr.page.scss'],
})
export class ReadqrPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
