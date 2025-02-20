<template>
    <v-container class="py-12">
      <h2 class="text-h3 text-center mb-8">Workshop Program</h2>
      
      <v-timeline dense clipped>
        <v-timeline-item
          v-for="(day, dayIndex) in program"
          :key="dayIndex"
          large
          color="primary"
        >
          <template v-slot:opposite>
            <span class="text-h6 primary--text">{{ day.date }}</span>
          </template>
          
          <v-card class="elevation-3">
            <v-card-title class="primary white--text">
              Day {{ dayIndex + 1 }}
            </v-card-title>
            
            <v-list dense>
              <v-list-item
                v-for="(session, sessionIndex) in day.sessions"
                :key="sessionIndex"
                :class="{
                  'grey lighten-4': session.type === 'break',
                  'amber lighten-5': session.type === 'meal'
                }"
              >
                <v-list-item-icon>
                  <v-icon v-if="session.type === 'break'">mdi-coffee</v-icon>
                  <v-icon v-else-if="session.type === 'meal'">mdi-food</v-icon>
                  <v-icon v-else>mdi-presentation</v-icon>
                </v-list-item-icon>
                
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">
                    {{ session.time }} - {{ session.title }}
                    <v-chip v-if="session.speaker" small class="ml-2" color="secondary">
                      {{ session.speaker }}
                    </v-chip>
                  </v-list-item-title>
                  
                  <v-list-item-subtitle v-if="session.note" class="text-caption">
                    {{ session.note }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      program: [
        {
          date: "March 4, Tuesday",
          sessions: [
            { time: "10:00", title: "Waveforms introduction", type: "session" },
            { time: "10:40", title: "cWB introduction", type: "session", speaker: "TBA" },
            { time: "11:20", title: "Coffee break", type: "break" },
            { time: "11:50", title: "cWB + waveforms discussions", type: "discussion" },
            { time: "13:00", title: "Lunch", type: "meal" },
            { time: "14:30", title: "cWB-2G paper discussion", type: "session", 
              note: "Reserved closed session for paper writing team" },
            { time: "16:30", title: "Coffee break", type: "break" },
            { time: "17:00", title: "cWB technical discussions", type: "discussion", 
              note: "Whitening and more whitening and more whitening" }
          ]
        },
        {
          date: "March 5, Wednesday",
          sessions: [
            { time: "10:00", title: "Pulsars", type: "session" },
            { time: "10:45", title: "cWB + pulsar physics + lensing + test GR + other topics", type: "discussion" },
            { time: "12:00", title: "Coffee break", type: "break" },
            { time: "12:30", title: "Pulsar glitches", type: "session" },
            { time: "13:00", title: "Lunch", type: "meal" },
            { time: "14:30", title: "cWB technical discussions", type: "discussion", 
              note: "PycWB tutorial and development discussion" },
            { time: "16:30", title: "Coffee break", type: "break" },
            { time: "17:00", title: "(Burst call) cWB technical discussions", type: "discussion" }
          ]
        },
        {
          date: "March 6, Thursday",
          sessions: [
            { time: "10:00", title: "cWB technical discussions", type: "discussion" },
            { time: "11:30", title: "Coffee break", type: "break" },
            { time: "11:45", title: "cWB technical discussions", type: "discussion" },
            { time: "14:30", title: "cWB technical discussions", type: "discussion" },
            { time: "16:30", title: "Coffee break", type: "break" },
            { time: "17:00", title: "cWB technical discussions", type: "discussion" }
          ]
        }
      ]
    })
  };
  </script>
  
  <style scoped>
  .v-timeline-item {
    margin-bottom: 2rem;
  }
  
  .v-chip {
    font-size: 0.7rem;
    height: 20px;
  }
  </style>