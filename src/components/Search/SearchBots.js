import React, { useState } from 'react';
import Bots from "../Bots/Bots";
import db from "../db/db.json"

import {
    InputSearch
  } from './styleSearch'

let result = [];

const SearchBots = () => {
    const [value, setValue] = useState(db.bots)

    const Search = (e) => {
        if (!e) {
            return setValue(db.bots)
        }

        result = db.bots.filter(card =>
            card.name.toLowerCase().includes(e.toLowerCase())
        );
        setValue(result)
    }

    return (
        <>
            <InputSearch type='text' onChange={(e) =>
                Search(e.target.value)
            } />
            <Bots bots={value} />
        </>
    );
}
export default SearchBots;