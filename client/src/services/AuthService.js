import axios from 'axios'
import { jsonHeaders } from '../helpers/consts/httpHeaders'
import { env } from '../helpers/consts/env'

const { serverBaseUrl, serverAuthEndpoint } = env

export class AuthService {
  constructor() {
    this.client = axios.create({
      baseURL: `${serverBaseUrl}${serverAuthEndpoint}`,
      ...jsonHeaders,
      withCredentials: true,
    })
  }

  async signin({ email, password }) {
    try {
      const requestInfo = {
        method: 'post',
        url: `/signin`,
        data: { email, password },
      }
      const response = await this.client(requestInfo)
      if (response.data.error) throw new Error(response.data)
      return response.data
    } catch (err) {
      return {
        error: true,
        message:
          err.errorMessage || 'Something went wrong! Please try again later.',
      }
    }
  }

  async signup({ username, email, password }) {
    try {
      const requestInfo = {
        method: 'post',
        url: `/signup`,
        data: {
          username,
          email,
          password,
        },
      }
      const response = await this.client(requestInfo)
      if (response.data.error) throw new Error(response.data)
      return response.data
    } catch (err) {
      return {
        error: true,
        message:
          err.errorMessage || 'Something went wrong! Please try again later.',
      }
    }
  }

  async signout() {
    try {
      const requestInfo = {
        method: 'post',
        url: `/signout`,
      }
      const response = await this.client(requestInfo)
      if (response.data.error) throw new Error(response.data)
      return response.data
    } catch (err) {
      return {
        error: true,
        message:
          err.errorMessage || 'Something went wrong! Please try again later.',
      }
    }
  }
}
