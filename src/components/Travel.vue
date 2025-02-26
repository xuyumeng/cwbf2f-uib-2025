<template>
    <v-container fluid>
      <!-- Title Section -->
      <v-parallax
        src="@/assets/mallorca3.jpeg"
        height="400"
        class="d-flex align-center"
      >
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 mb-4 primary--text">Travel & Accommodation</h2>
            <p class="text-body-1">Essential information for your visit to cWB@UIB 2025</p>
          </v-col>
        </v-row>
      </v-container>
      </v-parallax>
  
      <!-- Transportation Section -->
      <v-sheet color="grey lighten-4" class="py-12">
        <v-container>
          <h3 class="text-h4 mb-6">Getting to ParcBit Campus</h3>
          <v-row>
            <v-col cols="12" md="7">
              <p class="text-body-1">
                The UIB ParcBit campus is located at the last stop of Bus Line 19. 
                <v-icon small>mdi-bus</v-icon> Bus 19 accepts cash (€2) or transport cards (available at stops). 
                Alternative routes include Metro Line M1 (20-minute walk from UIB main campus).
              </p>
              <v-img
                src="@/assets/bus19.png"
                aspect-ratio="1.15"
                class="elevation-6"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height" justify="center" align="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <p class="text-caption text-center mt-2">Bus Line 19 Route Map</p>

              <v-alert color="primary" icon="mdi-alert" dense outlined class="mt-4">
                Consider purchasing a transport card for multiple journeys
              </v-alert>
            </v-col>
            <v-col cols="12" md="5">
              <v-card class="pa-4">
                <v-card-title class="primary--text">
                  <v-icon left>mdi-map-marker</v-icon>
                  Bus Line 19 Resources
                </v-card-title>
                <v-card-text>
                  <v-btn 
                    color="secondary" 
                    href="https://www.emtpalma.cat/en/route/-/L/19/uib-i-parc-bit-porta-des-camp" 
                    target="_blank"
                    block
                    class="mb-3"
                  >
                    <v-icon left>mdi-bus-side</v-icon>
                    Route & Schedule
                  </v-btn>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-cash</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Single Fare: €2 (cash)</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
  
      <!-- Accommodation Section -->
      <v-container class="py-12">
        <h3 class="text-h4 mb-6">Recommended Accommodation</h3>
        <v-row>
          <v-col cols="12" md="8">
            <v-list two-line>
              <v-list-item>
                <!-- <v-list-item-icon>
                  <v-icon color="primary">mdi-hotel</v-icon>
                </v-list-item-icon> -->
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">Best Options:</v-list-item-title>
                  <v-list-item-subtitle>Hotels near Bus line 19</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              
              <v-list-item>
                <!-- <v-list-item-icon>
                  <v-icon color="primary">mdi-walk</v-icon>
                </v-list-item-icon> -->
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">Central Area:</v-list-item-title>
                  <v-list-item-subtitle>Downtown Palma</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
  
              <!-- <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-cash</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">Budget Options:</v-list-item-title>
                  <v-list-item-subtitle>
                    Intermodal Station area or Residencia de Estudiantes Mayol
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item> -->
            </v-list>
          </v-col>
          <!-- <v-col cols="12" md="4">
            <v-alert type="info" border="left" class="mb-4">
              March is low season - check seaside hotels near Bellver Park
            </v-alert>
            <v-alert type="warning" border="left">
              Seaside hotels may limit evening activity participation
            </v-alert>
          </v-col> -->
        </v-row>
      </v-container>
  
      <!-- Transportation Map Section -->
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        height="600"
        class="d-flex align-center"
      >
        <v-container>
          <h3 class="text-h4 mb-6">Airport Shuttle</h3>
          <v-row>
            <v-col cols="12" md="8">
              <v-img
                src="@/assets/busa1.png"
                aspect-ratio="1.54"
                class="elevation-6"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height" justify="center" align="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <p class="text-caption text-center mt-2">Bus Line A1 Route Map</p>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="mb-4">
                <v-card-title class="primary--text">
                  <v-icon left>mdi-airplane</v-icon>
                  Airport Transfer
                </v-card-title> 
                <v-card-text>
                  <p class="text-body-1">
                    <strong>A1 Airport Bus:</strong> €5 ticket (credit card/cash at machine)
                  </p>
                  <!-- <v-divider class="my-3"></v-divider>
                  <p class="text-body-1">
                    <v-icon small>mdi-train</v-icon> Metro connects to Intermodal Station
                  </p> -->
                  <v-btn 
                    color="secondary" 
                    href="https://www.emtpalma.cat/en/lines/A1/aeroport-palma-centre/652/palma-(pg.-mallorca)/1/1031" 
                    target="_blank"
                    block
                    class="mb-3"
                  >
                    <v-icon left>mdi-bus-side</v-icon>
                    Route & Schedule
                  </v-btn>
                </v-card-text>
              </v-card>
  
              <!-- <v-alert color="success" icon="mdi-credit-card" outlined>
                <strong>Save money:</strong> Use credit card directly on TiB buses for better rates
              </v-alert> -->
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>

      <!-- What to do in Mallorca
      <v-container class="py-12">
        <h3 class="text-h4 mb-6">What to do in Mallorca</h3>
        <v-row>
          <v-col cols="12" md="8">
            Baleric Islands Day!
          </v-col>
          <v-col cols="12" md="4">
            
          </v-col>
        </v-row>
      </v-container> -->

    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      // You can add any dynamic data here if needed
    })
  };
  </script>
  
  <style scoped>
  .v-card {
    transition: transform 0.3s ease;
  }
  
  .v-card:hover {
    transform: translateY(-5px);
  }
  </style>