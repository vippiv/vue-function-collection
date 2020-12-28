<template>
	<div class="app-container inheritattrs">
		<h1 class="caption">inherit attrs</h1>
		<acceptAttrs data-title="继承属性" :title="subTitle" :message="subMessage"></acceptAttrs>
	</div>
	<!-- 参考资料 https://www.jianshu.com/p/ce8ca875c337 -->
</template>

<script type="text/javascript">
	import acceptAttrs from './components/acceptAttrs'

	export default {
		name: 'InheritAttrs',
		data () {
			return {
				subTitle: '子标题',
				subMessage: '子属性'
			}
		},
		components: {
			acceptAttrs
		}
	}
</script>

<style lang="scss"></style>
