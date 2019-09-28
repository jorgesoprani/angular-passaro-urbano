import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { Http, RequestOptions } from '@angular/http';
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService {

  constructor(private http: Http) { }

  confirmarCompra(pedido: Pedido) : void {
    // var headers: Headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // this.http.post(
    //   `${URL_API}/pedidos`,
    //   JSON.stringify(pedido),
    //   new RequestOptionsArgs({ headers: headers })
    // )
  }
}
