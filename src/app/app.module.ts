import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot([
	{path :"Home" , component:HomeComponent},
	{path :"Register" , component:RegisterComponent},
	{path :"Login" , component:LoginComponent},
	{path :"Products" , component:ProductsComponent},
  {path :"**",component:HeaderComponent,data:{title:"value"}}
	
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
