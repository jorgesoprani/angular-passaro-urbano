import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { ItemCarrinho } from '../shared/item.carrinho.model';

@Component({
  selector: 'app-ordem-compra-2',
  templateUrl: './ordem-compra-2.component.html',
  styleUrls: ['./ordem-compra-2.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompra2Component implements OnInit {
  public itensCarrinho: ItemCarrinho[];
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(5), Validators.maxLength(100) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.maxLength(5)   ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  });
  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }
  public idPedido: number;
  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }


  public confirmarCompra(): void {
    if(!this.formulario.valid) {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    }
    else {
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.exibirItens()
      );
      this.ordemCompraService.confirmarCompra(pedido)
        .subscribe((idPedido: number) => {
          this.idPedido = idPedido
          this.carrinhoService.limparCarrinho();
        });
    }
  }
}
