import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {

  transform(value: string, tamanho: number): any {
    tamanho = tamanho || 15;
    if(value && value.length > tamanho)
      return value.substr(0, tamanho) + '...';

    return value;
  }

}
