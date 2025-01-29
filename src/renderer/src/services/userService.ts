import { api } from '@/lib/utils'
import { User } from '@prisma/client'

export const userService = {
  getAll: (): Promise<User[]> => api.users.getAll(),
  getOne: (id: number): Promise<User | undefined> => api.users.getOne(id)
}
