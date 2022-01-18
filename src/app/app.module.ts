import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { WorkComponent } from './work/work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ImpressumComponent,
    DataProtectionComponent,
    MyskillsComponent,
    WorkComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
