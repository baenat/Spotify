import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/'],
        query: {}
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
        query: {}
      },
      {
        name: 'Biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: {}
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Crear lista',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/'],
      },
      {
        name: 'Mi lista °2',
        router: ['/'],
      },
      {
        name: 'Mi lista °3',
        router: ['/'],
      }
    ];
  }

}
