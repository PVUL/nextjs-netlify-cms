import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

function List({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  )
}

export default List
