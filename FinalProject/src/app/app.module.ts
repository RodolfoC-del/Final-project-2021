import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { SelctionButtonsComponent } from './selction-buttons/selction-buttons.component';
import { SumbitComponent } from './sumbit/sumbit.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelctionButtonsComponent,
    SumbitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
