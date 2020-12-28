<template>
	<div class="login-c-container" :class="editStatus ? 'login-c-container-hover': ''" @click.stop="">
		<span class="del" @click.stop="handleDel">×</span>
		<p><strong>登录模块</strong> 唯一标识：[{{unitTag}}]</p>
		<div class="block-item-container" :class="editStatus ? 'block-item-container-hover': ''" @click.stop="">
			<div v-for="(blockItem, index) in blockData" :key="blockItem.timeStamp" class="content-item rel">
				<span class="edit" @click.stop="handleEditSub(blockItem)">i</span>
				<span class="del" @click.stop="handleDelSub(blockItem)" v-if="index > 0">×</span>
				<div class="mb15">
					<div v-if="index == 0">
						<h1 v-if="!blockItem.editStatus"><span v-if="!blockItem.title">{{blockItem.series}}、这里是标题[{{blockItem.timeStamp && blockItem.timeStamp}}]</span><span v-else>{{blockItem.series}}、{{blockItem.title}}[{{blockItem.timeStamp && blockItem.timeStamp}}]</span></h1>
						<el-input v-model="blockItem.title" v-else size="mini" placeholder="请输入标题名称"></el-input>
					</div>
					<div v-if="index > 0">
						<h2 v-if="!blockItem.editStatus"><span v-if="!blockItem.title">{{blockItem.series}}{{index}}、这里是标题[{{blockItem.timeStamp && blockItem.timeStamp}}]</span><span v-else>{{blockItem.series}}{{index}}、{{blockItem.title}}[{{blockItem.timeStamp && blockItem.timeStamp}}]</span></h2>
						<el-input v-model="blockItem.title" v-else size="mini" placeholder="请输入标题名称"></el-input>
					</div>
				</div>
				<div>
					<p v-if="!blockItem.editStatus"><span v-if="!blockItem.content">这里是正文</span></p>
					<tinymce v-model="blockItem.content" :height="300" v-else/>
					<div class="editor-content" v-html="blockItem.content" v-if="blockItem.content" />
				</div>
			</div>
		</div>
		<div class="add-sub" v-if="blockData.length < 5">
			<el-button type="text" size="mini" @click.stop="handleAddSub">添加子级</el-button>
		</div>
	</div>
</template>

<script>
	import Tinymce from '@/components/Tinymce'
	import { convertNumToCN } from '@/utils/utils'

	export default {
		name: 'loginC',
		props: ['unitTag', 'idx'],
		data () {
			return {
				editStatus: false,
				blockData: [
					{
						series: convertNumToCN(this.idx + 1),
						title: '',
						content: '',
						editStatus: false
					}
				],
				content:
					`<p>点击输入正文</p>`
			}
		},
		components: {
			Tinymce
		},
		mounted () {
			// event register
			this.editBoxBlur()
		},
		created () {
			// get all block data
			this.getData()
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
			handleAddSub () {
				this.blockData.push({
					series: (this.idx + 1) + '.',
					title: '',
					content: '',
					editStatus: false,
					timeStamp: new Date().getTime()
				})
			},
			getData () {},
			submitData () {
				// console.log(this.blockData)
			}
		},
		destroy () {
			document.removeEventListener('click')
		}
	}
</script>

<style lang='scss'>
	.login-c-container {
		position: relative;
		border: 1px solid transparent;
		padding: 15px;
		transition: all 0.5s;
		.rel {
			position: relative;
		}
		.del {
			position: absolute;
			right: 5px;
			top: 35px;
			font-weight: bold;
			cursor: pointer;
		}
		.add-sub {
			border: 1px solid #eee;
			padding-left: 15px;
		}
		.block-item-container {
			position: relative;
			padding-right: 20px;
			.content-item {
				border: 1px solid #eee;
				margin-bottom: 10px;
				.del, .edit {
					position: absolute;
					right: -15px;
					top: 10px;
					font-weight: bold;
					cursor: pointer;
				}
				.del {
					right: -30px;
				}
			}
		}
	}
</style>
