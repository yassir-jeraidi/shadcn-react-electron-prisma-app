'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { userService } from '@/services/api'
import { useParams } from 'react-router-dom'
import { User } from '@prisma/client'
import { redirectTo } from '@/lib/utils'

const schema = z.object({
  id: z.number().optional(),
  name: z
    .string({
      required_error: 'Name is required'
    })
    .min(3, 'Name is too short'),
  email: z.string().email()
})

interface CreateEditUserProps {
  isCreate: boolean
}

export default function CreateEditUser({ isCreate }: CreateEditUserProps): React.JSX.Element {
  const { id } = useParams() as { id: string }

  const getUser = async (): Promise<User | null> => {
    return await userService.getOne(+id)
  }

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: async () => {
      if (!isCreate) {
        const user = await getUser()
        if (user) {
          return {
            id: user.id,
            name: user.name ?? '',
            email: user.email
          }
        }
      }
      return {
        name: '',
        email: ''
      }
    }
  })

  const onSubmit = async (values: z.infer<typeof schema>): Promise<void> => {
    try {
      if (isCreate) {
        await userService.save(values)
        toast.success('User created successfully')
      } else {
        await userService.update(values.id!, {
          name: values.name,
          email: values.email
        })
        toast.success('User updated successfully')
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      redirectTo('/')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>We&apos;ll never share your email with anyone else.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
