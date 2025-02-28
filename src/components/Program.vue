<template>
  <v-container class="py-8">
    <h2 class="text-h3 mb-6 text-center">Workshop Program</h2>

        <!-- Zoom Meeting Card -->
        <v-card class="mb-6" color="primary">
      <v-card-title class="white--text">
        <v-icon left color="white">mdi-video</v-icon>
        Online Participation
      </v-card-title>
      <v-card-text class="white">
        <v-row align="center">
          <v-col cols="12" md="8">
            <!-- show the link if the current date is 2025 Mar 4 -->
            <div class="text-body-1 mb-2" v-if="is_start">
              <strong>Zoom Meeting:</strong>
              <v-btn
                small
                color="secondary"
                :href="zoomlink"
                target="_blank"
                class="ml-2"
              >
                Join Meeting
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
            </div>
            <div class="text-body-1 mb-2" v-else-if="is_end">
              <strong>Workshop has ended</strong>
            </div>
            <div class="text-body-1 mb-2" v-else>
              <strong>Workshop starts on March 4, 2025</strong>
            </div>
            <div class="text-caption">
              <v-icon small>mdi-information</v-icon>
              The Zoom link will be active throughout the workshop
            </div>
          </v-col>
          <!-- <v-col cols="12" md="4" class="text-center">
            <v-img
              src="/path-to-qr-code.png"
              max-width="150"
              class="mx-auto"
              v-if="false"
            />
            <p class="text-caption mt-2">
              <v-icon small>mdi-information</v-icon>
              This link will be active throughout the workshop
            </p>
          </v-col> -->
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Program Schedule -->
    <v-card v-for="(day, index) in schedule" :key="index" class="mb-6">
      <v-card-title class="primary white--text">
        {{ day.date }}
      </v-card-title>

      <v-list dense>
        <template v-for="(session, sIndex) in day.sessions" :key="sIndex">
          <v-list-item 
            :class="{'grey lighten-4': session.type === 'break'}"
            @click="session.subSessions && (session.expanded = !session.expanded)"
          >
            <v-list-item-content>
              <div class="d-flex align-center program-item">
                <div class="time-range mr-4" style="min-width: 120px">
                  {{ session.start }} - {{ session.end }}
                </div>
                <div class="session-title flex-grow-1">
                  <!-- Add coffee icon if type is break -->
                  <v-icon v-if="session.type === 'break'">mdi-coffee</v-icon>
                  <!-- Add a lunch icon if type is lunch -->
                  <v-icon v-if="session.type === 'lunch'">mdi-silverware-fork-knife</v-icon>
                  <v-icon v-if="session.type === 'dinner'">mdi-silverware-fork-knife</v-icon>
                  {{ session.title }}
                  <span v-if="session.speaker" class="text-caption grey--text">
                    ({{ session.speaker }})
                  </span>
                </div>
                <v-icon v-if="session.subSessions" small>
                  {{ session.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-expand-transition v-if="session.subSessions" :key="'sub'+sIndex">
            <div v-show="session.expanded">
              <v-list-item
                v-for="(subSession, ssIndex) in session.subSessions"
                :key="ssIndex"
                class="pl-12"
              >
                <v-list-item-content>
                  <div class="d-flex align-center">
                    <div class="time-range mr-4" style="min-width: 100px">
                      {{ subSession.start }} - {{ subSession.end }}
                    </div>
                    <div>
                      {{ subSession.title }}
                      <span v-if="subSession.speaker" class="text-caption grey--text">
                        ({{ subSession.speaker }})
                      </span>
                    </div>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-expand-transition>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    zoomlink: "https://infn-it.zoom.us/j/84185104807?pwd=OyvhGFkBoFzBa32xsypEqxQ4c1E0yy.1",
    schedule: [
      {
        date: "March 3, Monday",
        sessions: [
          {
            start: "19:30",
            end: "21:00",
            title: "Welcome Dinner",
            type: "dinner"
          }
        ]
      },
      {
        date: "March 4, Tuesday",
        sessions: [
          {
            start: "10:00",
            end: "10:40",
            title: "Invited talk: Waveforms introduction",
            speaker: "Sascha Husa"
          },
          {
            start: "10:40",
            end: "11:20",
            title: "Invited talk: cWB introduction",
            speaker: "Giovanni Prodi"
          },
          {
            start: "11:20",
            end: "11:50",
            title: "Coffee break",
            type: "break"
          },
          {
            start: "11:50",
            end: "13:10",
            title: "cWB+waveforms discussions",
            expanded: true,
            subSessions: [
              {
                start: "11:50",
                end: "12:10",
                title: "Eccentric waveforms",
                speaker: "Antoni Ramos-Buades"
              },
              {
                start: "12:10",
                end: "12:30",
                title: "The (l=2, m=0) spherical harmonic: waveform modeling of aligned-spin and precessing systems including displacement memory",
                speaker: "Maria Rossello"
              },
              {
                start: "12:30",
                end: "12:50",
                title: "NN-based waveform generation",
                speaker: "Osvaldo Freitas"
              },
              {
                start: "12:50",
                end: "13:10",
                title: "Bayesian approach to model selection: inferring humanproof physical laws from unmodeled data",
                speaker: "Giuseppe Troian"
              }
            ]
          },
          {
            start: "13:10",
            end: "14:30",
            title: "Lunch",
            type: "lunch"
          },
          {
            start: "14:30",
            end: "16:30",
            title: "cWB-2G paper discussion (Reserved closed session for paper writing team)",
            note: "Reserved closed session for paper writing team"
          },
          {
            start: "16:30",
            end: "17:00",
            title: "Coffee break",
            type: "break"
          },
          {
            start: "17:00",
            end: "18:30",
            title: "cWB technical discussions",
            description: "Whitening and more whitening and more whitening"
          }
        ]
      },
      {
        date: "March 5, Wednesday",
        sessions: [
          {
            start: "10:00",
            end: "11:20",
            title: "(Burst call) cWB technical discussions"
          },
          {
            start: "11:20",
            end: "11:50",
            title: "Coffee break",
            type: "break"
          },
          {
            start: "11:50",
            end: "12:30",
            title: "cWB + other topics 1",
            expanded: true,
            subSessions: [
              {
                start: "11:50",
                end: "12:10",
                title: "WDM parameters and whitening ",
                speaker: "Alessandro Martini"
              },
              {
                start: "12:10",
                end: "12:30",
                 title: "Updates on the study of subthreshold events and antenna pattern",
                speaker: "Davide Di Piero"
              }
            ]
          },
          {
            start: "12:30",
            end: "13:10",
            title: "Invited talk: Continuous gravitational waves",
            speaker: "Pep Covas Vidal"
          },
          {
            start: "13:10",
            end: "14:30",
            title: "Lunch",
            type: "lunch"
          },
          {
            start: "14:30",
            end: "15:10",
            title: "Invited talk: Glitching pulsars and gravitational waves",
            speaker: "David Keitel"
          },
          {
            start: "15:10",
            end: "16:30",
            title: "cWB + other topics 2",
            expanded: true,
            subSessions: [
              {
                start: "15:10",
                end: "15:30",
                title: "TBD (On lensed continuous gravitational waves)",
                speaker: "Aditya Kumar Sharma"
              },
              {
                start: "15:30",
                end: "15:50",
                title: "Coincident detections",
                speaker: "Edoardo Milotti"
              },
              {
                start: "15:50",
                end: "16:10",
                title: "LISA Science Team",
                speaker: "Anna Heffernan"
              },
              {
                start: "16:10",
                end: "16:30",
                title: "TBD",
                speaker: "Samuel Gómez Gómez"
              },
            ]
          },
          {
            start: "16:30",
            end: "17:00",
            title: "Coffee break",
            type: "break"
          },
          {
            start: "17:00",
            end: "18:30",
            title: "cWB technical discussions"
          },
          {
            start: "19:30",
            end: "21:00",
            title: "Social Dinner",
            type: "dinner"
          }
        ]
      },
      {
        date: "March 6, Thursday",
        sessions: [
          {
            start: "10:00",
            end: "11:20",
            title: "PycWB Hands-on session",
            speaker: "Yumeng Xu"
          },
          {
            start: "11:20",
            end: "11:50",
            title: "Coffee break",
            type: "break"
          },
          {
            start: "11:50",
            end: "13:00",
            title: "cWB and PycWB Development session"
          },
          {
            start: "13:00",
            end: "14:30",
            title: "Lunch",
            type: "lunch"
          },
          {
            start: "14:30",
            end: "16:30",
            title: "cWB technical discussions"
          },
          {
            start: "16:30",
            end: "17:00",
            title: "Coffee break",
            type: "break"
          },
          {
            start: "17:00",
            end: "18:30",
            title: "cWB technical discussions"
          }
        ]
      }
    ]
  }),
  // Add variable if_start to check if the current date is 2025 Mar 4 in Europe/Madrid timezone
  computed: {
    is_start() {
      const now = new Date()
      const start = new Date("2025-03-04T00:00:00+01:00")
      return now >= start
    },
    is_end() {
      const now = new Date()
      const end = new Date("2025-03-06T23:59:59+01:00")
      return now >= end
    }
  },

  methods: {
    initializeExpanded() {
      this.schedule.forEach(day => {
        day.sessions.forEach(session => {
          if (session.subSessions) {
            //this.$set(session, 'expanded', false)
          }
        })
      })
    }
  },
  created() {
    this.initializeExpanded()
  }
}
</script>

<style scoped>
.program-item {
  padding: 12px 0;
}

.time-range {
  font-weight: 500;
  /* color: rgba(0, 0, 0, 0.8); */
}

.session-title {
  /* color: rgba(0, 0, 0, 0.87); */
}

@media (min-width: 960px) {
  .program-item {
    display: grid;
    grid-template-columns: 120px 1fr auto;
    gap: 24px;
  }
  
  .v-list-item__content {
    padding: 8px 0;
  }
}

@media (max-width: 959px) {
  .program-item {
    flex-wrap: wrap;
  }
  
  .time-range {
    width: 100%;
    margin-bottom: 4px;
  }
}
</style>