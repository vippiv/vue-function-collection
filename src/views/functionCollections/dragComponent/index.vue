<template>
	<div class="dymaic-render-component-container">
		<el-container>
			<el-aside width="200px">
				<draggable v-model="userableComponent" :group="{ name: 'people', pull: 'clone', put: false }" @start="drag=true" @end="handleEnd">
					<transition-group>
						<div v-for="ele in userableComponent" :key="ele.id" class="component-item">{{ele.nameCN}}</div>
					</transition-group>
				</draggable>
			</el-aside>
			<el-main class="operation-container">
				<p class="preview"><span @click="handlePreview">预览</span></p>
				<draggable :list="componentTpls" group="people" class="rel pb30">
					<div v-for="(item, index) in componentTpls" :key="item.unitTag">
						<component :is="item.componentName" @delThisComponent="handleDelThis" :unitTag="item.unitTag" :idx="index"></component>
					</div>
				</draggable>
				<p class="release-area">拖动到这里释放</p>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import draggable from 'vuedraggable'
	import listC from './components/listC'
	import loginC from './components/loginC'
	import registerC from './components/registerC'
	import detailC from './components/detailC'
	import swiperC from './components/swiperC'
	import indexC from './components/indexC'

	export default {
		name: 'DymaicRenderComponent',
		data () {
			return {
				componentTpls: [],
				// 所有可用的表单
				userableComponent: [{
					componentName: 'indexC',
					id: 'indexC',
					nameCN: '首页'
				}, {
					componentName: 'listC',
					id: 'listC',
					nameCN: '数据列表'
				}, {
					componentName: 'loginC',
					id: 'loginC',
					nameCN: '登录'
				}, {
					componentName: 'registerC',
					id: 'registerC',
					nameCN: '注册'
				}, {
					componentName: 'detailC',
					id: 'detailC',
					nameCN: '详情'
				}, {
					componentName: 'swiperC',
					id: 'swiperC',
					nameCN: '轮播'
				}],
				delTag: false,
				insertIndex: -1,
				insertEle: null
			}
		},
		components: {
			listC,
			loginC,
			registerC,
			detailC,
			swiperC,
			indexC,
			draggable
			// listC (resolve) {
			// 	require(['./components/listC'], resolve)
			// },
			// loginC (resolve) {
			// 	require(['./components/loginC'], resolve)
			// },
			// registerC (resolve) {
			// 	require(['./components/registerC'], resolve)
			// },
			// detailC (resolve) {
			// 	require(['./components/detailC'], resolve)
			// }
		},
		created () {
			this.requireComponent()
		},
		methods: {
			// 加载有哪些可用的组件，存到数组中，然后交给components钩子属性，为调用做准备
			requireComponent () {
				// const dymaicRequireComponent = []
				// this.componentTpls.forEach((item) => {
				// 	let rempFunc = function (resolve) {
				// 		require(['./components/' + item.componentName], resolve)
				// 	}
				// 	dymaicRequireComponent.push(rempFunc)
				// 	rempFunc = null
				// })
			},
			handleEnd (evt) {
				// 由于数据是引用类型，必须把数据重新更新一遍，否则无法正确删除组件也无法保证componentTpls更新时，组件数据留存
				const obj = this.componentTpls[evt.newIndex]
				console.log('obj', obj)
				this.componentTpls.splice(evt.newIndex, 1, {
					componentName: obj.componentName,
					id: obj.id,
					nameCN: obj.nameCN,
					unitTag: new Date().getTime()
				})
			},
			// del this component
			handleDelThis (tag) {
				let delComponentIndex = -1
				this.componentTpls.forEach((item, index) => {
					if (item.unitTag === tag) {
						delComponentIndex = index
					}
				})
				this.componentTpls.splice(delComponentIndex, 1)
			},
			handlePreview () {
				alert('preview')
			}
		}
	}
</script>

<style lang='scss'>
	.dymaic-render-component-container {
		.component-item {
			width: 180px;
			height: 180px;
			line-height: 180px;
			text-align: center;
			border: 1px solid #EEE;
			margin: 10px auto;
			user-select: none;
			cursor: move;
		}
		.el-main {
			border: 1px dashed #eee;
			& > div {
				min-height: 50px;
			}
			.preview{
				text-align: right;
				cursor: pointer;
			}
		}
		.operation-container {
			border: 1px solid #eee;
			position: relative;
			.release-area {
				height: 25px;
				line-height: 25px;
				text-align: center;
			}
		}
	}
</style>
