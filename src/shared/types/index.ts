import { Post, User, Prisma } from '@prisma/client'

export type CrudService<T, CreateInput, UpdateInput> = {
  getAll: () => Promise<T[]>
  getOne: (id: number) => Promise<T | null>
  save: (data: CreateInput) => Promise<T>
  update: (id: number, data: UpdateInput) => Promise<T | null>
  delete: (id: number) => Promise<T | null>
}

export type API = {
  users: CrudService<User, Prisma.UserCreateInput, Prisma.UserUpdateInput>
  posts: CrudService<Post, Prisma.PostCreateInput, Prisma.PostUpdateInput>
}
