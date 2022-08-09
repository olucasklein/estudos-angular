import { Component, OnInit } from '@angular/core';
import { Builds } from './builds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Variáveis
  title = 'angular-project';
  versions = ['1.0', '2.0', '3.0', '4.0', '5.0'];
  currentVersion = this.versions[4];

  // Construtor criado na classe builds
  builds = [
    new Builds(1, 'Build 1', '1.0'),
    new Builds(2, 'Build 2', '2.0'),
    new Builds(3, 'Build 3', '3.0'),
    new Builds(4, 'Build 4', '4.0'),
    new Builds(5, 'Build 5', '5.0'),
  ];

  tunaColor = '#31b34e';
  fontColor = '#000000';
  backGroundColor: string = '#FFFFFF';
  showWarning: boolean = true;
  showInput: boolean = false;
  warningMsg = 'Não há builds';

  changeBackgroundColor(corBackground: string, corText: string) {
    this.backGroundColor = corBackground;
    this.fontColor = corText;
  }

  // changeVersion(newVersion: string) {
  //   this.currentVersion = newVersion;
  // }

  ngOnInit(): void {
    if (this.builds.length > 0) {
      // Mesmo escopo
      // let build = 'test';
      // console.log(build);
      // Abaixo, o escopo é diferente
      this.showWarning = false;
      this.showInput = true;
    }
  }

  // Antigo array de builds
  // builds = [
  //   { nome: 'Build 1', data: '01/01/2019' },
  //   { nome: 'Build 2', data: '02/01/2019' },
  //   { nome: 'Build 3', data: '03/01/2019' },
  //   { nome: 'Build 4', data: '04/01/2019' },
  //   { nome: 'Build 5', data: '05/01/2019' },
  // ];
}
