import fs from 'node:fs';
import path from 'node:path';

const rawCommunes = [
  { name: 'Montpellier', cp: '34000', pop: 300000, type: 'Métropole tech & quartiers modernes (Port Marianne, Antigone, Écusson)' },
  { name: 'Béziers', cp: '34500', pop: 78000, type: 'Cité historique & villas du Biterrois' },
  { name: 'Sète', cp: '34200', pop: 44000, type: 'Ville maritime, toitures plates et maisons de pécheurs' },
  { name: 'Agde', cp: '34300', pop: 29000, type: 'Station balnéaire & résidences secondaires du Cap' },
  { name: 'Lunel', cp: '34400', pop: 26000, type: 'Plaine lunelloise, toitures canal & grandes villas' },
  { name: 'Frontignan', cp: '34110', pop: 23000, type: 'Muscat & plages, toitures terrasse' },
  { name: 'Castelnau-le-Lez', cp: '34170', pop: 23000, type: 'Résidentiel haut de gamme & villas RE2020' },
  { name: 'Mauguio', cp: '34130', pop: 17000, type: 'Plaine agricole & Carnon littoral' },
  { name: 'Lattes', cp: '34970', pop: 17000, type: 'Quartiers neufs pré-câblés & mas héraultais' },
  { name: 'Mèze', cp: '34140', pop: 12600, type: 'Étang de Thau & toitures provençales canal' },
  { name: 'Saint-Gély-du-Fesc', cp: '34980', pop: 10500, type: 'Villas de garrigue & toitures tuiles canal' },
  { name: 'Villeneuve-lès-Maguelone', cp: '34750', pop: 10400, type: 'Commune littorale, ensoleillement maximal' },
  { name: 'Juvignac', cp: '34990', pop: 11000, type: 'Lotissements modernes & villas avec piscine' },
  { name: 'Pérols', cp: '34470', pop: 9000, type: 'Périurbain Montpellier & étangs' },
  { name: 'Clermont-l\'Hérault', cp: '34800', pop: 9000, type: 'Cœur d\'Hérault & maisons individuelles' },
  { name: 'La Grande-Motte', cp: '34280', pop: 8600, type: 'Architecture pyramidale & toitures-terrasses' },
  { name: 'Saint-Jean-de-Védas', cp: '34430', pop: 11000, type: 'Zone dynamique & pavillons modernes' },
  { name: 'Sérignan', cp: '34410', pop: 7500, type: 'Littoral biterrois & résidences d\'été' },
  { name: 'Pézenas', cp: '34120', pop: 8400, type: 'Cité Molière, toitures tuiles canal & mas' },
  { name: 'Grabels', cp: '34790', pop: 8800, type: 'Vallée de la Mosson & villas individuelles' },
  { name: 'Marseillan', cp: '34340', pop: 7800, type: 'Port de Thau, vignobles & toitures en pente' },
  { name: 'Vendargues', cp: '34740', pop: 7000, type: 'Est montpelliérain & zones artisanales/villas' },
  { name: 'Balaruc-les-Bains', cp: '34540', pop: 7000, type: 'Station thermale & toitures plates à fort potentiel' },
  { name: 'Jacou', cp: '34830', pop: 6800, type: 'Commune résidentielle boisée & maisons contemporaines' },
  { name: 'Gignac', cp: '34150', pop: 6500, type: 'Vallée de l\'Hérault & mas traditionnels' },
  { name: 'Lodève', cp: '34700', pop: 7400, type: 'Haut-Hérault, fort gisement solaire en altitude' },
  { name: 'Palavas-les-Flots', cp: '34250', pop: 6000, type: 'Station balnéaire, exposition sud maritime' },
  { name: 'Saint-Clément-de-Rivière', cp: '34980', pop: 5000, type: 'Pins et garrigue, villas de standing' },
  { name: 'Marsillargues', cp: '34590', pop: 6500, type: 'Petite Camargue héraultaise' },
  { name: 'Le Crès', cp: '34920', pop: 9500, type: 'Proche lac & lotissements familiaux' },
  { name: 'Bedarieux', cp: '34600', pop: 5800, type: 'Hauts cantons héraultais & toitures tuiles' },
  { name: 'Pinet', cp: '34850', pop: 2000, type: 'Vignobles Picpoul & domaines agricoles' },
  { name: 'Paulhan', cp: '34230', pop: 4000, type: 'Plaine centrale de l\'Hérault' },
  { name: 'Montagnac', cp: '34530', pop: 4300, type: 'Pays de Pézenas, toitures terrasses & canal' },
  { name: 'Florensac', cp: '34510', pop: 5000, type: 'Proche mer, villas avec grande surface de toit' },
  { name: 'Valras-Plage', cp: '34350', pop: 4200, type: 'Littoral Sud Béziers & toitures terrasse' },
  { name: 'Cazouls-lès-Béziers', cp: '34370', pop: 5000, type: 'Vallée de l\'Orb & villas récentes' },
  { name: 'Sauvian', cp: '34410', pop: 5500, type: 'Agglo de Béziers & lotissements neufs' },
  { name: 'Maraussan', cp: '34370', pop: 4600, type: 'Coteaux biterrois & toitures dégagées' },
  { name: 'Murviel-lès-Béziers', cp: '34490', pop: 3100, type: 'Circulade languedocienne & mas' },
  { name: 'Bessan', cp: '34550', pop: 5200, type: 'Bassin d\'Agde & zones pavillonnaires' },
  { name: 'Saint-Mathieu-de-Tréviers', cp: '34270', pop: 4900, type: 'Pied du Pic Saint-Loup & rendement maximal' },
  { name: 'Clapiers', cp: '34830', pop: 5400, type: 'Nord Montpellier & villas sous garrigue' },
  { name: 'Montferrier-sur-Lez', cp: '34980', pop: 3900, type: 'Bords du Lez & belles demeures' },
  { name: 'Saint-Aunès', cp: '34130', pop: 3700, type: 'Zone Eco-parc & pavillons récents' },
  { name: 'Baillargues', cp: '34670', pop: 7700, type: 'Golf & résidences de grand standing' },
  { name: 'Castries', cp: '34160', pop: 6300, type: 'Château de Castries & lotissements' },
  { name: 'Saint-Brès', cp: '34670', pop: 3100, type: 'Est Hérault & villas récentes' },
  { name: 'Lansargues', cp: '34130', pop: 3100, type: 'Marais & toitures canal exposées sud' },
  { name: 'Mireval', cp: '34110', pop: 3300, type: 'Vignobles du Muscat & villas' },
  { name: 'Vic-la-Gardiole', cp: '34110', pop: 3400, type: 'Entre étang et garrigue' },
  { name: 'Balaruc-le-Vieux', cp: '34540', pop: 2700, type: 'Village médiéval & toitures surplombantes' },
  { name: 'Gigean', cp: '34770', pop: 6500, type: 'Pied de la Gardiole & pavillons neufs' },
  { name: 'Montbazin', cp: '34560', pop: 3100, type: 'Vallée de la Vène & maisons individuelles' },
  { name: 'Poussan', cp: '34560', pop: 6000, type: 'Nord de Thau & quartiers résidentiels' },
  { name: 'Cournonterral', cp: '34660', pop: 6400, type: 'Ouest Montpellier & villas avec piscine' },
  { name: 'Cournonsec', cp: '34660', pop: 3500, type: 'Village vigneron & lotissements récents' },
  { name: 'Fabrègues', cp: '34690', pop: 7200, type: 'A750 & villas familiales' },
  { name: 'Pignan', cp: '34570', pop: 7200, type: 'Château de Pignan & toitures en tuile' },
  { name: 'Lavérune', cp: '34880', pop: 3300, type: 'Parc du Château & maisons de village' },
  { name: 'Saint-Georges-d\'Orques', cp: '34680', pop: 5600, type: 'Coteaux du Muscat & mas' },
  { name: 'Vailhauquès', cp: '34570', pop: 2600, type: 'Garrigue ouest & villas contemporaines' },
  { name: 'Montarnaud', cp: '34570', pop: 4100, type: 'A75 & lotissements très prisés' },
  { name: 'Aniane', cp: '34150', pop: 2900, type: 'Pont du Diable & toitures traditionnelles' },
  { name: 'Saint-André-de-Sangonis', cp: '34720', pop: 6200, type: 'Carrefour A75/A750 & grandes toitures' },
  { name: 'Canet', cp: '34800', pop: 3500, type: 'Bords de l\'Hérault & pavillons récents' },
  { name: 'Vias', cp: '34450', pop: 5700, type: 'Littoral biterrois & résidences d\'été' },
  { name: 'Portiragnes', cp: '34420', pop: 3100, type: 'Canal du Midi & village languedocien' },
  { name: 'Cers', cp: '34420', pop: 2500, type: 'Proche Béziers & toitures bien orientées' },
  { name: 'Boujan-sur-Libron', cp: '34760', pop: 3400, type: 'Banlieue biterroise & villas modernes' },
  { name: 'Lignan-sur-Orb', cp: '34490', pop: 3200, type: 'Rives de l\'Orb & grandes propriétés' },
  { name: 'Thézan-lès-Béziers', cp: '34490', pop: 3000, type: 'Coteaux & toitures dégagées' },
  { name: 'Capestang', cp: '34310', pop: 3300, type: 'Collégiale & maisons au bord du canal' },
  { name: 'Nissan-lez-Enserune', cp: '34440', pop: 4000, type: 'Oppidum d\'Ensérune & toitures canal' },
  { name: 'Montady', cp: '34310', pop: 4000, type: 'Étang asséché de Montady & mas' },
  { name: 'Nébian', cp: '34800', pop: 1500, type: 'Cœur d\'Hérault & villas de campagne' },
  { name: 'Saint-Paul-et-Valmalle', cp: '34570', pop: 1200, type: 'Vallée de la Mosson & cadre vert' },
  { name: 'Saussan', cp: '34570', pop: 1600, type: 'Village résidentiel & maisons individuelles' },
  { name: 'Murviel-lès-Montpellier', cp: '34570', pop: 1900, type: 'Oppidum & hauts de garrigue' }
];

