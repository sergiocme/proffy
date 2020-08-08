import React, { useState, useCallback } from 'react';
import './styles.css';

// Services
import api from '../../services/api';

// Components
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

function TeacherList() {
  // State
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  // Functions
  const handleSearchTeachers = useCallback(() => {
    api.get('/leassons', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    }).then(({data}) => {
      setTeachers(data);
    });
  }, [subject, weekDay, time]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '1', label: 'Domingo' },
              { value: '2', label: 'Segunda' },
              { value: '3', label: 'Terça' },
              { value: '4', label: 'Quarta' },
              { value: '5', label: 'Quinta' },
              { value: '6', label: 'Sexta' },
              { value: '7', label: 'Sabado' },
            ]}
          />

          <Input
            name="hour"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="button" onClick={handleSearchTeachers}>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => <TeacherItem key={teacher.id} teacher={teacher} />)}
      </main>
    </div>
  );
}

export default TeacherList;
