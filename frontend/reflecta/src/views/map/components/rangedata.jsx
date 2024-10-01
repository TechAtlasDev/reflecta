import React, { useState } from "react";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rango de fechas seleccionado: ${startDate} a ${endDate}`);
  };

  return (
    <div className='my-5'>
      <h2 className='text-lg font-bold mb-4'>
        📅 Selecciona un Rango de Fechas
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex flex-row justify-between'>
          <div>
            <label className='label font-medium' htmlFor='start-date'>
              Fecha de Inicio
            </label>
            <input
              type='date'
              id='start-date'
              className='input input-bordered'
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div>
            <label className='label font-medium' htmlFor='end-date'>
              Fecha de Fin
            </label>
            <input
              type='date'
              id='end-date'
              className='input input-bordered'
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DateRangePicker;
