import { ipcMain } from 'electron'
import { channels } from '@shared/constants'
import { usersApi } from './services/usersApi'

export const ipcHandler = (): void => {
  ipcMain.handle(channels.users.getAll, async () => {
    return await usersApi.getAll()
  })

  ipcMain.handle(channels.users.getOne, async (_event, id: string) => {
    return usersApi.getOne(id)
  })
}
