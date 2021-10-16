import { createContext } from 'react'

export const LinkContext = createContext({
  getLinkHandler: () => {},
  sendLinkHandler: () => {},
  cardsInfo: [],
})