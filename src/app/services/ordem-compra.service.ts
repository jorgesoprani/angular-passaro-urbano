import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdemCompraService {

  constructor(private http: Http) { }

  confirmarCompra(pedido: Pedido) : Observable<number> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers: headers })
    ).map((response: Response) => response.json().id);
  }
}
