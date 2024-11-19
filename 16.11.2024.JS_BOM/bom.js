let alarmInterval;

function setAlarm() {
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const second = parseInt(document.getElementById('second').value);
    const alarmStatus = document.getElementById('alarmStatus');

    if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
        alarmStatus.textContent = "Zəhmət olmasa, düzgün vaxt daxil edin!";
        alarmStatus.style.color = 'red';
        return;
    }

    const now = new Date();
    const alarmTime = new Date(now);
    alarmTime.setHours(hour, minute, second, 0);

    if (alarmTime < now) {
        alarmTime.setDate(now.getDate() + 1);
    }

    alarmStatus.textContent = `Alarm saatı: ${alarmTime.toLocaleTimeString()}`;
    alarmStatus.style.color = 'green';

    alarmInterval = setInterval(function() {
        const currentTime = new Date();
        if (currentTime >= alarmTime) {
            clearInterval(alarmInterval);
            alert("🚨 Alarm! Oyanma vaxtı gəldi! 🚨");
            alarmStatus.textContent = "Alarm çaldı!";
            alarmStatus.style.color = 'red';
        }
    }, 1000);
}

function resetAlarm() {
    clearInterval(alarmInterval);
    document.getElementById('hour').value = '';
    document.getElementById('minute').value = '';
    document.getElementById('second').value = '';
    document.getElementById('alarmStatus').textContent = "Alarm sıfırlandı!";
    document.getElementById('alarmStatus').style.color = 'black';
}
