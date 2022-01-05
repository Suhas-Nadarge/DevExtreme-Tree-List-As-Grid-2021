import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxCheckBoxModule, DxTreeListModule } from 'devextreme-angular';

import { Service } from './app.service';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        DxTreeListModule,
        DxCheckBoxModule
    ],
    declarations: [AppComponent],
    providers: [Service],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);