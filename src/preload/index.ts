import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { channels } from '@shared/constants'
import { User } from '@prisma/client'

type UserService = {
  getAll: () => Promise<User[]>
  getOne: (id: string) => Promise<User | undefined>
}

export type API = {
  users: UserService
}

const api: API = {
  users: {
    getAll: () => ipcRenderer.invoke(channels.users.getAll),
    getOne: (id: string) => ipcRenderer.invoke(channels.users.getOne, id)
  }
}

// Expose the APIs to the renderer process
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron = electronAPI
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.api = api
}
