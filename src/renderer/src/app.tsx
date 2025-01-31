import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import React from 'react'
import { Toaster } from '@/components/ui/sonner'

export default function App(): React.JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}
