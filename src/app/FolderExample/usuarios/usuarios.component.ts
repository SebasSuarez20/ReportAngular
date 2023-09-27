import { Component, OnInit } from '@angular/core';
import { ConsumoAppService } from "../../consumo-app.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private Service: ConsumoAppService) { }

  ngOnInit(): void {
    this.GetAllAspirante();
  }


  public GetAllAspirante() {
    this.Service.GetAll().subscribe((resp: any) => {
      console.log(resp);
    });
  }

}
