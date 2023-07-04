
function fetchData(){
	fetch("https://dummyjson.com/products")
	.then((response) => {
		return response.json()
	})
	.then((result) => {
		console.log(result.products)
		showData(result.products)
	})
}

fetchData()

function showData(data){
	for (let i = 0; i <= data.length; i++) {
	let box = document.createElement("div")
	box.classList.add("product")

	let img = document.createElement("img")
	img.src=data[i].thumbnail;
	let link = document.createElement("a")
	link.href="singleProduct.html?id="+data[i].id
	link.append(img)


	let title = document.createElement("h2")
	title.innerHTML = data[i].title

	let desc = document.createElement("p")
	desc.innerHTML = data[i].description

	let price = document.createElement("h3")
	

	let icon = document.createElement("i")
		
	icon.classList.add("fa-solid", "fa-indian-rupee-sign")
	price.append(icon)

	price.innerHTML += data[i].price


	
	box.append(link)
	box.append(title)
	box.append(desc)
	box.append(price)

	document.querySelector('#products').append(box)
	}

}

