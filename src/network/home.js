import {request} from './request'

export function getHomeMasterData(){
  return request(
    {
      url: '/home/multidata'
    }
  )
}
