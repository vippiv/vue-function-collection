<template>
	<div class="sub-child-one"></div>
</template>

<script>
	export default {
		name: 'SubChildOne',
		created () {
			this.$on('broadcast', this.handleAction)
		},
		methods: {
			handleAction (args) {
				alert(`sub child one get broadcast, ${args}`)
			}
		}
	}
</script>
