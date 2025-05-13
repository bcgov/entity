<template>
  <div class="form-example">
    <!-- Example of v-model in Vue 3 -->
    <input v-model="localText" @input="updateText" />

    <!-- Example of v-model component binding -->
    <ChildComponent v-model="pageTitle" :content="pageContent" @update:content="pageContent = $event" />

    <!-- Example of event listener (no more .native needed) -->
    <button @click="handleClick">Click Me</button>

    <!-- Example of v-for with key on div -->
    <div v-for="item in items" :key="item.id" class="item">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

export default defineComponent({
  name: 'FormExample',
  components: {
    ChildComponent
  },
  props: {
    // For v-model default
    modelValue: {
      type: String,
      default: ''
    },
    // For v-model with argument
    initialTitle: {
      type: String,
      default: ''
    },
    initialContent: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'update:title', 'update:content', 'click'],
  setup (props, { emit }) {
    // Local state
    const localText = ref(props.modelValue)
    const pageTitle = ref(props.initialTitle)
    const pageContent = ref(props.initialContent)

    // Items for v-for example
    const items = ref([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ])

    // Methods
    const updateText = () => {
      emit('update:modelValue', localText.value)
    }

    const handleClick = () => {
      emit('click')
    }

    return {
      localText,
      pageTitle,
      pageContent,
      items,
      updateText,
      handleClick
    }
  }
})
</script>

<style scoped>
.form-example {
  margin: 20px;
  padding: 10px;
  border: 1px solid #eee;
}

.item {
  padding: 5px;
  margin: 5px 0;
  background-color: #f9f9f9;
}
</style>
