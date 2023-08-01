import React from "react";
import headerStyles from "../AppHeader/AppHeader.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export default function AppHeader() {
  const auth: any = useAuth()
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={`${headerStyles.menu}`}>
        <NavLink
          to={{ pathname: "/" }}
          className={`${headerStyles.link} ml-5 mr-5 mb-4 mt-4`}
        >
          <BurgerIcon type="primary" />
          <p className="ml-2 text text_type_main-default">Конструктор</p>
        </NavLink>
        <NavLink
          to={'#'}
          className={`${headerStyles.link} ml-5 mr-5 mb-4 mt-4`}
        >
          <ListIcon type="primary" />
          <p className="ml-2 text text_type_main-default">Лента заказов</p>
        </NavLink>
        <div className={`${headerStyles.logo}`}>
          <Logo />
        </div>
        <NavLink
          to={auth.user ? { pathname: "/profile" } : { pathname: "/login" }}
          className={`${headerStyles.link} ml-5 mr-5 mb-4 mt-4`}
        >
          <ProfileIcon type="primary" />
          <p className="ml-2 text text_type_main-default">Личный кабинет</p>
        </NavLink>
      </nav>
    </header>
  );
}
