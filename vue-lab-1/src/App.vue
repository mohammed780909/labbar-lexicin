<template>
  <div >
    <navbar/>
    <hero/>
    <foot/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import hero from './components/hero'
import foot from './components/foot'

export default {
  name: 'App',
  components: {
    navbar,
    hero,
    foot
  }
}
</script>

<style>

</style>
