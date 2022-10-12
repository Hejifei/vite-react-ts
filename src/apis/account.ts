import {get, isPlainObject} from 'lodash'

import {request} from '@/utils/request'

export async function fetchLogin(params: object): Promise<any> {
  const res = await request.post('/Account/CrossLogin', params)
  let data = get(res, 'data')

  if (!isPlainObject(data)) {
    data = {}
  }
  return data
}
