export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.chapterSlug === '1-chapter-1') {
    return
  }
  // supabase password: ml8CnwAmuNtILaA8
  return navigateTo('/login')
})
