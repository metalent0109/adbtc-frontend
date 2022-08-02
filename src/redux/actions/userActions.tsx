import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/api'

export const getUser = createAsyncThunk('user/getUser', async () => {
  const id = localStorage.getItem('jwtTokenId')
  try {
    const response = await api.get(`/user/${id}`)
    return response.data
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return message
  }
})

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
  const id = localStorage.getItem('jwtTokenId')
  try {
    const response = await api.get(`/users/${id}`)
    return response.data
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return message
  }
})

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({
    name,
    email,
    password,
  }: {
    name: string
    email: string
    password: string
  }) => {
    try {
      const data = {
        name,
        email,
        password,
      }
      const response = await api.post(`/signup`, {
        data,
      })
      console.log(response.data)
      if (response.data) {
        localStorage.setItem('jwtToken', JSON.stringify(response.data.token))
        localStorage.setItem(
          'jwtTokenId',
          JSON.stringify(response.data.token.id),
        )
      }
      return response.data
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  },
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const data = {
        email,
        password,
      }
      const response = await api.post(`/login`, {
        data,
      })
      console.log(response.data)
      if (response.data) {
        localStorage.setItem('jwtToken', JSON.stringify(response.data.token))
        localStorage.setItem(
          'jwtTokenId',
          JSON.stringify(response.data.token.id),
        )
      }
      return response.data
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  },
)

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async ({ email }: { email: string }) => {
    try {
      const data = {
        email,
      }
      const response = await api.post(`/resetpassword`, {
        data,
      })
      return response.data
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  },
)

export const registerWithGoogle = createAsyncThunk(
  'user/registerWithGoogle',
  async () => {
    try {
      const response = await api.post(`/registerWithGoogle`)
      console.log(response.data)
      if (response.data) {
        localStorage.setItem('jwtToken', JSON.stringify(response.data.token))
        localStorage.setItem(
          'jwtTokenId',
          JSON.stringify(response.data.token.id),
        )
      }
      return response.data
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  },
)
