import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-geneqr',
  templateUrl: './geneqr.page.html',
  styleUrls: ['./geneqr.page.scss'],
})
export class GeneqrPage {

  qrCodeString= 'RegistrAPP'; 
  scannedResult:any;

  constructor(private menuController: MenuController) { }

  usuario={
    nom:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
