import React from 'react';
import './styles.css';

// Components
import PageHeader from '../../components/PageHeader';

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
    </div>
  );
}

export default TeacherList;
