import { User } from '@prisma/client'
import { prisma } from '../utils/prisma'

export const usersApi = {
  getAll: (): Promise<User[]> => prisma.user.findMany(),
  getOne: async (id: number): Promise<User | null> =>
    await prisma.user.findUnique({ where: { id } })
}
