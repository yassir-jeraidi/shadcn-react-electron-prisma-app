import { User } from '@prisma/client'
import { prisma } from '@preload/lib/prisma'
import { CrudService } from '@shared/types'

export const userService: CrudService<User> = {
  getAll: (): Promise<User[]> => prisma.user.findMany(),
  getOne: (id: number): Promise<User | null> => prisma.user.findUnique({ where: { id } }),
  save: (data: User): Promise<User> => prisma.user.create({ data }),
  update: (id: number, data: User): Promise<User | null> =>
    prisma.user.update({ where: { id }, data }),
  delete: (id: number): Promise<User | null> => prisma.user.delete({ where: { id } })
}
