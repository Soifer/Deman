import { Genre } from '../../vod/models/genre';
export class CrudBtn {
    private _type: string;
    public Id: number;
    public Color: string;
    public CurentInput: Genre;
    public get Type(): string {
        return this._type;
    };
    public set Type(type) {
        switch (type) {
            case "hide":
                this._type = "glyphicon glyphicon-eye-open";
                break;
            case "unHide":
                this._type = "glyphicon glyphicon-eye-close";
                break;
            case "edit":
                this._type = "glyphicon glyphicon-edit";
                break;
            case "create":
                this._type = "glyphicon glyphicon-plus";
                break;
            case "confirmEdit":
                this._type = "glyphicon glyphicon-refresh";
                break;
            default:
                break;
        }
    };
    constructor(type: string, color: string) {
        this.Type = type;
        this.Color = color;
    }
}

