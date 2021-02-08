<template>
  <div class="app-container functional-component-container">
    <h2>函数式组件</h2>
    <functionalCell :value="10" />
  </div>
</template>

<script>
import functionalCell from './components/index'

export default {
  name: 'FunctionalComponents',
  components: {
    functionalCell
  }
}
</script>
