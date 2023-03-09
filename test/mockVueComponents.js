export default [
  {
    name: 'v-th',
    render(h) {
      return h('th', [this.$slots.default])
    },
  },
  {
    name: 'v-table',
    render(h) {
      return h('table', [this.$slots.default])
    },
  },
  {
    name: 'smart-pagination',
    render(h) {
      return h('div', [this.$slots.default])
    },
  },
  {
    name: 'nuxt-child',
    render(h) {
      return h('div', [this.$slots.default])
    },
  },
  {
    name: 'nuxt-link',
    props: ['to'],
    render(h) {
      return h('a', [this.$slots.default])
    },
  },
  {
    name: 'client-only',
    render(h) {
      return h('div', [this.$slots.default])
    },
  },
  {
    name: 'no-ssr',
    render(h) {
      return h('div', [this.$slots.default])
    },
  },
]
