<template>
    <v-container fluid>
      <!-- Title Section -->
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        height="600"
        class="d-flex align-center"
      >
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h2 font-weight-bold mb-4 white--text">
              cWB@UIB 2025 Workshop
            </h1>
            <h2 class="text-h4 mb-4 white--text">
              Bursts, Waveforms, and Beyond
            </h2>
            <p class="text-h6 white--text">March 15-19, 2025 | University of the Balearic Islands</p>
            <v-btn color="primary" large class="mt-6" @click="$vuetify.goTo('#about')">
              Learn More
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
  
      <!-- Introduction Section -->
      <v-container id="about" class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="text-h3 text-center mb-6">About the Workshop</h2>
            <p class="text-body-1 text-center">
              The cWB@UIB 2025 workshop brings together experts in gravitational-wave astronomy,
              numerical relativity, and data analysis to explore the latest developments in
              burst detection, waveform modeling, and beyond-standard signal analysis.
            </p>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Theme & Highlights -->
      <v-sheet color="grey lighten-4" class="py-12">
        <v-container>
          <h2 class="text-h3 text-center mb-8">Workshop Themes</h2>
          <v-row>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon large color="primary">mdi-lightbulb-on</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">Core Topics</v-list-item-title>
                    <v-list-item-subtitle>
                      Gravitational-wave bursts, unmodeled signal analysis, waveform reconstruction
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <!-- Add more list items -->
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="primary white--text">
                  Key Highlights
                </v-card-title>
                <v-card-text>
                  <v-timeline dense>
                    <v-timeline-item
                      v-for="(highlight, i) in highlights"
                      :key="i"
                      small
                      color="primary"
                    >
                      <div class="text-body-1">{{ highlight }}</div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
  
      <!-- Venue Section -->
      <v-container class="py-12">
        <h2 class="text-h3 text-center mb-8">Venue</h2>
        <v-row align="center">
          <v-col cols="12" md="6">
            <p class="text-body-1">
              The workshop will be held at the University of the Balearic Islands Campus,
              featuring state-of-the-art facilities and surrounded by the beautiful
              Mediterranean landscape.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38343.52183025821!2d2.6156051448094275!3d39.619992238401245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297ed006af431cd%3A0x4804fa9ddc0a0f0f!2sIAC3%20Institute%20of%20Applied%20Computing%20%26%20Community%20Code!5e0!3m2!1sen!2ses!4v1740066116732!5m2!1sen!2ses"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Organizing Committee -->
      <v-sheet color="primary lighten-5" class="py-12">
        <v-container>
          <h2 class="text-h3 text-center mb-8">Organizing Committee</h2>
          <v-row>
            <v-col
              v-for="(member, index) in committee"
              :key="index"
              cols="12"
              md="4"
            >
              <v-card class="pa-4 text-center" hover>
                <v-avatar size="120" class="my-4">
                  <v-img :src="member.avatar"></v-img>
                </v-avatar>
                <h3 class="text-h6">{{ member.name }}</h3>
                <p class="text-body-2">{{ member.affiliation }}</p>
                <p class="text-caption font-italic">{{ member.role }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      highlights: [
        "Latest results from gravitational-wave detectors",
        "Machine learning approaches for burst detection",
        "Multi-messenger follow-up strategies",
        "Next-generation waveform modeling techniques"
      ],
      committee: [
        {
          name: "Dr. Yumeng Xu",
          affiliation: "University of the Balearic Islands",
          role: "Chair",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Dr. Shubhanshu Tiwari",
          affiliation: "University of Zurich",
          role: "Chair",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Prof. Sascha Husa",
          affiliation: "University of the Balearic Islands",
          role: "Chair",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Prof. David Keitel",
          affiliation: "University of the Balearic Islands",
          role: "Chair",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Prof. Alicia Sintes",
          affiliation: "University of the Balearic Islands",
          role: "Chair",
          avatar: "https://via.placeholder.com/150"
        },
        // Add more committee members
      ]
    })
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  .v-card--hover:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
  </style>