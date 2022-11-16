export interface celebrityProps{
    celebrity : {
        confidence:number,
        value:string,
    }
}

export interface FaceProps{
    age : {
        confidence : number,
        value: string,
    }
    emotion : {
        confidence:number,
        value: string,
    }
    gender : {
        confidence:number,
        value: string,
    }
    landmark:any,
    pose : any
    roi:any,
}

export interface expressionProps{
    value:string,
    Kvalue:string,
}