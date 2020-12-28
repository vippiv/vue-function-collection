export default {
	methods: {
		/**
		*	把扩展的字段混入到data对象中，实现get/set
		*	@params extendFieldsJson 扩展字段json[json]
		*	@params accept			 接受扩展的对象[对象]
		*	@params fieldName		 扩展字段名[字符串]
		*	@params verlidatorName	 字段对应的验证规则[数组]
		*/
		mixinsFields (extendFieldsJson, accept, fieldName, verlidatorName) {
			console.log('执行数据混入', extendFieldsJson, accept, fieldName, verlidatorName)
			extendFieldsJson.forEach(item => {
				const key = item[fieldName]
				if (item.fieldType === 'CHECKBOX') {
					console.log(item.fieldInitVal)
					this.$set(accept, key, item.fieldInitVal || [])
				} else {
					this.$set(accept, key, item.fieldInitVal || '')
				}
				// 验证规则通过内联方式引入
				// this.rules[key] = item[verlidatorName]
			})
		}
	}
}
