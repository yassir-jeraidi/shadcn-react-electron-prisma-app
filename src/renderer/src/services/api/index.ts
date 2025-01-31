import { api } from '@/lib/utils'
import { CrudService } from '@shared/types'
import { Post, User, Prisma } from '@prisma/client'

const createCrudService = <T, CreateInput, UpdateInput>(
  resource: string
): CrudService<T, CreateInput, UpdateInput> => ({
  getAll: (): Promise<T[]> => api[resource].getAll(),
  getOne: (id: number): Promise<T | null> => api[resource].getOne(id),
  save: (data: CreateInput): Promise<T> => api[resource].save(data),
  update: (id: number, data: UpdateInput): Promise<T | null> => api[resource].update(id, data),
  delete: (id: number): Promise<T | null> => api[resource].delete(id)
})

export const userService = createCrudService<User, Prisma.UserCreateInput, Prisma.UserUpdateInput>(
  'users'
)
export const postService = createCrudService<Post, Prisma.PostCreateInput, Prisma.PostUpdateInput>(
  'posts'
)
