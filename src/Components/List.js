import React from 'react'

const List = (props) => (
  <ol>
    {
      props.items.map((item, index) => {
        return (
          <li key={index}>
            {item}
            <button onClick={props.handleDelete(item)}>
              X
            </button>
          </li>
        )
      })
    }
  </ol>
)

export default List
