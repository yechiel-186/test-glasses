import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassesComponent } from './componenets/glasses/glasses.component';
import { LensComponent } from './componenets/lens/lens.component';
import { NumbersComponent } from './componenets/numbers/numbers.component';
import { OrderComponent } from './componenets/order/order.component';

const routes: Routes = [
  { path: "", component:GlassesComponent},
  { path: "lens", component:LensComponent},
  { path: "nambers", component:NumbersComponent},
  { path: "order", component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
