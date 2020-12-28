<template>
	<div class="app-container response-table-container">
		<h1>响应式表格</h1>
		<p>1、通过v-if + 监听屏幕宽度实现动态显示隐藏部分列（改动较大）</p>
		<p>2、父元素宽度跟随屏幕，表格宽度固定，通过横向纵向滚动条实现（改动较小但可能造成表头和表主体分别出现滚动条）</p>
		<div class="table-box">
			<el-table
				:data="tableData"
				border
				style="width: 100%">
				<el-table-column
					prop="date"
					label="日期show"
					v-if="show"
					width="180">
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180">
				</el-table-column>
				<el-table-column
					prop="address"
					label="地址">
				</el-table-column>
				<el-table-column
					prop="date"
					label="日期show"
					v-if="show"
					width="180">
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180">
				</el-table-column>
				<el-table-column
					prop="address"
					label="地址">
				</el-table-column>
				<el-table-column
					prop="date"
					label="日期show"
					v-if="show"
					width="180">
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180">
				</el-table-column>
				<el-table-column
					prop="address"
					v-if="show"
					label="地址show">
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'ResponseTable',
		data () {
			return {
				screenWidth: 0,
				show: true,
				tableData: [{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}, {
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄'
					}, {
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		watch: {
			screenWidth (val) {
				if (this.screenWidth < 800) {
					this.show = false
				} else {
					this.show = true
				}
			}
		},
		mounted () {
			window.onresize = () => {
				console.log('resize')
				window.screenWidth = window.innerWidth
				this.screenWidth = window.screenWidth
			}
		},
		destory () {
			window.onresize = null
		}
	}
</script>

<style lang="scss">
	.response-table-container{
		.table-box{
			width: 1000px;
			margin: 0 auto;
		}
	}
</style>