// Deduplicate by name
const uniqueCommunesMap = new Map();
for (const c of rawCommunes) {
  if (!uniqueCommunesMap.has(c.name)) {
    uniqueCommunesMap.set(c.name, c);
  }
}
const communesList = Array.from(uniqueCommunesMap.values());

const getCommuneCategory = (name) => {
  const littoralList = ['sete', 'agde', 'frontignan', 'villeneuve-les-maguelone', 'la-grande-motte', 'marseillan', 'balaruc-les-bains', 'palavas-les-flots', 'valras-plage', 'vias', 'portiragnes', 'vic-la-gardiole', 'balaruc-le-vieux', 'meze'];
  const urbainList = ['montpellier', 'beziers'];
  const montagneuxList = ['lodeve', 'bedarieux'];
  const suburbainList = [
    'castelnau-le-lez', 'juvignac', 'perols', 'saint-jean-de-vedas', 'grabels', 'vendargues', 'jacou', 
    'le-cres', 'clapiers', 'montferrier-sur-lez', 'saint-aunes', 'baillargues', 'castries', 'saint-bres', 
    'lansargues', 'gigean', 'montbazin', 'poussan', 'cournonterral', 'cournonsec', 'fabregues', 'pignan', 
    'laverune', 'saint-georges-d-orques', 'vailhauques', 'montarnaud', 'saussan', 'murviel-les-montpellier', 
    'lattes', 'mauguio'
  ];

  const slug = name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (littoralList.includes(slug)) return 'littoral';
  if (urbainList.includes(slug)) return 'urbain';
  if (montagneuxList.includes(slug)) return 'montagneux';
  if (suburbainList.includes(slug)) return 'suburbain';
  return 'viticole';
};

