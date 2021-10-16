import { useCallback } from 'react'
import axios from 'axios'

export const useLinks = () => {
  const getLinkHandler = useCallback(async (code) => {
    try {
      const { data } = await axios.get(`/link/${code}`)
      if (!data) return
      window.open(data.link)
    } catch (e) {
      console.error(`can't get link info`, e)
    }
  }, [])

  const sendLinkHandler = useCallback(async (link, setValue) => {
    try {
      const { data } = await axios.post(`/link/add`, { link })
      if (!data) return
      setValue(data.code)
    } catch (e) {
      console.error(`can't send link`, e)
    }
  }, [])

  return { getLinkHandler, sendLinkHandler }
}