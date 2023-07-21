import React, { useCallback, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export function RegistrationPage() {
  // навигация по страницам
  const navigate = useNavigate();

  const singInClick = () => {
    navigate("/login");
  };
  // регистрация пользователя
  let auth = useAuth();

  const [form, setValue] = useState(() => ({
    name: "",
    email: "",
    password: "",
  }));

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let registration = useCallback((e) => {
    e.preventDefault();
    auth.registrationUser(form);
  }, [auth, form])

  if (auth.user) {
    return <Navigate to={"/"} />;
  }

  console.log(form)

  return (
    <form className={style.main}>
      <h2 className="text text_type_main-large mb-6">Регистрация</h2>
      <div className="mb-6">
        <Input
          value={form.name}
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          onChange={onChange}
        />
      </div>
      <div className="mb-6">
        <Input
          value={form.email}
          type={"email"}
          placeholder={"E-mail"}
          name={"email"}
          onChange={onChange}
        />
      </div>
      <div className="mb-6">
        <Input
          value={form.password}
          type={"password"}
          placeholder={"Пароль"}
          name={"password"}
          icon="ShowIcon"
          onChange={onChange}
        />
      </div>
      <Button
        onClick={registration}
        htmlType="button"
        type="primary"
        size="medium"
      >
        Зарегистрироваться
      </Button>
      <div className={`mt-20 ${style.footer}`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистированы?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={singInClick}
        >
          Войти
        </Button>
      </div>
    </form>
  );
}
