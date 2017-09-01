
export class AppDataModel {

    public State: StateTypeModel;
    public SubCampaignCode: SubCampaignCodeTypeModel;
    public Admin: AdminTypeModel;


    public States: StateTypeModel[] = new Array<StateTypeModel>();
    public SubCampaignCodes: SubCampaignCodeTypeModel[] = new Array<SubCampaignCodeTypeModel>();
    public Admins: AdminTypeModel[] = new Array<AdminTypeModel>();

}




export class TypesModel {

    public StatesTypes: StateTypeModel[] = new Array<StateTypeModel>();
    public SubCampaignCodeTypes: SubCampaignCodeTypeModel[] = new Array<SubCampaignCodeTypeModel>();
    public AdminTypes: AdminTypeModel[] = new Array<AdminTypeModel>();

}



// Abstract to force inheritance!
abstract class BaseTypeModel {
    Id: number = 0;
    ShortName: string;
    LongName: string;
    ShortDesc: string;
    LongDesc: string;
    Comments: string;
    ActiveFlag: boolean = false;
    SortOrder?: number;
    ArchiveRow?: number;
}


export class StateTypeModel {
    Id: number = 0;
    StateCode: string;
    StateName: string;
}

export class SubCampaignCodeTypeModel extends BaseTypeModel {
    SubCampaignCodeTypeKey: number;
}

export class AdminTypeModel {
    AdminId: number = 0;
    AdministratorNBK: string;
    Administrator: string;
    ActiveFlag: boolean = false;
}