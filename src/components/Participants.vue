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
      rawData: `
agata trovato	University of Trieste	FALSE
Alessandro Martini	University of Trento	TRUE
Alicia M. Sintes	University of the Balearic Islands	TRUE
Andrea Miani	Università di trento	TRUE
Antoni Ramos-Buades	University of the Balearic Islands	TRUE
Arnau Montava Agudo	University of the Balearic Islands	TRUE
Claudia Lazzaro	University of Cagliari	TRUE
David Keitel	University of the Balearic Islands	TRUE
Davide Di Piero	University of Trieste	TRUE
Edoardo Milotti	University of Trieste	TRUE
Giacomo Principe	University of Trieste	FALSE
Giovanni Prodi	University of Trento	TRUE
Giuseppe Troian	University of Trieste	TRUE
Iuri La Rosa	University of the Balearic Islands	TRUE
Jesus Yebana	University of the Balearic Islands	TRUE
Joan Llobera-Querol	University of the Balearic Islands	TRUE
Jorge Valencia	University of the Balearic Islands	TRUE
Leigh Smith	University of Trieste	FALSE
Marco Drago	La Sapienza, Roma	FALSE
Maria Antònia Ferrer Martínez	University of the Balearic Islands	TRUE
Maria Rossello	University of the Balearic Islands	TRUE
Matteo Scialpi	University of Ferrara	FALSE
Osvaldo Freitas	University of València	TRUE
Panagiotis Iosif	University of Trieste	FALSE
Pep Covas Vidal	University of the Balearic Islands	TRUE
Sascha Husa	University of the Balearic Islands	TRUE
Shubhanshu Tiwari	University of Zurich	TRUE
Yumeng Xu	University of the Balearic Islands	TRUE
      `,
      participants: [
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
    },

    created() {
      this.participants = this.parseParticipants(this.rawData);
    },

    methods: {
      parseParticipants(input) {
        const lines = input.trim().split("\n"); // Split input into lines
        const attendees = [];

        lines.forEach(line => {
            const parts = line.trim().split(/\s+/); // Split by spaces
            const inperson = parts.pop().toUpperCase() === "TRUE"; // Last part is TRUE/FALSE
            const index = parts.findIndex(word => word.startsWith("Univer") || word.startsWith("La")); // Find where the affiliation starts

            if (index !== -1) {
                const name = parts.slice(0, index).join(" "); // Name before affiliation
                const affiliation = parts.slice(index).join(" "); // Affiliation after name
                attendees.push({ name, affiliation, inperson });
            }
        });

        return attendees;
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
  