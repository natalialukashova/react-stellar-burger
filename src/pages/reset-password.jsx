import React, { useCallback, useState } from "react";
import style from "./style.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export function ResetPassword() {
  // навигация по страницам
  const navigate = useNavigate();

  const singInClick = () => {
    navigate("/login");
  };

  // сброс пароля
  let auth = useAuth();

  const [form, setValue] = useState({ password: "", token: "" });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let reset = useCallback(
    (e) => {
      e.preventDefault();
      auth.resetUserPassword(form);
    },
    [auth, form]
  );

  if (auth.user) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className={style.main}>
      <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
      <div className="mb-6">
        <Input
          value={form.password}
          type={"password"}
          placeholder={"Введите новый пароль"}
          name={"password"}
          icon="ShowIcon"
          onChange={onChange}
        />
      </div>
      <div className="mb-6">
        <Input
          value={form.token}
          type={"text"}
          placeholder={"Введите код из письма"}
          name={"token"}
          onChange={onChange}
        />
      </div>
      <Button htmlType="button" type="primary" size="medium" onClick={reset}>
        Сохранить
      </Button>
      <div className={`mt-20 ${style.footer}`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
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
