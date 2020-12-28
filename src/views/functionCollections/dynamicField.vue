<template>
	<div class="app-container dynamic-field-container">
		<div class="content">
			<div class="set-btn">
				<el-popover
					placement="bottom"
					width="240"
					trigger="click">
					<el-col :span="12" v-for="(item, index) in fields" :key="index"><el-checkbox v-model="item['show_'+item.field]" @change="showHide(item, 'show_'+item.field)">{{item.fieldDes}}</el-checkbox></el-col>
					<el-button type="primary" v-loading="loading" slot="reference" icon="el-icon-s-tools">设置</el-button>
				</el-popover>
			</div>
			<el-table
				:data="fieldsData"
				v-loading="loading"
				border
				style="width: 100%; min-height: 200px;">
				<div v-for="(item, index) in fields" :key='index'><el-table-column v-if="item['show_'+item.field]" :prop="item.field" :label="item.fieldDes" :fit="true" :key='index'></el-table-column></div>
			</el-table>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'tableSet',
		data () {
			return {
				loading: true,
				fields: null, // 存储从后端获取的需要显示的字段
				fieldsData: null // 存储从后端获取的需要显示的内容
			}
		},
		created () {
			setTimeout(() => {
				this.getFields()
			}, 3000)
		},
		methods: {
			getFields () { // 模拟获取需要显示的字段
				const fields = [{
					field: 'brand',
					fieldDes: '代理品牌'
				}, {
					field: 'cooperation',
					fieldDes: '合作平台'
				}, {
					field: 'name',
					fieldDes: '联系人'
				}, {
					field: 'tel',
					fieldDes: '联系电话'
				}, {
					field: 'lebel',
					fieldDes: '客户级别'
				}, {
					field: 'status',
					fieldDes: '客户状态'
				}, {
					field: 'type',
					fieldDes: '客户类型'
				}, {
					field: 'importance',
					fieldDes: '重要程度'
				}, {
					field: 'rfm',
					fieldDes: '上月RFM指数'
				}, {
					field: 'province',
					fieldDes: '省'
				}, {
					field: 'city',
					fieldDes: '市'
				}, {
					field: 'district',
					fieldDes: '县(区)'
				}, {
					field: 'address',
					fieldDes: '客户地址'
				}, {
					field: 'source',
					fieldDes: '客户来源'
				}, {
					field: 'intimacy',
					fieldDes: '亲密度'
				}, {
					field: 'creater',
					fieldDes: '创建人'
				}, {
					field: 'label',
					fieldDes: '标签'
				}, {
					field: 'synergy',
					fieldDes: '协同人'
				}, {
					field: 'first',
					fieldDes: '首次付款日期'
				}, {
					field: 'last',
					fieldDes: '最后跟进日期'
				}, {
					field: 'update',
					fieldDes: '更新时间'
				}, {
					field: 'create',
					fieldDes: '创建时间'
				}, {
					field: 'nodata',
					fieldDes: '没数据'
				}]
				// 给需要显示的字段附加一个show字段
				fields.forEach(item => {
					let isShow = true
					if (localStorage.getItem('show_' + item.field) === 'false') {
						isShow = false
					}
					item['show_' + item.field] = isShow
				})
				this.$set(this.$data, 'fields', fields)
				setTimeout(() => {
					this.getData()
				}, 2000)
			},
			getData () { // 获取需要显示的表格内容
				const res = [
					{
						brand: 'brand1',
						cooperation: 'cooperation1',
						name: 'name1',
						tel: 'tel1',
						lebel: 'lebel1',
						status: 'status1',
						type: 'type1',
						importance: 'importance1',
						rfm: 'rfm1',
						province: 'province1',
						city: 'city1',
						district: 'district1',
						address: 'address1',
						source: 'source1',
						intimacy: 'intimacy1',
						creater: 'creater1',
						label: 'label1',
						synergy: 'synergy1',
						first: 'first1',
						last: 'last1',
						update: 'update1',
						create: 'create1'
					}, {
						brand: 'brand2',
						cooperation: 'cooperation2',
						name: 'name2',
						tel: 'tel2',
						lebel: 'lebel2',
						status: 'status2',
						type: 'type2',
						importance: 'importance2',
						rfm: 'rfm2',
						province: 'province2',
						city: 'city2',
						district: 'district2',
						address: 'address2',
						source: 'source2',
						intimacy: 'intimacy2',
						creater: 'creater2',
						label: 'label2',
						synergy: 'synergy2',
						first: 'first2',
						last: 'last2',
						update: 'update2',
						create: 'create2'
					}, {
						brand: 'brand3',
						cooperation: 'cooperation3',
						name: 'name3',
						tel: 'tel3',
						lebel: 'lebel3',
						status: 'status3',
						type: 'type3',
						importance: 'importance3',
						rfm: 'rfm3',
						province: 'province3',
						city: 'city3',
						district: 'district3',
						address: 'address3',
						source: 'source3',
						intimacy: 'intimacy3',
						creater: 'creater3',
						label: 'label3',
						synergy: 'synergy3',
						first: 'first3',
						last: 'last3',
						update: 'update3',
						create: 'create3'
					}, {
						brand: 'brand4',
						cooperation: 'cooperation4',
						name: 'name4',
						tel: 'tel4',
						lebel: 'lebel4',
						status: 'status4',
						type: 'type4',
						importance: 'importance4',
						rfm: 'rfm4',
						province: 'province4',
						city: 'city4',
						district: 'district4',
						address: 'address4',
						source: 'source4',
						intimacy: 'intimacy4',
						creater: 'creater4',
						label: 'label4',
						synergy: 'synergy4',
						first: 'first4',
						last: 'last4',
						update: 'update4',
						create: 'create4'
					}
				]
				this.fieldsData = res
				this.loading = false
			},
			showHide (item, tag) {
				if (item[tag]) {
					localStorage.removeItem(tag)
				} else {
					localStorage.setItem(tag, item[tag])
				}
			}
		}
	}
</script>

<style type="text/css">
	.dynamic-field-container .content{
		width: 80%;
		margin: 0 auto;
	}
	.dynamic-field-container .set-btn{
		padding: 10px 0;
		text-align: right;
	}
</style>
