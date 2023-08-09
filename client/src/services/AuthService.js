import axios from 'axios'
import { headersForJSON } from '../helpers/http'
import { serverBaseUrl, serverAuthEndpoint } from '../helpers/env'

export class AuthService {
  constructor() {
    this.client = axios.create({
      baseURL: `${serverBaseUrl}${serverAuthEndpoint}`,
      ...headersForJSON,
      withCredentials: true,
    })
  }

  async signin({ email, password }) {
    const requestInfo = {
      url: `/signin`,
      body: { email, password },
    }
    const response = await this.client.post(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }

  async signup({ username, email, password }) {
    const requestInfo = {
      url: `/signup`,
      body: {
        username,
        email,
        password,
      },
    }
    const response = await this.client.post(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }

  async signout() {
    const requestInfo = {
      url: `/signout`,
    }
    const response = await this.client.post(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }
}
