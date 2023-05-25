import React from "react";
import headerStyles from "../AppHeader/AppHeader.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={`${headerStyles.menu}`}>
        <div className={`${headerStyles.link} ml-5 mr-5 mb-4 mt-4`}>
          <BurgerIcon type="primary" />
          <p className="ml-2 text text_type_main-default">Конструктор</p>
        </div>
        <div className={`${headerStyles.link} ml-5 mr-5 mb-4 mt-4`}>
          <ListIcon type="primary" />
          <p className="ml-2 text text_type_main-default">Лента заказов</p>
        </div>
        <div className={`${headerStyles.logo}`}>
          <Logo />
        </div>
        <div className={`${headerStyles.link} ml-5 mr-5 mb-4 mt-4`}>
          <ProfileIcon type="primary" />
          <p className="ml-2 text text_type_main-default">Личный кабинет</p>
        </div>
      </nav>
    </header>
  );
}
