import VueSmoothScroll from 'vue3-smooth-scroll'
export function useSmoothScroll(app) {
   const smoothScroll =  app.use(VueSmoothScroll, {
        duration: 400,
        updateHistory: false
      })

      return {smoothScroll}
}