<template>
  <v-container class="py-8">
    <h2 class="text-h3 mb-6 text-center">Workshop Program</h2>

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
    schedule: [
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
        speaker: "TBD"
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
        title: "cWB+waveforms discussions",
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
            title: "Memory effects",
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
            end: "13:00",
            title: "Discussion"
          }
        ]
      },
      {
        start: "13:00",
        end: "14:30",
        title: "Lunch",
        type: "break"
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
        end: "10:40",
        title: "Invited talk: Continuous gravitational waves",
        speaker: "Pep Covas Vidal"
      },
      {
        start: "10:40",
        end: "12:00",
        title: "cWB+pulsar physics+lensing+test GR + other topics",
        subSessions: [
          {
            start: "10:40",
            end: "11:00",
            title: "Coincident detections + Lessons learned from a Bayesian approach to burst detections",
            speaker: "Edoardo Milotti"
          },
          {
            start: "11:00",
            end: "11:20",
            title: "WDM parameters and whitening ",
            speaker: "Alessandro Martini"
          },
          {
            start: "11:20",
            end: "11:40",
            title: "Updates on the study of subthreshold events and antenna pattern",
            speaker: "Davide Di Piero"
          },
          {
            start: "11:40",
            end: "12:00",
            title: "machine scientist proj",
            speaker: "Giuseppe Troian"
          }
        ]
      },
      {
        start: "12:00",
        end: "12:30",
        title: "Coffee break",
        type: "break"
      },
      {
        start: "12:30",
        end: "13:10",
        title: "Invited talk: Pulsar glitches",
        speaker: "David Keitel"
      },
      {
        start: "13:10",
        end: "14:30",
        title: "Lunch",
        type: "break"
      },
      {
        start: "14:30",
        end: "16:30",
        title: "cWB technical discussions",
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
        title: "(Burst call) cWB technical discussions"
      }
    ]
  },
  {
    date: "March 6, Thursday",
    sessions: [
      {
        start: "10:00",
        end: "11:30",
        title: "PycWB Hands-on session"
      },
      {
        start: "11:30",
        end: "12:00",
        title: "Coffee break",
        type: "break"
      },
      {
        start: "12:00",
        end: "13:00",
        title: "cWB technical discussions"
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