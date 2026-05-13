import { GoogleGIcon, StarIcon } from "@/components/icons";

type Review = {
  author: string;
  body: string;
  date: string;
  city?: string;
};

const REVIEWS: Review[] = [
  {
    author: "Debrot Raymond",
    date: "Mars 2026",
    body: "GH Services s'est occupé du nettoyage de notre maison avant la vente. Nous sommes extrêmement satisfaits de leur travail. Le résultat est impeccable et le prix est exactement conforme au devis.",
  },
  {
    author: "Christophe Lacroix",
    date: "Octobre 2025",
    body: "Suite au départ d'un locataire, mon appartement a été rendu dans un état lamentable. L'équipe de GH Services a fait un travail extraordinaire pour le rendre dans l'état initial.",
  },
  {
    author: "Coline Chambert-Protat",
    date: "Juin 2025",
    body: "Hassen a été d'une grande aide et très professionnel dans le nettoyage complet de notre maison suite à des moisissures importantes sur les murs et plafonds.",
  },
  {
    author: "Genève Expat",
    date: "Mai 2025",
    body: "Nous avons fait appel aux services de nettoyage de GH Services à notre entière satisfaction. Il s'agissait du nettoyage de notre maison avant remise des clés.",
  },
  {
    author: "Shacy Will",
    date: "Avril 2025",
    body: "À la hauteur de la prestation demandée. Réactivité et contact au top. Je recommande cette société avec qui j'espère continuer de travailler.",
  },
  {
    author: "Famille Roy",
    date: "2024",
    city: "Excenevex",
    body: "Nous sommes très satisfaits par le travail réalisé avec beaucoup de soin par Monsieur Gharbi qui s'est montré très réactif et avec lequel le contact a été très agréable.",
  },
];

export function Reviews() {
  return (
    <section id="avis" className="bg-cream py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-tight text-brown sm:text-5xl md:text-[56px] md:leading-[1.05]">
          {"17 avis 5 sur 5, "}
          <br />
          <span className="text-brown/40">parlent pour nous</span>
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 text-yellow" />
            ))}
          </div>
          <span className="font-display text-base font-bold text-brown">
            5,0 sur 5 sur Avis Google
          </span>
          <GoogleGIcon className="h-7 w-7" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.author + r.date}
              className="flex flex-col rounded-[28px] bg-brown p-7 text-cream"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow" />
                  ))}
                </div>
                <GoogleGIcon className="h-5 w-5 opacity-80" />
              </div>
              <p className="mt-5 text-sm leading-6 text-cream/95">{`« ${r.body} »`}</p>
              <div className="mt-auto pt-6">
                <p className="font-display text-base font-bold uppercase tracking-tight">
                  {r.author}
                </p>
                <p className="text-xs text-cream/70">
                  {r.date}
                  {r.city ? ` , ${r.city}` : ""}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=GH+Services+Thonon-les-Bains"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-orange transition-colors hover:text-orange-dark"
          >
            <GoogleGIcon className="h-5 w-5" />
            Voir tous nos avis Google
          </a>
        </div>
      </div>
    </section>
  );
}
