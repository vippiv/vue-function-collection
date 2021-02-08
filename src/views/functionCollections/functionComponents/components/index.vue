<template functional>
  <div class="cell">
    <div v-if="props.value" class="on">on {{ name }}</div>
    <div v-else class="off">off</div>
  </div>
</template>

<script>
export default {
  name: 'Fc',
  data() {
    return {
      name: 'zwl'
    }
  }
}
</script>
