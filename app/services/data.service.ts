import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import {
    StateTypeModel, CampaignCodeTypeModel, AdminTypeModel
} from '../models/types.model';



@Injectable()
export class ApiDataService {

    constructor(private http: Http) {

    }

    public getStatesTypes(): Observable<StateTypeModel[]> {
        return this.http.get("app/files/states.json")
            .map((res: any) => res.json())
            .catch((error: Response | any, caught: Observable<any>): Observable<any> => {
                console.log(error);
                return error;
            });
    }

    public getCampaignCodeTypes(): Observable<CampaignCodeTypeModel[]> {
        return this.http.get("app/files/campaign.json")
            .map((res: any) => res.json())
            .catch((error: Response | any, caught: Observable<any>): Observable<any> => {
                console.log(error);
                return error;
            });
    }

    public getAdminTypes(): Observable<AdminTypeModel[]> {
        return this.http.get("app/files/admins.json")
            .map((res: any) => res.json())
            .catch((error: Response | any, caught: Observable<any>): Observable<any> => {
                console.log(error);
                return error;
            });
    }
}