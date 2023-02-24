import React from 'react';
import { NavLink } from 'react-router-dom';
import { Components } from '..';
import { SidebarList } from '../../utils/List';
import OptionModal from './OptionModal';

import Logo from "../../assets/images/logo/insta.png";
import cls from "../../assets/styles/sidebar/Sidebar.module.scss"

export default function Sidebar() {
  const [showOption , setShowOption] = React.useState(false);

  const bottomList = SidebarList[7];

  const handleOption = () => setShowOption(prev => !prev); 

  return (
    <section className={cls.sidebar_wrapper}>
      <div className={cls.sidebar_wrapper_content}>
        <Components.Image src={Logo}/>

        <section className={cls.sidebar_wrapper_content_list}>
          <ul>
            {SidebarList.slice(0,7).map(item => (
              <li key={item.id}>
                <NavLink className={({isActive}) => isActive ? cls.active : ""} to={item.route}>
                  <item.icon />
                  {item.caption}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul>
            <li onClick={handleOption}>
              <NavLink>
                <bottomList.icon />
                {bottomList.caption}
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
      <OptionModal isOpen={showOption}/>
    </section>
  )
}
