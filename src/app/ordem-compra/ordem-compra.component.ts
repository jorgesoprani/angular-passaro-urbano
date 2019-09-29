import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') public formulario: NgForm;
  public idPedido: number;
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  confirmarCompra(): void {
    let pedido: Pedido = this.formulario.value;
    this.ordemCompraService.confirmarCompra(pedido)
      .subscribe((idPedido: number) => this.idPedido = idPedido);
  }
}
