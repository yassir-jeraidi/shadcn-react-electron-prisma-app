import { prisma } from '../utils/prisma'
import { User } from '@prisma/client'

export const usersApi = {
  getAll: (): Promise<User[]> => prisma.user.findMany(),
  getOne: async (id: string): Promise<User | null> =>
    await prisma.user.findUnique({ where: { id } })
}
