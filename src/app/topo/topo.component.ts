import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable'
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .switchMap((valor: string) => {
        return this.ofertasService.pesquisaOfertas(valor);
      });

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    );
  }

  public pesquisar(valor: string) : void{
    this.subjectPesquisa.next(valor);
    // this.ofertas = this.ofertasService.pesquisaOfertas(valor);

    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas)
    // );
  }


}
