//pegar elementos
const erro = c('.erro');
const modal = c('.modal-fim');
const pontos = c('pontos')

//montar o tabuleiro--------------------------
const tabua = document.createElement('div');
tabua.classList.add('tabuleiro');
c('main').appendChild(tabua);
for (var i = 0; i < 9; i++) {
	let casa = document.createElement('div');
	casa.classList.add('casa');
	casa.setAttribute('data-key',i);
	tabua.appendChild(casa);
}

//envetos-----------------------------------
let casas = cll('.casa');
casas.forEach((casa)=>{
	casa.addEventListener('click',()=>{
		colocarSinal(casa,erro);
	});
});

erro.addEventListener('click',(e)=>{
	erro.style.display = 'none';
});

c('.btn-recomecar').addEventListener('click',()=>{
	modal.style.display = 'none';
	padrao();
	jogador.forEach((j,i)=>{
		j.pts = 0;
		c(`.jog${i} span`).innerText = j.pts;
	});

});

c('.btn-desforra').addEventListener('click',()=>{
	modal.style.display = 'none';
	iJ = (iJ==0)?0:1;
	padrao();
});

//function---------------------------------
function modalInfo(result,nome) {
	if (result == 'velha') {
		c('.text-change').innerHTML = `&#x1F62C; Deu Velha`;
	}else if (result == 'vencedor') {
		c('.text-change').innerHTML = `&#x1f3c6; Para o Jogador de ${nome}`;
	}
	
	modal.style.display = 'flex';
}

function pontuar(sel,pts) {
	c(sel).querySelector('span').innerText = pts;
}