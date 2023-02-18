import React from 'react';
import { NavLink } from 'react-router-dom';
import { Components } from '..';
import Logo from "../../assets/images/logo/insta.png";
import cls from "../../assets/styles/sidebar/Sidebar.module.scss"
import { SidebarList } from '../../utils/List';

export default function Sidebar() {

  const bottomList = SidebarList[5];

  return (
    <section className={cls.sidebar_wrapper}>
      <div className={cls.sidebar_wrapper_content}>
        <Components.Image src={Logo}/>

        <section className={cls.sidebar_wrapper_content_list}>
          <ul>
            {SidebarList.slice(0,5).map(item => (
              <li>
                <NavLink>
                  <item.icon />
                  {item.caption}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul>
            <li>
              <NavLink>
                <bottomList.icon />
                {bottomList.caption}
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}
