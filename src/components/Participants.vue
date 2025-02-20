<template>
    <v-container class="py-12">
      <h2 class="text-h3 text-center mb-6">Participants</h2>
  
      <!-- Search Field -->
      <v-text-field
        v-model="searchQuery"
        outlined
        placeholder="Search participants..."
        prepend-inner-icon="mdi-magnify"
        class="mb-4"
        hide-details
      ></v-text-field>
  
      <!-- Participants List -->
      <v-list two-line class="elevation-3">
        <template v-for="(participant, index) in filteredParticipants" :key="index">
          <v-list-item>
            <!-- <v-list-item-icon>
              <v-icon color="primary">mdi-account-circle</v-icon>
            </v-list-item-icon> -->
  
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ participant.name }}
                <!-- <v-chip v-if="participant.role" small class="ml-2" color="secondary">
                  {{ participant.role }}
                </v-chip> -->
                <v-chip v-if="participant.inperson" small class="ml-2" color="secondary">
                  In-person
                </v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>{{ participant.affiliation }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
  
          <v-divider v-if="index < filteredParticipants.length - 1" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      searchQuery: '',
      participants: [
        {
          name: "Giovanni Prodi",
          affiliation: "University of Trento",
          inperson: true,
        },
        {
            name: "Francesco Salemi",
            affiliation: "University of Rome",
            inperson: true,
        },
        {
            name: "Marco Drago",
            affiliation: "University of Rome",
            inperson: true,
        },
        {
            name: "Random Person",
            affiliation: "University of Rome",
            inperson: false,
        }
        // Add more participants
      ]
    }),
    
    computed: {
      filteredParticipants() {
        const query = this.searchQuery.toLowerCase();
        return this.participants.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.affiliation.toLowerCase().includes(query)
        );
      }
    }
  };
  </script>
  
  <style scoped>
  .v-list-item__title {
    display: flex;
    align-items: center;
  }
  
  .v-chip {
    font-size: 0.7rem;
    height: 20px;
  }
  </style>
  