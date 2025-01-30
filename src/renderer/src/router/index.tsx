import { createHashRouter } from 'react-router-dom'
import GuestLayout from '@/layout/guest-layout'
import UsersList from '@/components/users-list'
import PostsList from '@/components/posts-list'

export const router = createHashRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <UsersList />
      },
      {
        path: 'posts',
        element: <PostsList />
      }
    ]
  }
])
