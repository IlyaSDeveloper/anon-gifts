import React, { useState, useCallback } from 'react';
import './SingInUp.css';

const SocialLinks = () => (
  <div className="social-container">
    <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
    <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a>
    <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
  </div>
);

const FormInput = ({ type, name, pattern, placeholder, required, title, tooltip }) => (
  <div className="has-validation">
    <input
      type={type}
      name={name}
      pattern={pattern}
      required={required}
      className="form-control"
      placeholder={placeholder}
      title={title}
      autoComplete={type}
    />
    {tooltip && <div className="invalid-tooltip">{tooltip}</div>}
  </div>
);

const SignInForm = () => (
  <form>
    <h2>Вход</h2>
    <SocialLinks />
    <span>или используйте ваш аккаунт</span>
    <FormInput
      type="email"
      name="email"
      pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
      placeholder="Почта"
      required
      title="Example: 'emample@ex.ru'"
      tooltip="Пожалуйста, введите валидный Email."
    />
    <FormInput
      type="password"
      name="password"
      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      placeholder="Пароль"
      required
      title="Example: 'Example123!'"
      tooltip="Пожалуйста, введите пароль формата: 'Example123!'."
    />
    <a className="password-reset" href=" " target="_blank" rel="noopener noreferrer">Забыли пароль?</a>
    <button type="submit" className="btn">Войти</button>
  </form>
);

const SignUpForm = () => (
  <form>
    <h2>Регистрация</h2>
    <SocialLinks />
    <span>или используйте вашу почту для регистрации</span>
    <FormInput type="text" name="name" placeholder="Имя" />
    <FormInput
      type="email"
      name="email"
      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      placeholder="Почта"
      required
      tooltip="Пожалуйста, введите валидный Email."
    />
    <FormInput
      type="password"
      name="password"
      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      placeholder="Пароль"
      required
      title="Example: 'Example123!'"
      tooltip="Пожалуйста, введите пароль формата: 'Example123!'."
    />
    <button type="submit" className="btn">Зарегистрироваться</button>
  </form>
);

export default function SignInUp({ onClose }) {
  const [signForm, setSignForm] = useState(false);
  const toggleSignForm = useCallback(() => setSignForm(prev => !prev), []);

  return (
    <div className="modal">
      <div className={`container ${signForm ? 'right-panel-active' : ''}`} id="container">
        <span className="close" onClick={onClose} title="Close Modal">×</span>
        <div className="form-container sign-up-container">
          <SignUpForm />
        </div>
        <div className="form-container sign-in-container">
          <SignInForm />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2>С возвращением!</h2>
              <p>Войдите чтобы увидеть новые предложения</p>
              <button className="ghost" onClick={toggleSignForm}>Войти</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2>Добро пожаловать!</h2>
              <p>Присоединитесь к нам и получите доступ к акциям и скидкам</p>
              <button className="ghost" onClick={toggleSignForm}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}