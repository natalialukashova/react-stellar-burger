import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./register.module.css";

export function RegistrationPage() {
  return (
    <>
      <main className={style.main}>
        <h2 className="text text_type_main-large mb-6">Регистрация</h2>
        <div className="mb-6">
          <Input type={"text"} placeholder={"Имя"} name={"name"} />
        </div>
        <div className="mb-6">
          <Input type={"email"} placeholder={"E-mail"} name={"e-mail"} />
        </div>
        <div className="mb-6">
          <Input
            type={"password"}
            placeholder={"Пароль"}
            name={"password"}
            icon="ShowIcon"
          />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
        <div className={`mt-20 ${style.signIn}`}>
          <p className="text text_type_main-default">Уже зарегистированы?</p>
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </div>
      </main>
    </>
  );
}
