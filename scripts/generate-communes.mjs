import fs from 'node:fs';
import path from 'node:path';

const rawCommunes = [
  { name: 'Montpellier', cp: '34000', pop: 300000, type: 'Métropole tech & quartiers modernes (Port Marianne, Antigone, Écusson)' },
  { name: 'Béziers', cp: '34500', pop: 78000, type: 'Cité historique & villas du Biterrois' },
  { name: 'Sète', cp: '34200', pop: 44000, type: 'Ville maritime, toitures plates et maisons de pécheurs' },
  { name: 'Agde', cp: '34300', pop: 29000, type: 'Station balnéaire & résidences secondaires du Cap' },
  { name: 'Lunel', cp: '34400', pop: 26000, type: 'Plaine lunelloise, toitures canal & grandes villas' },
  { name: 'Frontignan', cp: '34110', pop: 23000, type: 'Bassin de Thau, maisons individuelles et environnement salin' },
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
  { name: 'Frontignan', cp: '34110', pop: 23000, type: 'Muscat & plages, toitures terrasse' },
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

const generateCommuneData = (c) => {
  const slug = c.name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  // Calculate customized yield and ROI stats
  const sunHours = 2700;
  const yieldPerKwc = 1350; // kWh per kWc in Herault
  const prod3kwc = Math.round(3 * yieldPerKwc);
  const prod6kwc = Math.round(6 * yieldPerKwc);
  const savings6kwc = Math.round(prod6kwc * 0.2516); // ~2 038 € / year savings
  const prime6kwc = 1680; // Prime autoconsommation 2026

  return {
    name: c.name,
    slug: slug,
    codePostal: c.cp.split(',')[0].trim(),
    population: c.pop,
    type: c.type,
    sunHours,
    yieldPerKwc,
    stats: {
      prod3kwc: `${prod3kwc.toLocaleString('fr-FR')} kWh/an`,
      prod6kwc: `${prod6kwc.toLocaleString('fr-FR')} kWh/an`,
      savings6kwc: `${savings6kwc.toLocaleString('fr-FR')} €/an`,
      prime6kwc: `${prime6kwc.toLocaleString('fr-FR')} €`
    },
    blocs: {
      intro: `Passer au solaire à ${c.name} (${c.codePostal}) est une décision d'une rentabilité exceptionnelle. Bénéficiant de plus de 2 700 heures d'ensoleillement annuel dans l'Hérault, les toitures de ${c.name} — qu'il s'agisse de tuiles canal languedociennes, de mas viticoles ou de résidences neuves RE2020 pré-câblées — affichent un rendement moyen de 1 350 kWh par kWc installé. Face à l'explosion des factures d'électricité liées à l'usage des climatiseurs en été et des pompes à chaleur en hiver, l'autoconsommation photovoltaïque permet de couvrir jusqu'à 80% des besoins énergétiques de votre foyer.`,
      conseil: `À ${c.name}, tout projet d'installation solaire donne accès aux aides financières 2026 : la prime à l'autoconsommation (jusqu'à 1 680 € pour un kit 6 kWc), la TVA réduite à 10% et le contrat de revente du surplus EDF OA garanti sur 20 ans. Dans le département du 34, une déclaration préalable de travaux auprès de la mairie de ${c.name} est obligatoire. Si votre bien se situe dans le périmètre protégé d'un monument historique (comme les abords de l'Écusson à Montpellier ou le Canal du Midi), notre équipe d'installateurs certifiés RGE QualiPV prend en charge le dossier Bâtiments de France (ABF) ainsi que la demande de raccordement Enedis Hérault.`,
      patrimoine: `À l'instar des plus belles architectures de l'Hérault — du patrimoine historique biterrois aux constructions modernes bordant le littorale — les installations solaires à ${c.name} sont conçues pour s'intégrer harmonieusement. Les modules monocristallins full black dernière génération épousent la ligne des toitures en tuiles canal sans dénaturer le charme local. Grâce au micro-onduleur Enphase IQ8, chaque panneau produit indépendamment, garantissant une efficacité maximale même en cas d'ombrage partiel causé par les pins parasols ou les platanes centenaires.`,
      faq: [
        {
          q: `Quel est le prix moyen d'une installation solaire à ${c.name} ?`,
          a: `Le coût TTC avant aides varie selon la puissance : de 6 800 € à 9 500 € pour un kit 3 kWc (idéal maison individuelle), et de 11 500 € à 15 500 € pour 6 kWc. Après déduction de la prime à l'autoconsommation, le ROI net est atteint en 5 à 7 ans à ${c.name}.`
        },
        {
          q: `La tramontane et les coups de mer détériorent-ils les panneaux solaires à ${c.name} ?`,
          a: `Non. Les panneaux installés par nos partenaires QualiPV RGE sont certifiés pour résister aux rafales de vent de plus de 210 km/h et possèdent une protection anti-corrosion saline renforcée idéale pour le climat héraultais.`
        },
        {
          q: `Quels sont les délais d'installation et de raccordement Enedis dans le 34 ?`,
          a: `Comptez environ 3 à 4 semaines pour l'accord d'urbanisme de la mairie de ${c.name}, 1 à 2 jours pour la pose physique des panneaux, puis 2 à 4 semaines pour la mise en service Enedis Hérault.`
        }
      ],
      marche: {
        installateursRGE: 42,
        croissanceAns: '+40%',
        delaiMoyen: '4 à 6 semaines',
        prixMoyen6Kwc: '11 500 € - 14 900 €'
      }
    }
  };
};

const fullCommunesData = communesList.map(generateCommuneData);

const targetDir = path.join(process.cwd(), 'src/data');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'communes.json'), JSON.stringify(fullCommunesData, null, 2));
console.log(`✅ Generated ${fullCommunesData.length} communes in src/data/communes.json`);
