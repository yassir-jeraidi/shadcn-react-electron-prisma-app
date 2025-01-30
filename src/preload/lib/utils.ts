import { CrudService } from '@shared/types'
import { ipcMain, ipcRenderer } from 'electron'
import { channels } from '@shared/constants'

export const generateIpcHandlerService = <T>(serviceKey: string, service: CrudService<T>): void => {
  ipcMain.handle(channels[serviceKey].getAll, async () => {
    return await service.getAll()
  })

  ipcMain.handle(channels[serviceKey].getOne, async (_event, id: number) => {
    return await service.getOne(id)
  })

  ipcMain.handle(channels[serviceKey].save, async (_event, data: T) => {
    return service.save(data)
  })

  ipcMain.handle(channels[serviceKey].update, async (_event, id: number, data: T) => {
    return service.update(id, data)
  })

  ipcMain.handle(channels[serviceKey].delete, async (_event, id: number) => {
    return service.delete(id)
  })
}

export const generateApiService = <T>(serviceKey: string): CrudService<T> => ({
  getAll: () => ipcRenderer.invoke(channels[serviceKey].getAll),
  getOne: (id: number) => ipcRenderer.invoke(channels[serviceKey].getOne, id),
  save: (data: T) => ipcRenderer.invoke(channels[serviceKey].save, data),
  update: (id: number, data: T) => ipcRenderer.invoke(channels[serviceKey].update, id, data),
  delete: (id: number) => ipcRenderer.invoke(channels[serviceKey].delete, id)
})
