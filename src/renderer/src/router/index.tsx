import { createHashRouter } from 'react-router-dom'
import GuestLayout from '@/layout/guest-layout'
import UsersList from '@/components/users-list'
import PostsList from '@/components/posts-list'
import CreateEditUser from '@/components/forms/create-edit-user'
import Page404 from '@/components/page-404'

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
        path: 'users',
        element: <CreateEditUser isCreate={true} />
      },
      {
        path: 'users/:id',
        element: <CreateEditUser isCreate={false} />
      },
      {
        path: 'posts',
        element: <PostsList />
      }
    ]
  },
  {
    path: '*',
    element: <Page404 />
  }
])
