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
    readTime: '8 min',
    image: '/images/prix-panneaux-solaires-herault-2026.png',
    content: `
      <h2>Le budget réel d'une installation solaire photovoltaïque dans l'Hérault en 2026</h2>
      <p>Investir dans l'énergie solaire est l'une des décisions financières les plus rentables pour les propriétaires dans l'Hérault (34), grâce à un ensoleillement moyen de 2 700 heures par an. Cependant, estimer le juste prix d'une installation nécessite de comprendre les composants du devis : le matériel, la main d’œuvre qualifiée RGE, et les frais administratifs de raccordement.</p>

      <h3>Grille tarifaire moyenne dans l'Hérault (Matériel + Pose RGE)</h3>
      <p>Voici un comparatif des tarifs constatés sur le marché héraultais en 2026 pour des installations clé en main équipées de panneaux monocristallins de dernière génération et de micro-onduleurs Enphase IQ8 :</p>
      
      <table class="data-table" style="margin: 1.5rem 0; width: 100%;">
        <thead>
          <tr>
            <th>Puissance installée</th>
            <th>Nombre de panneaux</th>
            <th>Prix brut moyen</th>
            <th>Prime Autoconsommation</th>
            <th>Coût net après aides</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>3 kWc</strong></td>
            <td>7-8 panneaux</td>
            <td>6 800 € – 9 500 €</td>
            <td>1 050 €</td>
            <td><strong>5 750 € – 8 450 €</strong></td>
          </tr>
          <tr>
            <td><strong>6 kWc</strong></td>
            <td>14-16 panneaux</td>
            <td>11 500 € – 15 500 €</td>
            <td>1 680 €</td>
            <td><strong>9 820 € – 13 820 €</strong></td>
          </tr>
          <tr>
            <td><strong>9 kWc</strong></td>
            <td>21-24 panneaux</td>
            <td>15 500 € – 21 000 €</td>
            <td>2 250 €</td>
            <td><strong>13 250 € – 18 750 €</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Quels sont les facteurs qui influencent le devis ?</h3>
      <p>Tous les projets solaires ne se valent pas. Plusieurs facteurs expliquent les écarts de prix constatés :</p>
      <ul>
        <li><strong>Le choix de l'onduleur</strong> : L'utilisation de micro-onduleurs (comme Enphase IQ8) augmente le coût initial de 10 à 15% par rapport à un onduleur de chaîne classique (String), mais optimise le rendement de chaque panneau indépendamment en cas d'ombrage partiel (pins, platanes, cheminées) et offre une garantie de 25 ans.</li>
        <li><strong>L'accessibilité et le type de toiture</strong> : Une toiture en tuiles canal héraultaise classique demande plus de temps de pose (dépose de tuiles, pose de crochets de fixation) qu'une toiture terrasse plate ou un toit en bac acier.</li>
        <li><strong>Le raccordement et la distance au compteur</strong> : Si votre tableau électrique est éloigné de la toiture ou s'il nécessite une mise aux normes (remplacement d'un vieux tableau), des coûts supplémentaires de câblage sont à prévoir.</li>
      </ul>

      <h3>Les frais annexes à ne pas négliger</h3>
      <p>Un devis complet doit inclure les frais administratifs : la déclaration préalable de travaux (DP) en mairie, l'obtention du certificat de conformité du Consuel (environ 180 €), et la demande de raccordement auprès d'Enedis Hérault. Chez nos installateurs certifiés RGE QualiPV du 34, ces prestations sont généralement incluses dans l'offre commerciale clé en main.</p>
    `
  },
  {
    slug: 'autoconsommation-solaire-montpellier',
    title: 'Autoconsommation solaire à Montpellier : produire et consommer son énergie en 2026',
    excerpt: 'Comment adapter ses habitudes énergétiques au climat montpelliérain pour atteindre 80% d’autonomie électrique.',
    date: '2026-02-01',
    readTime: '7 min',
    image: '/images/autoconsommation-solaire-montpellier.png',
    content: `
      <h2>Le guide de l'autoconsommation solaire active à Montpellier</h2>
      <p>L'autoconsommation photovoltaïque consiste à consommer sa propre électricité au moment même où elle est produite par les modules solaires. À Montpellier et dans sa métropole (Lattes, Pérols, Castelnau-le-Lez), la configuration climatique est particulièrement avantageuse pour ce mode de consommation.</p>

      <h3>Pourquoi le climat de l'Hérault favorise l'autoconsommation ?</h3>
      <p>Le département du 34 se caractérise par des étés très chauds et secs qui imposent une utilisation intensive des systèmes de climatisation. Par chance, la courbe de consommation de votre climatiseur coïncide parfaitement avec le pic de production de vos panneaux solaires (entre 11h et 16h, au moment où le soleil est au zénith). En consommant votre propre électricité pour rafraîchir votre maison, vous évitez d'acheter de l'énergie au réseau au tarif fort.</p>

      <h3>Comment maximiser votre taux d'autoconsommation ?</h3>
      <p>Pour réduire significativement vos factures d'électricité, vous devez transférer vos consommations d'énergie de la nuit vers la journée. Voici les actions clés recommandées par nos experts solaires montpelliérains :</p>
      <ul>
        <li><strong>Le chauffe-eau</strong> : Programmez votre cumulus ou chauffe-eau thermodynamique pour qu'il se déclenche exclusivement entre 10h et 15h, plutôt que durant les heures creuses nocturnes classiques.</li>
        <li><strong>La filtration de la piscine</strong> : Si vous possédez une piscine, faites tourner la pompe de filtration en journée. Une pompe de 1 000 W fonctionnant 8 heures par jour en plein soleil consommera 100% d'énergie gratuite et autoproduite.</li>
        <li><strong>Les appareils électroménagers</strong> : Utilisez des prises programmables ou la domotique pour lancer vos lave-vaisselle, lave-linge et sèche-linge durant les heures de fort ensoleillement.</li>
        <li><strong>Le véhicule électrique</strong> : Si vous possédez une voiture électrique ou hybride rechargeable, rechargez-la en journée pendant les week-ends grâce à une borne de recharge intelligente qui adapte sa puissance à votre surplus solaire.</li>
      </ul>

      <h3>Autoconsommation avec revente de surplus vs Autoconsommation totale</h3>
      <p>Dans 95% des cas dans l'Hérault, l'autoconsommation avec revente de surplus est le modèle le plus rentable. Vous consommez ce dont vous avez besoin, et l'excédent non consommé est vendu à EDF Obligation d'Achat au tarif réglementé de 0,13 €/kWh. L'autoconsommation totale (sans réinjection) n'est intéressante que pour de toutes petites installations (1 ou 2 panneaux en autoconsommation directe sans revente).</p>
    `
  },
  {
    slug: 'rentabilite-panneaux-solaires-herault',
    title: 'Rentabilité panneaux solaires dans l’Hérault : ROI, production réelle et économies',
    excerpt: 'Calcul du retour sur investissement exact dans le 34 avec un rendement moyen de 1 350 kWh par kWc.',
    date: '2026-02-10',
    readTime: '9 min',
    image: '/images/rentabilite-panneaux-solaires-herault.png',
    content: `
      <h2>Combien rapporte réellement une installation de panneaux solaires dans le 34 ?</h2>
      <p>La rentabilité d'un projet solaire repose sur un calcul simple : le montant de l'investissement initial net d'aides divisé par les économies annuelles générées. Dans le département de l'Hérault, les chiffres sont parmi les plus attractifs de France métropolitaine.</p>

      <h3>Une production photovoltaïque exceptionnelle</h3>
      <p>L'Hérault bénéficie d'une irradiation solaire élevée. En moyenne, un kilowatt-crête (kWc) de panneaux photovoltaïques produit <strong>1 350 kWh par an</strong> dans le 34. 
      À titre d'exemple :</p>
      <ul>
        <li>Une installation de <strong>3 kWc</strong> produit environ <strong>4 050 kWh/an</strong>.</li>
        <li>Une installation de <strong>6 kWc</strong> produit environ <strong>8 100 kWh/an</strong>.</li>
        <li>Une installation de <strong>9 kWc</strong> produit environ <strong>12 150 kWh/an</strong>.</li>
      </ul>

      <h3>Simulation financière de rentabilité (Exemple concret sur 6 kWc)</h3>
      <p>Prenons l'exemple d'une villa héraultaise à Béziers consommant 10 000 kWh d'électricité par an (chauffage PAC + climatisation + piscine) :</p>
      
      <table class="data-table" style="margin: 1.5rem 0; width: 100%;">
        <thead>
          <tr>
            <th>Indicateur financier</th>
            <th>Valeur estimée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Investissement brut (Matériel + Pose RGE)</td>
            <td>12 500 €</td>
          </tr>
          <tr>
            <td>Prime à l'autoconsommation d'État (2026)</td>
            <td>- 1 680 €</td>
          </tr>
          <tr>
            <td><strong>Investissement net de départ</strong></td>
            <td><strong>10 820 €</strong></td>
          </tr>
          <tr>
            <td>Économies directes sur la facture (taux d'autoconsommation de 60%)</td>
            <td>1 220 € / an</td>
          </tr>
          <tr>
            <td>Revenu de revente du surplus à EDF OA (0,13 € / kWh)</td>
            <td>420 € / an</td>
          </tr>
          <tr>
            <td><strong>Gain annuel total</strong></td>
            <td><strong>1 640 € / an</strong></td>
          </tr>
        </tbody>
      </table>

      <p>Dans ce scénario, le retour sur investissement (ROI) est atteint en <strong>6,6 ans</strong>. Compte tenu d'une hausse moyenne du prix de l'électricité de 5 à 10% par an sur le réseau national, la rentabilité s'accélère et le temps d'amortissement peut chuter à moins de 6 ans.</p>

      <h3>Valorisation immobilière (valeur verte)</h3>
      <p>Au-delà des économies mensuelles, installer des panneaux solaires valorise votre patrimoine. Une maison classée A ou B sur son Diagnostic de Performance Énergétique (DPE) grâce au solaire se vend en moyenne 5 à 15% plus cher dans le Sud de la France qu'une maison équivalente énergivore.</p>
    `
  },
  {
    slug: 'aides-financieres-solaire-34',
    title: 'Aides financières solaire 2026 : MaPrimeRénov’, prime autoconsommation, TVA 10% dans le 34',
    excerpt: 'Toutes les démarches pour obtenir jusqu’à 25% de subventions publiques sur vos panneaux solaires.',
    date: '2026-02-18',
    readTime: '8 min',
    image: '/images/aides-financieres-solaire-34.png',
    content: `
      <h2>Le point complet sur les subventions solaires disponibles dans l'Hérault en 2026</h2>
      <p>L’État soutient activement le développement des énergies renouvelables à travers plusieurs aides financières. Pour en bénéficier, l'unique condition absolue est de confier la pose de votre système solaire à une entreprise certifiée RGE (Reconnu Garant de l'Environnement) disposant de la qualification QualiPV.</p>

      <h3>1. La prime à l'autoconsommation photovoltaïque</h3>
      <p>C'est l'aide principale. Versée sur 5 ans (ou en une seule fois selon les dernières réglementations), son montant dépend de la puissance totale de l'installation :</p>
      <ul>
        <li><strong>Puissance ≤ 3 kWc</strong> : 350 € / kWc (Soit une prime de 1 050 €)</li>
        <li><strong>Puissance ≤ 9 kWc</strong> : 280 € / kWc (Soit une prime de 1 680 € pour un kit 6 kWc et 2 250 € pour 9 kWc)</li>
        <li><strong>Puissance ≤ 36 kWc</strong> : 200 € / kWc (Pour les toitures de copropriétés ou locaux commerciaux)</li>
      </ul>

      <h3>2. Le tarif de rachat garanti EDF OA (Obligation d'Achat)</h3>
      <p>L'électricité que vous produisez et que vous n'utilisez pas est réinjectée sur le réseau Enedis. En tant que producteur, vous la vendez à EDF OA qui s'engage par contrat d'État à vous l'acheter à un tarif fixe pendant 20 ans. En 2026, ce tarif s'établit à <strong>0,13 € par kWh</strong> pour les puissances inférieures à 9 kWc.</p>

      <h3>3. La TVA réduite à 10%</h3>
      <p>Pour les installations solaires raccordées au réseau d'une puissance inférieure ou égale à 3 kWc, la TVA appliquée sur le matériel et la pose par un artisan RGE est réduite à 10% (au lieu de 20%). Pour les installations supérieures à 3 kWc, le taux normal de 20% s'applique sur l'ensemble de la facture.</p>

      <h3>4. MaPrimeRénov' Solaire et les aides locales dans le 34</h3>
      <p>Si MaPrimeRénov' ne subventionne pas directement les panneaux solaires photovoltaïques destinés à l'électricité, elle finance en revanche les systèmes solaires combinés (SSC) et les chauffe-eaux solaires individuels (CESI) qui produisent de la chaleur ou de l'eau chaude. Par ailleurs, certaines communautés de communes de l'Hérault proposent des bonus locaux pour la transition énergétique. Renseignez-vous auprès de votre guichet unique de l'habitat (Espace Conseil France Rénov' de l'Hérault).</p>
    `
  },
  {
    slug: 'panneaux-solaires-villa-heraultaise',
    title: 'Panneaux solaires sur villa héraultaise : tuiles canal, surimposition et intégration',
    excerpt: 'Comment installer des panneaux solaires sur toiture en tuiles canal languedociennes sans risque d’étanchéité.',
    date: '2026-03-01',
    readTime: '7 min',
    image: '/images/panneaux-solaires-villa-heraultaise.png',
    content: `
      <h2>Spécificités et contraintes techniques de pose sur les toits de l'Hérault</h2>
      <p>L'Hérault possède une architecture traditionnelle marquée par la présence de tuiles canal en terre cuite. Installer des panneaux solaires sur ces toitures typiques nécessite un savoir-faire spécifique pour garantir l'étanchéité à long terme de la maison.</p>

      <h3>La technique de pose en surimposition (recommandée)</h3>
      <p>La surimposition est la méthode la plus sûre et la plus répandue en 2026. Elle consiste à fixer des rails en aluminium au-dessus des tuiles existantes, ancrés directement sur la charpente en bois de la villa. Les panneaux photovoltaïques sont ensuite vissés sur ces rails.</p>
      <p><strong>Les avantages de la surimposition :</strong></p>
      <ul>
        <li><strong>Sécurité d'étanchéité</strong> : On ne touche pas à la couche d'étanchéité primaire sous les tuiles. Des crochets spécifiques en inox contournent la tuile canal pour s'ancrer dans les chevrons sans les casser.</li>
        <li><strong>Refroidissement des panneaux</strong> : Un espace d'air de quelques centimètres subsiste sous les modules. Cette ventilation naturelle est capitale en été dans le 34, car des panneaux trop chauds perdent en rendement.</li>
      </ul>

      <h3>La résistance face à la Tramontane</h3>
      <p>L'Hérault est balayé régulièrement par des vents forts venus du nord-ouest, la Tramontane, pouvant dépasser les 100 km/h dans les terres ou sur le littoral (Sète, Frontignan, Agde). Les systèmes de fixation utilisés par nos artisans partenaires sont certifiés pour résister à des arrachements et pressions extrêmes conformes aux normes Eurocodes. Une étude de charge de la charpente est obligatoirement réalisée lors de la visite technique préalable.</p>

      <h3>Contraintes d'urbanisme et Architectes des Bâtiments de France (ABF)</h3>
      <p>Si votre maison est située à proximité d'un monument classé (comme l'Écusson à Montpellier, les arènes de Béziers ou la cathédrale de Lodève), votre projet de panneaux solaires sera soumis à l'avis de l'Architecte des Bâtiments de France. Les ABF exigent généralement :
      <ul>
        <li>Des panneaux à cadre noir (Full Black) pour une intégration visuelle discrète.</li>
        <li>Une disposition homogène sur un seul pan de toit.</li>
        <li>L'interdiction de pose visible depuis la voie publique principale dans certains secteurs très préservés.</li>
      </ul>
      Notre équipe gère l'ensemble de ces dossiers techniques pour obtenir votre déclaration préalable validée en mairie.
    `
  },
  {
    slug: 'batterie-solaire-domestique-herault',
    title: 'Batterie solaire domestique dans l’Hérault : stocker l’énergie pour la nuit et les jours gris',
    excerpt: 'Faut-il ajouter une batterie Lithium LFP à son installation solaire dans le Sud ? Analyse coût / bénéfice.',
    date: '2026-03-10',
    readTime: '8 min',
    image: '/images/batterie-solaire-domestique-herault.png',
    content: `
      <h2>Stocker son électricité solaire dans l'Hérault : opportunité ou surcoût ?</h2>
      <p>Avec l'essor des véhicules électriques et la baisse du coût des technologies de stockage stationnaire, de nombreux propriétaires se posent la question d'installer une batterie solaire domestique pour stocker l'énergie produite durant la journée.</p>

      <h3>La technologie Lithium Fer Phosphate (LFP)</h3>
      <p>En 2026, les batteries au plomb ont totalement disparu du marché résidentiel au profit des batteries <strong>Lithium Fer Phosphate (LFP)</strong>. Cette chimie offre des performances remarquables :</p>
      <ul>
        <li>Une durée de vie supérieure à 6 000 cycles (soit plus de 15 à 20 ans d'utilisation quotidienne).</li>
        <li>Un taux de décharge allant jusqu'à 95% sans détérioration.</li>
        <li>Une sécurité thermique maximale (aucun risque d'incendie par rapport au Lithium-Ion classique).</li>
      </ul>

      <h3>Intérêt économique de la batterie dans le Sud</h3>
      <p>Le prix d'une batterie résidentielle de 5 kWh oscille entre 4 000 € et 6 000 € posée. Dans l'Hérault, où l'ensoleillement est très régulier, est-ce un choix rentable ?</p>
      <p><strong>Les avantages :</strong></p>
      <ul>
        <li><strong>Autonomie accrue</strong> : Vous passez d'un taux d'autonomie moyen de 40% (sans batterie) à plus de 80% (avec batterie), limitant vos achats d'électricité au réseau durant la nuit.</li>
        <li><strong>Sécurité d'alimentation (Backup)</strong> : En cas de coupure de courant Enedis (fréquentes lors des épisodes cévenols orageux d'automne), la batterie prend le relais instantanément pour alimenter vos équipements essentiels (frigo, box internet, éclairage).</li>
      </ul>
      <p><strong>Les limites :</strong></p>
      <p>Financièrement, la rentabilité pure est plus longue à atteindre avec une batterie qu'en vendant simplement son surplus d'électricité à EDF OA à 0,13 €/kWh. Le coût de stockage par kWh reste encore supérieur au tarif de vente du surplus. La batterie est donc recommandée pour les foyers recherchant l'indépendance énergétique ou la sécurité face aux pannes réseau.</p>
    `
  },
  {
    slug: 'revente-surplus-edf-oa',
    title: 'Revente surplus EDF OA : tarifs 2026, contrat et revenus passifs solaire dans le 34',
    excerpt: 'Fonctionnement du contrat de rachat EDF Obligation d’Achat sur 20 ans et déclaration fiscale des revenus.',
    date: '2026-03-15',
    readTime: '7 min',
    image: '/images/revente-surplus-edf-oa.png',
    content: `
      <h2>Comment vendre l'excédent de votre électricité solaire dans l'Hérault ?</h2>
      <p>Lorsque vos panneaux produisent plus d'électricité que ce que consomment vos appareils à un instant T, le surplus d'énergie est automatiquement injecté sur le réseau de distribution géré par Enedis. Grâce au dispositif de l'Obligation d'Achat, vous valorisez financièrement cette électricité non consommée.</p>

      <h3>Qu'est-ce que EDF OA ?</h3>
      <p>EDF Obligation d’Achat (EDF OA) est l'entité désignée par l'État pour acheter l'électricité verte produite par les particuliers et les entreprises. C'est un organisme tiers de confiance. Le contrat d'achat est signé pour une durée ferme de <strong>20 ans</strong>. Le tarif par kWh acheté est fixé par arrêté tarifaire trimestriel au moment de votre demande complète de raccordement.</p>

      <h3>Le tarif de vente du surplus en 2026</h3>
      <p>Pour les installations résidentielles classiques en autoconsommation avec vente du surplus :</p>
      <ul>
        <li>Installations d'une puissance inférieure ou égale à 9 kWc : <strong>0,13 € / kWh</strong> réinjecté.</li>
        <li>Installations d'une puissance comprise entre 9 et 36 kWc : <strong>0,078 € / kWh</strong> réinjecté.</li>
      </ul>

      <h3>Comment se passe la facturation ?</h3>
      <p>Le processus est entièrement automatisé grâce au compteur intelligent Linky :</p>
      <ol>
        <li>Le compteur Linky mesure en temps réel l'électricité injectée sur le réseau.</li>
        <li>Chaque année, à la date anniversaire de la mise en service de votre installation, vous vous connectez sur votre espace client EDF OA.</li>
        <li>Vous visualisez l'index d'injection relevé par Linky, vous validez la facture pré-remplie en ligne.</li>
        <li>EDF OA vous verse le montant par virement bancaire sous quelques jours.</li>
      </ol>

      <h3>Fiscalité des revenus solaires</h3>
      <p>Pour les particuliers disposant d'une installation solaire d'une puissance inférieure ou égale à 3 kWc, les revenus de la revente d'électricité sont **entièrement exonérés d'impôt sur le revenu** et de prélèvements sociaux. Au-delà de 3 kWc, ces revenus doivent être déclarés dans la catégorie des Bénéfices Industriels et Commerciaux (BIC) sous le régime Micro-BIC. Un abattement forfaitaire de 71% est appliqué, rendant l'imposition finale quasi nulle.</p>
    `
  },
  {
    slug: 'installateur-solaire-rge-qualipv-herault',
    title: 'Installateur solaire RGE QualiPV Hérault : comment choisir un professionnel certifié',
    excerpt: 'Les critères indispensables pour choisir son artisan photovoltaïque dans le 34 : garanties, decennale et avis.',
    date: '2026-03-22',
    readTime: '8 min',
    image: '/images/installateur-solaire-rge-qualipv-herault.png',
    content: `
      <h2>Sécuriser son projet photovoltaïque dans le 34 : le choix de l'artisan RGE</h2>
      <p>Face à la multiplication des offres d'installation solaire sur internet, il est crucial pour les propriétaires héraultais d'identifier les professionnels qualifiés et d'éviter les pratiques commerciales trompeuses.</p>

      <h3>La certification QualiPV RGE : une obligation légale</h3>
      <p>Pour obtenir le droit de raccorder vos panneaux photovoltaïques au réseau public Enedis et débloquer les aides financières de l'État, votre installateur doit obligatoirement détenir la certification <strong>RGE (Reconnu Garant de l'Environnement)</strong> associée au label <strong>QualiPV</strong> (géré par l'organisme Qualit'EnR). Il existe deux modules de certification :</p>
      <ul>
        <li><strong>QualiPV Bât</strong> : valide la compétence de l'artisan pour l'intégration des panneaux au bâti et la gestion de l'étanchéité.</li>
        <li><strong>QualiPV Élec</strong> : valide la compétence de l'électricien pour le câblage, le raccordement et la pose des onduleurs ou micro-onduleurs.</li>
      </ul>

      <h3>La checklist de vérification avant de signer</h3>
      <p>Avant de vous engager avec une entreprise solaire à Montpellier, Béziers ou Sète, exigez les documents suivants :</p>
      <ol>
        <li><strong>L'attestation RGE QualiPV en cours de validité</strong> : Vérifiez sur l'annuaire officiel France Rénov' que l'entreprise y figure bien avec son numéro SIRET.</li>
        <li><strong>L'assurance décennale spécifique au photovoltaïque</strong> : Assurez-vous que le document mentionne expressément la pose de générateurs photovoltaïques. Une décennale de couvreur classique ne couvre pas les sinistres liés aux branchements électriques des panneaux.</li>
        <li><strong>Des références locales vérifiables</strong> : Demandez à visiter des installations déjà réalisées par l'artisan dans votre secteur (ex: mas viticole à Pinet, villa contemporaine à Castelnau-le-Lez).</li>
      </ol>

      <h3>Attention aux arnaques solaires courantes</h3>
      <p>Méfiez-vous des entreprises pratiquant le démarchage téléphonique agressif ou à domicile se faisant passer pour des organismes officiels de l'État ou d'Enedis. L'État ne démarche jamais. Refusez systématiquement les offres promettant des "panneaux solaires gratuits" ou financés intégralement par un crédit à la consommation caché sous forme de mensualités prétendument remboursées par votre production.</p>
    `
  }
];
