import instance from "./instance";

export type DataLogin = {
  email: string,
  password: string,
  isRemember: boolean
}

export const login = (data: DataLogin) => instance.post('/login', data)