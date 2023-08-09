import axios from 'axios'
import { headersForJSON, headersForImages } from '../helpers/http'
import { serverBaseUrl, serverUsersEndpoint } from '../helpers/env'

export class UserService {
  constructor() {
    this.client = axios.create({
      baseURL: `${serverBaseUrl}${serverUsersEndpoint}`,
      ...headersForJSON,
      withCredentials: true,
    })
  }

  async getCurrentUser() {
    const requestInfo = {
      url: `/`,
    }
    const response = await this.client.get(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }

  async updateInfo({ updatedFields }) {
    const requestInfo = {
      url: `/`,
      body: updatedFields,
    }
    const response = await this.client.put(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }

  async uploadProfilePic({ image }) {
    const requestInfo = {
      url: `/profilePic`,
      body: { file: image },
      config: headersForImages,
    }
    const response = await this.client.post(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }

  async changePassword({ currentPassword, newPassword }) {
    const requestInfo = {
      url: `/changePassword`,
      body: {
        currentPassword,
        newPassword,
      },
    }
    const response = await this.client.put(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }

  async deleteAccount() {
    const requestInfo = {
      url: `/deleteAccount`,
    }
    const response = await this.client.delete(requestInfo)
    if (response.data.error) throw new Error(response.data)
    if (response.status === 500)
      throw new Error({
        message: 'There was a problem in the system, please try again later',
      })
    return response.data
  }
}
