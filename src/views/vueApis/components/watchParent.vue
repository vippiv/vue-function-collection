<template>
	<div class="watchParent">
		<h1>子组件直接监听父组件属性</h1>
	</div>
</template>

<script>
	export default {
		name: 'WatchParent',
		watch: {
			'$parent.fullName' (val) {
				// 这种做法无效，理论上应该有效
				console.log('fullName', val)
			}
		},
		created () {
			console.log('子组件挂载', this.$parent.fullName)
		}
	}
</script>
