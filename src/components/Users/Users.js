import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  Name,
  Photo,
  Button,
  Wrapper
} from './stylesUsers';

const Users = (props) => {

  return (
    <>
      <Link to={"/bots"} style={{width:"132px"}}>
        <Button>Bots</Button>
      </Link>
      {props.users.map(user => {
        return <Wrapper>
          <Photo src={user.avatarUrl} />
          <Name>{user.name}</Name>
          </Wrapper>
          
      })
      }
    </>
  );
}
export default Users;