export type ServiceSection = { heading: string; body: string; image: string };

export type ServiceDetail = {
  heroImage: string;
  leadTitle: string;
  lead: string;
  sections: ServiceSection[];
};

export type Service = {
  slug: string;
  title: string;
  teaser: string;
  intro: string;
  highlights: string[];
  image: string;
  related: string[];
  detail?: ServiceDetail;
};

export const services: Service[] = [
  {
    slug: "rollladen",
    title: "Rollladen",
    teaser: "Sonnenschutz, Sichtschutz, Wetter- und Einbruchschutz in einem Element.",
    intro:
      "Rollläden vereinen Sonnenschutz, Sichtschutz, Wetterschutz und Einbruchschutz – durch nichts Gleichwertiges zu ersetzen. Ob Einbaurollladen oder Vorbauelement, für Neubau oder Altbau. Erhältlich in vielen Ausführungen, in PVC, Aluminium oder edlem Holz, in allen RAL-Farben sowie mit Hand- oder Motorantrieb.",
    highlights: [
      "Einbau- und Vorbaurollläden für Neu- und Altbau",
      "PVC, Aluminium oder Holz – in allen RAL-Farben",
      "Hand- oder Motorantrieb, Smart-Home-fähig",
      "Maßgefertigt für jede Fenstergeometrie",
    ],
    image: "/services/rollladen.jpg",
    related: ["automatisierung", "smart-home", "kastenisolierung"],
    detail: {
      heroImage: "/leistungen/rollladen-hero.jpg",
      leadTitle: "Rollladen – Schutz, der sich jeden Tag bezahlt macht",
      lead: "Rollläden vereinen Sonnenschutz, Sichtschutz, Wetter- und Einbruchschutz in einem einzigen Element – durch nichts Gleichwertiges zu ersetzen. Ob Neubau oder Sanierung, ob PVC, Aluminium oder edles Holz: Wir fertigen passgenau für jede Fenstergeometrie.",
      sections: [
        {
          heading: "Vier Funktionen in einem Element",
          body: "Sonnenschutz im Sommer, Wärmedämmung im Winter, Sichtschutz am Abend und ein deutliches Mehr an Einbruchschutz – Rollläden leisten das alles zugleich. Tagsüber das Licht regulieren, nachts sicher verschließen: ein Komfortgewinn, den man jeden Tag spürt.",
          image: "/services/rollladen.jpg",
        },
        {
          heading: "Einbau- oder Vorbaurollladen",
          body: "Im Neubau verschwindet der Einbaurollladen unsichtbar in der Wand. Im Bestand ist der Vorbaurollladen die ideale Nachrüstlösung – außen vor dem Fenster montiert, ohne Eingriff in den Innenraum. Wir prüfen vor Ort, welche Variante zu Ihrem Gebäude passt.",
          image: "/leistungen/rollladen-2.jpg",
        },
        {
          heading: "Material & Farbe nach Wunsch",
          body: "PVC, Aluminium oder edles Holz – in allen RAL-Farben, vom dezenten Anthrazit bis zur Wunschfarbe passend zur Fassade. Aluminium-Lamellen sind zusätzlich ausgeschäumt: für bessere Dämmung, mehr Stabilität und einen besonders leisen Lauf.",
          image: "/leistungen/rollladen-3.jpg",
        },
        {
          heading: "Per Knopfdruck oder Smart Home",
          body: "Schluss mit Gurtziehen: Motorisierte Rollläden fahren leise per Knopfdruck. Mit Zeit-, Sonnen- und Windautomatik oder per App via TaHoma® steuern Sie alles bequem – auch von unterwegs. Die Nachrüstung im Bestand ist meist problemlos möglich.",
          image: "/leistungen/rollladen-4.jpg",
        },
      ],
    },
  },
  {
    slug: "fenster",
    title: "Fenster & Türen",
    teaser: "Als offizieller Internorm [1st] window partner – Fenster auf Premium-Niveau.",
    intro:
      "Als [1st] window partner der Firma Internorm bieten wir Ihnen ein breites Spektrum hochwertiger Kunststoff- und Holz-Alu-Fenster. In unserer Ausstellung können Sie sich einen ersten Eindruck verschaffen und sich ausführlich beraten lassen. Wir übernehmen Lieferung und Montage im Austausch der alten Fenster – inklusive Innen- und Außenfensterbänke, Rollladenarbeiten sowie Beiputzarbeiten, Dämmen und Isolieren.",
    highlights: [
      "Offizieller Internorm [1st] window partner",
      "Kunststoff- und Holz-Alu-Fenster in Premium-Qualität",
      "Komplettmontage inkl. Beiputz-, Dämm- und Isolierarbeiten",
      "Persönliche Beratung in unserer Ausstellung in Dorfen",
    ],
    image: "/services/fenster.jpg",
    related: ["haustueren", "kastenisolierung", "dachfenster"],
    detail: {
      heroImage: "/leistungen/fenster-hero-v2.jpg",
      leadTitle: "Fenster auf Premium-Niveau – als Internorm [1st] window partner",
      lead: "Moderne Fenster entscheiden über Energieeffizienz, Sicherheit und Wohnkomfort. Als ausgezeichneter Internorm [1st] window partner führen wir das komplette Programm hochwertiger Kunststoff- und Holz-Alu-Fenster – maßgefertigt, fachgerecht montiert und persönlich beraten.",
      sections: [
        {
          heading: "Internorm – Premium-Fenster aus Österreich",
          body: "Internorm ist eine der führenden Fenstermarken Europas – ein österreichisches Familienunternehmen, das seit Jahrzehnten für kompromisslose Qualität steht. Ob Kunststoff- oder Holz-Alu-Fenster: Spitzenwerte bei Wärmedämmung, Einbruch- und Schallschutz treffen auf klares, zeitloses Design. So sparen Sie Heizkosten und gewinnen spürbar an Wohnkomfort.",
          image: "/leistungen/fenster-1.jpg",
        },
        {
          heading: "Kunststoff oder Holz-Alu?",
          body: "Beide Welten haben ihren Reiz: Kunststofffenster überzeugen durch ein hervorragendes Preis-Leistungs-Verhältnis, pflegeleichte Oberflächen und top Dämmwerte. Holz-Alu-Fenster verbinden die warme Wohnlichkeit von Holz im Innenraum mit einer extrem wetterfesten Aluminium-Schale außen. Wir beraten Sie, welche Variante optisch und technisch am besten zu Ihrem Zuhause passt.",
          image: "/leistungen/fenster-4.jpg",
        },
        {
          heading: "Komplettmontage aus einer Hand",
          body: "Wir liefern und montieren Ihre neuen Fenster im Austausch gegen die alten – sauber und termintreu durch unser eigenes Team. Die Montage umfasst alle anfallenden Arbeiten: Innen- und Außenfensterbänke, Rollladenarbeiten sowie Beiputzen, Dämmen und Isolieren. Ohne Subunternehmer, ohne Schnittstellen.",
          image: "/leistungen/fenster-2.jpg",
        },
        {
          heading: "Beratung in unserer Ausstellung",
          body: "In unserer Ausstellung in Dorfen verschaffen Sie sich einen ersten Eindruck der verschiedenen Fenstertypen, Materialien und Farben – und lassen sich in Ruhe persönlich beraten. Gemeinsam finden wir die Lösung, die optisch und technisch exakt zu Ihrem Zuhause passt.",
          image: "/leistungen/fenster-3.jpg",
        },
      ],
    },
  },
  {
    slug: "haustueren",
    title: "Haustüren",
    teaser: "Der erste Eindruck Ihres Hauses – sicher, gedämmt, individuell.",
    intro:
      "Haustüren namhafter Hersteller machen den Hauseingang zum Blickfang und bieten zugleich mehr Sicherheit und höhere Wärmedämmung. Unser Sortiment reicht von modern über klassisch bis rustikal – inklusive Sicherheitshaustüren. Modelle aus Kunststoff, Holz-Alu, Aluminium und Holz. Wir liefern und montieren im Neubau wie im Austausch, inklusive Beiputz-, Dämm- und Isolierarbeiten. Ergänzend führen wir ein großes Sortiment an Vordächern.",
    highlights: [
      "Sortiment von modern über klassisch bis rustikal",
      "Sicherheitshaustüren mit zertifizierten Schließsystemen",
      "Materialien: Kunststoff, Holz-Alu, Aluminium, Holz",
      "Großes Sortiment an passenden Vordächern",
    ],
    image: "/services/haustueren.jpg",
    related: ["fenster", "einbruchschutz", "smart-home"],
    detail: {
      heroImage: "/leistungen/haustueren-hero.jpg",
      leadTitle: "Haustüren – der erste Eindruck Ihres Zuhauses",
      lead: "Eine Haustür macht den Hauseingang zum Blickfang – und bietet zugleich mehr Sicherheit und eine bessere Wärmedämmung. Unser Sortiment reicht von modern über klassisch bis rustikal, inklusive geprüfter Sicherheitshaustüren.",
      sections: [
        {
          heading: "Für jeden Stil das passende Modell",
          body: "Ob klare moderne Linien, klassische Eleganz oder rustikaler Charakter – bei uns finden Sie die Tür, die zu Ihrem Haus passt. In Kunststoff, Holz-Alu, Aluminium oder Holz, in vielen Farben und Designs.",
          image: "/services/haustueren.jpg",
        },
        {
          heading: "Sicherheit, die man nicht sieht",
          body: "Mehrfachverriegelung, stabile Beschläge und auf Wunsch geprüfte Sicherheitshaustüren erschweren Einbrechern den Zutritt spürbar. Sicherheit und Design schließen sich dabei nicht aus – im Gegenteil.",
          image: "/leistungen/haustueren-2.jpg",
        },
        {
          heading: "Wärmedämmung & Komfort",
          body: "Moderne Haustüren dämmen deutlich besser als alte Modelle und senken so Ihre Heizkosten. Optional mit Seitenteilen, Oberlicht, Glaseinsätzen oder smarten Zutrittslösungen für noch mehr Komfort.",
          image: "/leistungen/haustueren-3.jpg",
        },
        {
          heading: "Komplett montiert – inklusive Vordach",
          body: "Wir liefern und montieren im Neubau wie im Austausch, inklusive aller Beiputz-, Dämm- und Isolierarbeiten. Ergänzend führen wir ein großes Sortiment an Vordächern, die Ihren Eingang schützen und veredeln.",
          image: "/leistungen/haustueren-4.jpg",
        },
      ],
    },
  },
  {
    slug: "raffstores",
    title: "Raffstores & Jalousien",
    teaser: "Außenliegender Sonnenschutz mit präziser Lichtlenkung.",
    intro:
      "Raffstores sind außenliegende Sonnenschutzprodukte. Mit ihnen lässt sich das Tageslicht flexibel lenken – die Sonne blendet nicht und es herrscht ein behagliches Wohnklima.",
    highlights: [
      "Außenliegender Sonnenschutz mit Tageslichtlenkung",
      "Blendfreies Arbeiten und Wohnen",
      "Spürbare Reduzierung der Aufheizung im Sommer",
      "Elektrisch und smart steuerbar",
    ],
    image: "/services/raffstores.jpg",
    related: ["rollladen", "innenbeschattung", "automatisierung"],
    detail: {
      heroImage: "/leistungen/raffstores-hero.jpg",
      leadTitle: "Raffstores – Tageslicht lenken statt aussperren",
      lead: "Raffstores sind außenliegender Sonnenschutz mit präziser Lichtlenkung. Über die verstellbaren Lamellen holen Sie genau so viel Tageslicht ins Haus, wie Sie möchten – blendfrei, ohne Aufheizung und mit Blick nach draußen.",
      sections: [
        {
          heading: "Sonnenschutz, der draußen bleibt",
          body: "Weil Raffstores außen vor dem Glas sitzen, stoppen sie die Hitze, bevor sie überhaupt ins Zimmer gelangt. Das hält Räume im Sommer spürbar kühler als jede Innenbeschattung – und senkt den Bedarf an Klimatechnik.",
          image: "/services/raffstores.jpg",
        },
        {
          heading: "Lamellen exakt einstellbar",
          body: "Über die drehbaren Lamellen lenken Sie das Tageslicht gezielt an die Decke – hell, aber blendfrei. So arbeiten und wohnen Sie angenehm, ohne den Bezug nach draußen zu verlieren.",
          image: "/leistungen/raffstores-2.jpg",
        },
        {
          heading: "Robust und windstabil",
          body: "Moderne Raffstore-Systeme sind windstabil geführt und langlebig konstruiert. In vielen Behangformen und Farben erhältlich, fügen sie sich klar und elegant in moderne wie klassische Fassaden ein.",
          image: "/leistungen/raffstores-3.jpg",
        },
        {
          heading: "Elektrisch & smart steuerbar",
          body: "Per Funk, Schalter oder App bedienbar – mit Sonnen- und Windautomatik fahren die Raffstores bei Bedarf von selbst. So sind Hitzeschutz und Komfort jederzeit gesichert, ganz ohne Handgriff.",
          image: "/leistungen/raffstores-4.jpg",
        },
      ],
    },
  },
  {
    slug: "markisen",
    title: "Markisen",
    teaser: "Eleganter Schatten für Terrasse und Balkon.",
    intro:
      "Markisen verbinden elegantes Design mit hohem Komfort – die perfekte Rundum-Lösung für Terrasse oder Balkon. Optional mit elektrischem Antrieb. Große Auswahl an Tucharten, Designs und Farben. Mit Heizstrahler, integrierter LED-Beleuchtung oder Smartphone-Bedienung. Erhältlich als Kassettenmarkise, Wintergartenmarkise oder Vertikalmarkise.",
    highlights: [
      "Kassetten-, Wintergarten- und Vertikalmarkisen",
      "Optional mit Heizstrahler und LED-Beleuchtung",
      "Steuerung per Funk, Smartphone oder Smart Home",
      "Große Auswahl an Tüchern, Designs und Farben",
    ],
    image: "/services/markisen.jpg",
    related: ["terrassendaecher", "automatisierung", "raffstores"],
    detail: {
      heroImage: "/leistungen/markisen-hero.jpg",
      leadTitle: "Markisen – eleganter Schatten für Terrasse und Balkon",
      lead: "Markisen verbinden elegantes Design mit hohem Komfort – die perfekte Rundum-Lösung für Terrasse oder Balkon. Mit großer Auswahl an Tüchern, Designs und Farben, auf Wunsch voll motorisiert.",
      sections: [
        {
          heading: "Ihr zweites Wohnzimmer im Freien",
          body: "Eine Markise schafft im Handumdrehen schattigen, geschützten Raum – ideal für entspannte Stunden auf der Terrasse, auch wenn die Sonne brennt. Elegantes Design, das zu Ihrer Fassade passt.",
          image: "/services/markisen.jpg",
        },
        {
          heading: "Kassette, Wintergarten oder Vertikal",
          body: "Ob Kassettenmarkise mit geschütztem Tuch, Wintergartenmarkise für die Überdachung oder Vertikalmarkise als seitlicher Sicht- und Sonnenschutz – wir haben für jede Situation die passende Bauform.",
          image: "/leistungen/markisen-2.jpg",
        },
        {
          heading: "Licht, Wärme & Komfort",
          body: "Mit integrierter LED-Beleuchtung und Heizstrahler nutzen Sie Ihre Terrasse bis in den späten Abend und in die kühlere Jahreszeit. Komfort, der den Außenbereich spürbar aufwertet.",
          image: "/leistungen/markisen-3.jpg",
        },
        {
          heading: "Per Funk, App oder Wind-Automatik",
          body: "Auf Wunsch fahren Ihre Markisen elektrisch per Funk oder Smartphone aus und ein. Eine Windautomatik fährt das Tuch bei Böen automatisch ein und schützt es so zuverlässig.",
          image: "/leistungen/markisen-4.jpg",
        },
      ],
    },
  },
  {
    slug: "rolltore",
    title: "Rolltore",
    teaser: "Aluminium-Rolltore für Privat und Gewerbe – leise, sicher, langlebig.",
    intro:
      "Aluminium-Rolltore vereinen höchste Funktionalität, Sicherheit und Ästhetik – privat wie gewerblich. Sie überzeugen durch außergewöhnliche Laufruhe, hohen Bedienkomfort per Funkfernbedienung und einen montagefreundlichen Einbau, ideal zum Nachrüsten.",
    highlights: [
      "Außergewöhnliche Laufruhe und hoher Bedienkomfort",
      "Funkfernbedienung serienmäßig",
      "Endleisten-Hinderniserkennung für mehr Sicherheit",
      "Gute Wärmedämmung und verschleißarmer Verlauf",
    ],
    image: "/services/rolltore.jpg",
    related: ["automatisierung", "einbruchschutz", "smart-home"],
    detail: {
      heroImage: "/leistungen/rolltore-hero.jpg",
      leadTitle: "Rolltore – leise, sicher, ideal zum Nachrüsten",
      lead: "Aluminium-Rolltore vereinen höchste Funktionalität, Sicherheit und Ästhetik – privat wie gewerblich. Sie überzeugen durch außergewöhnliche Laufruhe, hohen Bedienkomfort und einen montagefreundlichen Einbau.",
      sections: [
        {
          heading: "Außergewöhnlich leise im Lauf",
          body: "Wo Schwing- oder Sektionaltore poltern, läuft ein Aluminium-Rolltor angenehm ruhig. Das schont die Nerven – gerade bei Garagen direkt am Wohnraum oder beim frühen Losfahren.",
          image: "/services/rolltore.jpg",
        },
        {
          heading: "Komfort per Funkfernbedienung",
          body: "Serienmäßig per Funkfernbedienung bedienbar: Tor öffnen, ohne auszusteigen. Auf Wunsch mit Smart-Home-Anbindung, Zeitsteuerung und Beleuchtung – Komfort, den man täglich nutzt.",
          image: "/leistungen/rolltore-2.jpg",
        },
        {
          heading: "Sicherheit & Wärmedämmung",
          body: "Eine Endleisten-Hinderniserkennung stoppt das Tor zuverlässig, ausgeschäumte Aluprofile bieten gute Wärmedämmung und hohe Stabilität. So bleibt die Garage sicher und im Winter spürbar wärmer.",
          image: "/leistungen/rolltore-3.jpg",
        },
        {
          heading: "Platzsparend & ideal zum Nachrüsten",
          body: "Das Rolltor wickelt sich nach oben auf – kein Deckenplatz, keine ausschwenkenden Flügel. Der montagefreundliche Einbau macht es zur idealen Lösung auch im Bestand, bei nahezu jeder Garagengröße.",
          image: "/leistungen/rolltore-4.jpg",
        },
      ],
    },
  },
  {
    slug: "smart-home",
    title: "Smart Home",
    teaser: "Ihr Zuhause im Griff – per Tablet, Smartphone oder PC.",
    intro:
      "Smart Home macht Ihr Zuhause sicherer und komfortabler. Per Tablet, Smartphone oder PC bedienen Sie die komplette Haustechnik: Rollladen, Markisen, Heizung, Lüftung, Alarmanlage, Dachfenster, Tore, Haustüren und Beleuchtung. Mit TaHoma® setzen wir auf ein unkompliziertes, benutzerfreundliches System – Ihr Zuhause immer im Blick, egal wo und wann.",
    highlights: [
      "Zentrale Steuerung der gesamten Haustechnik",
      "TaHoma® als bewährtes, intuitives System",
      "Szenen, Zeitsteuerung und Sonnenautomatik",
      "Zugriff von unterwegs per App",
    ],
    image: "/services/smart-home.jpg",
    related: ["automatisierung", "einbruchschutz", "rollladen"],
    detail: {
      heroImage: "/leistungen/smart-home-hero.jpg",
      leadTitle: "Smart Home – Ihr Zuhause im Griff, von überall",
      lead: "Smart Home macht Ihr Zuhause sicherer und komfortabler. Per Tablet, Smartphone oder PC steuern Sie die komplette Haustechnik – mit TaHoma® setzen wir auf ein bewährtes, intuitives System.",
      sections: [
        {
          heading: "Die ganze Haustechnik in einer App",
          body: "Rollladen, Markisen, Heizung, Lüftung, Alarmanlage, Dachfenster, Tore, Haustüren und Beleuchtung – alles zentral bedienbar. Ein Fingertipp genügt, und Ihr Zuhause stellt sich auf Sie ein.",
          image: "/services/smart-home.jpg",
        },
        {
          heading: "TaHoma® – einfach und bewährt",
          body: "Mit TaHoma® von Somfy steuern Sie alles über eine übersichtliche, benutzerfreundliche Oberfläche. Bewährte Technik, regelmäßige Updates und ein großes Ökosystem kompatibler Geräte.",
          image: "/leistungen/smart-home-2.jpg",
        },
        {
          heading: "Szenen & Automatik",
          body: "Sonnenautomatik, Zeitpläne und individuelle Szenen nehmen Ihnen die Routine ab: Morgens fahren die Rollläden hoch, mittags schützt die Beschattung vor Hitze, abends senkt sich alles automatisch.",
          image: "/leistungen/smart-home-3.jpg",
        },
        {
          heading: "Sicher, auch von unterwegs",
          body: "Ob im Büro oder im Urlaub – per App haben Sie Ihr Zuhause immer im Blick. Anwesenheit simulieren, Meldungen empfangen, im Ernstfall reagieren. Komfort und Sicherheit, jederzeit erreichbar.",
          image: "/leistungen/smart-home-4.jpg",
        },
      ],
    },
  },
  {
    slug: "insektenschutz",
    title: "Insektenschutz",
    teaser: "Maßgefertigt für jedes Fenster, jede Tür, jeden Lichtschacht.",
    intro:
      "Für jede Anwendung die passende Lösung – ob Fenster, Dachfenster, Tür oder Lichtschacht. Auch Sonderformen und -maße sind kein Problem. Alles maßgefertigt für einen unauffälligen, präzisen Sitz.",
    highlights: [
      "Lösungen für Fenster, Türen, Dachfenster und Lichtschächte",
      "Sonderformen und -maße kein Problem",
      "Spannrahmen, Drehrahmen, Schiebeanlagen, Plissees",
      "Unauffällig in Wunschfarbe pulverbeschichtet",
    ],
    image: "/services/insektenschutz.jpg",
    related: ["fenster", "dachfenster", "rollladen"],
    detail: {
      heroImage: "/leistungen/insektenschutz-hero.jpg",
      leadTitle: "Insektenschutz – maßgefertigt für jede Öffnung",
      lead: "Für jede Anwendung die passende Lösung – ob Fenster, Dachfenster, Tür oder Lichtschacht. Auch Sonderformen und -maße sind kein Problem. Alles maßgefertigt für einen unauffälligen, präzisen Sitz.",
      sections: [
        {
          heading: "Für Fenster, Türen & Lichtschächte",
          body: "Ob Spannrahmen am Fenster, Drehrahmen an der Tür, Schiebeanlage an der Terrasse oder Gitter am Lichtschacht – wir haben für jede Öffnung die passende, dauerhafte Lösung.",
          image: "/services/insektenschutz.jpg",
        },
        {
          heading: "Spannrahmen, Dreh- & Schiebeanlagen",
          body: "Vom einfachen Spannrahmen bis zur komfortablen Pendel- oder Schiebetür für den Terrassenausgang: Sie wählen die Bedienart, die zu Ihrem Alltag passt – mit oder ohne Bodenschiene.",
          image: "/leistungen/insektenschutz-2.jpg",
        },
        {
          heading: "Sonderformen & -maße kein Problem",
          body: "Schräge Dachfenster, runde oder dreieckige Öffnungen, Übergrößen – wir messen exakt auf und fertigen passgenau. So sitzt der Insektenschutz überall sauber und unauffällig.",
          image: "/leistungen/insektenschutz-3.jpg",
        },
        {
          heading: "Unauffällig in Wunschfarbe",
          body: "Die Rahmen werden in Ihrer Wunschfarbe pulverbeschichtet und fügen sich dezent in Fenster und Fassade ein. Feines, kaum sichtbares Gewebe hält Insekten draußen, lässt aber Licht und Luft herein.",
          image: "/leistungen/insektenschutz-4.jpg",
        },
      ],
    },
  },
  {
    slug: "einbruchschutz",
    title: "Sicherheit & Einbruchschutz",
    teaser: "Individuelle Sicherheitslösungen – vom Panzerriegel bis zur Alarmzentrale.",
    intro:
      "Alle zwei Minuten wird in Deutschland eingebrochen – Tendenz steigend. Alarmanlagen und Sicherheitsvorkehrungen sorgen für mehr Sicherheit. Wir bieten individuelle Lösungen: von der Fensterzusatzsicherung über Türspion und Panzerriegel bis zur per Smart Home gesteuerten Alarmzentrale. Beratung und alle Produkte aus einer Hand. Jetzt nachrüsten und staatliche Förderung sichern.",
    highlights: [
      "Fensterzusatzsicherung, Panzerriegel, Türspion",
      "Alarmanlagen bis zur Smart-Home-Alarmzentrale",
      "Beratung zu staatlichen Förderprogrammen",
      "Fachgerechte Nachrüstung im Bestand",
    ],
    image: "/services/einbruchschutz.jpg",
    related: ["haustueren", "smart-home", "rollladen"],
    detail: {
      heroImage: "/leistungen/einbruchschutz-hero.jpg",
      leadTitle: "Sicherheit & Einbruchschutz – ruhig schlafen, gut geschützt",
      lead: "Alle zwei Minuten wird in Deutschland eingebrochen – Tendenz steigend. Mit den richtigen Vorkehrungen schützen Sie Ihr Zuhause wirkungsvoll. Wir bieten individuelle Lösungen, Beratung und alle Produkte aus einer Hand.",
      sections: [
        {
          heading: "Wo Einbrecher ansetzen",
          body: "Die meisten Einbrüche erfolgen über Fenster und Terrassentüren. Genau hier setzen wir an: mit stabilen Beschlägen, Pilzkopfverriegelungen und geprüften Sicherungen, die dem Aufhebeln standhalten.",
          image: "/services/einbruchschutz.jpg",
        },
        {
          heading: "Vom Panzerriegel bis zur Alarmzentrale",
          body: "Fensterzusatzsicherung, Türspion, Panzerriegel oder eine über Smart Home gesteuerte Alarmzentrale – wir stellen Ihre Sicherheitslösung individuell zusammen. Mechanisch, elektronisch oder kombiniert.",
          image: "/leistungen/einbruchschutz-2.jpg",
        },
        {
          heading: "Rollladen & Beschattung als Schutz",
          body: "Hochschiebesichere Rollläden und stabile Beschattung sind ein wirksamer Grundschutz: Sie erschweren das Eindringen und schrecken ab – oft die einfachste Nachrüstung mit großer Wirkung.",
          image: "/leistungen/einbruchschutz-3.jpg",
        },
        {
          heading: "Beratung & staatliche Förderung",
          body: "Wir beraten Sie zu sinnvollen Maßnahmen für Ihr Objekt – und zu staatlichen Förderprogrammen (z. B. der KfW), mit denen Sie einen Teil der Kosten zurückbekommen. Jetzt nachrüsten lohnt sich doppelt.",
          image: "/leistungen/einbruchschutz-4.jpg",
        },
      ],
    },
  },
  {
    slug: "kastenisolierung",
    title: "Rollladenkasten-Dämmung",
    teaser: "Energetische Sanierung an einer der größten Schwachstellen der Fassade.",
    intro:
      "Im Zuge einer Fassadenrenovierung werden alte Häuser von außen gedämmt und mit Wärmeverbundsystem ausgestattet. Durch die Erneuerung der Fenster verschiebt sich die Einbaulage; alte Rollläden werden entfernt – für eine einheitlich gedämmte Fassade. Die leeren Rollladenkästen im Inneren füllen wir mit Dämmstoff und bringen sie so auf den aktuellen Stand der Technik.",
    highlights: [
      "Nachträgliche Dämmung leerer Rollladenkästen",
      "Sichtbare Reduzierung von Wärmebrücken",
      "Optimal kombinierbar mit Fensterneubau",
      "Fachgerechte Ausführung durch eigenes Team",
    ],
    image: "/services/kastenisolierung.jpg",
    related: ["fenster", "rollladen", "automatisierung"],
    detail: {
      heroImage: "/leistungen/kastenisolierung-hero.jpg",
      leadTitle: "Rollladenkasten-Dämmung – Schluss mit der Wärmebrücke",
      lead: "Der alte Rollladenkasten ist eine der größten Schwachstellen der Fassade – hier geht spürbar Wärme verloren. Mit einer nachträglichen Dämmung bringen wir ihn auf den aktuellen Stand der Technik. Schnell, sauber, wirkungsvoll.",
      sections: [
        {
          heading: "Eine der größten Schwachstellen",
          body: "Unsanierte Rollladenkästen sind oft dünnwandig und schlecht gedämmt – eine echte Wärmebrücke. Im Winter entweicht hier Heizwärme, im Sommer dringt Hitze ein. Genau das beheben wir.",
          image: "/services/kastenisolierung.jpg",
        },
        {
          heading: "Nachträglich gedämmt – ohne Baustelle",
          body: "Wir füllen den leeren Kasten fachgerecht mit hochwertigem Dämmstoff und dichten ihn ab. Das geht meist von innen, zügig und ohne großen Aufwand – kein Gerüst, kein Fassadeneingriff nötig.",
          image: "/leistungen/kastenisolierung-2.jpg",
        },
        {
          heading: "Sichtbar weniger Wärmeverlust",
          body: "Schon kleine Maßnahmen am Kasten reduzieren Wärmebrücken deutlich. Das senkt Heizkosten, verhindert kalte Zugluft und beugt Schimmel an kalten Innenflächen vor.",
          image: "/leistungen/kastenisolierung-3.jpg",
        },
        {
          heading: "Ideal mit Fensterneubau kombiniert",
          body: "Im Zuge einer Fassadenrenovierung oder beim Fenstertausch lässt sich die Kastendämmung perfekt mit erledigen – aus einer Hand, in einem Rutsch, mit dem besten Ergebnis für Ihre Energiebilanz.",
          image: "/leistungen/kastenisolierung-4.jpg",
        },
      ],
    },
  },
  {
    slug: "dachfenster",
    title: "Dachfenster",
    teaser: "Licht und Luft unterm Dach – Made in Germany.",
    intro:
      'Egal ob Renovierung oder Neubau – wir liefern das passende Dachfenster in Qualität „Made in Germany“. Bei Bedarf inklusive passendem Dachfensterrollladen oder Plissee.',
    highlights: [
      "Hochwertige Dachfenster Made in Germany",
      "Passende Rollläden und Plissees auf Wunsch",
      "Fachgerechter Austausch im Bestand",
      "Energieeffiziente Verglasungen",
    ],
    image: "/services/dachfenster.jpg",
    related: ["fenster", "insektenschutz", "innenbeschattung"],
    detail: {
      heroImage: "/leistungen/dachfenster-hero.jpg",
      leadTitle: "Dachfenster – Licht und Luft unterm Dach",
      lead: "Egal ob Renovierung oder Neubau – wir liefern das passende Dachfenster in Qualität „Made in Germany“. Auf Wunsch inklusive passendem Rollladen oder Plissee für Hitzeschutz und Verdunklung.",
      sections: [
        {
          heading: "Mehr Tageslicht, mehr Wohnraum",
          body: "Ein Dachfenster verwandelt das Dachgeschoss in einen hellen, luftigen Wohnraum. Tageslicht von oben wirkt großzügig und macht selbst kleine Räume freundlich und gut nutzbar.",
          image: "/services/dachfenster.jpg",
        },
        {
          heading: "Qualität Made in Germany",
          body: "Wir setzen auf hochwertige Dachfenster namhafter deutscher Hersteller – mit energieeffizienter Verglasung, langlebigen Materialien und ausgereifter Technik für Jahrzehnte zuverlässigen Betrieb.",
          image: "/leistungen/dachfenster-2.jpg",
        },
        {
          heading: "Rollladen & Plissee inklusive",
          body: "Auf Wunsch liefern wir den passenden Dachfenster-Rollladen oder ein Plissee gleich mit: für Hitzeschutz im Sommer, angenehme Verdunklung und einen erholsamen Schlaf unterm Dach.",
          image: "/leistungen/dachfenster-3.jpg",
        },
        {
          heading: "Fachgerechter Austausch im Bestand",
          body: "Auch der Tausch alter, undichter Dachfenster ist bei uns in besten Händen – sauber eingedichtet, fachgerecht angeschlossen und ohne böse Überraschungen beim nächsten Regen.",
          image: "/leistungen/dachfenster-4.jpg",
        },
      ],
    },
  },
  {
    slug: "automatisierung",
    title: "Motorantrieb & Automatisierung",
    teaser: "Schluss mit Gurtziehen – Komfort per Knopfdruck.",
    intro:
      "Die Bedienung strenggehender Rollläden ist kräfteraubend. Motorisierte Rollläden machen das Leben leichter – per Knopfdruck leise ein- oder ausfahren, statt morgens alle Rollläden hochzuziehen. Besonders für ältere Menschen eine spürbare Erleichterung. Mit Smart Home jederzeit auch per Handy bedienbar.",
    highlights: [
      "Nachrüstung im Bestand möglich",
      "Leiser, komfortabler Betrieb",
      "Zeit-, Sonnen- und Windautomatik",
      "Smart-Home-Integration mit TaHoma®",
    ],
    image: "/services/automatisierung.jpg",
    related: ["smart-home", "rollladen", "raffstores"],
    detail: {
      heroImage: "/leistungen/automatisierung-hero.jpg",
      leadTitle: "Motorantrieb & Automatisierung – Komfort per Knopfdruck",
      lead: "Die Bedienung strenggehender Rollläden ist kräfteraubend. Motorisierte Antriebe machen das Leben leichter – leise per Knopfdruck statt Gurtziehen. Die Nachrüstung im Bestand ist meist problemlos möglich.",
      sections: [
        {
          heading: "Schluss mit dem Gurtziehen",
          body: "Morgens nicht erst durchs ganze Haus, um alle Rollläden hochzuziehen: Ein Motorantrieb erledigt das auf Knopfdruck – leise, gleichmäßig und ohne Kraftaufwand. Besonders für ältere Menschen eine echte Erleichterung.",
          image: "/services/automatisierung.jpg",
        },
        {
          heading: "Einfach nachrüsten",
          body: "In den meisten Fällen lässt sich der Motor ohne großen Aufwand in den vorhandenen Rollladen einbauen – dank moderner Funkantriebe oft sogar ohne neue Kabel. Wir prüfen Ihre Situation vor Ort.",
          image: "/leistungen/automatisierung-2.jpg",
        },
        {
          heading: "Zeit-, Sonnen- & Windautomatik",
          body: "Mit Automatik fahren die Rollläden zur gewünschten Zeit, schützen bei Sonne vor Hitze und reagieren auf Wind. Ihr Zuhause wirkt bewohnt – auch wenn Sie gerade unterwegs sind.",
          image: "/leistungen/automatisierung-3.jpg",
        },
        {
          heading: "Smart Home mit TaHoma®",
          body: "Per App via TaHoma® bedienen Sie Ihre Rollläden von überall und verbinden sie mit Markisen, Licht und Heizung zu durchdachten Szenen. Komfort, der mitdenkt.",
          image: "/leistungen/automatisierung-4.jpg",
        },
      ],
    },
  },
  {
    slug: "terrassendaecher",
    title: "Terrassendach",
    teaser: "Ein Raum im Freien – wetterunabhängig und ganzjährig nutzbar.",
    intro:
      "Ein Terrassendach schafft einen Raum im Freien, der wetterunabhängig nutzbar ist. Stabile und langlebige Aluminiumbauweise in Ihrer Wunschfarbe. Eine passende, steuerungstechnisch bedienbare Beschattung rundet den neuen Raum im Freien ab.",
    highlights: [
      "Langlebige Aluminiumkonstruktion in Wunschfarbe",
      "Integrierte Beschattung und LED-Beleuchtung",
      "Optional mit Senkrechtmarkisen als Seitenschutz",
      "Maßgeschneiderte Planung für Ihre Terrasse",
    ],
    image: "/services/terrassendaecher.jpg",
    related: ["markisen", "automatisierung", "raffstores"],
    detail: {
      heroImage: "/leistungen/terrassendaecher-hero.jpg",
      leadTitle: "Terrassendach – Ihr Wohnzimmer unter freiem Himmel",
      lead: "Ein Terrassendach schafft einen Raum im Freien, den Sie wetterunabhängig nutzen können – in stabiler, langlebiger Aluminiumbauweise und in Ihrer Wunschfarbe. Mit passender Beschattung wird daraus Ihr Lieblingsplatz.",
      sections: [
        {
          heading: "Wetterunabhängig draußen sitzen",
          body: "Ob Sonne, Wind oder Nieselregen – unter Ihrem Terrassendach genießen Sie den Außenbereich das ganze Jahr. Kaffee am Nachmittag, Grillen am Abend: geschützt und entspannt.",
          image: "/services/terrassendaecher.jpg",
        },
        {
          heading: "Stabile Aluminium-Konstruktion",
          body: "Wir fertigen in langlebiger, wartungsarmer Aluminiumbauweise – statisch sauber geplant und in Ihrer Wunsch-RAL-Farbe pulverbeschichtet. Eine Konstruktion, die Jahrzehnte hält und edel aussieht.",
          image: "/leistungen/terrassendaecher-2.jpg",
        },
        {
          heading: "Glas, Beschattung & Licht",
          body: "Klare Glasdächer holen viel Licht herein, eine integrierte Beschattung schützt bei Bedarf vor Hitze. Mit LED-Beleuchtung wird Ihre Terrasse auch am Abend zum stimmungsvollen Ort.",
          image: "/leistungen/terrassendaecher-3.jpg",
        },
        {
          heading: "Rundum geschützt mit Senkrechtmarkisen",
          body: "Optionale Senkrechtmarkisen an den Seiten machen aus dem Terrassendach einen nahezu geschlossenen Raum – windgeschützt, auf Wunsch blickdicht und im Handumdrehen geöffnet.",
          image: "/leistungen/terrassendaecher-4.jpg",
        },
      ],
    },
  },
  {
    slug: "innenbeschattung",
    title: "Innenbeschattung",
    teaser: "Sicht- und Sonnenschutz am Fenster – feinfühlig von innen.",
    intro:
      "Sicht- und Sonnenschutz am Fenster von innen. Wir bieten viele verschiedene Produkte: Plissee, Rollo oder Vertikalanlage – mit Hand- oder Motorbetrieb.",
    highlights: [
      "Plissees, Rollos und Vertikalanlagen",
      "Hand- oder Motorbetrieb",
      "Große Auswahl an Stoffen und Lichtdurchlässigkeiten",
      "Maßanfertigung für jede Fenstergröße",
    ],
    image: "/services/innenbeschattung.jpg",
    related: ["raffstores", "dachfenster", "insektenschutz"],
    detail: {
      heroImage: "/leistungen/innenbeschattung-hero.jpg",
      leadTitle: "Innenbeschattung – feinfühliger Schutz direkt am Fenster",
      lead: "Sicht- und Sonnenschutz von innen: Plissee, Rollo oder Vertikalanlage – mit Hand- oder Motorbetrieb. Große Auswahl an Stoffen und Lichtdurchlässigkeiten, maßgefertigt für jede Fenstergröße.",
      sections: [
        {
          heading: "Plissee, Rollo oder Vertikalanlage",
          body: "Für jeden Geschmack und jede Anforderung die passende Lösung: das vielseitige Plissee, das klassische Rollo oder die elegante Vertikalanlage für große Fronten. Wir beraten Sie zur idealen Variante.",
          image: "/services/innenbeschattung.jpg",
        },
        {
          heading: "Stoffe & Lichtdurchlässigkeit",
          body: "Von transparent über halbtransparent bis blickdicht und verdunkelnd: Mit der richtigen Stoffwahl bestimmen Sie Helligkeit, Privatsphäre und Stimmung im Raum – in unzähligen Farben und Texturen.",
          image: "/leistungen/innenbeschattung-2.jpg",
        },
        {
          heading: "Maßanfertigung für jedes Fenster",
          body: "Jede Anlage wird exakt auf Ihr Fenster gefertigt und sauber montiert – auch für Sonderformen und Dachfenster. So sitzt alles passgenau und sieht hochwertig aus.",
          image: "/leistungen/innenbeschattung-3.jpg",
        },
        {
          heading: "Hand- oder Motorbetrieb",
          body: "Bedienen Sie Ihre Innenbeschattung klassisch von Hand oder komfortabel per Motor und Funk – auf Wunsch in Ihr Smart Home eingebunden. Ganz so, wie es am besten in Ihren Alltag passt.",
          image: "/leistungen/innenbeschattung-4.jpg",
        },
      ],
    },
  },
  {
    slug: "reparaturservice",
    title: "Reparaturservice",
    teaser: "Rollladen klemmt? Markise streikt? Wir sind schnell vor Ort.",
    intro:
      "Rollladen hängt schief, Fenster klemmt, Markise fährt nicht mehr ein? Rufen Sie einfach an und vereinbaren Sie einen Termin – zügige und gewissenhafte Erledigung garantiert.",
    highlights: [
      "Schnelle Terminvereinbarung",
      "Reparatur aller gängigen Fabrikate",
      "Wartung und Nachrüstung aus einer Hand",
      "Eigenes Servicefahrzeug in der Region unterwegs",
    ],
    image: "/services/reparaturservice.jpg",
    related: ["rollladen", "markisen", "fenster"],
    detail: {
      heroImage: "/leistungen/reparaturservice-hero.jpg",
      leadTitle: "Reparaturservice – schnell wieder funktionstüchtig",
      lead: "Rollladen hängt schief, Fenster klemmt, Markise fährt nicht mehr ein? Rufen Sie einfach an und vereinbaren Sie einen Termin – zügige und gewissenhafte Erledigung garantiert.",
      sections: [
        {
          heading: "Schnell vor Ort, fair erledigt",
          body: "Ein Anruf genügt: Wir vereinbaren zeitnah einen Termin und kommen mit dem passenden Werkzeug und Ersatzteilen vorbei. Zügig, sauber und zu einem fairen Preis.",
          image: "/services/reparaturservice.jpg",
        },
        {
          heading: "Reparatur aller gängigen Fabrikate",
          body: "Egal von welchem Hersteller: Wir reparieren Rollläden, Fenster, Markisen, Tore und Beschattung aller gängigen Marken – auch wenn die Anlage nicht von uns stammt.",
          image: "/leistungen/reparaturservice-2.jpg",
        },
        {
          heading: "Wartung & Nachrüstung",
          body: "Bei der Gelegenheit prüfen wir den Zustand Ihrer Anlage und rüsten auf Wunsch nach – vom neuen Motor bis zum Sicherheitsbeschlag. So beugen Sie dem nächsten Defekt direkt vor.",
          image: "/leistungen/reparaturservice-3.jpg",
        },
        {
          heading: "Eigenes Servicefahrzeug in der Region",
          body: "Mit eigenem Servicefahrzeug sind wir in den Landkreisen Erding, Mühldorf, Ebersberg und München unterwegs – kurze Wege, schnelle Hilfe, persönlicher Ansprechpartner.",
          image: "/leistungen/reparaturservice-4.jpg",
        },
      ],
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
