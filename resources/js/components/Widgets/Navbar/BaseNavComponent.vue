<template lang="">
  <div>

  <sidebar-component></sidebar-component>

  <b-navbar toggleable="lg" type="dark" style="background-color: #33057D">
    <!-- <b-navbar-brand href="#" > -->
      <!-- <b-card-img src="assets/img/logo.png" style="width:3%; heigth:3%;"></b-card-img> -->
    <!-- </b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav >
        <b-nav-item v-b-toggle.sidebar-1>Configuracoes</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-nav-item v-b-toggle.sidebar-1>Outros Acessos</b-nav-item>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><b-avatar href="#foo" variant="primary" :text="primeiraLetra" class="align-baseline"></b-avatar></em>
          </template>
          <b-dropdown-item href="#">Meus Dados</b-dropdown-item>
          <b-dropdown-item href="#">Usuários</b-dropdown-item>
          <b-dropdown-item href="#">Alterar Minha Senha</b-dropdown-item>
          <b-dropdown-item href="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
created() {
  this.usuario = this.username;
},
data() {
  return {
    usuario: []
  }
},
computed: {
  primeiraLetra() {
    let nome = this.usuario.username.slice(0,2);
    return nome.toUpperCase();   
  }
},
props: ['username']
}
</script>
<style lang="">
  
</style>