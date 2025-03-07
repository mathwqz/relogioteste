function updateClock() {
    const now = new Date();
  
    // Formata horas, minutos e segundos com dois dígitos
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0').slice(0, 2); // Pega os dois primeiros dígitos dos milissegundos
  
    // Formata a data separada em caixas
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
  
    // Define os dias da semana em português
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayName = daysOfWeek[now.getDay()];
  
    // Atualiza os elementos na página
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('milliseconds').textContent = milliseconds;
    document.getElementById('day-number').textContent = day;
    document.getElementById('month-number').textContent = month;
    document.getElementById('year-number').textContent = year;
    document.getElementById('day').textContent = dayName;
  }
  
  // Atualiza o relógio imediatamente e a cada 10ms para os milissegundos
  updateClock();
  setInterval(updateClock, 10);