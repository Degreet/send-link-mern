import { Card } from './Card/Card'
import { useContext, useMemo } from 'react'
import { LinkContext } from '../contexts/LinkContext'

export const Cards = () => {
  const { getLinkHandler, sendLinkHandler } = useContext(LinkContext)

  const cardsInfo = useMemo(() => ([
    {
      id: '1',
      title: 'Открыть ссылку',
      placeholder: 'Вставьте код',
      btnText: 'Открыть',
      onClick: getLinkHandler,
    },
    {
      id: '2',
      title: 'Отправить ссылку',
      placeholder: 'Вставьте ссылку',
      btnText: 'Отправить',
      onClick: sendLinkHandler,
    }
  ]), [getLinkHandler, sendLinkHandler])

  return (
    <div className="row cards">
      {cardsInfo.map((cardInfo) => (
        <div className="col s12 m6" key={cardInfo.id}>
          <Card {...cardInfo} />
        </div>
      ))}
    </div>
  )
}