import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  paises: any[];

  constructor(
    private paisesService: PaisesService
  ) {}

  async ngOnInit() {
    this.paises = await this.paisesService.getPaises();
  }

}
