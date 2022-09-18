<template>
  <div class='autocomplete-select'>
    <div class='autocomplete-select__input-wrapper'>
      <input
        :placeholder="placeholder || 'select'"
        v-model='inputValue'
        class='autocomplete-select__input'
        type='text'
        :disabled='disabledInput'
      >
      <div class='autocomplete-select__buttons-wrapper'>
        <button
          v-if='selectedItem'
          class='button autocomplete-select__cancel'
          @click='cancelSelected' />
        <button
          class='button autocomplete-select__open'
          @click='showList' />
      </div>
    </div>
    <ul v-if='listShow && listLength'
        class='autocomplete-select__list'>
      <li
        ref='item'
        :tabindex='tabindex'
        v-for='(item, index) of listOfSimilar'
        @keyup.up='onKeyUp'
        @keyup.down='onKeyDown'
        @keyup.enter='onKeyEnter'
        :key='item.id'
        class='autocomplete-select__list-item'
        :class='{selected:hoverItemIndex === index}'
        @click='selectItem(item)'
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { filterArrByWord } from '@/functions/includeFilter';

export default {
  name: 'AutocompleteSelect',
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  data: () => {
    return {
      selectedItem: '',
      listShow: false,
      selectedItemId: '',
      disabledInput: false,
      placeholder: '',
      timeoutId: '',
      debouncedInputValue: '',
      hoverItemIndex: 0,
      tabindex: '0',
      searchOptionsCount: 10,
    };
  },
  watch: {
    inputValue() {
      this.listShow = !!this.inputValue.length && !this.selectedItem;
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.debouncedInputValue;
      },
      set(value) {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          this.debouncedInputValue = value;
        }, 300);
      },
    },
    listLength() {
      return this.list.length;
    },
    listOfSimilar() {
      return this.inputValue.length ? filterArrByWord(this.inputValue, this.list, this.searchOptionsCount) : this.list;
    },
  },
  methods: {
    selectItem(item) {
      this.listShow = false;
      this.selectedItem = item.name;
      this.inputValue = item.name;
      this.disabledInput = true;
    },
    showList() {
      this.listShow = !this.listShow;
      this.hoverItemIndex = 0;
      if (this.listLength && this.listShow) {
        this.$nextTick(() => {
          this.$refs['item'][0].focus();
        });
      }
    },
    cancelSelected() {
      this.inputValue = '';
      this.listShow = false;
      this.selectedItem = '';
      this.disabledInput = false;
    },
    onKeyUp() {
      this.hoverItemIndex = this.hoverItemIndex > 0 ? this.hoverItemIndex - 1 : 0;
    },
    onKeyDown() {
      this.hoverItemIndex = this.hoverItemIndex < this.listLength - 1 ? this.hoverItemIndex + 1 : this.hoverItemIndex;
    },
    onKeyEnter() {
      this.selectItem(this.list[this.hoverItemIndex]);
    },
  },
};
</script>

<style lang='scss' scoped>

.autocomplete-select {
  color: #60666d;
  // global styles
  .button {
    background: none;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  .selected {
    border: 2px solid #60666d;;
  }

  // /global styles

  &__input-wrapper {
    display: flex;
    min-width: 170px;
    padding: 15px 10px;
    background: #ffffff;
    box-shadow: 0 0 15px #afadad;
  }

  &__input {
    width: 100%;
    padding-right: 10px;
    outline: none;
    border: none;
    font-size: 20px;
    color: #60666d;

    &:disabled {
      background: none;
    }
  }

  &__buttons-wrapper {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 5px;
  }

  &__cancel {
    position: relative;
    margin: 0 auto;

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("../../assets/close.png");
      background-size: cover;
    }
  }

  &__open {
    position: relative;

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("../../assets/arrow-down.png");
      background-size: cover;
    }

  }

  &__list {
    margin: 15px 0 0 0;
    padding: 0;
    list-style: none;
    max-height: 100px;
    overflow: auto;
    box-shadow: 0 0 15px #afadad;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: linear-gradient(to bottom, #f2faff 0%, #f1f3f6 100%);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #60666d;
    }
  }

  &__list-item {
    cursor: pointer;
    padding: 15px 10px;
    background: #ffffff;

    &:hover {
      background: #f1f3f6;
    }

    &:focus {
      outline: none;
    }
  }
}

@keyframes openAnimation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }

}
</style>