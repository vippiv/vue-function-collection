<template>
	<div class="app-container extend-field-container">
		<h1>原始表单</h1>
		<hr>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域" prop="region">
				<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间" required>
				<el-col :span="11">
				<el-form-item prop="date1">
				<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
				</el-form-item>
				</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-form-item prop="date2">
					<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
				</el-form-item>
			</el-col>
			</el-form-item>
			<el-form-item label="即时配送" prop="delivery">
				<el-switch v-model="ruleForm.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质" prop="type">
				<el-checkbox-group v-model="ruleForm.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<ExtendFields :extendFieldsJson='extendFields' :ruleForm='ruleForm'></ExtendFields>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import mixinExtendFields from '@/mixins/mixinExtendFileds'
	import ExtendFields from './components/extendFields'

	var checkNum = (rule, value, callback) => {
		if (!Number.isInteger(parseInt(value, 10))) {
			callback(new Error('请输入数字值'))
		} else {
			if (value < 18) {
				callback(new Error('数值不能小于18岁'))
			} else {
				callback()
			}
		}
	}
	const extendFields = [{
		fieldName: 'extend_text_a',
		fieldType: 'TEXT',
		fieldLen: 10,
		fieldDesc: '文本A',
		fieldRequired: true,
		fieldPlaceholder: '请输入文本',
		fieldInitVal: '文本初始值',
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_textarea_a',
		fieldType: 'TEXTAREA',
		fieldLen: 10,
		fieldDesc: '文本域A',
		fieldRequired: true,
		fieldPlaceholder: '请输入文本',
		fieldInitVal: '文本域初始值',
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_number_a',
		fieldType: 'NUMBER',
		fieldLen: 10,
		fieldDesc: '数字A',
		fieldRequired: true,
		fieldPlaceholder: '请输入数字',
		fieldInitVal: '数字初始值',
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }, { validator: checkNum, trigger: 'change' }]
	}, {
		fieldName: 'extend_radio_a',
		fieldType: 'RADIO',
		fieldLen: 10,
		fieldDesc: '单选按钮A',
		fieldRequired: true,
		fieldPlaceholder: '请选择',
		fieldInitVal: '1',
		fieldOptions: [{
			value: '1',
			label: '单选A'
		}, {
			value: '2',
			label: '单选B'
		}, {
			value: '3',
			label: '单选C'
		}],
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_single_select_a',
		fieldType: 'SINGLE_SELECT',
		fieldLen: 10,
		fieldDesc: '下拉选择A',
		fieldRequired: true,
		fieldPlaceholder: '请选择',
		fieldOptions: [{
			value: '1',
			label: '下拉单选A'
		}, {
			value: '2',
			label: '下拉单选B'
		}, {
			value: '3',
			label: '下拉单选C'
		}],
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_checkbox_a',
		fieldType: 'CHECKBOX',
		fieldLen: 10,
		fieldDesc: '多选A',
		fieldRequired: true,
		fieldPlaceholder: '请选择',
		fieldInitVal: ['1', '2'],
		fieldOptions: [{
			value: '1',
			label: '多选A'
		}, {
			value: '2',
			label: '多选B'
		}, {
			value: '3',
			label: '多选C'
		}],
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_multi_select_a',
		fieldType: 'MULTI_SELECT',
		fieldLen: 10,
		fieldDesc: '下拉多选A',
		fieldRequired: true,
		fieldPlaceholder: '请选择',
		fieldOptions: [{
			value: '1',
			label: '下拉多选A'
		}, {
			value: '2',
			label: '下拉多选B'
		}, {
			value: '3',
			label: '下拉多选C'
		}],
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_date_a',
		fieldType: 'DATE',
		fieldLen: 10,
		fieldDesc: '日期A',
		fieldPlaceholder: '请选择日期',
		fieldRequired: true,
		fieldInitVal: '2020-04-09',
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_datetime_a',
		fieldType: 'DATETIME',
		fieldLen: 10,
		fieldDesc: '日期时间A',
		fieldPlaceholder: '请选择日期时间',
		fieldRequired: true,
		fieldInitVal: '2020-04-09 20:12:10',
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}, {
		fieldName: 'extend_time_a',
		fieldType: 'TIME',
		fieldLen: 10,
		fieldDesc: '时间A',
		fieldRequired: true,
		fieldPlaceholder: '请选择时间',
		fieldInitVal: new Date(2016, 9, 10, 18, 40),
		fieldValidator: [{ required: true, message: '请输入', trigger: 'blur' }]
	}]
	export default {
		name: 'ExtendField',
		data () {
			return {
				extendFields: null,
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					region: [
						{ required: true, message: '请选择活动区域', trigger: 'change' }
					],
					date1: [
						{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
					],
					date2: [
						{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }
					],
					type: [
						{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
					],
					resource: [
						{ required: true, message: '请选择活动资源', trigger: 'change' }
					],
					desc: [
						{ required: true, message: '请填写活动形式', trigger: 'blur' }
					]
				}
			}
		},
		mixins: [mixinExtendFields],
		components: {
			ExtendFields
		},
		created () {
			this.handleMixinsExtend()
		},
		methods: {
			handleMixinsExtend () {
				setTimeout(() => {
					this.extendFields = extendFields
					// 执行数据混入当前页面
					this.mixinsFields(this.extendFields, this.ruleForm, 'fieldName', 'fieldValidator')
				}, 1000)
			},
			submitForm (formName) {
				console.log(formName)
				console.log(this.ruleForm)
				console.log(this.rules)
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!')
					} else {
						console.log('error submit!!')
						return false
					}
				})
			},
			resetForm (formName) {
				this.$refs[formName].resetFields()
			}
		}
	}
</script>

<style>
	.extend-field-container{
		width: 600px;
		padding: 30px 10px;
		text-align: left;
	}
</style>
