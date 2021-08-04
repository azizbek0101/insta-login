import React, { useRef, useState } from "react";
import './Form.css';
import Logo from '../images/840px-Instagram_logosvg.png'

function FormFn() {
    const SiteContent ={
        uz:{
            textP: "Do'stlaringiz rasm va videolarini tomosha qilish uchun ro'yhatdan o'ting",
            firstNamePh: "Ism",
            lastNamePh: "Familiya",
            mailPh: "E-mail",
            passPh: "Parol",
            btnText: "Ro'yhatdan o'tish",
            btnLogin: "Kirish",
            warnText: "rozisiz",
            mode: {
                lightMode: "Kunduzgi rejim",
                darkMode: "Tungi rejim",
            }
        },
        en:{
            textP: "Sign up to show photos and videos your friends",
            firstNamePh: "First Name",
            lastNamePh: "Last Name",
            mailPh: "E-mail",
            passPh: "Password",
            btnText: "Sign Up",
            btnLogin: "Sign In",
            mode: {
                lightMode: "Light Mode",
                darkMode: "Dark Mode",
            },
            warnText: "are you rozi"
        },
        ru:{
            textP: "Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.",
            firstNamePh: "Имя",
            lastNamePh: "Фамилия",
            mailPh: "Адрес эл. почты",
            passPh: "Пароль",
            btnText: "Регистрация",
            btnLogin: "Войти",
            mode: {
                lightMode: "День",
                darkMode: "Ночь",
            },
            warnText: "Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie."
        }
    }

    const [lang, setLang] = useState("uz")
    const [mode, setMode] = useState("lightMode")

    const blockRef = React.useRef(null)
    const textRef = React.useRef(null)
    const formRef = React.useRef(null)

    const modeBtnRef = React.useRef(null)

    return(
        <>
        <div ref={blockRef} className="block">
        <header
        className="site-header">
        <select
        className="lang-select"
         defaultValue={lang}
         onChange={(evt) =>{
             setLang(evt.target.value)
         }}
         >
            <option value="uz" >O'zbek</option>
            <option value="en" >English</option>
            <option value="ru" >Русский</option>
        </select>
        <button
            ref={modeBtnRef}
            onClick={(e) =>{
                blockRef.current.classList.toggle("dark-block")
                textRef.current.classList.toggle("dark-text")
                formRef.current.classList.toggle("dark-reg-form")
                if (textRef.current.classList.contains("dark-text")) {
                    modeBtnRef.current.textContent = SiteContent[lang].mode.darkMode
                }else{
                    modeBtnRef.current.textContent = SiteContent[lang].mode.lightMode

                }
                

            }}
        >{SiteContent[lang].mode.lightMode}</button>

        </header>
        
        {/* Logotip */}

        <a 
        className="logo-link"
        href="#">
            <img
            className="logo-img"
            src={Logo} alt="" />
        </a>

        {/* Heading */}


        {/* Form Registration */}
        <form className="reg-form" ref={formRef} action="#">
            <p className="form-text" ref={textRef}>{SiteContent[lang].textP}</p>
            <input
            className="first-name-input"
            type="text"
            placeholder= {SiteContent[lang].firstNamePh}
            />
            <input
            className="last-name-input"
            type="text"
            placeholder={SiteContent[lang].lastNamePh}
            />
            <input
            className="email-input"
            type="email"
            placeholder={SiteContent[lang].mailPh}
            />
            <input
            className="pass-input"
            type="password"
            placeholder={SiteContent[lang].passPh}
            />
            <button
            className="reg-btn"
            type="submit"
            >{SiteContent[lang].btnText}</button>
            <p className="warn-text">
                {SiteContent[lang].warnText}
            </p>
        </form>

        <div className="btm">
        <button>{SiteContent[lang].btnLogin}</button>
        </div>
        </div>
        
        </>
    )
    
}

export default FormFn