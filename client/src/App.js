import React from 'react'
import { Cards } from './components/Cards'
import { useLinks } from './hooks/links'
import { LinkContext } from './contexts/LinkContext'

export default function App() {
  const links = useLinks()

  return (
    <LinkContext.Provider value={links}>
      <Cards />
    </LinkContext.Provider>
  )
}
