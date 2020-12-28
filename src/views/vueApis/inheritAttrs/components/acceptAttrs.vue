<template>
	<div class="acceptAttrs">
		<p>子组件测试继承属性组件</p>
		<subAcceptAttrs v-bind="$attrs"></subAcceptAttrs>
	</div>
</template>

<script type="text/javascript">
	import subAcceptAttrs from './subAcceptAttrs'

	export default {
		name: 'AcceptAttrs',
		inheritAttrs: true,
		props: {
			title: {
				type: String,
				default: ''
			}
			// message属性 如果不在props中定义，将会作为普通html元素属性出现在DOM节点上, 如<div message="*"></div>
			// 除非设置inheritAttrs: false
			// message: {
			// 	type: String,
			// 	default: ''
			// }
		},
		components: {
			subAcceptAttrs
		},
		created () {
			console.log('=======属性是否继承和inheritAttrs设置无关(子组件)=======')
			console.log('son component this.$attrs', this.$attrs)
			// console.log('props', this.$props)
		}
	}
</script>

<style lang="scss"></style>
