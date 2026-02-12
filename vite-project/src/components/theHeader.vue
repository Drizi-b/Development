<template>
  <header class="the-header">
    <h1>Header</h1>

    <div v-for="(item, index) in menu" :key="item.id" class="itens-menu">
      <img :src="item.imgsrc" :class="{img: true, 'img-home': isHome }" alt="Imagem do item" />
      <a href="item.link">{{ index }} - {{ item.title }}</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      classVar: "img",
      isHome: true,
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
  padding: 4rem;
  padding-bottom: 6rem;
  border: 10px solid white;
  box-shadow: white 0px 0px 10px;
  height: 300px;
  width: 300px;
}
.the-header .itens-menu:first-of-type .img-home { /*para acatar a config apenas na primeira imagem*/
  border: 5px solid rgb(78, 3, 3);
  box-shadow: 0px 0px 15px rgb(78, 3, 3);
}
</style>
