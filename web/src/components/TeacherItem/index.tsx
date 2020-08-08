import React, { useCallback } from 'react';
import './styles.css';

// Services
import api from '../../services/api';

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
  // Functions
  const handleNewConnection = useCallback(() => {
    api.post('/connections', { user_id: teacher.id });
  }, [teacher]);

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
        <a href={`https://wa.me/${teacher.whatsapp}`} target="_black" onClick={handleNewConnection}>
          <img src={whatsappIcon} alt="WhatsApp" />
          Chamar
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
