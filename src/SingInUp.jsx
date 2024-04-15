import './SingInUp.css';

export default function SingInUp({closeModal}) {
//     const container = document.querySelector('#container');
//     const signUpButton = document.querySelector('#signUp');
// const signInButton = document.querySelector('#signIn');

//     signUpButton.addEventListener('click', () =>
// container.classList.add('right-panel-active'))

// signInButton.addEventListener('click', () =>
// container.classList.remove('right-panel-active'))
    return (
        <div className="modal">
            <div className="container" id="container">
                <span className="close" onClick={closeModal} title="Close Modal">×</span>
                <div className="form-container sign-up-container">
                    <form>
                        <h2>Регистрация</h2>
                        <div className="social-container">
                            <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a>
                            <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>или используйте вашу почту для регистрации</span>
                        <div className="has-validation">
                            <input type="text" name="name" className="form-control" placeholder="Имя" />
                        </div>
                        <div className="has-validation">
                            <input type="email" name="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            autoComplete="email" required className="form-control" placeholder="Почта" />
                            <div className="invalid-tooltip">
                                Пожалуйста, введите валидный Email.
                            </div>
                        </div>
                        <div className="has-validation">
                            <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            required title="Example: 'Example123!'" className="form-control" autoComplete="current-password" placeholder="Пароль" />
                            <i className="far fa-eye" id="togglePassword" name="togglePassword"></i>
                            <div className="invalid-tooltip">
                                Пожалуйста, введите пароль формата: "Example123!".
                            </div>
                        </div>
                        <button type="submit" className="btn" >Зарегистрироваться</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h2>Вход</h2>
                        <div className="social-container">
                            <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href=" " className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a>
                            <a href=" " className="social"target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>или используйте ваш аккаунт</span>
                        <div className="has-validation">
                            <input type="email" className="form-control" pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"//^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                            name="email" required title="Example: 'emample@ex.ru'" placeholder="Почта" />
                            <div className="invalid-tooltip">
                                Пожалуйста, введите валидный Email.
                            </div>
                        </div>
                        <div className="has-validation">
                            <input type="password" className="form-control" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            name="password" required title="Example: 'Example123!'" placeholder="Пароль" />
                            <i className="far fa-eye" id="togglePassword" name="togglePassword"></i>
                            <div className="invalid-tooltip">
                                Пожалуйста, введите пароль формата: "Example123!".
                            </div>
                        </div>
                        <a className="password-reset" href=" " target="_blank" rel="noopener noreferrer">Забыли пароль?</a>
                        <button type="submit" className="btn">Войти</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h2>С возвращением!</h2>
                            <p>Войдите чтобы увидеть новые предложения</p>
                            <button className="ghost" id="signIn">Войти</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h2>Добро пожаловать!</h2>
                            <p>Присоединитесь к нам и получите доступ к акциям и скидкам</p>
                            <button className="ghost" id="signUp">Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}