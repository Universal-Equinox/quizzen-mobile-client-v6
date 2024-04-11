export interface CommentType {
    id: string
    text: string
    status: string
    questionId: string
    user: CommentUser
    images: string[]
    createdDate: string
}

export interface CommentUser {
    id: string
    userName: string
    firstName: string
    lastName: string
    profileImg: string
}
