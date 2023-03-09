<template>
  <client-only>
    <div class="wrapper">
      <div v-if="titles.length">
        <v-table
          :data="titles"
          :current-page.sync="currentPage"
          :page-size="5"
          @totalPagesChanged="totalPages = $event"
        >
          <thead slot="head">
            <v-th sort-key="Title Number">Title Number</v-th>
            <th>Class of Title</th>
          </thead>
          <tbody slot="body" slot-scope="{ displayData }">
            <tr v-for="row in displayData" :key="row.id">
              <td>
                <nuxt-link
                  :to="{
                    name: 'titles-id',
                    params: { id: row['Title Number'] },
                  }"
                >
                  {{ row['Title Number'] }}
                </nuxt-link>
              </td>
              <td>{{ row.Tenure }}</td>
            </tr>
          </tbody>
        </v-table>
        <smart-pagination
          :hide-single-page="false"
          :current-page.sync="currentPage"
          :total-pages="totalPages"
        />
      </div>
      <h3 v-else>No data found</h3>
    </div>
  </client-only>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters: mapTitleGetters } = createNamespacedHelpers('titles')
export default {
  name: 'IndexPage',

  data: () => ({
    currentPage: 1,
    totalPages: 0,
  }),

  async fetch() {
    const { dispatch } = this.$store

    if (!this.titles.length) {
      await dispatch('titles/fetchTitles')
    }
  },

  computed: {
    ...mapTitleGetters(['titles', 'getTitle']),
  },
}
</script>

<style>
.pagination {
  display: flex;
  list-style: none;
  margin: 24px 0 0 0;
  padding: 0;
  justify-content: space-between;
}

.wrapper {
  margin: 0 auto;
  width: 50%;
}

/* Bit of a hack to hide the page number links */
.page-item {
  display: none;
}

.page-item:first-of-type,
.page-item:last-of-type {
  display: block;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid gray;
  padding: 8px;
}

tr:hover {
  background-color: lightgray;
}

.vt-asc:before {
  content: '\f160';
}

.vt-desc:before {
  content: '\f161';
}

.smart-pagination {
  width: 100%;
}
</style>
