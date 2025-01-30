import { PrismaClient } from '@prisma/client'
import { app } from 'electron'
import path from 'path'

export const prisma = !app.isPackaged
  ? new PrismaClient()
  : new PrismaClient({
      datasources: {
        db: {
          url: `file:${path.join(process.resourcesPath, 'prisma/dev.db')}`
        }
      }
    })
