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
import { userService } from '@/services/userService'
import { channels } from '@shared/constants'

console.log(channels)

function App(): JSX.Element {
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async (): Promise<void> => {
    const users: User[] = await userService.getAll()
    setUsers(users)
  }

  const getUser = async (id: number): Promise<void> => {
    const user: User | undefined = await userService.getOne(id)
    setUsers([user as User])
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
              <Button onClick={() => getUser(2)}>Get One</Button>
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
