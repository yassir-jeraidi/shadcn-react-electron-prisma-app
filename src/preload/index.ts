import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { User } from '@prisma/client'
import { channels } from '@shared/constants'

type UserService = {
  getAll: () => Promise<User[]>
  getOne: (id: number) => Promise<User | undefined>
}

export type API = {
  users: UserService
}

const api: API = {
  users: {
    getAll: () => ipcRenderer.invoke(channels.users.getAll),
    getOne: (id: number) => ipcRenderer.invoke(channels.users.getOne, id)
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
