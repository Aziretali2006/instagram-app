import React from 'react';
import { Components } from '../../../components';
import UsersList from './UsersList';
import { Providers } from '../../../providers';

import cls from "../../../assets/styles/users/Users.module.scss";

export default function Users() {
  const { users } = Providers.useAuth();

  return (
    <Components.Container>
      <section className={cls.users_wrapper}>
        <div className={cls.users_wrapper_content}>
          <h4>Рекомендации</h4>

          <div className={cls.users_wrapper_content_usersInline}>
            {!users && <Components.Loader fullHeight={"50vh"}/>}
            
            {users?.map(item => <UsersList base={item}/>)}
          </div>
        </div>
      </section>
    </Components.Container>
  )
}
