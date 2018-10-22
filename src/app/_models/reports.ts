export class Report {
    public invoiceId: number;
    public vendorCode: string;
    public vendorName: string;
    public createdDate: Date;
    public action: string;
    public createdBy: string;
    public userId: number;
    public entityId: number;
    constructor( {invoiceId,vendorCode,vendorName,createdDate,action,
        createdBy,userId,entityId})
        {
            this.invoiceId = invoiceId;
            this.vendorCode = vendorCode;
            this.vendorName= vendorName;
            this.createdDate = createdDate;
            this.action = action;
            this.createdBy = createdBy;
            this.userId = userId;
            this.entityId = entityId;
        }
}