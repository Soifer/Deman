
export class CrudBtn {
    private _type: string;
    public Id: number;
    public get Type(): string {
        console.log("set");
        return this._type;
    };
    public set Type(type): string {
        console.log("get: " + type);
        switch (type) {
            case "hide":
                this._type = "glyphicon glyphicon-eye-close";
                break;
            case "unHide":
                this._type = "glyphicon glyphicon-eye-open";
                break;
            case "edit":
                this._type = "glyphicon glyphicon-edit";
                break;
            case "create":
                this._type = "glyphicon glyphicon-plus";
                break;
            default:
                break;
        }
    };

};


}

