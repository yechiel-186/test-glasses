import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlassesComponent } from './componenets/glasses/glasses.component';
import { LensComponent } from './componenets/lens/lens.component';
import { NumbersComponent } from './componenets/numbers/numbers.component';
import { OrderComponent } from './componenets/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    GlassesComponent,
    LensComponent,
    NumbersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
