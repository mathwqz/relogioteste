let selectedTimeZone = 'default';
let lastSecond = "";

function updateClock() {
    const localNow = new Date();
    let now;
    
    if (selectedTimeZone === 'default') {
        now = localNow;
    } else {
        now = new Date(new Date().toLocaleString("en-US", { timeZone: selectedTimeZone }));
    }
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // milissegundos do tempo local pra suavidade na animação
    const milliseconds = localNow.getMilliseconds().toString().padStart(3, '0').slice(0, 2);
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayName = daysOfWeek[now.getDay()];
    
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('milliseconds').textContent = milliseconds;
    document.getElementById('day-number').textContent = day;
    document.getElementById('month-number').textContent = month;
    document.getElementById('year-number').textContent = year;
    document.getElementById('day').textContent = dayName;
    
    // efeito de desfoque somente na mudança de segundos
    if (seconds !== lastSecond) {
      const clockElement = document.querySelector('.clock');
      clockElement.classList.add('blur-effect');
      setTimeout(() => {
         clockElement.classList.remove('blur-effect');
      }, 150);
      lastSecond = seconds;
    }
}
  
updateClock();
setInterval(updateClock, 10);

// listener para alterar do fuso horário
document.getElementById('timezoneSelect').addEventListener('change', function(e) {
    selectedTimeZone = e.target.value;
});

// função para aplicar o tema
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }
}

// preferência de tema do usuário
let savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
  savedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  localStorage.setItem('theme', savedTheme);
}
applyTheme(savedTheme);

// listener para o botão de alternar tema
document.getElementById('themeToggle').addEventListener('click', function() {
  let currentTheme = localStorage.getItem('theme');
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});

// função para o botão "Doe"
document.getElementById('donateBtn').addEventListener('click', function() {
    const donationCard = document.getElementById('donationCard');
    if (donationCard.classList.contains('hidden')) {
        donationCard.classList.remove('hidden');
    } else {
        donationCard.classList.add('hidden');
    }
});
