import React from 'react'
import { InfoTitle, InfoValue } from './styles';

function CardInformationItem({ title, value = 0 }) {
  return (
    <div>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </div>
  )
}

export default CardInformationItem;