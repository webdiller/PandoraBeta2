import React from "react";
import { Link } from "react-router-dom";

import "./Footer.sass";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__lists">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Карта сайта
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Часто задаваемые вопросы
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Список услуг
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Исполнители
              </Link>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Сотрудничество
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                обратная связь
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Юридические документы
              </Link>
            </li>
          </ul>

          <ul className="footer__list footer__list_contacts">
            <li className="footer__list-item">
              <Link
                to="mailto:lawyermaster@info.com"
                className="footer__list-link"
              >
                lawyermaster@info.com
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="tel:+74952223366" className="footer__list-link">
                +7 495 222 33 66
              </Link>
            </li>
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Новости
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                О проекте
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="#" className="footer__list-link">
                Инвесторам
              </Link>
            </li>
          </ul>

          <p className="footer__copy">Pandora 2020</p>
        </div>
      </div>
    </footer>
  );
}
