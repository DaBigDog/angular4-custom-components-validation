﻿import { Component, Input, Output, EventEmitter, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { BaseControlValueAccessor } from './base-control-value-accessor'

@Component({
    selector: 'drop-down',
    templateUrl: './app/components/dropdown.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownComponent),
            multi: true
        }
    ]
})

export class DropDownComponent extends BaseControlValueAccessor {

    @Input() public types: any[] = new Array<any>();
    @Input() public selectedItem: any;
    @Input() public label: string = "";
    @Input() public pkField: string = "";
    @Input() public textField: string = "";
    

    constructor() {
        super();
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {

    }


    //**************  Form Control Validation Methods ****************

    // returns null when valid else the validation object 
    // in this case... selectedItems 
    // passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.selectedItem) ? null : {
            dropdownError: {
                valid: false,
            },
        };
    }


    //*************************************************************


    private selectItem(item: any): boolean {
        if (!this.isReadOnly) {
            this.selectedItem = item;
            this.onChangeCallback(item);
            this.onChange.emit(item);
        }
        return false;
    }

    private get selectedItemText(): string {
        let t: string = this.isReadOnly ? "" : "Select";

            if (undefined !== this.selectedItem && undefined !== this.textField) {
                let si: any = this.selectedItem[this.textField];
                if (undefined !== si && null !== si) { t = si; }
            }

        return t;
    }

}
