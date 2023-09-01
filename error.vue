<template>
  <NuxtLayout>
    <div class="prose" v-if="error.statusCode === '404'">
      <h1>404</h1>
      <p>Nope. No page like that.</p>
    </div>
    <div class="prose" v-else>
      <h1>Oh well</h1>
      <p>It looks like something went wrong.</p>
      <p>This things happen.</p>
    </div>
    <div class="prose">
      <br />
      <p>Error: {{ error.message }}</p>
      <br />
      <p>
        Go to the <a class="hover:cursor-pointer" @click="handleError">first lesson.</a>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const error = useError()
  const handleError = () => {
    clearError({
      redirect:
        '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3',
    })
  }
</script>
