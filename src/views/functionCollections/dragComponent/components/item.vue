<template>
	<div class="block-item-container" :class="editStatus ? 'block-item-container-hover': ''" @click.stop="">
		<div v-for="(blockItem, index) in children" :key="blockItem.timeStamp" class="content-item rel">
			<span class="edit" @click.stop="handleEditSub(blockItem)">i</span>
			<span class="del" @click.stop="handleDelSub(blockItem)" v-if="index > 0">×</span>
			<p>{{blockItem.extraTitle}}</p>
			<h1 v-if="!blockItem.editStatus"><span v-if="!blockItem.title">{{blockItem.series}}、这里是标题[{{blockItem.timeStamp && blockItem.timeStamp}}]</span><span v-else>{{blockItem.series}}、{{blockItem.title}}[{{blockItem.timeStamp && blockItem.timeStamp}}]</span></h1>
			<el-input v-model="blockItem.title" size="mini" placeholder="请输入标题名称"></el-input>
			<p v-if="!blockItem.editStatus"><span v-if="!blockItem.content">这里是正文</span></p>
			<tinymce v-model="blockItem.content" :height="300" v-else />
			<div class="editor-content" v-html="blockItem.content" v-if="blockItem.content" />
			<item v-if="blockItem.children" :children="blockItem.children"></item>
		</div>
	</div>
</template>

<script>
	import Tinymce from '@/components/Tinymce'

	export default {
		name: 'Item',
		props: { children: Array },
		data () {
			return {
				editStatus: false
			}
		},
		components: {
			Tinymce
		}
	}
</script>

<style lang="scss" scoped></style>
