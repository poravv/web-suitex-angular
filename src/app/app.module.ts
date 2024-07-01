import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { ServicesComponent } from './components/services/services.component';
import { ShopComponent } from './components/shop/shop.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { DestacadoComponent } from './components/destacado/destacado.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdDestacadoComponent } from './components/prod-destacado/prod-destacado.component';
import { PqelegirnosComponent } from './components/pqelegirnos/pqelegirnos.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BasescondicionesComponent } from './components/basescondiciones/basescondiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProdDestacadoComponent,
    ServicesComponent,
    ShopComponent,
    ThankyouComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    BlogComponent,
    AboutComponent,
    FooterComponent,
    DestacadoComponent,
    TestimonialsComponent,
    PqelegirnosComponent,
    BlogsComponent,
    PrivacidadComponent,
    BasescondicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
