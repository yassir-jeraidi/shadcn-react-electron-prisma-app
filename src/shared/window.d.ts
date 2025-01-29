import { API } from '@preload/index'
import { electronAPI } from '@electron-toolkit/preload'

export declare global {
  interface Window {
    api: API
    electron: electronAPI
  }
}
