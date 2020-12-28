export default {
	name: 'DivRender',
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	render (createElement) {
		return createElement('div', this.title)
	}
}
