import { API } from 'src/shared/types'
import { electronAPI } from '@electron-toolkit/preload'

export declare global {
  interface Window {
    api: API
    electron: electronAPI
  }
}
