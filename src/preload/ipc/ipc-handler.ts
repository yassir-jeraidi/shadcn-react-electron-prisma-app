import { userService, postService } from '@preload/services'
import { Post, User } from '@prisma/client'
import { generateIpcHandlerService } from '@preload/lib/utils'

export const ipcHandler = (): void => {
  generateIpcHandlerService<User>('users', userService)
  generateIpcHandlerService<Post>('posts', postService)
}
