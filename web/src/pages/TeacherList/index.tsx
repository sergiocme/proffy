import React from 'react';
import './styles.css';

// Components
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
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
