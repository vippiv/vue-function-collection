<template>
	<div class="extend-fields-contianer">
		<h1>混入扩展字段表单</h1>
		<hr>
		<div v-for="(item, index) in extendFieldsJson" :key="index">
			<el-form-item
				v-if="item.fieldType === 'TEXT' || item.fieldType === 'TEXTAREA' || item.fieldType === 'NUMBER'"
				:label="item.fieldDesc"
				:prop="item.fieldName"
				:rules="item.fieldValidator"
			>
				<el-input :type="item.fieldType.toLowerCase()" v-model="ruleForm[item.fieldName]" :placeholder="item.fieldPlaceholder"></el-input>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'RADIO'"
				:label="item.fieldDesc"
				:prop="item.fieldName"
				:rules="item.fieldValidator"
			>
				<el-radio-group v-model="ruleForm[item.fieldName]">
					<el-radio v-for="oitem in item.fieldOptions" :label="oitem.value" :key="oitem.value" >{{oitem.label}}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'CHECKBOX'"
				:label="item.fieldDesc"
				:prop="item.fieldName"
				:rules="item.fieldValidator"
			>
				<el-checkbox-group v-model="ruleForm[item.fieldName]">
					<el-checkbox v-for="oitem in item.fieldOptions" :label="oitem.value" :key="oitem.value">{{oitem.label}}</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'SINGLE_SELECT'"
				:label="item.fieldDesc"
				:prop="item.fieldName"
				:rules="item.fieldValidator"
			>
				<el-select v-model="ruleForm[item.fieldName]" :placeholder="item.fieldPlaceholder">
					<el-option v-for="oitem in item.fieldOptions" :label="oitem.label" :value="oitem.value" :key="oitem.value">{{oitem.label}}</el-option>
				</el-select>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'MULTI_SELECT'"
				multiple
				:label="item.fieldDesc"
				:prop="item.fieldName"
				:rules="item.fieldValidator"
			>
				<el-select v-model="ruleForm[item.fieldName]" :placeholder="item.fieldPlaceholder">
					<el-option v-for="oitem in item.fieldOptions" :label="oitem.label" :value="oitem.value" :key="oitem.value">{{oitem.label}}</el-option>
				</el-select>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'DATE'"
				:label="item.fieldDesc"
				:rules="item.fieldValidator"
			>
				<el-form-item :prop="item.fieldName">
					<el-date-picker :type="item.fieldType.toLowerCase()" v-model="ruleForm[item.fieldName]" :placeholder="item.fieldPlaceholder" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'TIME'"
				:label="item.fieldDesc"
				:rules="item.fieldValidator"
			>
				<el-form-item :prop="item.fieldName">
					<el-time-picker v-model="ruleForm[item.fieldName]" :placeholder="item.fieldPlaceholder" style="width: 100%;"></el-time-picker>
				</el-form-item>
			</el-form-item>
			<el-form-item
				v-if="item.fieldType === 'DATETIME'"
				:label="item.fieldDesc"
				:rules="item.fieldValidator"
			>
				<el-form-item :prop="item.fieldName">
					<el-date-picker :type="item.fieldType.toLowerCase()" v-model="ruleForm[item.fieldName]" :placeholder="item.fieldPlaceholder" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-form-item>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ExtendFields',
		componentName: 'ExtendFields',
		props: {
			extendFieldsJson: {
				type: Array,
				default: () => []
			},
			ruleForm: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

