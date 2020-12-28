<template>
	<div class="child-one">
		<!-- <button>chile one</button> -->
		<subChildOne></subChildOne>
		<subChildTwo></subChildTwo>
	</div>
</template>

<script>
	import subChildOne from './components/subChildOne'
	import subChildTwo from './components/subChildTwo'
	export default {
		name: 'ChildOne',
		components: {
			subChildOne,
			subChildTwo
		},
		created () {
			this.$on('broadcast', this.handleAction)
		},
		methods: {
			handleAction (args) {
				alert(`child one get broadcast, ${args}`)
			}
		}
	}
</script>
