import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, CanDeactivate } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MyAppComponent } from './my-app/myapp.component';

import { DropDownComponent } from './components/dropdown.component'
import { MultiSelectDropDownComponent } from './components/multi-select-dropdown.component'
import { InputControlComponent } from './components/input-control.component'
import { ValidationMessageComponent } from './components/validation-message.component'

import { ApiDataService } from './services/data.service'


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule,
        FormsModule
    ],
    declarations: [MyAppComponent, DropDownComponent, MultiSelectDropDownComponent, InputControlComponent
        , ValidationMessageComponent],
    providers: [ApiDataService],
    bootstrap: [MyAppComponent]
})

export class AppModule { }
