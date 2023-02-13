import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ContentComponent } from './Component/content/content.component';
import { CalcComponent } from './Component/calc/calc.component';
import { MasterComponent } from './Component/master/master.component';
import { EmpDetailsComponent } from './Component/emp-details/emp-details.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CalcComponent,
    MasterComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
