export interface PostType {
    id: string
    title: string
    description: string
    status: string
    createdDate: string
    user: PostUserType
    tags: PostTagsType
    images: string[]
    answerCount: number
    voteCount: number
}

export interface PostUserType {
    id: string
    userName: string
    firstName: string
    lastName: string
    profileImg: string
}

export interface PostTagsType {
    exam: string
    subject: string
    topic: string
}
