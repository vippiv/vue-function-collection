<template>
	<div class="sub-child-inject">
		<h3>sub child inject component</h3>
		<button @click="emitProvideAction">sub child</button>
	</div>
</template>

<script>
	export default {
		name: 'SubChildInject',
		inject: ['provideDemo'],
		created () {
			console.log('sub child inject')
			console.log(this.provideDemo)
			console.log(this.provideDemo.$options.name)
		},
		methods: {
			emitProvideAction () {
				this.provideDemo.topFn('come from sub child')
			}
		}
	}
</script>
