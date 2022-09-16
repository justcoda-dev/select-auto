<template>
  <div class="autocomplete-select">
    <div class="autocomplete-select__input-wrapper">
      <input
          :placeholder="placeholder || 'select'"
          v-model="inputValue"
          class="autocomplete-select__input"
          type="text"
          :disabled="disabledInput"
          autocomplete="off"
          @keyup.up="keyUp"
          @keyup.down="keyDown"
      >
      <div class="autocomplete-select__buttons-wrapper">
        <button
            v-if="selectedItem"
            class="button autocomplete-select__cancel"
            @click="cancelSelected"/>
        <button
            class="button autocomplete-select__open"
            @click="showList"/>
      </div>
    </div>
    <ul v-if="listShow"
        class="autocomplete-select__list">
      <li
          v-for="item of listOfSimilar"
          :key="item.id"
          class="autocomplete-select__list-item"
          @click="selectItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {includeFilter} from "@/functions/includeFilter";
// import {debounce} from "@/functions/debounce";

export default {
  name: "AutocompleteSelect",
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data: () => {
    return {
      selectedItem: "",
      listShow: false,
      selectedItemId: "",
      disabledInput: false,
      placeholder: "",
      timeoutId: 300,
      debouncedInputValue: ''
    }
  },
  watch: {
    inputValue() {
      this.listShow = !!this.inputValue.length && !this.selectedItem;
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.debouncedInputValue
      },
      set(value) {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId)
        }
        this.timeoutId = setTimeout(() => {
          this.debouncedInputValue = value
        }, 300)
      }
    },
    listOfSimilar() {
      return this.inputValue.length ? includeFilter(this.inputValue, this.list) : this.list
    },
  },
  methods: {
    selectItem(item) {
      this.listShow = false
      this.selectedItem = item.name
      this.inputValue = item.name
      this.disabledInput = true
    },
    showList() {
      this.listShow = !this.listShow
    },
    cancelSelected() {
      this.inputValue = ""
      this.listShow = false
      this.selectedItem = ""
      this.disabledInput = false
    },
    keyUp() {
      console.log("+1")
    },
    keyDown() {
      console.log("-1")
    },
  },
}
</script>

<style lang="scss" scoped>

.autocomplete-select {
  color: #60666d;
  //
  .button {
    background: none;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  //
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