import React from 'react';
import './styles.css';

// Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
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
          Chamar
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
