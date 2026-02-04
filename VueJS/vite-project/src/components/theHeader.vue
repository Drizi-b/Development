<template>
  <header class="the-header">
    <h1>Header</h1>

    <div v-for="(item, index) in menu" :key="item.id" class="itens-menu">
      <img :src="item.imgsrc" alt="Imagem do item" />
      <a href="item.link">{{ index }} - {{ item.title }}</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      menu: [
        {
          id: 1,
          title: "Home",
          link: "/",
          imgsrc: "https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg"
        },
        {
          id: 2,
          title: "Sobre",
          link: "/sobre",
          imgsrc: "https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg"
        },
        {
          id: 3,
          title: "Contato",
          link: "/contato",
          imgsrc: "https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg"
        },
      ],
    };
  },
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.itens-menu {
  margin-bottom: 1rem;
}   
.the-header {
  background-color: crimson;
  color: white;
  border-radius: 50%;
  padding: 2rem;
  box-shadow: white 0px 0px 10px;
  height: 300px;
  width: 300px;
}
</style>
