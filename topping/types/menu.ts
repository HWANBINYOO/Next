export interface MenuProps{
    menu:string
}


export interface Propp{
    age: {
        confidence : number,
        value: string,
    }
    emotion: {
        confidence:number,
        value:string,
    }
    gender: {
        confidence:number,
        value: string,
    }
    landmark:any
    pose: {
        confidence:number,
        value: string,
    }

}