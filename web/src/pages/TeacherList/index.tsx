import React from 'react';
import './styles.css';

// Components
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />

          <Input name="week_day" label="Dia da Semana" />

          <Input name="hour" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
