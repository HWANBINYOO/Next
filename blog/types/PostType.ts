export interface PostIdType {
    postId: number,
    userId:number
	isMine : boolean,
    title: string,
    content: string,
    tags: string[],
	imageUrl: string,
	comments: [
        {
            id: number,
            isMine: boolean,
            comment: string,
            user: {name: string, imageUrl: string, id: number}
        }
      ]
  }