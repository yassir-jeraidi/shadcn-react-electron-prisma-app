import { Post, User } from '@prisma/client'

export type CrudService<T> = {
  getAll: () => Promise<T[]>
  getOne: (id: number) => Promise<T | null>
  save: (data: T) => Promise<T>
  update: (id: number, data: T) => Promise<T | null>
  delete: (id: number) => Promise<T | null>
}

export type API = {
  users: CrudService<User>
  posts: CrudService<Post>
}
