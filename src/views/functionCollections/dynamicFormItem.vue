<template>
	<div class="app-container dynamic-form-item-container">
		<el-form :model="dynamicForm" ref="dynamicValidateForm" label-width="140px" class="demo-dynamic">
			<div v-for="(item) in dynamicValidateForm.field" :key="item.rnd" class="new-item">
				<el-row style="text-align:right">
				<span class="ryDelete" @click="handleThisItem(item)">删除</span>
				</el-row>
				<el-form-item :label="'荣誉名称' + item.rnd" :prop="'honor' + (item.rnd)" :rules="[{required: true, message: '名称不能为空', trigger: 'blur'}]">
				<el-input v-model="dynamicForm[`honor${item.rnd}`]"></el-input>
				</el-form-item>
				<el-form-item :label="'签到时间' + item.rnd" :prop="'time' + (item.rnd)" :rules="[{required: true, message: '时间不能为空', trigger: 'blur'}]">
				<el-input v-model="dynamicForm[`time${item.rnd}`]"></el-input>
				</el-form-item>
				<el-form-item :label="'颁发部门' + item.rnd" :prop="'depart' + (item.rnd)" :rules="[{required: true, message: '部门不能为空', trigger: 'blur'}]">
				<el-input v-model="dynamicForm[`depart${item.rnd}`]"></el-input>
				</el-form-item>
			</div>
			<el-row>
				<el-col :span="24">
					<el-button type="plain" @click="addDomain">新增荣誉</el-button>
					<!-- <el-button type="plain" @click="saveHonor('dynamicForm')">保存荣誉</el-button> -->
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'DynamicFormItem',
		data () {
			const checkAge = (rule, value, callback) => {
				console.log('custom')
				if (!value) {
					return callback(new Error('年龄不能为空'))
				}
				setTimeout(() => {
					if (!Number.isInteger(value)) {
						callback(new Error('请输入数字值'))
					} else {
						if (value < 18) {
						callback(new Error('必须年满18岁'))
						} else {
						callback()
						}
					}
				}, 1000)
			}
			return {
				radio: '1',
				name: 0,
				dynamicValidateForm: {
					field: []
				},
				dynamicForm: {},
				checkAge: checkAge
			}
		},
		created () {
			this.addDomain()
		},
		methods: {
			addDomain () {
				const rnd = Math.floor(Math.random() * 1000000)
				this.dynamicValidateForm.field.push({
					rnd
				})
				const honorName = 'honor' + rnd
				const timeName = 'time' + rnd
				const departName = 'depart' + rnd
				this.$set(this.dynamicForm, honorName)
				this.$set(this.dynamicForm, timeName)
				this.$set(this.dynamicForm, departName)
			},
			saveHonor (formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.submitData()
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			submitData () {
				const ret = []
				this.dynamicValidateForm.field.forEach(item => {
					ret.push({
						honor: this.dynamicForm[`honor${item.rnd}`],
						time: this.dynamicForm[`time${item.rnd}`],
						depart: this.dynamicForm[`depart${item.rnd}`]
					})
				})
				console.log('ret', ret)
			},
			handleThisItem (obj) {
				let index = -1
				this.dynamicValidateForm.field.forEach((item, i) => {
				if (item.rnd === obj.rnd) {
					index = i
				}
				})
				this.dynamicValidateForm.field.splice(index, 1)
				this.$delete(this.dynamicForm, `honor${obj.rnd}`)
				this.$delete(this.dynamicForm, `time${obj.rnd}`)
				this.$delete(this.dynamicForm, `depart${obj.rnd}`)
			},
			handleChangeNameVal () {
				this.name = 'change name value'
			}
		}
	}
</script>

<style type="text/css"></style>
