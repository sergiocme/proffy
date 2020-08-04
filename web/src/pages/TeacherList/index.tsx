import React from 'react';
import './styles.css';

// Components
import PageHeader from '../../components/PageHeader';

// Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="hour">Hora</label>
            <input type="text" id="hour" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars3.githubusercontent.com/u/50501020?s=460&u=9d5d8f9983825b04cd47c1925693a27593c63404&v=4"
              alt="Avatar do Sérgio Carvalho"
            />

            <div>
              <strong>Sérgio Carvalho</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiastas das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
