import './Card.css'
import { useCallback, useState } from 'react'

export const Card = ({ title, placeholder, btnText, onClick }) => {
  const [value, setValue] = useState('')

  const onClickHandler = useCallback(() => {
    onClick(value, setValue)
  }, [onClick, value])

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{title}</span>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="card-action">
        <button
          className="waves-effect waves-light btn"
          onClick={onClickHandler}
        >{btnText}</button>
      </div>
    </div>
  )
}