export enum Gender {
  male = "male",
  female = "female",
}

export enum WeddingStatus {
  single = "Single",
  relationship = "In a relationship",
}

export enum ParentStatus {
  yes = "yes",
  no = "no",
}

export enum Decisions {
  heart = "Heart",
  head = "Head",
  both = "Both",
}

export const singleProblems = [
  "I was unhappy with low things were going in my relationship",
  "I was unhappy with parts of my relationship, but some thing were working",
  "I was generally happy with my relationship",
  "I’ve never been in a relationship",
]

export const relationshipProblems = [
  "I’m very unhappy with how things are going in my relationship",
  "I’m unhappy with parts of my relationship, but some things are working well",
  "I’m generally happy in my relationship",
]

export interface UserState {
  gender?: Gender
  zodiac?: string
  weddingStatus?: WeddingStatus
  parent?: ParentStatus
  problem?: string
  decision?: Decisions
  birthdate?: Date
}
