const serviceKeys = ['users', 'posts']

type Channel = {
  getAll: string
  getOne: string
  save: string
  update: string
  delete: string
}

export const channels = serviceKeys.reduce((acc, serviceKey) => {
  acc[serviceKey] = {
    getAll: `${serviceKey}:getAll`,
    getOne: `${serviceKey}:getOne`,
    save: `${serviceKey}:save`,
    update: `${serviceKey}:update`,
    delete: `${serviceKey}:delete`
  } as Channel
  return acc
}, {})
