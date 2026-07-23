export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const guides: Article[] = [
  {
    slug: 'prix-panneaux-solaires-herault-2026',
    title: 'Prix panneaux solaires Hérault 2026 : 3 kWc, 6 kWc, 9 kWc — comparatif complet',
    excerpt: 'Analyse détaillée des coûts d’installation photovoltaïque dans le 34 selon la puissance, les micro-onduleurs et les aides déduites.',
    date: '2026-01-15',
    readTime: '6 min',
    image: '/images/prix-panneaux-solaires-herault-2026.png',
    content: `
      <h2>Tableau comparatif des prix du solaire dans l'Hérault</h2>
      <p>Le budget d'une installation solaire photovoltaïque dans l'Hérault varie principalement selon la puissance crête installée (kWc), la technologie d'onduleurs choisie (onduleur central vs micro-onduleurs Enphase) et l'accessibilité du toit.</p>
      <h3>Coût moyen par kWc posé par un artisan RGE</h3>
      <p>Pour une villa individuelle à Montpellier, Béziers ou Sète, comptez environ 2 100 € à 2 500 € par kWc TTC pose comprise avant aides. La prime à l'autoconsommation de l'État réduit immédiatement cet investissement de 1 050 € à 2 250 €.</p>
    `
  },
  {
    slug: 'autoconsommation-solaire-montpellier',
    title: 'Autoconsommation solaire à Montpellier : produire et consommer son énergie en 2026',
    excerpt: 'Comment adapter ses habitudes énergétiques au climat montpelliérain pour atteindre 80% d’autonomie électrique.',
    date: '2026-02-01',
    readTime: '5 min',
    image: '/images/autoconsommation-solaire-montpellier.png',
    content: `
      <h2>Optimiser sa consommation sous le soleil de Montpellier</h2>
      <p>Avec 2 700 heures d'ensoleillement annuel, Montpellier figure parmi les métropoles les plus favorables au solaire en France. L'utilisation de pompes à chaleur et de climatiseurs en journée permet une rentabilité optimale.</p>
    `
  },
  {
    slug: 'rentabilite-panneaux-solaires-herault',
    title: 'Rentabilité panneaux solaires dans l’Hérault : ROI, production réelle et économies',
    excerpt: 'Calcul du retour sur investissement exact dans le 34 avec un rendement moyen de 1 350 kWh par kWc.',
    date: '2026-02-10',
    readTime: '7 min',
    image: '/images/rentabilite-panneaux-solaires-herault.png',
    content: `
      <h2>Combien rapporte une installation solaire dans le 34 ?</h2>
      <p>Un kit de 6 kWc à Lunel ou Castelnau-le-Lez produit en moyenne 8 100 kWh par an. Avec un tarif de l'électricité à 0,25 €/kWh, les économies annuelles dépassent 1 500 €/an.</p>
    `
  },
  {
    slug: 'aides-financieres-solaire-34',
    title: 'Aides financières solaire 2026 : MaPrimeRénov’, prime autoconsommation, TVA 10% dans le 34',
    excerpt: 'Toutes les démarches pour obtenir jusqu’à 25% de subventions publiques sur vos panneaux solaires.',
    date: '2026-02-18',
    readTime: '6 min',
    image: '/images/aides-financieres-solaire-34.png',
    content: `
      <h2>Les subventions officielles 2026 dans l'Hérault</h2>
      <p>Le cumul de la prime à l'autoconsommation et du tarif d'achat EDF OA garanti 20 ans sécurise financièrement votre investissement solaire.</p>
    `
  },
  {
    slug: 'panneaux-solaires-villa-heraultaise',
    title: 'Panneaux solaires sur villa héraultaise : tuiles canal, surimposition et intégration',
    excerpt: 'Comment installer des panneaux solaires sur toiture en tuiles canal languedociennes sans risque d’étanchéité.',
    date: '2026-03-01',
    readTime: '5 min',
    image: '/images/panneaux-solaires-villa-heraultaise.png',
    content: `
      <h2>Spécificités techniques des toitures héraultaises</h2>
      <p>Les crochets spécifiques pour tuiles canal permettent une fixation robuste sur la charpente tout en préservant l'étanchéité d'origine du toit.</p>
    `
  },
  {
    slug: 'batterie-solaire-domestique-herault',
    title: 'Batterie solaire domestique dans l’Hérault : stocker l’énergie pour la nuit et les jours gris',
    excerpt: 'Faut-il ajouter une batterie Lithium LFP à son installation solaire dans le Sud ? Analyse coût / bénéfice.',
    date: '2026-03-10',
    readTime: '6 min',
    image: '/images/batterie-solaire-domestique-herault.png',
    content: `
      <h2>Faut-il investir dans une batterie solaire en 2026 ?</h2>
      <p>Les batteries Lithium Fer Phosphate (LFP) permettent de stocker le surplus diurne pour alimenter la maison la nuit. Analyse de l'intérêt financier dans le 34.</p>
    `
  },
  {
    slug: 'revente-surplus-edf-oa',
    title: 'Revente surplus EDF OA : tarifs 2026, contrat et revenus passifs solaire dans le 34',
    excerpt: 'Fonctionnement du contrat de rachat EDF Obligation d’Achat sur 20 ans et déclaration fiscale des revenus.',
    date: '2026-03-15',
    readTime: '5 min',
    image: '/images/revente-surplus-edf-oa.png',
    content: `
      <h2>Vendre son surplus d'électricité à EDF OA</h2>
      <p>Le contrat EDF OA garantit le rachat de votre kilowatt-heure à un prix fixe de 0,13 € pendant 20 ans, créant un revenu passif sécurisé.</p>
    `
  },
  {
    slug: 'installateur-solaire-rge-qualipv-herault',
    title: 'Installateur solaire RGE QualiPV Hérault : comment choisir un professionnel certifié',
    excerpt: 'Les critères indispensables pour choisir son artisan photovoltaïque dans le 34 : garanties, decennale et avis.',
    date: '2026-03-22',
    readTime: '6 min',
    image: '/images/installateur-solaire-rge-qualipv-herault.png',
    content: `
      <h2>Sélectionner un installateur qualifié dans le 34</h2>
      <p>Vérifiez impérativement la certification QualiPV Bât et Élec valide, l'assurance décennale en cours et les références locales dans l'Hérault.</p>
    `
  }
];
