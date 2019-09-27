import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'oferta/:id', component: OfertaComponent, children: [
        { path: '', component: ComoUsarComponent },
        { path: 'onde-fica', component: OndeFicaComponent },
        { path: 'como-usar', component: ComoUsarComponent },
    ] },
    { path: 'ordem-compra', component: OrdemCompraComponent}
]