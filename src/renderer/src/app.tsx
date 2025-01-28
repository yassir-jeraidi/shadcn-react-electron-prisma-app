import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { User } from '@prisma/client'

function App(): JSX.Element {
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async (): Promise<void> => {
    const users: User[] = await window.api.users.getAll()
    console.log(users)
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {users.map((user) => (
                <div key={user.id}>{user.name}</div>
              ))}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default App
