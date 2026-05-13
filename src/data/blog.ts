export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "nettoyer-vitres-sans-traces",
    title: "Comment nettoyer efficacement les vitres sans laisser de traces",
    description:
      "Nos techniques pro pour des vitres impeccables : choix du moment, matériel, technique de raclette, finition microfibre.",
    date: "2025-05-10",
    image: "/photos/blog-vitres.jpg",
    body: [
      "Le nettoyage des vitres est souvent considéré comme une tâche fastidieuse, mais avec les bonnes techniques et outils, vous pouvez obtenir des résultats professionnels. En tant qu'experts en vitrage, nous partageons nos secrets pour des vitres impeccables sans traces.",
      "Premièrement, choisissez le bon moment. Évitez de nettoyer vos vitres en plein soleil car le produit sèchera trop rapidement et laissera des traces. Préférez un jour nuageux ou travaillez à l'ombre.",
      "Deuxièmement, utilisez le bon équipement : un racloir à vitres de qualité professionnelle, une solution de nettoyage adaptée (eau tiède avec quelques gouttes de liquide vaisselle ou vinaigre blanc), et des chiffons en microfibre pour le séchage.",
      "Notre technique professionnelle consiste à commencer par mouiller la vitre avec votre solution, puis à utiliser le racloir de haut en bas en faisant des bandes régulières. Essuyez la lame du racloir après chaque passage pour éviter de redistribuer la saleté.",
      "Pour les encadrements et coins, utilisez un chiffon en microfibre légèrement humide. Finissez en polissant avec un chiffon sec pour un résultat sans traces.",
      "N'oubliez pas que la régularité est essentielle : un entretien trimestriel de vos vitres facilite grandement le nettoyage et prolonge leur durée de vie, surtout pour les verrières et vérandas exposées aux intempéries.",
      "Pour les vitrages professionnels ou difficiles d'accès, n'hésitez pas à faire appel à nos experts qui disposent du matériel adapté pour intervenir en toute sécurité et efficacité.",
    ],
  },
  {
    slug: "entretien-espaces-verts-ecologique",
    title: "Entretien des espaces verts : conseils pour un jardin écologique",
    description:
      "Compostage, arrosage économe, biodiversité, hauteur de tonte : maintenez un extérieur durable sans produits chimiques.",
    date: "2025-05-05",
    image: "/photos/blog-jardin.jpg",
    body: [
      "L'entretien écologique des espaces verts est non seulement bénéfique pour l'environnement, mais également pour la santé de votre jardin à long terme. Voici quelques conseils issus de notre expérience professionnelle pour maintenir un jardin écologique et durable.",
      "Tout d'abord, privilégiez le compostage des déchets verts. Créez un compost dans un coin de votre jardin pour recycler feuilles mortes, tontes de gazon et petits branchages. Ce compost servira d'engrais naturel pour vos plantes.",
      "Ensuite, pour réduire la consommation d'eau, installez un système de récupération d'eau de pluie et arrosez tôt le matin ou en soirée pour limiter l'évaporation. Le paillage autour des plantes aide également à conserver l'humidité du sol.",
      "Favorisez la biodiversité en créant différents habitats pour la faune auxiliaire : hôtels à insectes, tas de bois pour les hérissons, nichoirs pour oiseaux. Ces alliés naturels vous aideront à lutter contre les parasites.",
      "Pour la tonte, réglez votre tondeuse à une hauteur d'au moins 6-7 cm. Une herbe plus haute retient mieux l'eau, résiste mieux aux mauvaises herbes et nécessite moins d'arrosage.",
      "Concernant la taille des arbustes et haies, respectez les périodes de nidification des oiseaux (évitez de tailler entre mars et juillet) et favorisez les formes naturelles qui nécessitent moins d'entretien.",
      "Enfin, bannissez les produits chimiques de votre jardin. Utilisez des alternatives naturelles comme le purin d'ortie, la décoction de prêle ou le savon noir pour lutter contre les parasites et maladies.",
      "Nos experts en entretien d'espaces verts peuvent vous accompagner dans cette démarche écologique avec des conseils personnalisés et des interventions respectueuses de l'environnement.",
    ],
  },
  {
    slug: "professionnel-etat-des-lieux-sortant",
    title: "Pourquoi faire appel à un professionnel pour l'état des lieux sortant ?",
    description:
      "Récupérez 100% de la caution : ce que vérifient bailleurs et agences, comment un pro change la donne.",
    date: "2025-04-28",
    image: "/photos/blog-etat-lieux.jpg",
    body: [
      "L'état des lieux sortant est une étape cruciale qui peut déterminer le montant de la caution que vous récupérerez à la fin de votre bail. Faire appel à un professionnel pour cette procédure présente de nombreux avantages.",
      "Premièrement, un professionnel connaît parfaitement la réglementation en vigueur et saura distinguer l'usure normale (à la charge du propriétaire) des dégradations (à la charge du locataire). Cette expertise permet d'éviter des retenues injustifiées sur votre caution.",
      "Deuxièmement, notre service inclut un nettoyage professionnel avant l'état des lieux, ce qui maximise vos chances de récupérer l'intégralité de votre dépôt de garantie. Nous savons exactement quels éléments les propriétaires et agences immobilières inspectent minutieusement.",
      "Un professionnel possède également une neutralité que ni le locataire ni le propriétaire ne peuvent avoir. Cette impartialité est précieuse en cas de désaccord et peut éviter des conflits ultérieurs.",
      "Notre service comprend une documentation photographique détaillée qui constitue une preuve en cas de litige. Chaque élément est photographié et consigné dans un rapport complet que vous pourrez utiliser si nécessaire.",
      "Faire appel à notre service d'état des lieux sortant vous fait également gagner un temps précieux, souvent dans une période déjà stressante de déménagement. Nous nous occupons de tout pendant que vous vous concentrez sur votre installation dans votre nouveau logement.",
      "Enfin, notre expertise dans le nettoyage professionnel nous permet d'intervenir efficacement sur tous types de surfaces et matériaux pour une remise en état impeccable qui satisfera même les propriétaires les plus exigeants.",
      "Contactez GH Services pour un devis personnalisé pour votre état des lieux sortant. Notre équipe est disponible 7j/7.",
    ],
  },
];
