import { AuthGuardService } from './services/guard/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RouterModule, Routes, Router} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SaleCardComponent } from './sale-card/sale-card.component';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import {NgPipesModule} from 'ngx-pipes';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TextColorDirective } from './directives/text-color.directive';
import { AddEditComponent } from './add-edit/add-edit.component';
import { NgxCurrencyModule } from "ngx-currency";
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';


registerLocaleData(localePT);

const appRoutes: Routes = [
  { path: '', component: ListComponent, canActivate: [AuthGuardService], canLoad: [AuthGuardService] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuardService], canLoad: [AuthGuardService] },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuardService], canLoad: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddEditComponent, canActivate: [AuthGuardService], canLoad: [AuthGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    SaleCardComponent,
    TextColorDirective,
    AddEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgPipesModule,
    NgxCurrencyModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation
    }) // ToastrModule added
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
