function parseParticipants(input) {
    const lines = input.trim().split("\n"); // Split input into lines
    const attendees = [];

    lines.forEach(line => {
        const parts = line.trim().split(/\s+/); // Split by spaces
        const inperson = parts.pop().toUpperCase() === "TRUE"; // Last part is TRUE/FALSE
        let index = parts.findIndex(word => word.startsWith("Univer"))
        if (index == -1) {
            index = parts.findIndex(word => word.startsWith("Sapienza"))

            index -= 1
        }

        if (index !== -1) {
            const name = parts.slice(0, index).join(" "); // Name before affiliation
            const affiliation = parts.slice(index).join(" "); // Affiliation after name
            attendees.push({ name, affiliation, inperson });
        }
    });

    return attendees;
}

const rawData = `Aditya Kumar Sharma	University of the Balearic Islands	TRUE
agata trovato	University of Trieste	FALSE
Alessandro Martini	University of Trento	TRUE
Alicia M. Sintes	University of the Balearic Islands	TRUE
Andrea Miani	Università di trento	TRUE
Anna Heffernan	University of the Balearic Islands	TRUE
Antoni Ramos-Buades	University of the Balearic Islands	TRUE
Arnau Montava Agudo	University of the Balearic Islands	TRUE
Claudia Lazzaro	University of Cagliari	TRUE
David Keitel	University of the Balearic Islands	TRUE
Davide Di Piero	University of Trieste	TRUE
Edoardo Milotti	University of Trieste	TRUE
Francesco Salemi	University of Rome "La Sapienza"	TRUE
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
Samuel Gómez Gómez	University of the Balearic Islands	TRUE
Sascha Husa	University of the Balearic Islands	TRUE
Shubhanshu Tiwari	University of Zurich	TRUE
Yumeng Xu	University of the Balearic Islands	TRUE`

const program = [
    {
      date: "March 3, Monday",
      sessions: [
        {
          start: "20:30",
          end: "22:00",
          title: "Welcome Dinner (at Mozzatura)",
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
          title: "cWB-2G paper discussion",
          note: "Reserved closed session for paper writing team",
          pwt_only: true
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
          title: "(Burst call) cWB technical discussions",
          lvk_only: true,
        },
        {
          start: "11:20",
          end: "11:50",
          title: "Coffee break",
          type: "break"
        },
        {
          start: "11:40",
          end: "12:20",
          title: "cWB + other topics",
          lvk_only: true,
          expanded: true,
          subSessions: [
            {
              start: "11:40",
              end: "12:00",
              title: "Updates on the study of subthreshold events and antenna pattern",
              lvk_only: true,
              speaker: "Davide Di Piero"
            },
            {
              start: "12:00",
              end: "12:20",
              title: "Coincident detections",
              lvk_only: true,
              speaker: "Edoardo Milotti"
            }
          ]
        },
        {
          start: "12:20",
          end: "13:00",
          title: "Invited talk: Continuous gravitational waves",
          speaker: "Pep Covas Vidal"
        },
        {
          start: "13:00",
          end: "13:10",
          title: "Group photo",
        },
        {
          start: "13:20",
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
              title: "Probing Sgr A* properties with lensed continuous gravitational waves",
              speaker: "Aditya Kumar Sharma"
            },
            {
              start: "15:30",
              end: "15:50",
              title: "LISA Science Team",
              speaker: "Anna Heffernan"
            },
            {
              start: "15:50",
              end: "16:10",
              title: "Gravitational Waves and Gravitational Atoms",
              speaker: "Samuel Gómez Gómez"
            },
            {
              start: "16:10",
              end: "16:30",
              title: "WDM parameters and whiteningg",
              speaker: "Alessandro Martini"
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

let participants = parseParticipants(rawData);
let participants_inperson = participants.filter(p => p.inperson);

// console.log(participants_inperson);

// flatten the program
let flatProgram = [];
program.forEach(day => {
    day.sessions.forEach(session => {
        flatProgram.push({ date: day.date, ...session });

        if (session.subSessions) {
            session.subSessions.forEach(subSession => {
                flatProgram.push({ date: day.date, ...subSession });
            });
        }
    });
});

// console.log(flatProgram);

// add talk title to participants

participants_inperson.forEach(p => {
    let talks = flatProgram.filter(t => t.speaker === p.name);

    if (talks.length == 1) {
        p.talks = talks[0].title;
    } else if (talks.length > 1) {
        throw new Error(`Multiple talks found for ${p.name}`);
    }
});

// return the dict for only NAME and TITLE

let participants_inperson_dict = participants_inperson.map(p => {
    if (p.talks === undefined) {
        return { NAME: p.name}
    } else {
        return { NAME: p.name, TITLE: p.talks}
    }
});

console.log(JSON.stringify(participants_inperson_dict, null, 2));