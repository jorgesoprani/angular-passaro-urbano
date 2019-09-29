import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ItemCarrinho } from '../shared/item.carrinho.model';
import { Oferta } from '../shared/oferta.model';

@Injectable()
export class CarrinhoService {   
    private itens: ItemCarrinho[] = [];
    constructor(private http: Http) {}

    exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public alterarQuantidadePedido(id: number, quantidade: number) {
        let existente: ItemCarrinho = this.itens.find(x => x.id === id);

        if(existente) {
            existente.quantidade += quantidade;

            if(existente.quantidade == 0) {
                let index = this.itens.indexOf(existente);
                this.itens.splice(index, 1);
            }                
        }
    }

    public adicionarPedido(item: Oferta) {
        let existente: ItemCarrinho = this.itens.find(x => x.id === item.id);
        if(existente) {
            existente.quantidade++;
        }
        else {
            var novoItem = new ItemCarrinho(
                item.id,
                item.imagens[0],
                item.titulo,
                item.descricao_oferta,
                item.valor,
                1
            );

            this.itens.push(novoItem);
        }
    }

    public limparCarrinho(): void {
        this.itens = [];
    }

    public getTotalItensCarrinho() : number {
        let total: number = 0;

        this.itens.forEach(item => total += item.valor * item.quantidade);

        return total;
    }
}