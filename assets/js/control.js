//inicializar as variaveis
const c = (sel)=>document.querySelector(sel);
const cll = (sel)=>document.querySelectorAll(sel);
const VELHA = 'velha';
const VENCE = 'vencedor';

const jogador = [
	{
		nome:'&#x2B55;',
		sinal:'o',
		pts:0
	},
	{
		nome:'&#x274C;',
		sinal:'x',
		pts:0
	}
];
let iJ = 0;
const vitoria = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]

];
let numJogada = 0;
let vencedor = false;
let fimDojogo = false;

//----
function colocarSinal(casa,erro) {
	if (!fimDojogo) {
		casaC = casa.classList.value;
		if(!(casaC == 'casa o' || casaC == 'casa x')){
			casa.classList.add(jogador[iJ].sinal);
			verificar(casas);
			numJogada++;
			if (numJogada == 9 && !vencedor) {
				fimDojogo = true;
				modalInfo(VELHA);
			}
			iJ = (iJ==0)?1:0;
		}else{
			erro.style.display = 'flex';
		}
	}
}

function verificar(casas) {
	for(let num of vitoria){
		let pos1 = casas[num[0]].classList.value;
		let pos2 = casas[num[1]].classList.value;
		let pos3 = casas[num[2]].classList.value;

		if(pos1 !='casa'){
			if (pos1 == pos2) {
				if (pos2 == pos3) {
					vencedor = true;
					modalInfo(VENCE,jogador[iJ].nome);
					jogador[iJ].pts++
					pontuar(`.jog${iJ}`,jogador[iJ].pts);
					fimDojogo = true;
				}
			}
		}
	}

	return fimDojogo;
}

function padrao(){
	numJogada = 0
	vencedor = false
	fimDojogo = false
	casas.forEach((casa)=>{
		casa.classList.remove('x');
		casa.classList.remove('o');
	});
}