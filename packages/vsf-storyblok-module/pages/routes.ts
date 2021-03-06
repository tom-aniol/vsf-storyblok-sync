const StoryblokPage = () => import(/* webpackChunkName: "vsf-storyblok" */ './Storyblok.vue')

export const StoryblokRoutes = [
  {
    name: 'storyblok',
    path: '/storyblok',
    component: StoryblokPage
  },
  {
    name: 'storyblok-single-component-visual-editor-mode',
    path: '/storyblok-empty',
    component: StoryblokPage,
    meta: { layout: 'empty' }
  }
]
