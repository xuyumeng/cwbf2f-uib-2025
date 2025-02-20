<template>
    <v-container class="py-8">
      <h2 class="text-h3 text-center mb-6">Workshop Program</h2>
  
      <v-row v-for="(day, dayIndex) in program" :key="dayIndex" class="mb-6">
        <v-col cols="12">
          <v-card class="elevation-3">
            <v-card-title class="primary white--text">
              <v-icon left>mdi-calendar</v-icon>
              {{ day.date }}
            </v-card-title>
  
            <v-list dense class="py-2">
              <template v-for="(session, sessionIndex) in day.sessions" :key="sessionIndex">
                <v-list-item
                  :class="{
                    'grey lighten-4': session.type === 'break',
                    'amber lighten-5': session.type === 'meal',
                    'primary lighten-5': session.type === 'discussion'
                  }"
                >
                  <v-list-item-icon class="mr-2">
                    <v-icon v-if="session.type === 'break'" color="primary">mdi-coffee</v-icon>
                    <v-icon v-else-if="session.type === 'meal'" color="primary">mdi-food</v-icon>
                    <v-icon v-else color="primary">mdi-presentation</v-icon>
                  </v-list-item-icon>
  
                  <v-list-item-content>
                    <v-list-item-title class="d-flex flex-wrap align-center">
                      <span class="font-weight-bold session-time">{{ session.time }}</span>
                      <span class="mx-2">•</span>
                      <span class="session-title">{{ session.title }}</span>
                      <v-chip v-if="session.speaker" small class="ml-2" color="secondary">
                        {{ session.speaker }}
                      </v-chip>
                    </v-list-item-title>
  
                    <v-list-item-subtitle v-if="session.note" class="text-caption mt-1">
                      {{ session.note }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
  
                <v-divider v-if="sessionIndex < day.sessions.length - 1" :key="`divider-${sessionIndex}`"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
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
  .session-time {
    min-width: 70px;
  }
  
  .session-title {
    flex: 1;
    min-width: 200px;
  }
  
  .v-list-item {
    min-height: 56px;
  }
  
  @media (max-width: 600px) {
    .session-time {
      width: 100%;
      margin-bottom: 4px;
    }
    
    .session-title {
      min-width: 100%;
    }
    
    .v-chip {
      margin-top: 4px;
    }
    
    .v-list-item__title {
      flex-direction: column;
      align-items: flex-start !important;
    }
    
    .v-list-item__icon {
      margin-right: 8px !important;
    }
  }
  </style>