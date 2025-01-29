import { ipcMain } from 'electron'
import { channels } from '@shared/constants'
import { userService } from '@preload/services/userService'

export const ipcHandler = (): void => {
  ipcMain.handle(channels.users.getAll, async () => {
    return await userService.getAll()
  })

  ipcMain.handle(channels.users.getOne, async (_event, id: number) => {
    return userService.getOne(id)
  })
}
