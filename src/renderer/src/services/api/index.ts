import { api } from '@/lib/utils'
import { CrudService } from '@shared/types'
import { User, Post } from '@prisma/client'

const createCrudService = <T>(resource: string): CrudService<T> => ({
  getAll: (): Promise<T[]> => api[resource].getAll(),
  getOne: (id: number): Promise<T | null> => api[resource].getOne(id),
  save: (data: T): Promise<T> => api[resource].save(data),
  update: (id: number, data: T): Promise<T | null> => api[resource].update(id, data),
  delete: (id: number): Promise<T | null> => api[resource].delete(id)
})

export const userService = createCrudService<User>('users')
export const postService = createCrudService<Post>('posts')
