import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// importamos para el Componente Navbar
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';

// importamos los componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    TabMenuModule, 
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
