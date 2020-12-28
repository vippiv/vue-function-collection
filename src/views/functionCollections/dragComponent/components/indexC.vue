<template>
	<div class="index-c-container">
		<el-button type="primary" @click="handleShowData">显示</el-button>
		<span class="del" @click.stop="handleDel">×</span>
		<p><strong>数据列表模块</strong> 唯一标识：[{{unitTag}}]</p>
		<item :children="blockData"></item>
		<div class="add-sub" v-if="blockData.length < 5">
			<el-button type="text" size="mini" @click.stop="handleAddSub('sub')">添加子级</el-button>
		</div>
	</div>
</template>

<script>
	import item from './item'
	import { convertNumToCN } from '@/utils/utils'

	export default {
		name: 'Index',
		props: ['unitTag', 'idx'],
		data () {
			return {
				editStatus: false,
				blockData: [
					{
						series: convertNumToCN(this.idx + 1),
						title: '',
						content: '',
						editStatus: false,
						extraTitle: '一',
						children: [{
							series: convertNumToCN(this.idx + 1),
							title: '',
							content: '',
							editStatus: false,
							extraTitle: '1.1',
							children: [{
								series: convertNumToCN(this.idx + 1),
								title: '',
								content: '',
								editStatus: false,
								extraTitle: '1.1.1',
								children: []
							}]
						}, {
							series: convertNumToCN(this.idx + 1),
							title: '',
							content: '',
							editStatus: false,
							extraTitle: '1.2',
							children: []
						}, {
							series: convertNumToCN(this.idx + 1),
							title: '',
							content: '',
							editStatus: false,
							extraTitle: '1.3',
							children: []
						}]
					}
				],
				content:
					`<p>点击输入正文</p>`
			}
		},
		components: {
			item
		},
		methods: {
			editBoxBlur () {
				document.addEventListener('click', () => {
					this.blockData.forEach(item => {
						item.editStatus = false
					})
					this.submitData()
				}, false)
			},
			handleEditSub (obj) {
				obj.editStatus = true
			},
			handleDelSub (obj) {
				let idx = -1
				this.blockData.forEach((item, index) => {
					if (item.timeStamp && item.timeStamp === obj.timeStamp) {
						idx = index
					}
				})
				this.blockData.splice(idx, 1)
			},
			handleDel () {
				this.$emit('delThisComponent', this.unitTag)
			},
			handleAddSub (obj) {
				if (typeof obj === 'object') {
					obj.children.push({
						series: (this.idx + 1) + '.',
						title: '',
						content: '',
						editStatus: false,
						timeStamp: new Date().getTime(),
						children: []
					})
				} else if (obj === 'sub') {
					this.blockData.push({
						series: (this.idx + 1) + '.',
						title: '',
						content: '',
						editStatus: false,
						timeStamp: new Date().getTime(),
						children: []
					})
				}
			},
			getData () {},
			submitData () {
				// console.log(this.blockData)
			},
			handleShowData () {
				console.log(this.blockData)
			}
		},
		destroy () {
			document.removeEventListener('click')
		}
	}
</script>

<style lang="scss" scoped></style>
