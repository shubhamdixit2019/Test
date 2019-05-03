import React, { Component } from 'react'


class BackendList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  };

  onChange = (event) => {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <ol>
        {
          this.props.items.map((item, index) => {
            return (
              <li key={item.id}>   {/* previously key={index} but changed
              for code optimisation */}
                {
                  (this.props.editId === item.id) ?
                    <div>
                      <form onSubmit=
                        {this.props.onSubmit(
                          {
                            updatedValue: this.state.term, id: item.id
                          })}>
                        <input
                          onChange={this.onChange} />
                        <button
                          onClick={
                            this.props.onSubmit(
                              {
                                updatedValue: this.state.term, id: item.id
                              })}>
                          Submit Changes
				                </button>
                      </form>
                      <button onClick={this.props.handleDelete(item.id)}>
                        X
                       </button >
                      <button onClick={this.props.handleEdit(item.id)}  >
                        Edit
                      </button></div>
                    :
                    <div>
                      {item.name}
                      <button onClick={this.props.handleDelete(item.id)}>
                        X
                      </button >
                      <button onClick={this.props.handleEdit(item.id)}  >
                        Edit
                      </button>
                    </div>
                }
              </li>
            )
          })
        }
      </ol>
    )
  }
}

export default BackendList