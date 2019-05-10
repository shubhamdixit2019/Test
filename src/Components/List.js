<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae

const List = (props) => (
  <ol>
    {
      props.items.map((item, index) => {
        return (
          <li key={index}>
            {item}
<<<<<<< HEAD
            <button onClick={props.handleDelete(item)}>
=======
            <button onClick={props.handleDelete(index)}>
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
              X
            </button>
          </li>
        )
      })
    }
  </ol>
<<<<<<< HEAD
)

export default List
=======
);

export default List;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
