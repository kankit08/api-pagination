import React from 'react'
import { USER_PER_PAGE } from '../utils/constants';
import User from './User';
import { v4 as uuidv4 } from 'uuid';

const Users = ({users, page}) => {
    const startIndex = ( page - 1 ) * USER_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
    return selectedUsers.map(user => (
        <User user={user} key={uuidv4()}/>
    ))
}

export default Users
