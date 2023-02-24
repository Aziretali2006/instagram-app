import React from 'react';
import { Components } from '../../../components';
import NoneAvatar from "../../../assets/images/profile/NoneAvatar.jpg";
import { Providers } from '../../../providers';
import { Link, useParams } from 'react-router-dom';

import cls from "../../../assets/styles/profile/Profile.module.scss";
import { Layout } from '../../../services/path';

function Profile() {
  const { user , users} = Providers.useAuth();
  const { id } = useParams();
  const [currentUser , setCurrentUser] = React.useState(null);
  const [avatar , setAvatar] = React.useState("");

  React.useEffect(() => {
    if(id) {
      const findUser = users?.find(item => item.id === parseInt(id));
      setCurrentUser(findUser)
    } else {
      setCurrentUser(user)
    }
  }, [id , user , users])

  React.useEffect(() => {
    if(!currentUser?.avatar) {
      setAvatar(NoneAvatar)
    } else {
      setAvatar(currentUser?.avatar)
    }
  }, [currentUser]);

  if(!currentUser) return <Components.Loader fullHeight={"50vh"}/>

  function renderProfileButton() {
    if(id) {
      return <button className={cls.profile_follow}>Подписаться</button>
    } else {
      return <button>Редактировать профиль</button>
    }
  }

  return (
    <Components.Container>
      <section className={cls.profile_wrapper}>
        <section className={cls.profile_wrapper_top}>
          <div>
            <label htmlFor="file">
              <Components.Image src={avatar}/>
              <input type="file" id="file"/>
            </label>
          </div>

          <div>
            <section className={cls.profile_wrapper_top_name}>
              <p>{currentUser?.first_name} {currentUser?.last_name}</p>
              {renderProfileButton()}
            </section>
            <section className={cls.profile_wrapper_top_follow}>
              <ul>
                <li>
                  0 публикаций
                </li>
                <li>
                  <Link to={"/subs/followers"}>
                    {currentUser?.subscribers} подписчики
                  </Link>
                </li>
                <li>
                  <Link to={"/subs/following"}>
                    {currentUser?.subscriptions} подписок
                  </Link>
                </li>
              </ul>
            </section>
            <section className={cls.profile_wrapper_top_login}>
              <h4>{currentUser?.username}</h4>
            </section>
            <section className={cls.profile_wrapper_top_bio}>
              <p>{currentUser?.bio}</p>
            </section>
          </div>
        </section>
      </section>
    </Components.Container>
  )
}

export default Profile; 