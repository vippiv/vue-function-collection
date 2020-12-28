<template>
	<div class="subAcceptAttrs">
		<p>孙组件测试继承属性组件</p>
		<p>未在props里注册的属性：{{$attrs}}</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'SunAcceptAttrs',
		inheritAttrs: true,
		created () {
			console.log('=======属性是否继承和inheritAttrs设置无关(孙组件)=======')
			console.log('grandson component this.$attrs', this.$attrs)
		}
	}
</script>

<style lang="scss" scoped></style>
