import { API } from '@shared/types'
import { generateApiService } from '@preload/lib/utils'
import { Post, User } from '@prisma/client'

export const api: API = {
  users: generateApiService<User>('users'),
  posts: generateApiService<Post>('posts')
}
