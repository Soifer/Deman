export class Icon {
    private _type: string;
    public Id: number;
    public Color: string;
    public get Type(): string {
        return this._type;
    };
    public set Type(type) {
        switch (type) {
            case "alert":
                this._type = "glyphicon glyphicon-exclamation-sign";
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

