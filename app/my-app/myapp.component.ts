﻿import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { ApiDataService } from '../services/data.service'
import { AppDataModel, TypesModel, StateTypeModel, AdminTypeModel, SubCampaignCodeTypeModel } from '../models/types.model';

@Component({
    selector: 'my-app',
    templateUrl: '/app/my-app/myapp.html'
})

export class MyAppComponent {

    public typesModel: TypesModel = new TypesModel();
    public dataModel: AppDataModel = new AppDataModel();

    private readOnly: boolean = false;

    private myAddressModel: string = "111 Main Street";

    constructor(private dataService: ApiDataService) {
        
    }
    

    ngOnInit() {
        this.loadTypesData();
    }

    private loadTypesData(): void {


        this.dataService.getStatesTypes().subscribe(
            data => { // success
                this.typesModel.StatesTypes = data;
            },
            error => { // error
                console.log(error);
            });


        this.dataService.getSubCampaignCodeTypes().subscribe(
            data => { // success
                this.typesModel.SubCampaignCodeTypes = data;

                if (undefined === this.dataModel.SubCampaignCodes) {
                    this.dataModel.SubCampaignCodes = new Array<SubCampaignCodeTypeModel>();
                }
  //              this.dataModel.SubCampaignCodes = this.typesModel.SubCampaignCodeTypes.filter(x => x.SubCampaignCodeTypeKey > 1);
            },
            error => { // error
                console.log(error);
            });

        this.dataService.getAdminTypes().subscribe(
            data => { // success
                this.typesModel.AdminTypes = data;

                this.dataModel.Admin = this.typesModel.AdminTypes[0];

                this.dataModel.Admins = this.dataModel.Admins.concat(this.typesModel.AdminTypes);
            },
            error => { // error
                console.log(error);
            });
    }



    private changeItem(event: any): void {
        console.log(event);
    }


    private logForm(value: any) {
        console.log(value);
    }
}
