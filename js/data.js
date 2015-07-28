var data = {  
  "categories" : [
    {
      "main": "Methodische Grundlagen",
      "sub": [
        "Das lineare Modell",
        "Multivariate statistische Verfahren"
      ]
    },
    {
      "main": "Wahrscheinlichkeitstheorie"
    },
    {
      "main": "Fortgeschrittene Methoden der Statistik"
    },
    {
      "main": "Statistische Inferenz",
      "sub": [
        "Moderne Methoden der Statistik",
        "Angewandte Statistik",
        "Stichprobentheorie",
        "Aktuelle Forschungsfragen der Statistik",
        "Mathematische Statistik",
        "Statistik stochastischer Prozesse",
        "Zuverlässigkeitstheorie"
      ]
    },
    {
      "main": "Ökonometrie",
      "sub": [
        "Mikroökonometrie",
        "Ökonometrische Analyse von Paneldaten",
        "Zeitreihenökonometrie",
        "Ökonometrische Analyse von Finanzmarktdaten",
        "Projektseminar Ökonometrie",
        "Ökonometrische Analyse",
        "Ausgewählte Themen der Ökonometrie"
      ]
    },
    {
      "main": "Quantitative Methoden der Finanzmärkte",
      "sub": [
        "Statistik und Finanzwirtschaft",
        "Statistik der Finanzmärkte",
        "Ökonometrische Analyse von Finanzmarktdaten",
        "Stochastik der Finanzmärkte"
      ]
    },
    {
      "main": "Biometrie",
    },
    {
      "main": "Wahlbereich",
    }
  ], 
	"subjects":[
		{  
			"name":"Multivariante Verfahren",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Schlittgen",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 4,
          "room": "HS 104a / PCPool",
          "type": "Vorlesung" // auch übung
				}
			]
		},
    {  
			"name":"Varianzschätzmethoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				},
				{
					"day":"Montag",
					"startTime": 16,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung" 
				}
			]
		}, 
    {  
			"name":"Einführung in Monte-Carlo- Methoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": false,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    {  
			"name":"Stichprobenverfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 4,
          "room": "AS-Saal im Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    {  
			"name":"Behandlung Fehlender Daten in Erhebungen",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Rässler",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    
    // Fallstudieneseminar fehlt
    
    {  
			"name":"Ökonometrische Analyse",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Rässler",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "HS 105",
          "type": "Vorlesung"
				},
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 1.5,
          "room": "HS 105",
          "type": "Übung"
				}
			]
		}, 
    
    // Seminar Aktuelle
    
    // Ekonometriesche Methods
    
    // Angewandte Econometrie
    
    // Preperation course
    
    {  
			"name":"Econometric Methods",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": false,
      "lecturer": "B. Droge",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 202",
          "type": "Vorlesung"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 201",
          "type": "Vorlesung"
				},
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
          "type": "Übung"
				},
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202",
          "type": "Übung"
				}
			]
		},
		
		// TO BE removed
		
		{  
			"name":"Multivariante Verfahren",
			"university":"TU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Schlittgen",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 9,
          "duration": 2,
          "room": "HS 104a / PCPool",
          "type": "Vorlesung" // auch übung
				}
			]
		},
    {  
			"name":"Pub ala Pub",
			"university":"HU_Mathe",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 8,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				},
				{
					"day":"Freitag",
					"startTime": 18,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung" 
				}
			]
		}, 
    {  
			"name":"Ich bin dir farfalle",
			"university":"Charite",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    {  
			"name":"Stachisax",
			"university":"TU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
          "duration": 4,
          "room": "AS-Saal im Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    {  
			"name":"Elena Tada",
			"university":"HU_WiWi",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Rässler",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Stichprobentheorie",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 8,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Vorlesung"
				}
			]
		}, 
    
    // Fallstudieneseminar fehlt
    
    {  
			"name":"Ökonometrische Penne",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": false,
      "lecturer": "S. Rässler",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 11,
          "duration": 2,
          "room": "HS 105",
          "type": "Vorlesung"
				},
				{
					"day":"Freitag",
					"startTime": 15,
          "duration": 1.5,
          "room": "HS 105",
          "type": "Übung"
				}
			]
		}, 
    
    // Seminar Aktuelle
    
    // Ekonometriesche Methods
    
    // Angewandte Econometrie
    
    // Preperation course
    
    {  
			"name":"#GEILON",
			"university":"WIAS",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 13,
          "duration": 2,
          "room": "Raum 202",
          "type": "Vorlesung"
				},
				{
					"day":"Dienstag",
					"startTime": 11,
          "duration": 2,
          "room": "Raum 201",
          "type": "Vorlesung"
				},
				{
					"day":"Donnerstag",
					"startTime": 18,
          "duration": 2,
          "room": "Raum 202",
          "type": "Übung"
				},
				{
					"day":"Freitag",
					"startTime": 13,
          "duration": 2,
          "room": "Raum 202",
          "type": "Übung"
				}
			]
		}
	]
	
}