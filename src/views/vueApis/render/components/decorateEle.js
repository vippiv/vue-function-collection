export default {
	name: 'DecorateElement',
	render (createElement) {
		return createElement('div', {
			ref: 'decorateEle',
			'class': {
				foo: true,
				bar: false
			},
			style: {
				color: 'red',
				fontSize: '14px',
				fontWeight: 'bold'
			},
			attrs: {
				id: 'boo'
			},
			on: {
				click: this.handleClick
			}
			// domProps权限高于第三个参数
			// domProps: {
			// 	innerHTML: 'hello world！'
			// }
		}, [
			createElement('h1', '学习Vue'),
			createElement('p', '学习render函数 给元素附加各种属性')
		])
	},
	data () {
		return {}
	},
	methods: {
		handleClick () {
			console.log('handleClick', this.$refs['decorateEle'])
		}
	}
}
