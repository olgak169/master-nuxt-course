export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistory = useLocalStorage('history', [])
  navigationHistory.value.push(to.path)
  // console.log(`Navigation history: ${navigationHistory.value.join('\n')}`)
})

// Will keep track of all the pages visited
