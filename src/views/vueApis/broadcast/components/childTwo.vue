<template>
	<div class="child-two">
		<!-- <button>chile two</button> -->
		<subChildOne></subChildOne>
		<subChildTwo></subChildTwo>
	</div>
</template>

<script>
	import subChildOne from './components/subChildOne'
	import subChildTwo from './components/subChildTwo'
	export default {
		name: 'ChildTwo',
		components: {
			subChildOne,
			subChildTwo
		},
		created () {
			this.$on('broadcast', this.handleAction)
		},
		methods: {
			handleAction (args) {
				alert(`child two get broadcast, ${args}`)
			}
		}
	}
</script>
