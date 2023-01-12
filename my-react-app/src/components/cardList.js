import React from 'react'
import Card from'./cards'

const cardList = ({data}) => {
  return (
    <div>
        {data.map((el) => (
            <div key = {el.id}>
                <Card  key = {el.id} coffee = {el} />
            </div>
        )) }
    </div>
  )
}

export default cardList