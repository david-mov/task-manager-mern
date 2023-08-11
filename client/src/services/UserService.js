import axios from 'axios'
import { jsonHeaders, imageSendingHeaders } from '../helpers/consts/httpHeaders'
import { env } from '../helpers/consts/env'

const { serverBaseUrl, serverUsersEndpoint } = env

export class UserService {
  constructor() {
    this.client = axios.create({
      baseURL: `${serverBaseUrl}${serverUsersEndpoint}`,
      ...jsonHeaders,
      withCredentials: true,
    })
  }

  async getCurrentUser() {
    try {
      const requestInfo = {
        method: 'get',
        url: `/`,
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

  async updateInfo({ updatedFields }) {
    try {
      const requestInfo = {
        method: 'put',
        url: `/`,
        data: updatedFields,
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

  async uploadProfilePic({ image }) {
    try {
      const requestInfo = {
        method: 'post',
        url: `/profilePic`,
        data: { file: image },
        ...imageSendingHeaders,
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

  async changePassword({ currentPassword, newPassword }) {
    try {
      const requestInfo = {
        method: 'put',
        url: `/changePassword`,
        data: {
          currentPassword,
          newPassword,
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

  async deleteAccount() {
    try {
      const requestInfo = {
        method: 'delete',
        url: `/deleteAccount`,
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
