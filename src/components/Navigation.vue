<template>
  <div>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/cwb_logo_long.png" max-width="130px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-2"
        v-if="isXs"
      />
      <div v-else>
        <v-btn
          v-for="([icon, text, link], i) in items"
          :key="i"
          :href="link"
          text
        >
          <span class="mr-2">{{ text }}</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item title="cWB@UIB 2025 workshop" subtitle="Bursts, Waveforms, and Beyond"></v-list-item>
      </v-list>
      <!-- <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item 
          v-for = "([icon, text, link], i) in items"
          :key="i"
          :prepend-icon="icon"
          :title="text"
          :href="link"
        />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "/"],
      ["mdi-information-outline", "Travel & Accomodation", "/travel"],
      ["mdi-list-box-outline", "Program", "/program"],
      ["mdi-account-group-outline", "Participants", "/participants"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
