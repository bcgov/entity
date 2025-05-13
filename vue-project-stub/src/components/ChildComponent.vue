<template>
  <div class="child-component">
    <h3>{{ title }}</h3>
    <div class="content">{{ content }}</div>
    <div class="actions">
      <button @click="updateTitle('Updated Title')">Update Title</button>
      <button @click="updateContent('Updated Content')">Update Content</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChildComponent',
  props: {
    // Props for v-model with arguments
    title: {
      type: String,
      default: 'Default Title'
    },
    content: {
      type: String,
      default: 'Default Content'
    }
  },
  // Explicitly declare emitted events in Vue 3
  emits: ['update:title', 'update:content'],
  setup (props, { emit }) {
    // Methods
    const updateTitle = (newTitle: string) => {
      emit('update:title', newTitle)
    }

    const updateContent = (newContent: string) => {
      emit('update:content', newContent)
    }

    return {
      updateTitle,
      updateContent
    }
  }
})
</script>

<style scoped>
.child-component {
  padding: 10px;
  margin: 15px 0;
  border: 1px dashed #ccc;
  background-color: #f5f5f5;
}

.content {
  margin: 10px 0;
  padding: 8px;
  background-color: white;
}

.actions button {
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
