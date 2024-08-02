import { defineStore } from 'pinia'
import { ref } from 'vue'

//  token setToken removeToken
export const useTokenStore = defineStore(
  'token',
  () => {
    const accessToken = ref('')
    const setAccessToken = (newToken) => {
      accessToken.value = newToken
    }
    const removeAccessToken = () => {
      accessToken.value = ''
    }

    const refreshToken = ref('')
    const setRefreshToken = (newToken) => {
      refreshToken.value = newToken
    }
    const removeRefreshToken = () => {
      refreshToken.value = ''
    }

    return {
      accessToken,
      refreshToken,
      setAccessToken,
      removeAccessToken,
      setRefreshToken,
      removeRefreshToken
    }
  },
  {
    persist: true
  }
)

export const useUserStore = defineStore(
  'user',
  () => {
    const uerUid = ref('')
    const setUid = (uid) => {
      uerUid.value = uid
    }
    const removeUid = () => {
      uerUid.value = ''
    }

    return {
      uerUid,
      setUid,
      removeUid
    }
  },
  {
    persist: true
  }
)
