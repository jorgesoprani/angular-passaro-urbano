import { Http } from '@angular/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {   
    private service: string = 'ofertas';
    private serviceUrl: string = `${URL_API}/${this.service}`;

    constructor(private http: Http) {}
    
    public getOfertas() : Promise<Oferta[]> {
        return this.http.get(`${this.serviceUrl}?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${this.serviceUrl}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorId(id: number) : Promise<Oferta> {
        return this.http.get(`${this.serviceUrl}?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json()[0]);
    }
}