const ergodic = function (obj) {
	obj.$children.forEach(child => {
		child.$emit('broadcast', '派发给子组件的参数')
		if (child.$children) {
			ergodic(child)
		}
	})
}

export default ergodic
