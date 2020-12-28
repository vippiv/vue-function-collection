export default {
	name: 'SimulateVModel',
	render (createElement) {
		const _this = this
		return createElement('input', {
			domProps: {
				innerText: this.$attrs['v-model']
			},
			on: {
				input: function (evt) {
					// this.$emit('v-model', evt.target.value)
					console.log(_this.$parent.$options)
					// this.$parent['v-model'] = evt.target.value
				}
			}
		})
	}
}
