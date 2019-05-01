import React from 'react'

const BackendList = (props) => (
    <ol>
        {
            props.items.map((item, index) => {
                return (
                    <li key={index}>{item.name}                        
                        <button onClick={props.handleDelete(item.id)}>
                            X
                        </button>
                    </li>
                )
            })
        }
    </ol>
)

export default BackendList