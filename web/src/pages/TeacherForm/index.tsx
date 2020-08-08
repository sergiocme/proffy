import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

// Components
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// Services
import api from '../../services/api';

// Assets
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
  const history = useHistory();

  // States
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [schedules, setSchedules] = useState([{
    week_day: 0,
    from: '',
    to: '',
  }]);

  // Functions
  const handleNewSchedule = useCallback(() => {
    setSchedules((state) => [...state, { week_day: 0, from: '', to: '' }]);
  }, []);

  const handleScheduleChange = useCallback(({ position, field, value}) => {
    setSchedules((state) => {
      return state.map((schedule, index) => {
        if (index === position) {
          return { ...schedule, [field]: value };
        }
        return schedule;
      });
    });
  }, []);

  const handleRegisterData = useCallback(() => {
    api.post('/leassons', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: schedules,
    }).then(() => {
      alert('Cadastro realizado com sucesso.');
      history.push('/');
    });
  }, [
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedules,
    history,
  ]);

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer ensinar."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
          <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
          <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
          <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => setBio(e.target.value)} />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input name="cost" label="Custo da sua aula por hora" value={cost} onChange={(e) => setCost(e.target.value)} />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={handleNewSchedule}>
              + Novo horário
            </button>
          </legend>

          {schedules.map((schedule, index) => (
            <div key={schedule.week_day} className="schedule-item">
              <Select
                name="week_day"
                label="Dia da semana"
                value={schedule.week_day}
                onChange={(e) => handleScheduleChange({ position: index, field: 'week_day', value: e.target.value })}
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
                name="from"
                label="Das"
                type="time"
                value={schedule.from}
                onChange={(e) => handleScheduleChange({ position: index, field: 'from', value: e.target.value })}
              />
              <Input
                name="to"
                label="Até"
                type="time"
                value={schedule.to}
                onChange={(e) => handleScheduleChange({ position: index, field: 'to', value: e.target.value })}
              />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button" onClick={handleRegisterData}>Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
