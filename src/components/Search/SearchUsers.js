import React, { useState } from 'react';
import Users from "../Users/Users";
import db from "../db/db.json"

import {
  InputSearch
} from './styleSearch'

let res = [];

const SearchUsers = () => {

  const checkBotId = (id) => {

    if (id == "all")
      return res = db.users
      res = db.users.filter(e => {
      return e.bots == id;
    })
  }

  checkBotId(db.Id_Bot);

  const [value, setValue] = useState(res)

  const Search = (e) => {
    if (!e) {
      return setValue(res)
    }

    setValue(res.filter(card =>
      card.name.toLowerCase().includes(e.toLowerCase())
    ))
    
  }

  return (
    <>



      <InputSearch type='text' onChange={(e) =>
        Search(e.target.value)
      } />
      <Users users={value} />
    </>
  );
}
export default SearchUsers;