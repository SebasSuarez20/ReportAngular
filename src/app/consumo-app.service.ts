import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsumoAppService {

  public Path: string = "http://localhost/dashboard/Prueba_REST/Controller/UsuarioController.php?Search";

  constructor(private HttpClient: HttpClient) { }

  public GetAll() {
    return this.HttpClient.get(this.Path);
  }

}
