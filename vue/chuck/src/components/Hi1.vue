<template>
    <div>
        <h2>{{ msg }}####{{ $route.params.username}}$$$${{ $route.params.id}}</h2>
    </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Hi I am Hi1.'
    }
  }
}
</script>

<style scoped>

</style>
