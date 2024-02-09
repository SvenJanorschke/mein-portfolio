import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.hackerrank.com/_shinchancode",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/shinchancode",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@shinchancode#badges",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "Position 8: Ausgewählt für die Endrunde der 12. CSI InApp International Student Project Awards 2023..",
    },
    {
      title: "Zweifacher Landesmeister im Kickboxen (2009 und 2011).",
    },
    {
      title: "1 Platz: Viermal in Folge Gewinner Junioren-Tischtennis-Ligaverband (1990 - 1994).",
    },
    {
      title: "Zweigstellenleiter Fensterbau Otto (2000 - 2022)",
    },
    {
      title: "Ausgewählt unter den Top 100 Kandidaten für das Google Cloud Training unter 20.000 Studenten.",
    },
    {
      title: "Erhielt eine Auszeichnung Ehrenamtlichen Aktivitäten (2015 - 2023)",
    },
    {
      title: "Nahm an der U-14-Europameisterschaft (1989) den 3. Platz und (1990) den 2. Platz im Kickboxen teil.",
    },
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "java",
      title: "Java",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "Cryptography",
      description:
        "Das Projekt basiert auf einer kryptografischen Technik, die eine Doppelschichtverschlüsselung und -entschlüsselung mithilfe von Armstrong-Zahlen und RGB-Farbbasierten Zuordnungen für verschiedene Arten von Dateiformaten verwendet. Die Idee stammt aus einem Forschungspapier.",
      tags: [
        {
          name: "cryptography",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://github.com/shinchancode/Cryptography",
      source_code_link: "https://github.com/shinchancode/Cryptography",
    },
    {
      name: "Snake Yaml",
      description:
        "Erstellt wurde ein einfaches Maven-Projekt, eine YAML-Datei und darin Studentendaten geschrieben. Bei einer Anfrage sollte Echtzeit-CRUD durchgeführt werden. (Hinweis: Die SnakeYAML-Bibliothek wurde verwendet und die Abhängigkeit wurde der POM-Datei hinzugefügt.)",
      tags: [
        {
          name: "yaml",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
      source_code_link: "https://github.com/shinchancode/Snake-Yaml-Project",
    },
    {
      name: "CRUD operations",
      description:
        "Eine Java-basierte Anwendung wurde erstellt, um Benutzern das Erstellen, Lesen, Aktualisieren und Löschen von Entitäten zu ermöglichen. Spring Boot bietet eine Schnittstelle namens CrudRepository, die Methoden für CRUD-Operationen enthält.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/shinchancode/CRUD-Operation",
      source_code_link: "https://github.com/shinchancode/CRUD-Operation",
    },
    {
      name: "Byte-Array-to-File",
      description:
        "Eine Java-Anwendung wurde erstellt, bei der wir eine Datei über ein Byte-Array eingeben und sie im lokalen System speichern. Um ein Byte-Array in eine Datei umzuwandeln, verwenden wir eine Methode namens getBytes() der String-Klasse.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "byteArray",
          color: "green-text-gradient",
        },
        {
          name: "file",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/shinchancode/byte-array-to-file",
      source_code_link: "https://github.com/shinchancode/byte-array-to-file",
    },
    {
      name: "Spring Boot One To Many",
      description:
        "Implementiert wurde eine Spring Boot One-to-Many-Mapping mit Hibernate in einem Spring Boot CRUD unter Verwendung der @OneToMany-Annotation. Es erfolgte die Zuordnung zwischen zwei Entitäten und es wurde eine MySQL-Datenbank verwendet, um die Daten zu speichern und abzurufen.",
      tags: [
        {
          name: "onetomany",
          color: "blue-text-gradient",
        },
        {
          name: "springbott",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://github.com/shinchancode/oneTomany-springboot",
      source_code_link: "https://github.com/shinchancode/oneTomany-springboot",
    },
    {
      name: "OOP Lab",
      description:
        "Diese Projekte enthalten die grundlegenden Konzepte der objektorientierten Programmierung und ihren Code in der Java-Sprache. Themen wie Vererbung, Konstruktor, virtuelle Funktion, Schnittstelle, Ausnahmebehandlung, generische Programmierung und Dateiverarbeitung usw.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
      source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Die Implementierung der Trie-Datenstruktur wurde als Wörterbuch verwendet, in dem Kundendetails überprüft, gesucht, eingefügt und entfernt werden können. Durch die Verwendung von Trie können Suchkomplexitäten auf ein optimales Limit (Schlüssellänge) gebracht werden.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/shinchancode/Trie-Data-structure",
      source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
    },
    {
      name: "DSA Lab",
      description:
        "Diese Projekte enthalten die Grundkonzepte von Datenstrukturen und Algorithmen sowie den Code in der C++-Sprache. Themen wie verkettete Liste, Stapel, Warteschlange, zirkuläre Warteschlange, Binärbaum, binärer Suchbaum, Ausdrucksbaum, Threaded-Binärbaum und Heapsort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "Diese Projekte enthalten Themen der Computergrafik wie Linienzeichnungsalgorithmen (DDA und Bresenham), Bresenham-Kreiszeichnung, Polygonfüllung, 2D-Transformation, Cohen-Sutherland-Polygon-Clipping und Bézier-Kurve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/shinchancode/Computer-Graphics",
      source_code_link: "https://github.com/shinchancode/Computer-Graphics",
    },
    
  ];
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Erstellte eine beeindruckende Website mit React, die 3D-Grafiken und Animationen verwendet, um den Inhalt zum Leben zu erwecken. Die responsive Webseite ist mit einer benutzerfreundlichen Oberfläche gestaltet.",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
    },
    {
      name: "React portfolio",
      description:
        "Website erstellt mit React im Frontend, sowie Node.js und Express im Backend. Die responsive Webseite ist mit einer benutzerfreundlichen Oberfläche gestaltet.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "html css",
          color: "pink-text-gradient",
        },
      ],
      image: react1,
      source_link: "https://shinchancode.github.io/React-Portfolio/",
      source_code_link: "https://github.com/shinchancode/React-Portfolio",
    },
    {
      name: "30 Days of JavaScript",
      description:
        "Website erstellt mit Node.js und Express im Backend. Eine 30-Tage-JavaScript-Herausforderung, um JavaScript zu lernen, indem 30 verschiedene Projekte mit einigen bekannten JavaScript-Bibliotheken erstellt werden.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "30dayschallenge",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jsp,
      source_link: "https://rathi-30-days-of-javascript.onrender.com/",
      source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
    },
    {
      name: "Chit Chat Application",
      description:
        "Echtzeit-, ereignisbasierte Kommunikation in Node.js und browserbasierte Chat-Anwendung. Verwendet Socket.io für die Implementierung des WebSocket-Protokolls. Diese Anwendung wurde mit Node.js, Express, Socket.io und Render (Hosting) erstellt",
      tags: [
        {
          name: "Chatting",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://chit-chat-app.onrender.com/",
      source_code_link: "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
    },
    {
      name: "Notes Application",
      description:
        "Eine webbasierte Notiz-App, erstellt mit JavaScript. Diese webbasierte Notiz-App bietet Funktionen wie Drag & Drop, Notizen durchsuchen usw.",
      tags: [
        {
          name: "notes",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://shinchancode.github.io/Notes-App/",
      source_code_link: "https://github.com/shinchancode/Notes-App",
    },
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Abschlussprojekt: Es handelt sich um ein Modell auf niedriger und hoher Ebene, bei dem der Prozess der automatischen Erstellung von objektiven Fragestellungen unter Verwendung von LSTM (auf niedriger Ebene) und Transformer (auf hoher Ebene) Modellen für mehrere Sprachen automatisiert wird.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
      source_code_link: "https://github.com/shinchancode/Final-Year-Project",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4: Datenbankmanagementsystem (DBMS)-Labor. Themen umfassten: ER/EER-Diagramm, DDL-Anweisungen, Primärschlüssel- und Fremdschlüssel-Einschränkungen, SQL-Abfragen mit verschiedenen Funktionen, Views, PL/SQL, Trigger (Zeilen- und Anweisungsebene) und Cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
      source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4: DBMS-Mini-Projekt. Erstellte ein Bibliotheksverwaltungssystem unter Verwendung von SQL mit verschiedenen Funktionalitäten",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
      source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Schlangen und Leitern-Spiel mit der Programmiersprache Python. Ein einfaches Schlangen- und Leitern-Spiel mit einer textbasierten Benutzeroberfläche",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
      source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Devloper",
      company_name: "DCI Digital Career Institute",
      icon: bny,
      iconBg: "#383E56",
      date: "Jun 2023 - Present",
      link: "",
      points: [
        "Die erstellte Software wird nun intern im Unternehmen und von den Kunden des Unternehmens für den Betrieb von Netx360 und Netx360+ verwendet.",
        "Mehr als 50 Softwarezusammensetzungsanalysen (SCA) und Sicherheitsprobleme wurden behoben.",
        "Es wurden agile Methoden, CI/CD und testgetriebene Programmierung angepasst, um starke Programmierpraktiken aufrechtzuerhalten.",
        "Verwendung von Technologien wie Java, SpringBoot, C#, .NET und AngularJS.",
      ],
      link: "#",
    },
    {
      title: "Research Intern",
      company_name: "National Security Council Secretriat",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
      iconBg: "#383E56",
      date: "Mar 2022 - Oct 2023",
      link: "",
      points: [
        "Entwicklung eines Systems für sichere feinkörnige Zugriffskontrolle und Autorisierung von digitalen Vermögenswerten und Operationen mithilfe eines kryptosystembasierten Richtlinienansatzes.",
        "Zusammenarbeit mit plattformübergreifenden Technologien wie Spring Boot, React usw., um hochwertige Produkte zu integrieren.",
        "Teilnahme an Code-Reviews und Bereitstellung konstruktiven Feedbacks für andere Entwickler.",
      ],
      link: "#",
    },
    {
      title: "DSA Mentor",
      company_name: "GeeksforGeeks (Intern)",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#E6DEDD",
      date: "May 2022 - Apr 2023",
      link: "",
      points: [
        "Lehrassistent: Lehrassistent für Online-Kurse zu Datenstrukturen, Algorithmen und Wettbewerbsprogrammierung mit einer durchschnittlichen Bewertung von 4,9*.",
        "Verantwortlich für die Überprüfung und das Verfassen von Artikeln zu Datenstrukturen und Algorithmen.",
      ],
      link: "#",
    },
    {
      title: "Technical Content Writer",
      company_name: "GeeksforGeeks",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#383E56",
      date: "Dec 2020 - July 2022",
      link: "",
      points: [
        "Kreativer und erfahrener Inhaltsautor mit mehr als 2 Jahren Erfahrung.",
        "Zog über 10.000 Besucher auf die Unternehmenswebsite mit leistungsstarkem Bildungsinhalt.",
        "Verfasste über 100 Artikel und verbesserte mehr als 300 Artikel zu Themen wie Datenstrukturen, Algorithmen, Mathematik und verwandten Ingenieurthemen.",
      ],
      link: "#",
    },
    {
      title: "Google Cloud Training",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2021",
      link: "",
      points: [
        "Einführung in GCP und weitere Funktionen mit kostenlosem Zugang zu Quests und Skill-Badges.",
        "Zusammenarbeit mit plattformübergreifenden Technologien.",
        "Einführung in Computing, Anwendungsentwicklung, Big Data und maschinelles Lernen unter Verwendung von Googles Cloud-Trainingsplattform Qwiklabs.",
        "Zusätzliche selbstgesteuerte Übungslabore wurden auf der Plattform Qwiklabs von Google bereitgestellt.",
      ],
      link: "#",
    },
    {
      title: "Hacktoberfest",
      company_name: "GitHub",
      icon: hf,
      iconBg: "#E6DEDD",
      date: "Oct (2020 - 2022)",
      link: "",
      points: [
        "Hacktoberfest ist eine jährliche weltweite Veranstaltung, die im Oktober stattfindet. Die Veranstaltung ermutigt Open-Source-Entwickler, durch Pull Requests (PR) zu Repositorys beizutragen.",
"GitHub hostet viele Open-Source-Repositorys, die zu dieser Veranstaltung beitragen.",
      ],
      link: "#",
    },
  ];
  
  const educations = [
    {
      degree: "Schulausbildung",
      branch:
        "Information Schule",
      marks:
        "Schnitt : 9.42 / 10",
      name: "Alexander Hegius Gymnasium Ahaus",
      year: "(1982 - 1995)",
      image: clg,
    },
    {
      degree:
        "Ausbildung & Beruf",
      branch : "Fensterbau",
      marks:
        "Schnitt : 97.88 %",
      name: "Liesne Meinert-Schule Ahaus",
      year: "1995 - 1999 von 1999 - 2023 Fensterbau",
      image: school,
    },
    {
      degree:
        "Developer",
      branch: "Webdevelopment",
      marks:
        "Schnitt : 95 %",
      name: "DCI",
      year: "2023 - 2024",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
