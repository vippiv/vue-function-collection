<template>
	<div class="app-container render-function">
		<h1 class="caption">render</h1>
		<anchored-heading :level="tagLevel">h1标题</anchored-heading>
		<hTag>渲染成h1标题 <span>span</span> <strong>strong</strong></hTag>
		<hr>
		<divRender :title="renderTitle"></divRender>
		<hr>
		<aStr>createElement 第一个参数可以是字符串</aStr>
		<aObj></aObj>
		<aFunc></aFunc>
		<hr>
		<decorateEle></decorateEle>
		<hr>
		<SimulateItem :items="items"></SimulateItem>
		<hr>
		<SimulateVModel v-model="simulateVal"></SimulateVModel>
		<p>{{simulateVal}}</p>
		<!-- 参考 https://www.jianshu.com/p/7508d2a114d3 -->
	</div>
</template>

<script type="text/javascript">
	import divRender from './components/divRender'
	import decorateEle from './components/decorateEle'
	import SimulateItem from './components/simulateApi'
	import SimulateVModel from './components/simulateVModel'

	export default {
		name: 'RenderFunction',
		data () {
			return {
				tagLevel: 1,
				spanContent: 'spanContent',
				strongContent: 'strongContent',
				renderTitle: '渲染成一个div',
				items: ['Baidu', 'Alibaba', 'Tencent'],
				simulateVal: 'simulateVal'
			}
		},
		components: {
			// createElement参数 {String | Object | Function}
			// argument type String
			'anchored-heading': {
				render (createElement) {
					return createElement(
						'h' + this.level, // tag name 标签名称
						this.$slots.default // 子组件中的阵列
					)
				},
				props: {
					level: {
						type: Number,
						required: true
					}
				}
			},
			'hTag': {
				render (createElement) {
					return createElement(
						'h1',
						this.$slots.default,
						createElement(
							'span',
							this.$slots.default
						),
						createElement(
							'strong',
							this.$slots.default
						)
					)
				}
			},
			// argument type String
			'aStr': {
				render (createElement) {
					return createElement(
						'div',
						this.$slots.default
					)
				}
			},
			// argument type Object
			'aObj': {
				render (createElement) {
					return createElement({
						template: '<div>createElement 第一个参数可以是对象</div>'
					})
				}
			},
			// argument type Function
			'aFunc': {
				render (createElement) {
					const elefunc = () => {
						return {
							template: '<div>createElement 第一个参数可以是函数</div>'
						}
					}
					return createElement(elefunc())
				}
			},
			// type Component
			divRender,
			decorateEle,
			SimulateItem,
			SimulateVModel
		}
	}
</script>

<style lang="scss"></style>
