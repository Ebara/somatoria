function somatoria(valor) {
	var soma = 0;
	var x = parseInt(valor) - 1;

	for(x; x >= 0; x--) {
		if (x % 5 == 0) {
			soma += x;
		} else if (x % 3 == 0) {
			soma += x;
		}
	}

	alert(soma);
}

//alterar valor para teste
somatoria (10.5);