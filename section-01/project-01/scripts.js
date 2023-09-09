var products = [
	{
		"photo": "img/big-mac.png",
		"name": "Salad Cheese",
		"price": 5.99,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/mc-chicken.png",
		"name": "Chicken Cheese",
		"price": 4.99,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/double-cb.png",
		"name": "Double Cheese",
		"price": 2.99,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/fries.png",
		"name": "Fries",
		"price": 2.99,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/nuggets.png",
		"name": "Nuggets",
		"price": 3.49,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/salad.png",
		"name": "Salad",
		"price": 2.79,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/cola.png",
		"name": "Coca-Cola",
		"price": 1.99,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/lipton.png",
		"name": "Ice Tea",
		"price": 1.99,
		"active": false,
		"quantity": 1
	},
	{
		"photo": "img/water.png",
		"name": "Water",
		"price": 1.49,
		"active": false,
		"quantity": 1
	}
];

const selfServiceMachine = {
	data() {
		return {
			products: window.products
		}
	},
	methods: {
		total: function () {
			var total = 0;

			this.products.forEach((item) => {
				if (item.active) {
					total += item.price * item.quantity
				}
			});

			return total.toFixed(2)
		}
	}
}

Vue.createApp(selfServiceMachine).mount("#app")
