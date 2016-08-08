export class Genre{
    constructor(data:any){
        this.Id = data.Id;
        this.Title = data.GenreName;
    }
    Id:number;
    Title:string;
}
