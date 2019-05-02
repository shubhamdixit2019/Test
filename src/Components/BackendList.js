import React, { Component } from 'react'

const BackendList = (props) => (
	<ol>
		{
			props.items.map((item, index) => {
				return (
					<li key={index}>
					  {/* < EditableList item={item}/> */}
						{item.name}
						<button onClick={props.handleDelete(item.id)}>
							X
            </button>
						<button>
							Edit
            </button>
					</li>
				)
			})
		}
	</ol>
)

// class EditableList extends Component{
	

// 	render(){
// 		return (
//         <div>
// 					{item.name}
// 						<button onClick={props.handleDelete(item.id)}>
// 							X
//             </button>
// 						<button>
// 							Edit
//             </button>
// 				</div>
// 		)
// 	}

	
// } 

export default BackendList