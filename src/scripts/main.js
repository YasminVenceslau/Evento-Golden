AOS.init();

const dataDoEvento = new Date('jun, 26 2025 20:30:00')
const tempoAteOEvento = dataDoEvento.getTime();

const atualizaAutomatico = setInterval(function(){
    const dataDeHoje = new Date().getTime();

const distancia = tempoAteOEvento - dataDeHoje;

const horasPorDia = 1000 * 60 * 60 *24
const horasPorhoras = 1000 * 60 * 60
const horasPorMinutos = 1000 * 60

const dia = Math.floor(distancia/ horasPorDia)
const horas = Math.floor((distancia % horasPorDia ) / horasPorhoras)
const minutos = Math.floor ((distancia % horasPorhoras) / horasPorMinutos)
const segundo = Math.floor ((distancia%horasPorMinutos)/ 1000)

document.getElementById("diaDoEvento").innerHTML= (`<p>${dia} dias, ${horas} horas,</p> <p>${minutos} minutos e ${segundo} segundos </p><p>para começar</p>`)
}, 1000);
