<template>
  <div class="app-container custom-icon-tree">
    <div class="tree">
      <el-tree :data="data" icon-class="icon-tree" :props="defaultProps" @node-click="handleNodeClick" />
    </div>
  </div>
</template>

<script>
import treeData from '@/assets/tree_data/data'

export default {
  name: 'CustomTreeIcon',
  data() {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'drugTypeName'
      }
    }
  },
  created() {
    this.data = treeData
  },
  methods: {
    handleNodeClick(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
	.custom-icon-tree {
		height: 100%;
		/deep/ .el-tree-node__label {
			font-size: 16px;
		}
		/deep/ .icon-tree {
			margin: 0  5px 0 10px;
			position: relative;
			background: url('../../assets/tree_icon/plus.png');
			background-size: 100% 100%;
		}
		/deep/ .expanded{
			background: url('../../assets/tree_icon/minus-portrait.png');
			background-size: 100% 100%;
		}
		/deep/ .is-leaf{
			background-image: none;
			background-size: 100% 100%;
		}
		// 不需要过渡，重新el-tree-node__expand-icon即可
		// /deep/ .el-tree-node__expand-icon {
		// 	transform: initial;
		// 	transition: auto;
		// }
	}
</style>
