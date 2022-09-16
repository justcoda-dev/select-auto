<template>
  <div id="app">
    <Container>
      <AutocompleteSelect :list="list"/>
    </Container>
  </div>
</template>

<script>

import AutocompleteSelect from "@/components/AutocompleteSelect/AutocompleteSelect";
import Container from "@/components/Container/Container";

export default {
  name: 'App',
  components: {
    AutocompleteSelect,
    Container
  },
  data: () => {
    return {
      list: [{id: 1, name: "Alex"}, {id: 2, name: "Sania"}, {id: 3, name: "Mikle"}, {
        id: 4,
        name: "Alex"
      }, {id: 5, name: "Sania"}, {id: 6, name: "Mikle"},],
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
