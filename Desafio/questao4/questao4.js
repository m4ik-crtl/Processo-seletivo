var SP = 67836.43;
var RJ = 36678.66;
var MG = 29229.88;
var ES = 27165.48;
var Outros = 19849.53;


valorTotal = 
SP +
RJ +
MG +
ES +
Outros;

PorcentagemSP = (SP / faturamentoTotal) * 100;
PorcentagemRJ = (RJ / faturamentoTotal) * 100;
PorcentagemMG = (MG / faturamentoTotal) * 100;
PorcentagemES = (ES / faturamentoTotal) * 100;
PorcentagemOutros = (Outros / faturamentoTotal) * 100;

function calcularPorcentam() {
    let resposta = document.getElementById("resposta");
  
    resposta.innerHTML = "SP - " + Math.round(porcentamSp * 100) / 100 + "%<br>";
    resposta.innerHTML += "RJ - " + Math.round(porcentamRj * 100) / 100 + "%<br>";
    resposta.innerHTML += "MG - " + Math.round(porcentamMg * 100) / 100 + "%<br>";
    resposta.innerHTML += "ES - " + Math.round(porcentamEs * 100) / 100 + "%<br>";
    resposta.innerHTML +=
      "Outros - " + Math.round(porcentamOutros * 100) / 100 + "%";
  }