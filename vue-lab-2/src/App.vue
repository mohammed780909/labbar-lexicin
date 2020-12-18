<template>
  <div>
    <navbar :active='active'  :name='name'/>
    <loga :active='active' :name='name' :assword='password' @update-user="update"  @update-user2="update2"/>
   </div>
</template>

<script>
import navbar from './components/navbar'
import loga from './components/loga'


export default {
  name: 'App',
  components: {
    navbar,
    loga,
    
  },
  data (){
    return {
      active: true,
      name:'',
      password:''

    }
    
  },
   methods: {
    update(newUser) {
      this.name = newUser.name
      this.password = newUser.password
      this.active = newUser.active
    },
    update2(newUser2) {
     this.name = '',
     this.password = '',
     this.active = newUser2.active
  }
   
  },
  


}
</script>

<style>

</style>
