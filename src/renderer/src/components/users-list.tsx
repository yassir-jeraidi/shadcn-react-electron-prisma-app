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
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: User) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
