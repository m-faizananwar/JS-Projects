const endDate = "Friday 30 August 2024";

document.getElementById("end-date").innerText = endDate;

const clock = () => {
    const now = new Date();
    document.getElementById("days").value = now.getDay(); // Corrected method call and property
    document.getElementById("hours").value = now.getHours(); // Corrected method call and property
    document.getElementById("minutes").value = now.getMinutes(); // Corrected method call
    document.getElementById("seconds").value = now.getSeconds(); // Corrected method call
console.log(now.getDay());
}

setInterval(clock, 1000);