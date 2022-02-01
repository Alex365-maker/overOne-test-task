import * as React from 'react';
import { Link } from 'react-router-dom';
import db from '../db/db.json'

import {
Button
} from './stylesBots';

const Bots = (props) => {

    return (
        <>
            <Link to={"/"} style={{width:"132px"}}>
                <Button onClick={db.Id_Bot = 'all'}>All Users</Button>
            </Link>
            <p></p>
            {props.bots.map(bot => {
                return <>
                    <Link to={"/"} style={{width:"132px"}}>
                        <Button type="button" onClick={() => { db.Id_Bot = bot.id }}>{bot.name}</Button>
                    </Link>
                </>
            })
            }
        </>
    );
}
export default Bots;