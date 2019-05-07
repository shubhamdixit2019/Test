import {
  API_LINK,
  USERS_BACKEND,
} from '../Constants/Constants'

export class TodoAPIHelper {
  static getTodoList = () => {
    return fetch(API_LINK).then(res => res.json())
  }

  static getUsers = () => {    
    return fetch(USERS_BACKEND).then(res => res.json())
  }


  static createUser = (term) => {
    fetch(USERS_BACKEND, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${term}`
    })
  }

  static deleteUser = (id) => {
    fetch(USERS_BACKEND, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `id=${id}`,
    })
  }

  static updateUser = (data) => {
    fetch(USERS_BACKEND, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${data.updatedValue}&id=${data.id}`,
    })
  }
}

export default TodoAPIHelper;