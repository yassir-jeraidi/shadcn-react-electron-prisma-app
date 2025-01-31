import React from 'react'
import { Button } from '@/components/ui/button'
import { redirectTo } from '@/lib/utils'

export default function Page404(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl">Page not found</p>
        <Button variant="ghost" className="mt-4" onClick={() => redirectTo('/')}>
          Go back home
        </Button>
      </div>
    </div>
  )
}
