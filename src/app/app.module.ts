import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { AppRoutesModule } from './modules/routes/app-routing.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgbModule, HomeModule, AppRoutesModule],
    bootstrap: [AppComponent],
    entryComponents: [],
})
export class AppModule {}