const generateCommuneData = (c) => {
  const slug = c.name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const category = getCommuneCategory(c.name);

  // Yield settings
  const sunHours = 2700;
  let yieldPerKwc = 1350;
  if (category === 'montagneux') yieldPerKwc = 1380; // cooler air increase
  if (category === 'littoral') yieldPerKwc = 1365; // sea albedo increase

  const prod3kwc = Math.round(3 * yieldPerKwc);
  const prod6kwc = Math.round(6 * yieldPerKwc);
  const savings6kwc = Math.round(prod6kwc * 0.2516); // ~2 038 € / year savings
  const prime6kwc = 1680; // Prime autoconsommation 2026

  let intro = '';
  let conseil = '';
  let patrimoine = '';
  let faq = [];
  let market = {};

  if (category === 'urbain') {
    intro = `Passer à l'énergie solaire à ${c.name} (${c.codePostal}) constitue une opportunité majeure pour réduire vos factures d'électricité urbaine. Dans cette grande agglomération de l'Hérault, les toitures résidentielles subissent directement l'impact de la chaleur estivale. L'installation de modules photovoltaïques en autoconsommation permet d'alimenter vos systèmes de climatisation au moment précis où le soleil frappe le plus fort, limitant ainsi vos achats au réseau national.`;
    
    conseil = `Pour les projets situés à ${c.name}, la réglementation d'urbanisme locale (PLU) impose des règles strictes en matière d'aspect extérieur. L'obtention d'une déclaration préalable en mairie est requise. Si votre bâtiment se trouve à proximité d'un monument historique (comme les abords de l'Écusson à Montpellier ou les arènes de Béziers), l'avis conforme des Architectes des Bâtiments de France (ABF) est obligatoire avant toute intervention de raccordement Enedis.`;
    
    patrimoine = `Afin d'intégrer harmonieusement les capteurs sur les toitures urbaines de ${c.name}, l'usage de panneaux solaires monocristallins ultra-sombres de type "Full Black" est vivement conseillé. De plus, pour contrer les zones d'ombres partielles causées par les platanes ou les cheminées des immeubles voisins, nos installateurs partenaires RGE QualiPV préconisent des micro-onduleurs Enphase IQ8 pour optimiser chaque cellule indépendamment.`;
    
    faq = [
      {
        q: `Faut-il obligatoirement l'accord des Bâtiments de France à ${c.name} ?`,
        a: `Oui, si votre maison à ${c.name} se situe dans un périmètre sauvegardé ou historique. Dans ce cas, les panneaux de couleur uniforme noire (Full Black) posés en surimposition discrète sont généralement exigés par les ABF.`
      },
      {
        q: `Comment optimiser le rendement en milieu urbain dense à ${c.name} ?`,
        a: `En utilisant des micro-onduleurs individuels sous chaque panneau. Ainsi, l'ombrage partiel d'un bâtiment voisin ou d'un arbre de rue n'affecte pas l'ensemble de votre production photovoltaïque.`
      },
      {
        q: `Où s'adresser pour déposer le dossier en mairie de ${c.name} ?`,
        a: `Le dossier de déclaration préalable (DP) doit être déposé directement au service urbanisme de la mairie de ${c.name} ou envoyé en ligne via leur portail de guichet unique.`
      }
    ];

    market = {
      installateursRGE: 54,
      croissanceAns: '+42%',
      delaiMoyen: '3 à 5 semaines',
      prixMoyen6Kwc: '11 900 € - 15 500 €'
    };
  } else if (category === 'littoral') {
    intro = `L'installation de panneaux solaires à ${c.name} (${c.codePostal}) bénéficie de conditions d'ensoleillement maximales sur le littoral héraultais. L'absence d'ombrage géographique naturel et la réverbération de la mer (effet d'albedo) maximisent le rendement par mètre carré. Cependant, le milieu côtier impose des contraintes physiques particulières que nos partenaires QualiPV RGE maîtrisent parfaitement.`;
    
    conseil = `À ${c.name}, la proximité de la mer expose le matériel à l'humidité saline et aux vents marins violents. Il est impératif d'utiliser des panneaux solaires certifiés résistants à la corrosion saline (norme IEC 61701 grade 6) et des structures de fixation robustes en aluminium anodisé ou en inox. Une déclaration d'urbanisme spécifique au littoral doit être validée en mairie avant de procéder à la mise en service Enedis Hérault.`;
    
    patrimoine = `Que ce soit sur les toitures-terrasses des constructions modernes du littoral ou les maisons de pêcheurs traditionnelles à Sète ou Marseillan, l'intégration solaire à ${c.name} respecte le paysage marin. Les modules monocristallins sont fixés à l'aide de crochets en inox ultra-résistants capables de supporter la Tramontane et les tempêtes marines sans compromettre l'étanchéité du bâtiment.`;
    
    faq = [
      {
        q: `L'air salin de ${c.name} abîme-t-il les panneaux photovoltaïques ?`,
        a: `Non, à condition de choisir des panneaux solaires haut de gamme bénéficiant d'un traitement anti-corrosion saline certifié (norme IEC 61701). Nos installateurs n'utilisent que des métaux nobles (inox, alu) pour l'intégration.`
      },
      {
        q: `Les panneaux solaires résistent-ils aux coups de vent sur les côtes de ${c.name} ?`,
        a: `Oui, les structures de surimposition posées par des professionnels certifiés RGE dans l'Hérault sont homologuées pour résister à des rafales de vent de plus de 210 km/h conformes aux normes Eurocode.`
      },
      {
        q: `Faut-il nettoyer plus souvent ses panneaux solaires sur le littoral de ${c.name} ?`,
        a: `Les résidus de sel et de sable peuvent légèrement réduire la production. Bien que les pluies régulières fassent l'essentiel du nettoyage, un rinçage à l'eau claire sans détergent est recommandé une fois par an au printemps.`
      }
    ];

    market = {
      installateursRGE: 29,
      croissanceAns: '+38%',
      delaiMoyen: '4 à 6 semaines',
      prixMoyen6Kwc: '12 200 € - 15 900 €'
    };
  } else if (category === 'suburbain') {
    intro = `Installer des panneaux solaires photovoltaïques à ${c.name} (${c.codePostal}) s'inscrit parfaitement dans la transition énergétique des communes résidentielles de la couronne montpelliéraine. Avec la multiplication des villas modernes équipées de pompes à chaleur (PAC) et de véhicules électriques, l'autoconsommation directe permet d'effacer une grande partie de vos dépenses énergétiques diurnes.`;
    
    conseil = `Dans les quartiers récents et les lotissements de ${c.name}, de nombreuses maisons individuelles ont été bâties selon les normes RT2012 ou RE2020. Ces habitations modernes possèdent souvent des fourreaux électriques pré-câblés reliant les combles au tableau électrique, ce qui simplifie grandement l'installation et réduit le coût de pose. Une simple déclaration préalable en mairie de ${c.name} suffit avant de lancer le raccordement auprès d'Enedis.`;
    
    patrimoine = `Les architectures résidentielles de ${c.name} offrent d'excellentes surfaces de toitures orientées sud ou est-ouest. L'usage de panneaux photovoltaïques Full Black en surimposition s'intègre discrètement sur les tuiles contemporaines. Nos électriciens certifiés RGE QualiPV préconisent d'y associer une borne de recharge intelligente pour charger votre voiture directement avec le surplus de courant produit sur votre toit.`;
    
    faq = [
      {
        q: `Peut-on alimenter une pompe à chaleur et charger sa voiture électrique à ${c.name} ?`,
        a: `Oui. L'autoconsommation photovoltaïque à ${c.name} est idéale pour couvrir en journée les besoins d'une PAC réversible et d'un véhicule hybride ou électrique, réduisant de 70% vos coûts de carburant et de chauffage.`
      },
      {
        q: `Quels sont les délais administratifs pour un projet solaire à ${c.name} ?`,
        a: `Comptez en moyenne 1 mois pour l'obtention de la déclaration préalable (DP) en mairie de ${c.name}, 1 à 2 jours pour la pose du matériel, et 2 à 3 semaines pour la mise en service Enedis Hérault.`
      },
      {
        q: `Peut-on installer des panneaux solaires sur un abri voiture (carport) à ${c.name} ?`,
        a: `Tout à fait. Si votre toiture principale de maison est ombragée ou mal orientée à ${c.name}, la création d'un carport solaire ou d'une pergola photovoltaïque dans le jardin est une excellente alternative.`
      }
    ];

    market = {
      installateursRGE: 48,
      croissanceAns: '+45%',
      delaiMoyen: '3 à 4 semaines',
      prixMoyen6Kwc: '11 500 € - 14 500 €'
    };
  } else if (category === 'montagneux') {
    intro = `Le potentiel solaire à ${c.name} (${c.codePostal}) présente des atouts de rendement spécifiques à l'altitude. Située dans l'arrière-pays héraultais, cette zone géographique bénéficie d'une atmosphère plus fraîche. Les cellules photovoltaïques fonctionnant mieux à basse température, l'efficacité des modules solaires y est en moyenne 4% supérieure à celle des plaines lors des chaudes journées d'été.`;
    
    conseil = `Pour les installations solaires à ${c.name}, la toiture doit être conçue pour faire face aux contraintes de montagne (comme le poids de la neige ou la force des orages cévenols). L'ancrage des fixations en surimposition sur les chevrons doit être renforcé. Toutes les démarches en mairie de ${c.name} pour l'accord d'urbanisme et le Consuel sont prises en charge par nos poseurs locaux certifiés RGE.`;
    
    patrimoine = `Les habitations de ${c.name} et des hauts cantons héraultais possèdent souvent des toits à forte inclinaison couverts de tuiles canal épaisses ou d'ardoises. Les techniciens solaires du 34 utilisent des crochets de fixation robustes adaptés pour préserver l'étanchéité originale des toits anciens tout en assurant une résistance maximale à la prise au vent.`;
    
    faq = [
      {
        q: `Le froid de l'arrière-pays héraultais à ${c.name} nuit-il aux panneaux solaires ?`,
        a: `Au contraire. Les panneaux solaires sont des capteurs de lumière, pas de chaleur. Le froid relatif en altitude à ${c.name} permet de stabiliser la température des cellules photovoltaïques et d'améliorer leur rendement par rapport à la plaine.`
      },
      {
        q: `Comment se comporte l'installation face à la neige ou la grêle à ${c.name} ?`,
        a: `Les verres trempés de nos panneaux solaires QualiPV RGE sont certifiés pour résister aux impacts de grêle sévères (norme IEC 61215) et aux charges de neige lourdes. L'inclinaison du toit favorise le glissement naturel de la neige.`
      },
      {
        q: `Quel est le rendement de production annuel en altitude à ${c.name} ?`,
        a: `Grâce à l'altitude et à l'air frais, une installation à ${c.name} produit environ 1 380 kWh par kWc installé par an, un chiffre supérieur à la moyenne nationale.`
      }
    ];

    market = {
      installateursRGE: 18,
      croissanceAns: '+32%',
      delaiMoyen: '4 à 6 semaines',
      prixMoyen6Kwc: '11 400 € - 14 900 €'
    };
  } else {
    // category === 'viticole' (plaine / agricultural regions / valleys)
    intro = `Passer à l'énergie solaire à ${c.name} (${c.codePostal}) est particulièrement adapté aux grandes surfaces de toitures disponibles dans cette plaine agricole de l'Hérault. Les mas traditionnels et les domaines agricoles bénéficient d'un ensoleillement direct exceptionnel sans aucune obstruction urbaine, ce qui en fait des sites idéaux pour des centrales solaires de 3 kWc, 6 kWc ou 9 kWc.`;
    
    conseil = `Pour les habitations et mas de ${c.name}, la demande de raccordement Enedis peut parfois nécessiter un passage en compteur triphasé selon la puissance de votre kit solaire. Les démarches d'urbanisme se font auprès du service compétent de la mairie de ${c.name}. Nos partenaires électriciens certifiés RGE QualiPV du 34 s'occupent de toute la partie technique et administrative pour vous garantir l'accès aux aides d'État 2026.`;
    
    patrimoine = `Le charme de nos communes viticoles comme Pézenas ou Pinet exige des finitions soignées. Les installations photovoltaïques sur tuiles canal languedociennes anciennes utilisent des systèmes de crochets double-ancrage pour ne pas fragiliser les tuiles en terre cuite d'origine. Les panneaux full-black garantissent une intégration visuelle élégante sur les bâtisses de caractère.`;
    
    faq = [
      {
        q: `Peut-on équiper les toitures des domaines agricoles ou des mas à ${c.name} ?`,
        a: `Oui, les grands toits des mas viticoles ou hangars de stockage de ${c.name} offrent des surfaces optimales pour installer des systèmes photovoltaïques de grande puissance (jusqu'à 36 kWc), générant d'importants revenus de revente du surplus.`
      },
      {
        q: `Comment poser des panneaux solaires sur des tuiles canal anciennes à ${c.name} ?`,
        a: `Nos artisans RGE utilisent des fixations de toiture brevetées qui se glissent sous la tuile canal de courant et s'ancrent fermement sur la charpente, assurant l'étanchéité sans avoir à sceller les tuiles.`
      },
      {
        q: `Quels sont les avantages fiscaux pour la revente de surplus à ${c.name} ?`,
        a: `En autoconsommation avec vente du surplus, les revenus générés sont totalement exonérés d'impôt en dessous de 3 kWc, et bénéficient d'un abattement avantageux de 71% (Micro-BIC) au-delà.`
      }
    ];

    market = {
      installateursRGE: 35,
      croissanceAns: '+35%',
      delaiMoyen: '4 à 7 semaines',
      prixMoyen6Kwc: '11 200 € - 14 800 €'
    };
  }

  // Inject authoritative outbound links
  const links = {
    renov: 'https://renovoccitanie.laregion.fr/',
    enedis: 'https://www.enedis.fr/raccorder-mon-panneau-solaire',
    mairie: `https://www.google.com/search?q=urbanisme+mairie+${encodeURIComponent(c.name)}`,
    servicePublic: 'https://www.service-public.fr/particuliers/vosdroits/F31487'
  };

  return {
    name: c.name,
    slug: slug,
    codePostal: c.cp.split(',')[0].trim(),
    population: c.pop,
    type: c.type,
    sunHours,
    yieldPerKwc,
    category,
    links,
    stats: {
      prod3kwc: `${prod3kwc.toLocaleString('fr-FR')} kWh/an`,
      prod6kwc: `${prod6kwc.toLocaleString('fr-FR')} kWh/an`,
      savings6kwc: `${savings6kwc.toLocaleString('fr-FR')} €/an`,
      prime6kwc: `${prime6kwc.toLocaleString('fr-FR')} €`
    },
    blocs: {
      intro,
      conseil,
      patrimoine,
      faq,
      marche: market
    }
  };
};

const fullCommunesData = communesList.map(generateCommuneData);

const targetDir = path.join(process.cwd(), 'src/data');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'communes.json'), JSON.stringify(fullCommunesData, null, 2));
console.log(`✅ Generated ${fullCommunesData.length} unique categorized communes in src/data/communes.json`);
