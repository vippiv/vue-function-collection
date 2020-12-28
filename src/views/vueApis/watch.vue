<template>
	<div class="app-container watchHigherApply">
		<p>watch 高级用法</p>
		{{firstName}}，{{lastName}}，{{fullName}}
		<hr>
		<p>person.age: {{person.age}}</p>
		<p>person.age: <input type="text" v-model="person.age"></p>
		<hr>
		<watchParent></watchParent>
		<textSlot>
			<template #default="{textdata, clicked}">
				<p @click="clicked">{{textdata}}</p>
				<p @click="handleTextSlot">hhhhh</p>
			</template>
		</textSlot>
	</div>
</template>

<script type="text/javascript">
	import watchParent from './components/watchParent'
	import textSlot from './components/textSlot'
	export default {
		name: 'watchHigherApply',
		data () {
			return {
				firstName: 'li',
				lastName: 'lei',
				fullName: '',
				person: {
					name: 'HanMei',
					age: 20
				}
			}
		},
		components: {
			watchParent,
			textSlot
		},
		watch: {
			firstName: {
				handler (newVal, oldVal) { // watch默认执行的就是这个handler
					this.fullName = this.firstName + ' ' + this.lastName
				},
				immediate: true // 有了这个属性不需要等到firstName发生变化即可执行
			},
			person: {
				handler (newVal, oldVal) {
					console.log('person obj changed')
				},
				immediate: true,
				deep: true // 当设置deep为true时，才能监听到person子元素的更改，但这样做开销比较大，person任何元素的更改都会触发监听
			}
		},
		mounted () {
			setTimeout(() => {
				this.fullName = this.firstName + ' ' + this.lastName
				console.log(this.fullName)
			}, 1500)
		},
		methods: {
			handleTextSlot () {
				alert('textSlot')
			}
		}
	}
</script>

<style lang="scss">
	.watchHigherApply{
		p{
			border: 1px solid transparent;
			line-height: 2
		}
	}
</style>
