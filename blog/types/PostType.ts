export interface PostIdType {
    id: number,
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
