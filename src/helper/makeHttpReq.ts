import { APP } from './APP'
import { getUserData } from './getUserData'

export type HttpVerbType = 'POST' | 'PUT' | 'GET' | 'DELETE' | 'OPTIONS'

/**
 *
 * @param endPoint
 * @param method
 * @param input
 * @returns
 */
export function makeHttpReq<TInput, TResponse>(
  endPoint: string,
  method: HttpVerbType,
  input?: TInput
) {
  return new Promise<TResponse>(async (resolve, reject) => {
    try {
      const userData=getUserData()
      const res = await fetch(`${APP.laravelApiBaseURL}/${endPoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+userData?.token
        },
        body: JSON.stringify(input)
      })
      const data: TResponse = await res.json()

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
