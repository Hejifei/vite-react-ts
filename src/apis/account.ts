import {get} from 'lodash'

import {request} from '@/utils/request'

export async function fetchLogin(params: object): Promise<any> {
  const res = await request.post('/Account/CrossLogin', params, {
  })
  // const res = await request.post('RightsManagement/GetMenuByUser', params, {})
  const data = get(res, 'data')

  // if (!isPlainObject(data)) {
  //   data = {}
  // }
  return data
}
