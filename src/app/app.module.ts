import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './commons/views/main/main.component';
import { NavigatorComponent } from './commons/views/navigator/navigator.component';
import { MainContainerComponent } from './commons/views/main-container/main-container.component';
import { PartnerHomeComponent } from './crud/partner-home/partner-home.component';
import { routerConfig } from './commons/routes_config/menu.config';
import { RouterOutletComponent } from './commons/views/router-outlet/router-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigatorComponent,
    MainContainerComponent,
    PartnerHomeComponent,
    RouterOutletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
