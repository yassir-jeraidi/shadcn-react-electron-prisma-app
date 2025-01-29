import { User } from '@prisma/client'
import { prisma } from '@preload/utils/prisma'

export const userService = {
  getAll: (): Promise<User[]> => prisma.user.findMany(),
  getOne: async (id: number): Promise<User | null> =>
    await prisma.user.findUnique({ where: { id } })
}
