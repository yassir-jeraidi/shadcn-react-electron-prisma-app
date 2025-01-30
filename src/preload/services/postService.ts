import { Post } from '@prisma/client'
import { prisma } from '@preload/lib/prisma'
import { CrudService } from '@shared/types'

export const postService: CrudService<Post> = {
  getAll: (): Promise<Post[]> => prisma.post.findMany({ include: { author: true } }),
  getOne: (id: number): Promise<Post | null> => prisma.post.findUnique({ where: { id } }),
  save: (data: Post): Promise<Post> => prisma.post.create({ data }),
  update: (id: number, data: Post): Promise<Post> => prisma.post.update({ where: { id }, data }),
  delete: (id: number): Promise<Post> => prisma.post.delete({ where: { id } })
}
