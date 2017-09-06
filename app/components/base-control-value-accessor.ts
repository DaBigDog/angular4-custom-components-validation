import { Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseControlValueAccessor implements ControlValueAccessor { 

    @Input() public isReadOnly: boolean = false;
    @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();

    //**************  ControlValueAccessor Methods ****************

    public writeValue(value: any) {
        console.log(value);
    }

    public propagateChange = (_: any) => { };

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any) { }

    public setDisabledState(isDisabled?: boolean): void {

    }

}