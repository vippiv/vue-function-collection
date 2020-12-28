<template>
	<div class="child-inject">
		<h2>child inject component</h2>
		<button @click="emitProvideAction">child</button>
	</div>
</template>

<script>
	export default {
		name: 'ChildInject',
		inject: ['provideDemo'],
		created () {
			console.log('child inject')
			console.log(this.provideDemo)
			console.log(this.provideDemo.$options.name)
		},
		methods: {
			emitProvideAction () {
				this.provideDemo.topFn('come from child')
			}
		}
	}
</script>
