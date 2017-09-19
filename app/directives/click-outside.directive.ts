import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({ selector: '[click-outside]' })

export class ClickOutsideDirective {

    @Output() public onClickOutside: EventEmitter<any> = new EventEmitter<any>();

    private isActive : boolean = false;

    constructor(private elemRef: ElementRef) {
       
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public click(event: MouseEvent, targetElement: HTMLElement): void {

        if (!targetElement) {
            return;
        }
console.log(this.isActive);
        const clickedInside = this.elemRef.nativeElement.contains(targetElement);    
        if (this.isActive && !clickedInside) {
            this.onClickOutside.emit(event);
            this.isActive = false;
        } else if (!this.isActive && clickedInside){
            this.isActive = true;
        }
    }
}