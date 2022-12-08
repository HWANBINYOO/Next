export interface commentType {
    id: number,
    isMine: boolean,
    comment: string,
    user: {name: string, imageUrl: string, id: number}
}