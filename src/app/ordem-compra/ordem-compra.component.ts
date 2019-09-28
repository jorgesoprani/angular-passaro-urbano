import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {
  public model: Pedido = new Pedido('', '', '', '');
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  confirmarCompra() : void {
    this.ordemCompraService.confirmarCompra(this.model);
  }
}
