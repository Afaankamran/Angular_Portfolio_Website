import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InputTextModule } from 'primeng/inputtext';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import {CommonModule} from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';













  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    NavbarComponent ,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule ,
    InputTextModule,
    InputTextareaModule ,
    DialogModule ,
    BrowserAnimationsModule,
    ScrollTopModule ,
    ToastModule,
    ImageModule,
    CommonModule,
    LazyLoadImageModule,

  

  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
