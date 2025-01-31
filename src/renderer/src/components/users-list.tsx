import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody
} from '@/components/ui/table'
import { User } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { userService } from '@/services/api'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function UsersList(): React.JSX.Element {
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async (): Promise<void> => {
    const users = await userService.getAll()
    setUsers(users as User[])
  }

  useEffect(() => {
    ;(async (): Promise<void> => await getUsers())()
  }, [])

  return (
    <Table className="w-full">
      <TableCaption>
        A list of all the users in the system. You can edit or delete them from here.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: User) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="flex gap-2 text-right">
              <Link to={`/users/${user.id}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Button variant="destructive">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
