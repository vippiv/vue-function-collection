<template>
	<div class="textslot">
        <h2>slot</h2>
		<slot :textdata="1000" :clicked="handleClicked"></slot>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Textslot',
		data () {
			return {
				checkList: []
			}
        },
        methods: {
            handleClicked () {
                alert('clicked')
            }
        }
	}
</script>
