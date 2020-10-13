window.onload = function() {
	const btnMas = document.querySelector('.mas')
	const btnMenos = document.querySelector('.menos')
	const body = document.querySelector('body')
	const top = document.querySelector('.top')
	const bottom = document.querySelector('.bottom')
	const mesa = document.querySelector('.mesa')

	let numeroSilla = 0

	btnMas.onclick = function() {
		const nuevaSilla = document.createElement('img')
		nuevaSilla.src = './material/silla.png'
		let clasesSilla = ''
		switch(numeroSilla) {
			case 0: 
				clasesSilla += 'primera '
			case 1:
			case 2:
				clasesSilla += 'arriba'
			break
			case 3:
				clasesSilla = 'lateral izquierda'
			break
			case 4:
				clasesSilla = 'lateral derecha'
			break
			case 5:
				clasesSilla += 'primera '
			case 6:
			case 7:
				clasesSilla += 'abajo'

		}

		if(clasesSilla != '') {
			nuevaSilla.className = clasesSilla + ' silla'
			switch(numeroSilla) {
				case 0:
					mesa.classList.remove('margenSup')
				case 1:
				case 2:
					body.insertBefore(nuevaSilla, top)
				break
				case 3:
					mesa.classList.remove('margenIzq')
					body.insertBefore(nuevaSilla, mesa)
				break
				case 4:
					body.insertBefore(nuevaSilla, bottom)
				break
				default:
					body.append(nuevaSilla)
			}
			numeroSilla++
		}
	}

	btnMenos.onclick = function() {
		if(numeroSilla > 0) {
			ultimaSilla = document.querySelectorAll('.silla')
			ultimaSilla = ultimaSilla[ultimaSilla.length - 1]
			body.removeChild(ultimaSilla)
			if(numeroSilla === 4) {
				mesa.classList.add('margenIzq')
			}
			if(numeroSilla === 1) {
				mesa.classList.add('margenSup')
			}
			numeroSilla--
		}
	}
}