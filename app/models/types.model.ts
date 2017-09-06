
export class AppDataModel {

    public State: StateTypeModel;
    public CampaignCode: CampaignCodeTypeModel;
    public Admin: AdminTypeModel;


    public States: StateTypeModel[] = new Array<StateTypeModel>();
    public CampaignCodes: CampaignCodeTypeModel[] = new Array<CampaignCodeTypeModel>();
    public Admins: AdminTypeModel[] = new Array<AdminTypeModel>();

}




export class TypesModel {

    public StatesTypes: StateTypeModel[] = new Array<StateTypeModel>();
    public CampaignCodeTypes: CampaignCodeTypeModel[] = new Array<CampaignCodeTypeModel>();
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

export class CampaignCodeTypeModel extends BaseTypeModel {
    CampaignCodeTypeKey: number;
}

export class AdminTypeModel {
    AdminId: number = 0;
    AdministratorNBK: string;
    Administrator: string;
    ActiveFlag: boolean = false;
}