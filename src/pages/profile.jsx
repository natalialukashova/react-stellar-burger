import React, { useCallback, useEffect, useState } from "react";
import style from "./profile.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { api } from "../Api/Api";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [form, setValue] = useState(() => ({
    name: "",
    email: "",
    password: "",
  }));

  const [nameInputState, setNameInputState] = useState({ disabled: true });
  const [loginInputState, setLoginInputState] = useState({ disabled: true });
  const [passwordInputState, setPasswordInputState] = useState({
    disabled: true,
  });

  useEffect(() => {
    const user = api
      .getUserRequest()
      .then((res) => res.json())
      .then((data) =>
        setValue({
          name: data.user.name,
          email: data.user.email,
          password: data.user.password || "",
        })
      );
  }, []);

  const onClickForUpdate = useCallback(
    (e) => {
      e.preventDefault();
      auth.updateUser(form);
    },
    [auth, form]
  );

  const onClickForLogout = useCallback((e) => {
    e.preventDefault();
    auth.signOut();
  }, []);

  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user]);

  return (
    <main className={style.profile}>
      <div className={style.fillings}>
        <div>
          <p className={`${style.p} text text_type_main-medium`}>Профиль</p>
          <p
            className={`${style.p} text text_type_main-medium text_color_inactive`}
          >
            История заказов
          </p>
          <p
            className={`${style.p} text text_type_main-medium mb-20 text_color_inactive`}
            onClick={onClickForLogout}
          >
            Выход
          </p>
          <p
            className={`${style.p} text text_type_main-default text_color_inactive`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div className={`${style.inputs} ml-15`}>
          <div className="mb-6">
            <Input
              value={form.name}
              type={"text"}
              placeholder={"Имя"}
              name={"name"}
              icon={nameInputState.disabled ? "EditIcon" : "CurrencyIcon"}
              onIconClick={() => {
                setNameInputState({ disabled: !nameInputState.disabled });
              }}
              onChange={
                nameInputState.disabled
                  ? () => {}
                  : (e) => {
                      setValue({ ...form, name: e.target.value });
                    }
              }
            />
          </div>
          <div className="mb-6">
            <Input
              value={form.email}
              type={"email"}
              placeholder={"Логин"}
              name={"email"}
              icon={loginInputState.disabled ? "EditIcon" : "CurrencyIcon"}
              onIconClick={() => {
                setLoginInputState({ disabled: !loginInputState.disabled });
              }}
              onChange={
                loginInputState.disabled
                  ? () => {}
                  : (e) => {
                      setValue({ ...form, email: e.target.value });
                    }
              }
            />
          </div>
          <div className="mb-6">
            <Input
              value={form.password}
              type={"password"}
              placeholder={"Пароль"}
              name={"password"}
              icon={passwordInputState.disabled ? "EditIcon" : "CurrencyIcon"}
              onIconClick={() => {
                setPasswordInputState({
                  disabled: !passwordInputState.disabled,
                });
              }}
              onChange={
                passwordInputState.disabled
                  ? () => {}
                  : (e) => {
                      setValue({ ...form, password: e.target.value });
                    }
              }
            />
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={onClickForUpdate}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </main>
  );
}
