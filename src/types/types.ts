export type InitialStatePostsDataType = {
    likes: number,
    id: number, 
    message: string
}

export type CurrentProfileContactsType = {
    github?: string,
    vk?: string,
    facebook?: string,
    instagram?: string,
    twitter?: string,
    website?: string,
    youtube?: string,
    mainLink?: string
}

export type CurrentProfilePhotosType = {
    small: string,
    large: string
}

export type CurrentProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: CurrentProfileContactsType,
    photos: CurrentProfilePhotosType | any
}

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: CurrentProfilePhotosType
}