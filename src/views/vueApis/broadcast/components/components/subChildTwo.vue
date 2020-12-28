<template>
	<div class="sub-child-two"></div>
</template>

<script>
	export default {
		name: 'SubChildTwo',
		created () {
			this.$on('broadcast', this.handleAction)
		},
		methods: {
			handleAction (args) {
				alert(`sub child two get broadcast, ${args}`)
			}
		}
	}
</script>
