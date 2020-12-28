// render函数没有v-if，v-for api，只能用原生来模拟
// <ul v-if="item.length">
// 	<li v-for="item in items">{{item}}</li>
// </ul>
export default {
	name: 'SimulateItemList',
	props: ['items'],
	render (createElement) {
		if (this.items && this.items.length) {
			return createElement('ul', this.items.map((item) => {
				return createElement('li', {
					style: {
						cursor: 'pointer'
					},
					on: {
						click: (item) => {
							return this.handleClick(item)
						}
					},
					domProps: {
						innerHTML: item
					}
				})
			}))
		} else {
			return createElement('p', 'No items found')
		}
	},
	methods: {
		handleClick (item) {
			console.log('content: ', item.target.innerHTML)
		}
	}
}
