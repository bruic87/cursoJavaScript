var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]

var data_atual = new Date();

var mes = data_atual.getMonth();

mes = meses[mes];

console.log(`O mês atual é ${mes}`);

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("E estamos no Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("E estamos no Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("E estamos no Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("E estamos na Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}