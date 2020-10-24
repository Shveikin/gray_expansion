// console.log('test')
// alert(localStorage.getItem('gray-scale-app'))

function updateGrayScale98j31n8nd(){
	let storage = localStorage.getItem('gray-scale-app')
	if (storage){
		storage = JSON.parse(storage)
		if (location.href in storage.href)
			document.body.style.filter = `grayscale(${storage.href[location.href]}%)`
		else 
			document.body.style.filter = `grayscale(${storage.origins}%)`
	} else {
		document.body.style.filter = 'grayscale(100%)'
	}
}
updateGrayScale98j31n8nd()

function setGrayScale98j31n8nd(type, val){
	let storage
	switch (type) {
		case 'site':
			storage = localStorage.getItem('gray-scale-app')
			if (storage){
				storage = JSON.parse(storage)
				storage.origins = val
			} else {
				storage = {origins: val, href: []}
			}
			localStorage.setItem('gray-scale-app', JSON.stringify(storage))
			updateGrayScale98j31n8nd()
		break;
		case 'page':
			storage = localStorage.getItem('gray-scale-app')
			if (storage){
				storage = JSON.parse(storage)
				storage.href = Object.assign(storage.href, {[location.href]:val});
			} else {
				storage = {origins: 100, href: {[location.href]:val}}
			}
			localStorage.setItem('gray-scale-app', JSON.stringify(storage))
			updateGrayScale98j31n8nd()
		break;
	}
}