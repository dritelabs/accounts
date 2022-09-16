<script setup lang="ts">
const props = defineProps<{ strings: string[], timeout: number }>()
const currentIndex = useState(() => 0)

let intervalId

const last = props.strings?.length - 1

onMounted(() => {
  intervalId = setInterval(() => {
    if (currentIndex.value < last) {
      currentIndex.value += 1
    } else {
      currentIndex.value = 0
    }
  }, props.timeout)

})

onUnmounted(() => {
  clearInterval(intervalId)
})

</script>

<template>
  <span :style="{ height: '72px', display: 'block', position: 'relative' }">
    <span v-for="(s, i) in strings">
      <Transition name="slide-fade">
        <strong :key="s" v-if="currentIndex === i" :style="{ position: 'absolute' }">
          {{ s }}
        </strong>
      </Transition>
    </span>
  </span>

</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>