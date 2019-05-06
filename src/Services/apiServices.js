import {
  API_LINK,
  USERS_BACKEND,
} from '../Constants/Constants'

export class TodoAPIHelper {
  static getTodoList = async () => {
    const listData = await fetch(API_LINK)
    return listData.json();
  }

  static getUsers = async () => {
    const userList = await fetch(USERS_BACKEND);
    return userList.json();
  }
}

export default TodoAPIHelper;