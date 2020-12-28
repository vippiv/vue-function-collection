<template>
	<div class="app-container provide-inject">
		<h1>provide and inject demo</h1>
		<p>{{ topData }}</p>
		<childInject></childInject>
		<subChildInject></subChildInject>
		<slot name="foo"></slot>
	</div>
</template>

<script>
	import childInject from './components/child'
	import subChildInject from './components/subChild'
	export default {
		name: 'ProvideInject',
		provide () {
			return {
				provideDemo: this
			}
		},
		components: {
			childInject,
			subChildInject
		},
		created () {
			console.log(this.$slots)
		},
		data () {
			return {
				topData: 'topData'
			}
		},
		methods: {
			topFn (args) {
				this.topData = args
			}
		}
	}
</script>
