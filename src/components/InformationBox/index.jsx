import React from 'react'
import { InfoTitle, InfoValue } from './InformationBoxElements';

function InformationBox({ title, value = 0 }) {
  return (
    <div>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </div>
  )
}

export default InformationBox;