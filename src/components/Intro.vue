<template>
  <v-container fluid>
    <!-- Title Section -->
    <v-parallax src="@/assets/GravWave_bg.jpg" height="600" class="d-flex align-center">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="text-h2 font-weight-bold mb-4 white--text">
            cWB@UIB 2025 Workshop
          </h1>
          <h2 class="text-h4 mb-4 white--text">
            Bursts, Waveforms, and Beyond
          </h2>
          <p class="text-h6 white--text">March 4-6, 2025 | University of the Balearic Islands</p>
          <!-- <v-btn color="primary" large class="mt-6" @click="$vuetify.goTo('#about')">
              Learn More
            </v-btn> -->
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Introduction Section -->
    <v-container id="about" class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h3 text-center mb-6">About the Workshop</h2>
          <p class="text-body-1 text-center">
            We are excited to welcome you to the cWB-2G Face-to-Face Workshop (cWBf2f) 2025,
            hosted at the University of the Balearic Islands (UIB).
            This workshop aims to advance and modernize coherent WaveBurst (cWB-2G) and PycWB,
            enhancing burst searches for the LVK collaboration and future gravitational wave observatories.
          </p>
          <p class="text-body-1 text-center">
            As UIB is home to a vibrant research community in gravitational wave science,
            this event will also foster collaboration and synergy between different scientific groups.
            Through a mix of technical discussions, hands-on sessions, and scientific exchanges,
            we will explore waveform modeling, burst searches, pulsar physics, gravitational lensing,
            and tests of General Relativity.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Theme & Highlights -->
    <!-- <v-sheet color="grey lighten-4" class="py-12">
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
      </v-sheet> -->

    <!-- Venue Section -->
    <v-parallax src="@/assets/parcbit.jpeg" max-height="800" class="d-flex align-center">
      <!-- <v-sheet color="primary lighten-5" class="py-12"> -->
      <v-container class="py-12">
        <h2 class="text-h3 text-center mb-8">Venue</h2>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-card class="mb-6" style="background-color: rgba(0, 0, 0, 0.7);">
              <v-card-text>
                <p class="text-body-1">
                  The workshop will be held at the IAC3 Institute on the ParcBit Campus of the University of the
                  Balearic Islands,
                  featuring state-of-the-art facilities and surrounded by the beautiful
                  Mediterranean landscape.
                </p>
                <p class="text-body-1 font-weight-bold">Address:</p>
                <p class="text-body-2 ml-4">
                  IAC3 – UIB <br>
                  Carretera de Valldemossa, km 7.4, Parc BIT<br>
                  Carrer Blaise Pascal, 6<br>
                  Palma 07121, Illes Balears, Spain
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38343.52183025821!2d2.6156051448094275!3d39.619992238401245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297ed006af431cd%3A0x4804fa9ddc0a0f0f!2sIAC3%20Institute%20of%20Applied%20Computing%20%26%20Community%20Code!5e0!3m2!1sen!2ses!4v1740066116732!5m2!1sen!2ses"
              width="100%" height="300" style="border:0;" allowfullscreen loading="lazy"></iframe>
          </v-col>
        </v-row>
      </v-container>
      <!-- </v-sheet> -->
    </v-parallax>
    <!-- Organizing Committee -->
    <v-sheet class="py-12">
      <v-container>
        <h2 class="text-h3 text-center mb-8">Organizing Committee</h2>
        <v-row>
          <v-col v-for="(member, index) in committee" :key="index" cols="12" md="4">
            <v-card class="pa-4 text-center" hover>
              <v-avatar size="120" class="my-4">
                <v-img :src="member.avatar"></v-img>
              </v-avatar>
              <h3 class="text-h6">{{ member.name }}</h3>
              <p class="text-body-2">{{ member.affiliation }}</p>
              <!-- <p class="text-caption font-italic">{{ member.role }}</p> -->
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <p class="text-caption">
                This workshop was supported by the Universitat de les Illes Balears (UIB); the Spanish Agencia Estatal de Investigación grants PID2022-138626NB-I00, RED2022-134204-E, RED2022-134411-T, funded by MICIU/AEI/10.13039/501100011033 and the ERDF/EU; and the Comunitat Autònoma de les Illes Balears through the Conselleria d'Educació i Universitats with funds from the European Union - NextGenerationEU/PRTR-C17.I1 (SINCO2022/6719) 
              </p>
            </v-col>
          </v-row> -->
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-12">
        <!-- acknowlegment -->
        <v-row justify="center" class="mb-6">
          <v-col cols="12" md="10">
            <!-- Logo Grid -->
            <v-row justify="center" align="center" class="mb-8">
              <v-col cols="4" sm="3" md="3" class="d-flex justify-center">
                <v-img src="@/assets/Picture2.png" contain height="100%" />
              </v-col>
              <v-col cols="4" sm="3" md="3" class="d-flex justify-center">
                <v-img src="@/assets/Picture3.png" contain height="100%" />
              </v-col>
              <v-col cols="4" sm="3" md="3" class="d-flex justify-center bg-white">
                  <v-img src="@/assets/Picture4.png" contain height="100%" />
              </v-col>
              <v-col cols="4" sm="3" md="3" class="d-flex justify-center">
                <v-img src="@/assets/Picture5.png" contain height="100%" />
              </v-col>
              <v-col cols="4" sm="3" md="3" class="d-flex justify-center bg-grey">
                <v-img src="@/assets/Picture6.png" contain height="100%" />
              </v-col>
            </v-row>

            <!-- Footnotes -->
            <div class="text-caption text--secondary text-center mt-8">
              <p class="mb-2">
                This workshop was supported by the Universitat de les Illes Balears (UIB); the Spanish Agencia Estatal
                de Investigación grants PID2022-138626NB-I00, funded by
                MICIU/AEI/10.13039/501100011033 and the ERDF/EU; and the Comunitat Autònoma de les Illes Balears through
                the Conselleria d'Educació i Universitats with funds from the European Union -
                NextGenerationEU/PRTR-C17.I1 (SINCO2022/6719)
              </p>
            </div>
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
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Dr. Shubhanshu Tiwari",
          affiliation: "University of Zurich",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Prof. Sascha Husa",
          affiliation: "University of the Balearic Islands",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Prof. David Keitel",
          affiliation: "University of the Balearic Islands",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Prof. Alicia Sintes",
          affiliation: "University of the Balearic Islands",
          avatar: "https://via.placeholder.com/150"
        },
        {
          name: "Joan Llobera-Querol",
          affiliation: "University of the Balearic Islands",
          avatar: "https://via.placeholder.com/150"
        },
        // Add more committee members
      ],
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