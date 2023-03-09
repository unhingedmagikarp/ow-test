<template>
  <div class="title-detail">
    <p>{{ currentTitle['Title Number'] }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters: mapTitleGetters } = createNamespacedHelpers('titles')
export default {
  name: 'TitleDetailPage',

  async fetch() {
    const { dispatch } = this.$store

    if (!this.currentTitle) {
      // Ideally would only fetch the one tile I need by ID
      await dispatch('titles/fetchTitles')
    }

    // This feels a bit flaky but don't remember a nicer way to recheck if the
    // resource exists in the store and redirect if not
    if (!this.currentTitle) {
      this.$nuxt.error({ statusCode: 404 })
    }
  },

  computed: {
    ...mapTitleGetters(['getTitle']),

    currentTitle() {
      return this.getTitle(this.$route.params?.id)
    },
  },
}
</script>

<style></style>
