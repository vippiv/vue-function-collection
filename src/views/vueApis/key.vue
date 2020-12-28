<template>
	<div class="app-container key-manage">
		<div class="fix-padding">
			<el-select
				class="test-select"
				multiple
				filterable
				remote
				placeholder="请输入关键词"
				:remote-method="remoteMethod"
				:loading="loading"
				@focus="handleFoucs"
				v-model="items">
				<!-- 这里 option 的 key 直接绑定 vfor 的 index -->
				<el-option
					v-for="(item, index) in options"
					:key="index"
					:label="item.label"
					:value="item.value">
					<el-checkbox
						:label="item.value"
						:value="isChecked(item.value)">
						{{ item.label }}
					</el-checkbox>
				</el-option>
			</el-select>
            <h2>index作为key存在的问题</h2>
			<p>第一次选择值后再次输入会导致选择的值出现问题</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'KeyManage',
		data () {
			return {
				options: [],
				items: [],
				list: [],
				loading: false,
				states: ['Alabama', 'Alaska', 'Arizona',
					'Arkansas', 'California', 'Colorado',
					'Connecticut', 'Delaware', 'Florida',
					'Georgia', 'Hawaii', 'Idaho', 'Illinois',
					'Indiana', 'Iowa', 'Kansas', 'Kentucky',
					'Louisiana', 'Maine', 'Maryland',
					'Massachusetts', 'Michigan', 'Minnesota',
					'Mississippi', 'Missouri', 'Montana',
					'Nebraska', 'Nevada', 'New Hampshire',
					'New Jersey', 'New Mexico', 'New York',
					'North Carolina', 'North Dakota', 'Ohio',
					'Oklahoma', 'Oregon', 'Pennsylvania',
					'Rhode Island', 'South Carolina',
					'South Dakota', 'Tennessee', 'Texas',
					'Utah', 'Vermont', 'Virginia',
					'Washington', 'West Virginia', 'Wisconsin',
					'Wyoming']
			}
		},
		mounted () {
			this.list = this.states.map(item => {
				return { value: item, label: item }
			})
		},
		methods: {
			remoteMethod (query) {
				if (query !== '') {
					this.loading = true
					setTimeout(() => {
						this.loading = false
						this.options = this.list.filter(item => {
							return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
						})
					}, 200)
				} else {
					this.options = this.list
				}
			},
			handleFoucs (e) {
				this.remoteMethod(e.target.value)
			},
			isChecked (value) {
				let checked = false
				this.items.forEach((item) => {
					if (item === value) {
						checked = true
					}
				})
				return checked
			}
		}
	}
</script>

<style type="text/css" scoped>
	.key-manage .fix-padding{
		text-align: left;
		padding: 50px;
	}
</style>
