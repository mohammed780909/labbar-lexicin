<template>
  <nav >
        <h4>M.d@WooD</h4>
        <ul v-if="active">
            <li>Sign in</li>
            
        </ul>
        <ul v-else>
          <li>Wellcome {{ name }} </li>
          
      </ul>
  </nav>
</template>

<script>
export default {
props:['active' , 'name' ]
}
</script>

<style scoped>
nav {
    background-color: #244b4b69;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
ul {
    list-style: none;
    display: flex;
}
a {
    color: #fff;
    text-decoration: none;
    padding: 1.5rem;
    display: inline-block;
}
a:hover {
    background: rgba(0, 0, 0, 0.157);
}
</style>