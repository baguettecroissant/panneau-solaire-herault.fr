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
    readTime: '12 min',
    image: '/images/prix-panneaux-solaires-herault-2026.png',
    content: `
      <h2>Le budget d'une installation solaire photovoltaïque dans l'Hérault en 2026</h2>
      <p>Investir dans des panneaux solaires est devenu l'une des solutions les plus efficaces pour contrer l'augmentation constante des prix de l'électricité. Dans l'Hérault (34), grâce à un ensoleillement annuel exceptionnel de 2 700 heures, le rendement photovoltaïque est parmi les plus élevés de France. Cependant, le prix d'un projet solaire dépend de plusieurs critères : puissance du générateur, choix du matériel, accessibilité de la toiture et obtention des subventions.</p>
      
      <p>Ce guide décrypte précisément le coût réel d'une installation solaire photovoltaïque en 2026, incluant les tarifs du matériel, de la main-d’œuvre d'un installateur certifié RGE QualiPV, et le reste à charge après déduction des aides étatiques.</p>

      <h3>Tableau comparatif des prix du solaire photovoltaïque (Pose incluse)</h3>
      <p>Voici la grille tarifaire moyenne constatée pour des installations photovoltaïques clés en main posées en surimposition sur toiture tuiles canal dans l'Hérault en 2026. Ces tarifs incluent des modules monocristallins haut de gamme de puissance unitaire 425W+ et des micro-onduleurs Enphase IQ8 :</p>

      <table class="data-table" style="margin: 1.5rem 0; width: 100%;">
        <thead>
          <tr>
            <th>Puissance (kWc)</th>
            <th>Nombre de modules solaires</th>
            <th>Coût brut TTC moyen</th>
            <th>Prime Autoconsommation 2026</th>
            <th>Reste à charge Net estimé</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>3 kWc</strong></td>
            <td>7 à 8 panneaux</td>
            <td>6 800 € – 9 500 €</td>
            <td>1 050 €</td>
            <td><strong>5 750 € – 8 450 €</strong></td>
          </tr>
          <tr>
            <td><strong>6 kWc</strong></td>
            <td>14 à 16 panneaux</td>
            <td>11 500 € – 15 500 €</td>
            <td>1 680 €</td>
            <td><strong>9 820 € – 13 820 €</strong></td>
          </tr>
          <tr>
            <td><strong>9 kWc</strong></td>
            <td>21 à 24 panneaux</td>
            <td>15 500 € – 21 000 €</td>
            <td>2 250 €</td>
            <td><strong>13 250 € – 18 750 €</strong></td>
          </tr>
          <tr>
            <td><strong>12 kWc</strong></td>
            <td>28 à 32 panneaux</td>
            <td>19 000 € – 28 000 €</td>
            <td>2 800 €</td>
            <td><strong>16 200 € – 25 200 €</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>1. Coût du matériel : panneaux solaires et onduleurs</h3>
      <p>Le matériel représente environ 50% à 60% du montant total d'un devis solaire. Les composants clés d'une installation moderne sont :</p>
      <ul>
        <li><strong>Les modules photovoltaïques</strong> : Les panneaux monocristallins de type N dotés de la technologie PERC ou bifaciale offrent les meilleurs rendements en conditions de forte chaleur (jusqu'à 22.5% de rendement cellule). Les grandes marques comme DualSun, Rec, SunPower ou Trina Solar proposent des garanties produit et de production linéaire sur 25 ans.</li>
        <li><strong>L'onduleur ou les micro-onduleurs</strong> : L'onduleur centralisé (onduleur de chaîne) est la solution la moins coûteuse mais présente une faiblesse : si un seul panneau est ombragé par un platane ou une cheminée, toute la chaîne perd en production. À l'inverse, l'usage de micro-onduleurs (ex: Enphase IQ8) permet de rendre chaque module indépendant. Ils coûtent environ 800 € à 2 000 € de plus mais maximisent la production solaire et offrent une garantie fabricant de 25 ans contre 10 ans pour un onduleur classique.</li>
        <li><strong>Le coffret de protection électrique (AC/DC)</strong> : Indispensable pour la sécurité des biens et des personnes, il abrite les disjoncteurs et les parafoudres obligatoires pour protéger votre onduleur de la foudre dans le sud de la France.</li>
      </ul>

      <h3>2. Coût de la main d’œuvre et des démarches administratives</h3>
      <p>Faire appel à un électricien qualifié RGE QualiPV est requis par la loi pour injecter de l'électricité sur le réseau Enedis. La main d'œuvre pour poser 8 à 16 panneaux sur un toit en pente varie entre 1 500 € et 3 000 € selon la hauteur du toit, l'accès (échafaudage requis) et le type de tuiles (tuiles canal languedociennes, toiture terrasse, etc.).</p>
      <p>Les démarches administratives clés comprennent :</p>
      <ol>
        <li>La déclaration préalable de travaux (DP) en mairie.</li>
        <li>Le contrôle de conformité électrique par le CONSUEL (comptez environ 180 € de frais d'attestation de conformité).</li>
        <li>La demande de raccordement et d'accès au réseau auprès d'Enedis.</li>
      </ol>
      <p>La majorité des installateurs RGE sérieux de l'Hérault intègrent l'ensemble de ces frais administratifs dans leur offre commerciale globale.</p>

      <h3>3. Reste à charge net et aides d'État</h3>
      <p>L'État propose plusieurs dispositifs pour encourager le passage au solaire :</p>
      <ul>
        <li><strong>La Prime à l'autoconsommation</strong> : Son montant est déterminé par la puissance de votre installation et vous est versé en une fois à la date anniversaire de la mise en service du système par Enedis. Elle s'élève à 350 €/kWc pour une installation &le; 3 kWc (1 050 €) et à 280 €/kWc pour une installation de 6 à 9 kWc (1 680 € à 2 520 €).</li>
        <li><strong>La TVA réduite à 10%</strong> : Pour toute installation d'une puissance inférieure ou égale à 3 kWc réalisée sur une maison achevée depuis plus de 2 ans, vous bénéficiez d'une TVA à taux réduit de 10% sur le matériel et la pose. Au-delà de 3 kWc, la TVA repasse au taux classique de 20%.</li>
      </ul>

      <div class="callout-box">
        <h4>⚠️ Attention aux offres "Panneaux Solaires à 1€"</h4>
        <p>Il n'existe aucune aide d'État permettant d'obtenir une installation solaire à 1 € ou entièrement gratuite. Ce type d'offres relève généralement du démarchage agressif dissimulant un crédit à la consommation à taux d'intérêt très élevé. Fiez-vous uniquement à des devis transparents détaillant les coûts matériels et de main d'œuvre de professionnels QualiPV RGE locaux.</p>
      </div>
    `
  },
  {
    slug: 'autoconsommation-solaire-montpellier',
    title: 'Autoconsommation solaire à Montpellier : produire et consommer son énergie en 2026',
    excerpt: 'Comment adapter ses habitudes énergétiques au climat montpelliérain pour atteindre 80% d’autonomie électrique.',
    date: '2026-02-01',
    readTime: '10 min',
    image: '/images/autoconsommation-solaire-montpellier.png',
    content: `
      <h2>Le guide pratique de l'autoconsommation photovoltaïque à Montpellier</h2>
      <p>L'autoconsommation solaire consiste à consommer localement et instantanément l'énergie électrique produite par les panneaux solaires disposés sur votre toiture. À Montpellier et dans ses communes voisines (Castelnau-le-Lez, Juvignac, Lattes, Pérols), cette solution est particulièrement pertinente. La région bénéficie de <strong>2 700 heures d'ensoleillement par an</strong>, ce qui permet un amortissement rapide de l'installation.</p>

      <h3>Pourquoi consommer sa propre énergie à Montpellier ?</h3>
      <p>Avec les hausses successives des tarifs réglementés de l'électricité, chaque kilowatt-heure acheté au réseau pèse de plus en plus lourd sur les budgets des ménages. L'autoconsommation solaire permet d'autoproduire une énergie gratuite qui va directement alimenter vos appareils électroménagers, votre système de chauffage ou de climatisation.</p>
      
      <p>Dans l'Hérault, les pics de chaleur estivaux coïncident avec la période de production maximale de vos panneaux photovoltaïques. Ainsi, au moment où vos climatiseurs tournent à plein régime en juillet et en août, vos panneaux génèrent leur puissance maximale, assurant une parfaite couverture de vos consommations thermiques sans rien dépenser sur le réseau.</p>

      <h3>Comment optimiser son taux d'autoconsommation au quotidien ?</h3>
      <p>Pour maximiser la rentabilité de vos panneaux solaires, vous devez décaler l'utilisation de vos gros consommateurs électriques pendant les heures de fort ensoleillement (généralement entre 10h et 16h). Voici les bonnes pratiques à adopter :</p>
      <ul>
        <li><strong>Programmer le chauffe-eau thermodynamique ou cumulus</strong> : Au lieu de le laisser chauffer la nuit durant les heures creuses réseau, paramétrez-le avec une horloge électrique ou votre domotique pour qu'il se mette en route à midi. L'eau chaude sanitaire de votre foyer sera ainsi produite à 100% grâce à l'énergie gratuite du soleil.</li>
        <li><strong>Faire fonctionner la filtration de la piscine en journée</strong> : Une pompe de filtration de piscine consomme entre 750W et 1 500W. En la programmant pour tourner de 10h à 17h en été, vous couvrez l'intégralité de sa consommation grâce à vos panneaux photovoltaïques.</li>
        <li><strong>Déclencher les machines (lave-vaisselle, lave-linge)</strong> : Utilisez les fonctions de départ différé pour lancer vos appareils ménagers l'un après l'autre en milieu de journée.</li>
        <li><strong>Recharger son véhicule électrique à domicile</strong> : Si vous disposez d'une voiture électrique et travaillez à domicile ou êtes présent le week-end, une borne de recharge dynamique solaire peut capter le surplus de production pour recharger votre voiture sans puiser sur le réseau.</li>
      </ul>

      <h3>Les modes d'autoconsommation en France</h3>
      <p>Deux choix principaux s'offrent à vous lors du raccordement par Enedis :</p>
      <ol>
        <li><strong>Autoconsommation avec revente du surplus (Recommandé)</strong> : Vous consommez votre électricité verte. S'il y a un surplus (par exemple en milieu de journée quand personne n'est à la maison), l'excédent est réinjecté sur le réseau et vendu à EDF Obligation d'Achat à un prix garanti de 0,13 € / kWh pendant 20 ans.</li>
        <li><strong>Autoconsommation totale</strong> : Toute l'énergie produite doit être consommée sur place. Si vous produisez un surplus, il est réinjecté gratuitement sur le réseau Enedis. Ce modèle n'est intéressant que pour les micro-installations (moins de 2 panneaux solaires, comme les kits solaires Plug & Play de balcon).</li>
      </ol>

      <div class="callout-box">
        <h4>💡 Rôle de la domotique solaire</h4>
        <p>Les gestionnaires d'énergie ou domotiques solaires (ex: Comwatt, Enphase Envoy-S) analysent la production de votre toiture et déclenchent automatiquement vos appareils électriques énergivores (comme le ballon d'eau chaude ou la pompe à chaleur) uniquement lorsque vos panneaux produisent du surplus de courant. Cela permet d'augmenter votre taux d'autoconsommation jusqu'à 75% sans effort.</p>
      </div>
    `
  },
  {
    slug: 'rentabilite-panneaux-solaires-herault',
    title: 'Rentabilité panneaux solaires dans l’Hérault : ROI, production réelle et économies',
    excerpt: 'Calcul du retour sur investissement exact dans le 34 avec un rendement moyen de 1 350 kWh par kWc.',
    date: '2026-02-10',
    readTime: '11 min',
    image: '/images/rentabilite-panneaux-solaires-herault.png',
    content: `
      <h2>Calcul de rentabilité et retour sur investissement d'une installation solaire dans l'Hérault</h2>
      <p>L'Hérault fait partie des départements français les plus propices à l'énergie solaire. Avec 2 700 heures de soleil par an et un rayonnement solaire direct élevé, le rendement d'une toiture photovoltaïque y est exceptionnel. Mais concrètement, quel est le retour sur investissement (ROI) de l'installation et combien pouvez-vous économiser chaque année ?</p>

      <h3>Le rendement de production d'électricité dans le 34</h3>
      <p>La puissance d'une installation photovoltaïque s'exprime en Kilowatt-crête (kWc). Dans l'Hérault, chaque kWc installé produit en moyenne <strong>1 350 kWh d'électricité par an</strong>. Les performances varient légèrement selon l'inclinaison et l'orientation de votre toiture :</p>
      <ul>
        <li><strong>Orientation Sud, inclinaison 30°</strong> : Rendement optimal de 100% (1 350 kWh / kWc).</li>
        <li><strong>Orientation Sud-Est ou Sud-Ouest</strong> : Très bon rendement de 95% (environ 1 280 kWh / kWc).</li>
        <li><strong>Orientation Est ou Ouest</strong> : Bon rendement de 82% (environ 1 100 kWh / kWc). Les toits Est/Ouest sont intéressants car ils répartissent la production sur toute la journée.</li>
      </ul>

      <h3>Simulation financière : Étude de cas réelle d'une installation de 6 kWc</h3>
      <p>Prenons l'exemple d'une villa individuelle de 120 m² située à Béziers, dotée d'une climatisation réversible et d'une piscine. La consommation annuelle du foyer est de 9 500 kWh, équivalant à une facture d'environ 2 400 € / an.</p>
      
      <p>L'installation se compose de 14 panneaux monocristallins de 425W (puissance totale de 5,95 kWc) équipés de micro-onduleurs Enphase IQ8.</p>

      <table class="data-table" style="margin: 1.5rem 0; width: 100%;">
        <thead>
          <tr>
            <th>Étape du calcul</th>
            <th>Détail financier (TTC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coût total de l'installation (Clé en main posé par un artisan RGE)</td>
            <td>12 500 €</td>
          </tr>
          <tr>
            <td>Déduction : Prime d'autoconsommation de l'État (2026)</td>
            <td>- 1 680 €</td>
          </tr>
          <tr>
            <td><strong>Investissement net à financer</strong></td>
            <td><strong>10 820 €</strong></td>
          </tr>
          <tr>
            <td>Production estimée des panneaux (5,95 kWc x 1 350 kWh)</td>
            <td>8 032 kWh / an</td>
          </tr>
          <tr>
            <td>Économies directes (60% d'autoconsommation - kWh non achetés au réseau)</td>
            <td>1 212 € / an</td>
          </tr>
          <tr>
            <td>Revenus de la revente du surplus à EDF OA (40% de surplus vendu à 0,13 €/kWh)</td>
            <td>417 € / an</td>
          </tr>
          <tr>
            <td><strong>Gains financiers annuels globaux (Année 1)</strong></td>
            <td><strong>1 629 € / an</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Quel est le temps de retour sur investissement (ROI) ?</h3>
      <p>En divisant l'investissement net de départ (10 820 €) par le gain de la première année (1 629 €), le retour sur investissement initial est de <strong>6,6 ans</strong>. 
      Toutefois, ce calcul n'intègre pas la hausse annuelle moyenne des prix de l'électricité sur le réseau national (estimée entre 5% et 10% par an). En prenant en compte cette inflation énergétique, le retour sur investissement réel se situe plutôt aux alentours de <strong>5,5 ans</strong>.</p>

      <p>Une fois les panneaux amortis, l'installation génère de l'électricité 100% gratuite. Étant donné que les modules photovoltaïques modernes ont une durée de vie supérieure à 35 ans (avec une garantie linéaire de performance de 85% à 25 ans), l'installation va générer un bénéfice net cumulé de plus de 45 000 € sur sa durée de fonctionnement.</p>

      <h3>Valorisation de la maison : La valeur verte</h3>
      <p>Un autre aspect souvent ignoré de la rentabilité est la plus-value immobilière. Équiper sa maison de panneaux solaires améliore son DPE (Diagnostic de Performance Énergétique). Dans le sud de la France, les acheteurs immobiliers sont très attentifs aux charges énergétiques. Une maison autonome en énergie se vend plus rapidement et avec une plus-value estimée à environ 7% à 12% par rapport à une maison équivalente dépendante du réseau électrique.</p>
    `
  },
  {
    slug: 'aides-financieres-solaire-34',
    title: 'Aides financières solaire 2026 : MaPrimeRénov’, prime autoconsommation, TVA 10% dans le 34',
    excerpt: 'Toutes les démarches pour obtenir jusqu’à 25% de subventions publiques sur vos panneaux solaires.',
    date: '2026-02-18',
    readTime: '10 min',
    image: '/images/aides-financieres-solaire-34.png',
    content: `
      <h2>Le guide complet des aides et subventions pour l'installation solaire dans l'Hérault</h2>
      <p>Le passage à l'énergie solaire est activement soutenu par l'État français afin d'encourager la transition écologique. Dans l'Hérault (34), plusieurs dispositifs financiers cumulables permettent de réduire considérablement le coût initial d'une centrale photovoltaïque. Pour pouvoir prétendre à ces subventions, une condition réglementaire est obligatoire : confier l'étude et la pose à un artisan certifié <strong>RGE (Reconnu Garant de l'Environnement)</strong> disposant du label QualiPV.</p>

      <h3>1. La Prime à l'Autoconsommation (Prime à l'Investissement)</h3>
      <p>Cette prime est versée directement par l'État aux particuliers choisissant l'autoconsommation avec vente du surplus. Son montant, révisé chaque trimestre, dépend de la puissance de l'installation mesurée en Kilowatt-crête (kWc) :</p>
      
      <table class="data-table" style="margin: 1.5rem 0; width: 100%;">
        <thead>
          <tr>
            <th>Puissance de l'installation</th>
            <th>Montant de la prime par kWc (2026)</th>
            <th>Montant total estimé de la prime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Installation &le; 3 kWc</td>
            <td>350 € / kWc</td>
            <td>Jusqu'à 1 050 €</td>
          </tr>
          <tr>
            <td>Installation &le; 9 kWc</td>
            <td>280 € / kWc</td>
            <td>Jusqu'à 2 520 € (1 680 € pour 6 kWc)</td>
          </tr>
          <tr>
            <td>Installation &le; 36 kWc</td>
            <td>200 € / kWc</td>
            <td>Jusqu'à 7 200 €</td>
          </tr>
          <tr>
            <td>Installation &le; 100 kWc</td>
            <td>100 € / kWc</td>
            <td>Jusqu'à 10 000 €</td>
          </tr>
        </tbody>
      </table>
      <p>Le versement de cette prime s'effectue en une seule fois, au moment de la première facturation de production auprès d'EDF OA (généralement un an après la mise en service).</p>

      <h3>2. Le Tarif de Revente du Surplus EDF OA</h3>
      <p>Toute électricité que vos panneaux solaires produisent mais que vous ne consommez pas instantanément est vendue et réinjectée sur le réseau national d'électricité. L'organisme EDF Obligation d'Achat (EDF OA) est tenu par la loi d'acheter cette électricité à un tarif fixe réglementé et garanti par contrat sur une période de <strong>20 ans</strong>.</p>
      <p>En 2026, les tarifs d'achat s'élèvent à :</p>
      <ul>
        <li><strong>0,13 € / kWh</strong> pour les installations d'une puissance &le; 9 kWc.</li>
        <li><strong>0,078 € / kWh</strong> pour les installations d'une puissance comprise entre 9 kWc et 36 kWc.</li>
      </ul>

      <h3>3. La TVA à Taux Réduit (10%)</h3>
      <p>La pose de panneaux photovoltaïques bénéficie d'une aide indirecte sous forme de réduction fiscale de TVA :</p>
      <ul>
        <li><strong>Puissance &le; 3 kWc</strong> : Le taux de TVA est réduit à <strong>10%</strong> sur l'intégralité du devis (matériel et main d'œuvre), si la maison est construite depuis plus de 2 ans.</li>
        <li><strong>Puissance > 3 kWc</strong> : La TVA s'applique au taux normal de <strong>20%</strong> sur l'ensemble de la facture.</li>
      </ul>

      <h3>4. MaPrimeRénov' et le solaire thermique</h3>
      <p>Il est important de noter que l'aide nationale <strong>MaPrimeRénov'</strong> ne finance plus l'achat de panneaux solaires photovoltaïques (dédiés à la production d'électricité). Elle est en revanche mobilisable pour :</p>
      <ul>
        <li>Les <strong>chauffe-eaux solaires individuels (CESI)</strong> qui utilisent la chaleur du soleil pour chauffer votre eau sanitaire.</li>
        <li>Les <strong>systèmes solaires combinés (SSC)</strong> qui assurent le chauffage de l'habitat et de l'eau.</li>
        <li>Ces projets de chauffage solaire thermique peuvent obtenir des subventions allant jusqu'à 6 000 € selon les revenus du foyer.</li>
      </ul>

      <div class="callout-box">
        <h4>💶 Exonération fiscale pour les petits générateurs</h4>
        <p>Si la puissance crête de votre installation solaire photovoltaïque est inférieure ou égale à 3 kWc, les revenus issus de la revente de votre surplus d'électricité à EDF OA sont entièrement exonérés d'impôt sur le revenu. Au-delà de 3 kWc, les revenus de revente doivent être déclarés sous le régime fiscal du Micro-BIC (avec un abattement automatique avantageux de 71%).</p>
      </div>
    `
  },
  {
    slug: 'panneaux-solaires-villa-heraultaise',
    title: 'Panneaux solaires sur villa héraultaise : tuiles canal, surimposition et intégration',
    excerpt: 'Comment installer des panneaux solaires sur toiture en tuiles canal languedociennes sans risque d’étanchéité.',
    date: '2026-03-01',
    readTime: '9 min',
    image: '/images/panneaux-solaires-villa-heraultaise.png',
    content: `
      <h2>Les contraintes techniques de pose sur les toitures traditionnelles de l'Hérault</h2>
      <p>L'Hérault possède une forte identité architecturale, symbolisée par les toitures en tuiles canal en terre cuite. Que vous habitiez une villa récente en lotissement à Castelnau-le-Lez, un mas viticole ancien à Pinet ou une maison traditionnelle à Lodève, l'intégration des panneaux photovoltaïques doit respecter des critères de solidité, d'étanchéité et d'esthétique stricts.</p>

      <h3>1. La technique de la pose en surimposition</h3>
      <p>La pose en surimposition est devenue le standard technique absolu en 2026 en France, reléguant l'Intégration au Bâti (IAB) aux projets très spécifiques. Cette méthode consiste à poser les panneaux solaires parallèlement au plan de la toiture, à une distance de quelques centimètres au-dessus des tuiles.</p>
      <p><strong>Comment nos électriciens RGE interviennent sur vos tuiles canal :</strong></p>
      <ul>
        <li><strong>Dépose partielle des tuiles</strong> : L'installateur retire temporairement les tuiles aux points d'ancrage.</li>
        <li><strong>Fixation des crochets de toit</strong> : Des crochets spécifiques en acier inoxydable ou en aluminium renforcé sont vissés directement dans la charpente en bois (chevrons). Ces crochets sont conçus pour épouser la forme bombée de la tuile canal héraultaise sans la toucher directement.</li>
        <li><strong>Remise en place des tuiles</strong> : Les tuiles de recouvrement sont remises en place et parfois meulées pour assurer une planéité parfaite et éviter les infiltrations d'eau lors des fortes pluies d'orage.</li>
        <li><strong>Pose des rails et des panneaux</strong> : Les rails en aluminium sont boulonnés sur les crochets, puis les modules photovoltaïques monocristallins y sont fixés.</li>
      </ul>

      <p>L'espace vide sous les panneaux crée une lame d'air. Ce courant d'air naturel rafraîchit les cellules photovoltaïques en été. C'est un point capital car un panneau solaire exposé à des températures de toiture supérieures à 60°C voit son rendement diminuer d'environ 0,4% par degré supplémentaire. La surimposition préserve donc l'efficacité de votre centrale en période de canicule.</p>

      <h3>2. Résistance aux vents violents (La Tramontane)</h3>
      <p>Dans l'Hérault, les installations solaires doivent faire face à des contraintes climatiques importantes, notamment la Tramontane, vent de nord-ouest soufflant régulièrement en rafales à plus de 100 km/h dans le Biterrois et sur la plaine côtière. 
      Les installateurs partenaires QualiPV RGE dimensionnent les fixations selon les règles Eurocode 1 (calcul des actions du vent sur les structures). L'ancrage rigide sur la charpente garantit qu'aucune force d'arrachement ne puisse endommager le toit.</p>

      <h3>3. Protection contre le sel et le climat littoral</h3>
      <p>Pour les communes du bord de mer (Sète, Marseillan, Cap d'Agde, Palavas-les-Flots, Frontignan), l'atmosphère chargée de sel marin (brouillard salin) accélère l'oxydation des métaux. Les équipements sélectionnés par nos installateurs certifiés possèdent des indices de protection adaptés et des certifications anti-corrosion saline de grade supérieur (norme IEC 61701). Les rails, vis et attaches rapides utilisés sont tous en aluminium anodisé ou en acier inoxydable de qualité marine.</p>

      <h3>4. Les autorisations d'urbanisme : Mairie et Architectes des Bâtiments de France (ABF)</h3>
      <p>Avant d'entamer des travaux, vous devez obligatoirement déposer une déclaration préalable (DP) auprès de la mairie de votre commune. Le délai d'instruction est de 1 mois.</p>
      <p>Si votre maison est située en zone de protection du patrimoine (périmètre de monuments historiques classés, abords de sites classés ou Canal du Midi), le dossier est transmis pour avis conforme à l'Architecte des Bâtiments de France (ABF). Le délai d'instruction passe alors à 2 mois. Pour obtenir l'aval de l'ABF, il est fréquent de devoir opter pour des modules solaires de type **Full Black** (panneaux, cadres et grilles entièrement noirs) pour une intégration visuelle discrète qui respecte le paysage local.</p>
    `
  },
  {
    slug: 'batterie-solaire-domestique-herault',
    title: 'Batterie solaire domestique dans l’Hérault : stocker l’énergie pour la nuit et les jours gris',
    excerpt: 'Faut-il ajouter une batterie Lithium LFP à son installation solaire dans le Sud ? Analyse coût / bénéfice.',
    date: '2026-03-10',
    readTime: '10 min',
    image: '/images/batterie-solaire-domestique-herault.png',
    content: `
      <h2>Stocker l'énergie solaire : fonctionnement et rentabilité des batteries physiques dans le 34</h2>
      <p>Dans un projet solaire en autoconsommation classique, l'électricité non consommée en journée est vendue et injectée sur le réseau Enedis. Cependant, pour tendre vers une autonomie énergétique maximale, de nombreux propriétaires choisissent d'installer une batterie solaire domestique. Cette solution permet de stocker l'électricité produite en surplus pendant la journée afin de la restituer le soir, la nuit ou lors des journées faiblement ensoleillées.</p>

      <h3>La technologie dominante : Lithium Fer Phosphate (LFP)</h3>
      <p>En 2026, la chimie dominante pour le stockage stationnaire résidentiel est le <strong>Lithium Fer Phosphate (LFP)</strong>. Elle a supplanté le Lithium-Ion classique (NMC) et le plomb pour plusieurs raisons :</p>
      <ul>
        <li><strong>Durée de vie exceptionnelle</strong> : Une batterie LFP de marque réputée (comme BYD, Tesla Powerwall ou Enphase 5P) supporte entre 6 000 et 8 000 cycles de charge/décharge complets. Cela représente une durée de vie supérieure à 15 ou 20 ans d'utilisation quotidienne.</li>
        <li><strong>Sécurité accrue</strong> : Le LFP est stable chimiquement et résistant aux emballements thermiques. Il ne présente aucun risque d'incendie, même en cas de température ambiante élevée (comme dans les garages ou locaux techniques non climatisés de l'Hérault en été).</li>
        <li><strong>Taux de décharge profond</strong> : Les batteries LFP acceptent d'être déchargées jusqu'à 90% ou 95% de leur capacité nominale sans altérer leur longévité.</li>
      </ul>

      <h3>Comment calculer la capacité de batterie nécessaire ?</h3>
      <p>L'erreur la plus fréquente consiste à surdimensionner sa batterie. La capacité utile (exprimée en kWh) doit être calculée en fonction de votre talon de consommation nocturne (la consommation de fond de votre maison entre 18h et 8h du matin : réfrigérateur, box internet, veilles, chauffage de nuit). Pour une villa moyenne dans le 34, une capacité de <strong>5 kWh à 10 kWh</strong> est généralement idéale.</p>

      <h3>Rentabilité économique des batteries physiques en 2026</h3>
      <p>Une batterie domestique de 5 kWh coûte généralement entre 4 000 € et 6 500 € (fourniture et pose). Pour évaluer la rentabilité, il faut comparer le coût du stockage par rapport à la vente du surplus :</p>
      <ul>
        <li><strong>Sans batterie</strong> : Vous consommez environ 40% de votre production. Le surplus de 60% est vendu à 0,13 € / kWh à EDF OA.</li>
        <li><strong>Avec batterie</strong> : Vous augmentez votre taux d'autoconsommation à 80%. Vous économisez des kWh achetés au réseau au tarif fort (environ 0,25 € / kWh), mais vous perdez le revenu de la revente du surplus (0,13 € / kWh).</li>
      </ul>
      <p>Le gain net réel est donc la différence entre le coût d'achat évité sur le réseau et le tarif de revente perdu, soit environ 0,12 € d'économie par kWh cyclé. Compte tenu du prix d'achat initial de la batterie, le retour sur investissement de l'accumulateur physique seul est de 12 à 15 ans. La batterie physique n'est donc pas le choix le plus rentable financièrement à court terme, mais elle offre un confort incomparable d'indépendance énergétique.</p>

      <div class="callout-box">
        <h4>⚡ Le mode Secours (Backup / EPS)</h4>
        <p>Les épisodes cévenols qui frappent l'Hérault en automne provoquent parfois des coupures de courant prolongées sur le réseau électrique Enedis. En installant une batterie solaire dotée d'une fonction de découplage réseau (EPS - Emergency Power Supply), votre système bascule automatiquement en mode autonome en quelques millisecondes. Vos équipements prioritaires (congélateur, box internet, éclairages) continuent de fonctionner directement grâce à l'énergie solaire stockée.</p>
      </div>
    `
  },
  {
    slug: 'revente-surplus-edf-oa',
    title: 'Revente surplus EDF OA : tarifs 2026, contrat et revenus passifs solaire dans le 34',
    excerpt: 'Fonctionnement du contrat de rachat EDF Obligation d’Achat sur 20 ans et déclaration fiscale des revenus.',
    date: '2026-03-15',
    readTime: '9 min',
    image: '/images/revente-surplus-edf-oa.png',
    content: `
      <h2>Tout comprendre sur le contrat de vente du surplus photovoltaïque à EDF OA</h2>
      <p>En choisissant d'installer des panneaux solaires photovoltaïques en autoconsommation, vous produisez votre propre électricité. Lorsque votre production surpasse la consommation instantanée de vos appareils (par exemple, un après-midi ensoleillé de printemps alors que la maison est vide), l'électricité résiduelle est injectée sur le réseau d'Enedis. Grâce au mécanisme de l'Obligation d'Achat, vous vendez cette électricité pour générer un revenu annuel régulier.</p>

      <h3>Qu'est-ce que l'organisme EDF OA ?</h3>
      <p>EDF Obligation d’Achat (EDF OA) est une entité publique désignée par l'État pour acheter l'énergie renouvelable injectée sur le réseau par les producteurs indépendants (particuliers et professionnels). Le contrat d'achat signé avec EDF OA est garanti sur une durée fixe de <strong>20 ans</strong>. Le tarif d'achat par kWh est bloqué à la signature et ne peut pas diminuer pendant toute la durée du contrat.</p>

      <h3>Les tarifs d'achat de l'électricité en 2026</h3>
      <p>Il existe deux modalités de vente de l'électricité solaire :</p>

      <h4>1. Vente du surplus (Autoconsommation partielle)</h4>
      <p>Vous consommez en priorité votre production. Seul l'excédent est vendu à EDF OA. Les tarifs applicables en 2026 pour les particuliers sont :</p>
      <ul>
        <li>Installations &le; 3 kWc : <strong>0,13 € / kWh</strong></li>
        <li>Installations &le; 9 kWc : <strong>0,13 € / kWh</strong></li>
        <li>Installations &le; 36 kWc : <strong>0,078 € / kWh</strong></li>
      </ul>

      <h4>2. Vente totale de la production</h4>
      <p>Toute l'électricité produite par vos panneaux solaires est injectée directement sur le réseau national d'électricité, sans que vous n'en consommiez la moindre partie. Ce modèle historique est en perte de vitesse par rapport à l'autoconsommation, mais reste utilisé pour les très grandes toitures agricoles ou industrielles.</p>

      <h3>Le processus de facturation annuel</h3>
      <p>Grâce aux compteurs intelligents Linky, le comptage des kWh injectés sur le réseau Enedis est automatique. Vous n'avez pas besoin d'installer de compteur de production secondaire. La démarche de facturation s'effectue simplement une fois par an :</p>
      <ol>
        <li>À la date anniversaire de la mise en service de votre installation solaire, vous recevez un e-mail d'EDF OA vous invitant à établir votre facture.</li>
        <li>Vous vous connectez à votre espace client en ligne sur le portail d'EDF OA.</li>
        <li>Les index d'injection de votre compteur Linky sont automatiquement importés et affichés.</li>
        <li>Vous validez le montant calculé et éditez électroniquement votre facture.</li>
        <li>Le virement bancaire du montant dû est crédité sur votre compte bancaire sous 10 à 30 jours de la part d'EDF OA.</li>
      </ol>

      <h3>Fiscalité et impôts sur les revenus solaires dans le 34</h3>
      <p>Le traitement fiscal des gains issus de la vente d'électricité varie selon la puissance crête de l'installation :</p>
      <ul>
        <li><strong>Installation &le; 3 kWc</strong> : Les revenus issus de la vente d'électricité (surplus ou vente totale) sont <strong>totalement exonérés d'impôt sur le revenu</strong> et de prélèvements sociaux (CSG/CRDS), à condition que l'installation ne soit pas affectée à une activité professionnelle et soit raccordée en moins de deux points de livraison.</li>
        <li><strong>Installation > 3 kWc</strong> : Les revenus de la revente doivent être déclarés sur votre déclaration de revenus annuelle (formulaire 2042-C-PRO) dans la catégorie des Bénéfices Industriels et Commerciaux (BIC) non professionnels. Vous bénéficiez du régime Micro-BIC qui applique un abattement forfaitaire représentatif de charges de 71%. Seuls 29% de vos revenus solaires sont donc soumis à l'impôt sur le revenu selon votre tranche marginale d'imposition (TMI).</li>
      </ul>
    `
  },
  {
    slug: 'installateur-solaire-rge-qualipv-herault',
    title: 'Installateur solaire RGE QualiPV Hérault : comment choisir un professionnel certifié',
    excerpt: 'Les critères indispensables pour choisir son artisan photovoltaïque dans le 34 : garanties, decennale et avis.',
    date: '2026-03-22',
    readTime: '10 min',
    image: '/images/installateur-solaire-rge-qualipv-herault.png',
    content: `
      <h2>Comment choisir son installateur de panneaux solaires dans l'Hérault ?</h2>
      <p>Le secteur du solaire photovoltaïque connaît une forte croissance, ce qui attire de nombreux acteurs sur le marché de la pose de panneaux. Face à la multiplication des offres commerciales, il est crucial de savoir distinguer les artisans qualifiés locaux des sociétés d'éco-délinquance ou des intermédiaires commerciaux abusifs. Voici les critères indispensables à vérifier avant de signer un devis solaire dans le 34.</p>

      <h3>1. La certification RGE et la qualification QualiPV</h3>
      <p>C'est le critère numéro un. Pour que votre installation soit éligible aux primes de l'État (Prime d'autoconsommation, TVA réduite, rachat du surplus par EDF OA), le professionnel doit posséder la qualification <strong>RGE (Reconnu Garant de l'Environnement)</strong> en cours de validité.</p>
      <p>Pour le photovoltaïque, le label de référence est géré par l'association Qualit'EnR et se nomme <strong>QualiPV</strong>. Il se compose de deux modules complémentaires :</p>
      <ul>
        <li><strong>QualiPV Bat</strong> : Atteste de la compétence de l'artisan à poser le système d'intégration ou de surimposition en toiture en respectant les normes de couverture et d'étanchéité.</li>
        <li><strong>QualiPV Elec</strong> : Atteste des compétences électriques pour poser l'onduleur, les micro-onduleurs, le câblage, le tableau électrique de protection AC/DC et effectuer les raccordements en conformité avec les règles NFC 15-100.</li>
      </ul>
      <p><em>Astuce : Demandez le certificat de qualification de l'entreprise et vérifiez son authenticité directement sur l'annuaire officiel des professionnels RGE de la plateforme France Rénov'.</em></p>

      <h3>2. L'assurance décennale de l'installateur</h3>
      <p>Une installation de panneaux solaires touche à la structure même de votre toiture et comporte des raccordements électriques sous haute tension. En cas de fuite d'eau sur le toit ou de panne électrique grave, vous devez être couvert par la <strong>garantie décennale</strong> de l'artisan.</p>
      <p><strong>Ce que vous devez impérativement vérifier sur l'attestation décennale :</strong></p>
      <ol>
        <li>Que l'activité "Pose de générateurs photovoltaïques" ou "Intégration de modules photovoltaïques en toiture" y figure explicitement. Une assurance de couvreur ou d'électricien généraliste ne couvre pas la pose de panneaux solaires.</li>
        <li>Que la zone géographique de l'entreprise couvre bien le département de l'Hérault.</li>
        <li>Que l'assurance est bien payée et valide à la date de signature de votre devis et de début du chantier.</li>
      </ol>

      <h3>3. Se prémunir contre les arnaques et le démarchage à domicile</h3>
      <p>Le marché du solaire photovoltaïque souffre de pratiques commerciales abusives. Voici les règles de prudence à appliquer :</p>
      <ul>
        <li><strong>L'État ne démarche jamais</strong> : Aucun organisme officiel (Mairie, Ministère de l'Énergie, Enedis, EDF) ne réalise de prospection téléphonique ou de visites à domicile pour vendre des panneaux solaires. Si un commercial prétend agir au nom de l'État ou d'Enedis, coupez court à la conversation.</li>
        <li><strong>Pas de panneaux gratuits</strong> : La promesse d'une installation solaire entièrement autofinancée ou gratuite est mensongère. Il y a toujours un reste à charge financier après déduction des aides publiques.</li>
        <li><strong>Ne signez rien lors du premier rendez-vous</strong> : Prenez le temps de la réflexion. Ne signez aucun "bon pour étude" ou "document de faisabilité technique" qui sont bien souvent des contrats de vente fermes ou des demandes de crédit masquées.</li>
        <li><strong>Comparez plusieurs devis</strong> : Faites réaliser au moins 2 ou 3 études comparatives par des entreprises locales installées dans l'Hérault depuis plusieurs années.</li>
      </ul>

      <div class="callout-box">
        <h4>🛠️ L'importance de la visite technique préalable</h4>
        <p>Un installateur solaire sérieux ne vous fera jamais signer de bon de commande ferme sans avoir réalisé au préalable une véritable visite technique à votre domicile. Cette visite permet à l'électricien d'inspecter l'état de la charpente, de mesurer précisément l'inclinaison et l'exposition du toit, de repérer les zones d'ombres (cheminée, arbres voisins) et de s'assurer de la compatibilité de votre tableau électrique général.</p>
      </div>
    `
  }
];
