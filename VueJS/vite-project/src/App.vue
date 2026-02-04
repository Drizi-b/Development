
<template>
    <TheHeader v-show="showHeader"/>
    <div v-show="showName">
      Nome: {{ primeiroNome }} <br>
      Sobrenome: {{ segundoNome }}
    </div>
    <div v-if="accessLevel === 'admin'">Admin</div>
    <div v-else-if="accessLevel === 'user-default'">Usuário padrão</div>
    <div v-else-if="accessLevel === 'frontend'">Front-End</div>
    <div v-else>Back-End</div> 
</template> 
  <script>
  import TheHeader from './components/theHeader.vue'

  export default {
    name: 'App',
    components: {
      TheHeader
    },

    data() {
      return {
        showHeader: true,
        showName: true,
        primeiroNome: 'Adri',
        segundoNome: 'Balon',
        accessLevel: 'admin'
      }
    }
  }
  </script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
