<template>
	<div class="app-container event-demo">
		<div>
			<el-col :span="6"><button @click="handleEmit">派发给本组件</button></el-col>
			<el-col :span="6"><button @click="handleEmitAllChild">派发给所有子组件</button></el-col>
			<el-col :span="6"><button @click="handleEmitSome('childOne')">派发给指定子组件</button></el-col>
		</div>
		<childOne></childOne>
		<childTwo></childTwo>
	</div>
</template>

<script>
	import childOne from './components/childOne'
	import childTwo from './components/childTwo'
	import ergodic from './ergodic'

	export default {
		name: 'EventDemo',
		components: {
			childOne,
			childTwo
		},
		created () {
			this.$on('EMIT', args => {
				alert(`本组件监听到派发, 派发的参数是：${args}`)
			})
		},
		mounted () {
			console.log(this.$vnode)
		},
		methods: {
			handleEmit () {
				this.$emit('EMIT', '参数')
			},
			handleEmitAllChild () {
				ergodic(this)
			},
			handleEmitSome (componentName) {
				this.$children.forEach(child => {
					const name = child.$options.name
					if (name.toLowerCase() === componentName.toLowerCase()) {
						child.$emit('broadcast', '派发给特定子组件')
					}
				})
			}
		}
	}
</script>
