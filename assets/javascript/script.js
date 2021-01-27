//Estructura de datos mediante arreglos y objetos

let radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];
let traumatologia = [
  {
    HORA: "08:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECILAISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MACIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];
let dental = [
  {
    HORA: "08:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878879-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECILISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441128-0",
    PREVISION: "ISAPRE",
  },
];

let divRadiologia = document.getElementById('radiologia');
divRadiologia.innerHTML = `
    <p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>
    <p>Primera atención: ${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION} |
       Última atención: ${radiologia[radiologia.length - 1].PACIENTE} - ${radiologia[radiologia.length - 1].PREVISION}
    </p>`;

let divTraumatologia = document.getElementById('traumatologia');
divTraumatologia.innerHTML = `
    <p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>
    <p>Primera atención: ${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION} |
       Última atención: ${traumatologia[traumatologia.length - 1].PACIENTE} - ${traumatologia[traumatologia.length - 1].PREVISION}
    </p>`;

let divDental = document.getElementById('dentales');
divDental.innerHTML = `
    <p>Cantidad de atenciones dentales: ${dental.length}</p>
    <p>Primera atención: ${dental[0].PACIENTE} - ${dental[0].PREVISION} |
       Última atención: ${dental[dental.length - 1].PACIENTE} - ${dental[dental.length - 1].PREVISION}
    </p>`;

//console.log(dental[dental.length - 1])
//console.log(dental)