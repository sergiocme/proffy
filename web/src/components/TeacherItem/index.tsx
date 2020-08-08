import React from 'react';
import './styles.css';

// Assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.avatar}
          alt=""
        />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
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
