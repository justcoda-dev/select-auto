<template>
  <div id='app'>
    <Container>
      <AutocompleteSelect :list='list' />
    </Container>
  </div>
</template>

<script>

import AutocompleteSelect from '@/components/AutocompleteSelect/AutocompleteSelect';
import Container from '@/components/Container/Container';

export default {
  name: 'App',
  components: {
    AutocompleteSelect,
    Container,
  },
  data: () => {
    return {
      list: [
        { id: 1, name: 'Abidjan' },
        { id: 2, name: 'Adelaide' },
        { id: 3, name: 'Berlin' },
        { id: 4, name: 'Guadalajara' },
        { id: 5, name: 'Gothenburg' },
        { id: 6, name: 'Jilin' },
        { id: 7, name: 'Glasgow' },
        { id: 8, name: 'Zaporizhia' },
        { id: 9, name: 'Innsbruck' },
        { id: 10, name: 'Izmir' },
        { id: 11, name: 'Calcutta' },
        { id: 12, name: 'Mexico' },
        { id: 13, name: 'Poznan' },
        { id: 14, name: 'Tartu' },
        { id: 15, name: 'Zibo' },
      ],
    };
  },
};
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
