# Master Plan SEO Programmatic, GH Services
## Domination du bassin lémanique franco-suisse, 2026

> Document de référence. Liste exhaustive des pages à créer, mots-clés ciblés, intent, maillage interne, schema, phasage. Préparé sur base d'audit SERP réel, sitemaps concurrents, data Google Ads GH Services et SEMrush.

---

## 1. TL;DR (à lire en 2 minutes)

**Objectif** : passer de 12 pages services (Thonon) à environ 55 pages programmatiques sur 4 mois, couvrir tout le bassin lémanique français + niches suisses à plus forte valeur, devenir la référence locale "nettoyage" sur Google.

**Méthode** : 1 mot-clé principal = 1 intention = 1 page. Pas de duplication, pas de page vide, pas de bourrage de mots-clés. Chaque page apporte au moins 3 données uniques (témoignage géolocalisé, tarif spécifique, photo, FAQ locale, quartiers nommés).

**Risque pénalité Google** : faible si on respecte les règles posées en section 7. Le risque vient surtout d'une explosion de pages identiques en quelques semaines, pas du volume final.

**Risque expansion Suisse** : moyen. Le `.fr` est handicapé sur les requêtes `.ch` les plus saturées (Genève, Lausanne) face à Batmaid, TOPNET, Vebego. On vise donc les niches frontalières et les villes 2e tier (Carouge, Meyrin, Morges, Vevey) où la concurrence est moins solide. Pas de risque légal tant que le CA encaissé en Suisse reste sous 100 000 CHF par an.

**Décision principale** : modèle "service hub + agrégation locale" (style Centre Services / O2), pas le flat "service × city" (style Helpling). On garde nos 9 pages services Thonon comme hubs forts, on crée des pages villes (Évian, Annemasse, Genève, etc.) qui agrègent les services localement, et on ajoute des pages combo "service + ville" UNIQUEMENT là où la data Ads ou SEMrush prouve qu'il y a du volume.

---

## 2. État actuel, ce qui existe déjà

12 pages programmatiques déjà créées et indexables :

| Slug | Type | Mot-clé principal |
|---|---|---|
| `/nettoyage-vitres-thonon` | Service hub | nettoyage de vitres Thonon-les-Bains |
| `/fin-de-chantier-thonon` | Service hub | nettoyage fin de chantier Thonon |
| `/nettoyage-coproprietes-thonon` | Service hub | nettoyage copropriétés Thonon |
| `/nettoyage-textiles-thonon` | Service hub | nettoyage canapé tapis Thonon |
| `/traitement-humidite-thonon` | Service hub | nettoyage moisissures Thonon |
| `/debarras-thonon` | Service hub | débarras Thonon-les-Bains |
| `/entretien-espaces-verts-thonon` | Service hub | entretien espaces verts Thonon |
| `/petite-maconnerie-thonon` | Service hub | petite maçonnerie Thonon |
| `/demenagement-thonon` | Service hub | déménagement Thonon |
| `/menage-thonon-les-bains` | Bonus | société de ménage Thonon |
| `/nettoyage-chalets-leman` | Bonus | nettoyage chalet Léman |
| `/etat-des-lieux-sortant-thonon` | Bonus | nettoyage fin de bail Thonon |

Tous typecheckés, schema Service + FAQPage + BreadcrumbList en place, sitemap à jour, maillage interne basique (services connexes).

---

## 3. Évaluation de risque

### 3.1 Risque pénalité Google (Helpful Content, Spam Update mars 2024)

| Critère pénalisé par Google Firefly | Notre garde-fou |
|---|---|
| Vélocité anormale (`numOfUrlsByPeriods`) | Maximum 50 nouvelles pages par mois, lancement étalé sur 4 phases |
| Faible satisfaction utilisateur (`dailyGoodClicks`) | Form de devis EmailJS sur chaque page, ChatBubble téléphone, CTA forts |
| Contenu boilerplate, faible unicité (>85 % similarité MC) | Pour chaque combo service × ville, au moins 4 variables uniques : témoignage géolocalisé, tarif estimé local, FAQ spécifique, quartiers ou contexte local nommés |
| Doorway pages (pas de service réel derrière) | Mentionner la couverture réelle, ne pas créer de page pour une ville où on n'intervient pas |
| Manque de données propriétaires | Avis Google réels (déjà utilisés), formulaire de demande de devis (EmailJS opérationnel), tarifs réels (au moins fourchette HT/TTC) |

**Plafond raisonnable** : 60 à 80 pages programmatiques avant d'avoir une autorité de domaine suffisante. Au-delà, on ralentit ou on consolide.

### 3.2 Risque expansion Suisse (depuis un `.fr`)

| Sujet | Verdict | Action |
|---|---|---|
| Pénalité Google pour `.fr` ciblant `.ch` | Aucune, mais signal géo négatif | Hreflang `fr-CH` sur toutes les pages Suisse, hreflang `fr-FR` sur les pages France |
| TVA Suisse | Obligation représentant fiscal CH si CA encaissé en Suisse > 100 000 CHF / an (coût ~5 à 15 k CHF/an) | Tant que < 100 k CHF/an, TVA française appliquée. Mention claire sur les pages : "TVA française appliquée, contrat de droit français" |
| Légal | Aucun problème pour un prestataire FR de vendre à un particulier CH | Mentions légales mises à jour avec "intervention transfrontière" |
| Concurrence Batmaid, TOPNET, Vebego à Genève / Lausanne | Très forte (20-30 ans d'ancienneté locale, autorité de domaine élevée) | On évite la bataille frontale, on cible le frontalier et les villes 2e tier |
| Doorway pages (pages CH sans service réel) | Risque réel si pages thin | Volume CH limité à 8-10 pages, contenu unique 800+ mots, photos chantiers réels CH |

### 3.3 Risque cannibalisation interne

**Le piège** : "nettoyage vitres Thonon", "nettoyage vitres Évian", "nettoyage vitres Léman" peuvent se cannibaliser.

**Notre prévention** :
1. Title et H1 toujours uniques (pas juste un mot qui change)
2. Mot-clé principal différent par page, vérifié dans une matrice (section 6)
3. Intent différencié : la page service Thonon = transactionnel hub, la page Évian = transactionnel hyperlocal, la page Léman = panorama régional
4. Canonical auto-référent sur chaque page
5. Maillage interne asymétrique : la home et les hubs services pointent en priorité vers le hub Thonon, puis vers les pages villes

---

## 4. Architecture URL, l'arbre complet

```
ghservices.fr/
│
├── /                                          [home, hub global]
│
├── ── BLOC 1 : Hubs services (FR/CH génériques) ──
│   ├── /nettoyage-vitres-thonon              ✅ done
│   ├── /fin-de-chantier-thonon               ✅ done
│   ├── /nettoyage-coproprietes-thonon        ✅ done
│   ├── /nettoyage-textiles-thonon            ✅ done
│   ├── /traitement-humidite-thonon           ✅ done
│   ├── /debarras-thonon                      ✅ done
│   ├── /entretien-espaces-verts-thonon       ✅ done
│   ├── /petite-maconnerie-thonon             ✅ done
│   ├── /demenagement-thonon                  ✅ done
│   ├── /menage-thonon-les-bains              ✅ done (bonus SAP)
│   ├── /nettoyage-chalets-leman              ✅ done (bonus niche)
│   └── /etat-des-lieux-sortant-thonon        ✅ done (bonus niche)
│
├── ── BLOC 2 : Hubs villes côté FR (Léman + Chablais) ──
│   ├── /nettoyage-evian-les-bains            🆕 Phase 2
│   ├── /nettoyage-annemasse                  🆕 Phase 2
│   ├── /nettoyage-douvaine                   🆕 Phase 2
│   ├── /nettoyage-sciez                      🆕 Phase 2
│   ├── /nettoyage-publier                    🆕 Phase 2
│   ├── /nettoyage-yvoire                     🆕 Phase 2
│   ├── /nettoyage-anthy-sur-leman            🆕 Phase 2
│   └── /nettoyage-bons-en-chablais           🆕 Phase 2
│
├── ── BLOC 3 : Combos service × ville (priorité Ads/SEMrush) ──
│   ├── /nettoyage-vitres-evian               🆕 Phase 2 (volume Ads)
│   ├── /nettoyage-vitres-annemasse           🆕 Phase 2 (volume Ads "nettoyage annemasse" 56 imp)
│   ├── /menage-annemasse                     🆕 Phase 2
│   ├── /menage-evian                         🆕 Phase 2
│   ├── /nettoyage-canape-annemasse           🆕 Phase 2 (volume Ads "nettoyage tapis annemasse" 8 imp + clic)
│   ├── /fin-de-bail-annemasse                🆕 Phase 2
│   └── /debarras-annemasse                   🆕 Phase 2
│
├── ── BLOC 4 : Suisse, hub frontalier + niches ──
│   ├── /nettoyage-frontaliers-suisse         🆕 Phase 3 (hub Suisse central, copy frontalier)
│   ├── /nettoyage-geneve                     🆕 Phase 3 (hub Genève)
│   ├── /fin-de-bail-geneve                   🆕 Phase 3 (niche Batmaid, angle 24-48h)
│   ├── /nettoyage-vitres-geneve              🆕 Phase 3
│   ├── /nettoyage-canape-geneve              🆕 Phase 3 (data Ads, déjà 3 clics)
│   ├── /nettoyage-carouge                    🆕 Phase 3 (volume SEMrush 160, KD 5)
│   ├── /nettoyage-meyrin                     🆕 Phase 3 (volume SEMrush 20)
│   ├── /nettoyage-lausanne                   🆕 Phase 3 (gros marché, angle ciblé)
│   ├── /fin-de-bail-lausanne                 🆕 Phase 3 (niche Batmaid + volume SEMrush 110, KD 5)
│   ├── /nettoyage-canape-lausanne            🆕 Phase 3 (volume SEMrush 110)
│   ├── /nettoyage-morges                     🆕 Phase 3 (volume SEMrush 130, KD 17)
│   ├── /nettoyage-nyon                       🆕 Phase 3 (volume SEMrush 100)
│   ├── /nettoyage-vevey                      🆕 Phase 3 (volume SEMrush 90, KD 5)
│   ├── /nettoyage-aigle                      🆕 Phase 3 (volume SEMrush 140, KD 5)
│   └── /nettoyage-montreux                   🆕 Phase 3 (volume SEMrush 70)
│
├── ── BLOC 5 : Blog informationnel ──
│   ├── /blog                                 ✅ done (index)
│   ├── /blog/nettoyer-vitres-sans-traces     ✅ done
│   ├── /blog/entretien-espaces-verts-ecologique ✅ done
│   ├── /blog/professionnel-etat-des-lieux-sortant ✅ done
│   ├── /blog/prix-nettoyage-canape-domicile  🆕 Phase 4
│   ├── /blog/tarif-femme-de-menage-2026      🆕 Phase 4
│   ├── /blog/credit-impot-services-personne  🆕 Phase 4
│   ├── /blog/checklist-fin-de-bail-7-points  🆕 Phase 4
│   ├── /blog/nettoyage-terrasse-bois-pierre  🆕 Phase 4 (data Ads "nettoyage terrasse")
│   ├── /blog/eau-osmosee-vitres-pro          🆕 Phase 4
│   └── /blog/diogene-comment-aider           🆕 Phase 4
│
└── ── BLOC 6 : Pages institutionnelles ──
    ├── /contact                              ✅ done
    ├── /mentions-legales                     ✅ done
    └── /politique-de-confidentialite         ✅ done
```

**Total à terme** : 12 ✅ + 20 (Phase 2) + 15 (Phase 3) + 7 (Phase 4) = **environ 54 pages programmatiques** + 3 institutionnelles + index.

---

## 5. Inventaire complet des pages à créer

### Phase 2, hubs villes Léman / Chablais (FR)

| Slug | MC principal | MC secondaires | Long-tail | Intent | Volume Ads/GSC | KD est. | Parent SEO | Priorité |
|---|---|---|---|---|---|---|---|---|
| `/nettoyage-evian-les-bains` | entreprise de nettoyage Évian-les-Bains | nettoyage Évian, société nettoyage Évian, ménage Évian | nettoyage maison Évian, nettoyage vitres Évian Lugrin | Transactionnel hyperlocal | GSC 37 imp + Ads 8 imp | 8 | / | 🔥 |
| `/nettoyage-annemasse` | entreprise de nettoyage Annemasse | nettoyage Annemasse, société nettoyage Annemasse, ménage Annemasse | nettoyage entreprise Annemasse, agence ménage Annemasse | Transactionnel hyperlocal | Ads 56 imp + 5 clics | 6 (SEMrush) | / | 🔥 |
| `/nettoyage-douvaine` | nettoyage Douvaine | entreprise nettoyage Douvaine, ménage Douvaine, débarras Douvaine | nettoyage maison Douvaine, fin de bail Douvaine | Transactionnel hyperlocal | Ads 1 imp + clic | Faible | / | 🟢 |
| `/nettoyage-sciez` | nettoyage Sciez | entreprise nettoyage Sciez-sur-Léman, ménage Sciez | nettoyage rive Léman Sciez | Transactionnel hyperlocal | Faible mais maillage | Faible | / | 🟢 |
| `/nettoyage-publier` | nettoyage Publier | entreprise nettoyage Publier-Amphion | ménage Amphion-les-Bains | Transactionnel hyperlocal | Faible | Faible | / | 🟡 |
| `/nettoyage-yvoire` | nettoyage Yvoire | entretien chalet Yvoire, ménage résidence secondaire Yvoire | conciergerie Airbnb Yvoire | Transactionnel premium niche | Faible (niche) | Faible | /nettoyage-chalets-leman | 🟢 |
| `/nettoyage-anthy-sur-leman` | nettoyage Anthy-sur-Léman | ménage Anthy-sur-Léman | entretien résidence Anthy | Transactionnel hyperlocal | Faible | Faible | / | 🟡 |
| `/nettoyage-bons-en-chablais` | nettoyage Bons-en-Chablais | entreprise nettoyage Bons | ménage Bons-en-Chablais | Transactionnel hyperlocal | Faible | Faible | / | 🟡 |

### Phase 2bis, combos service × ville côté FR

| Slug | MC principal | MC secondaires | Long-tail | Intent | Volume | Parent SEO |
|---|---|---|---|---|---|---|
| `/nettoyage-vitres-evian-les-bains` | nettoyage de vitres Évian-les-Bains | laveur de vitres Évian, vitres véranda Évian | nettoyage vitres rive Léman | Trans | GSC 37 imp KD 17 | /nettoyage-vitres-thonon |
| `/nettoyage-vitres-annemasse` | nettoyage de vitres Annemasse | laveur vitres Annemasse, vitres bureau Annemasse | nettoyage vitres immeuble Annemasse | Trans | Ads moyen | /nettoyage-vitres-thonon |
| `/menage-annemasse` | société de ménage Annemasse | aide ménagère Annemasse, femme de ménage Annemasse | ménage régulier crédit impôt Annemasse | Trans SAP | Ads 6 imp + clic | /menage-thonon-les-bains |
| `/menage-evian-les-bains` | société de ménage Évian | aide ménagère Évian, femme de ménage Évian | ménage hebdomadaire Évian | Trans SAP | GSC modéré | /menage-thonon-les-bains |
| `/nettoyage-canape-annemasse` | nettoyage canapé Annemasse | détachage canapé Annemasse, lavage tapis Annemasse | nettoyage matelas anti-acariens Annemasse | Trans urgence | Ads "lavage tapis annemasse" 10 imp + clic | /nettoyage-textiles-thonon |
| `/nettoyage-fin-de-bail-annemasse` | nettoyage fin de bail Annemasse | nettoyage état des lieux Annemasse | récupérer caution Annemasse | Trans urgence | Niche locale | /etat-des-lieux-sortant-thonon |
| `/debarras-annemasse` | débarras Annemasse | vide-maison Annemasse, succession Annemasse | débarras Diogène Annemasse | Trans urgence | Niche | /debarras-thonon |

### Phase 3, Suisse, hub frontalier + niches villes

| Slug | MC principal | MC secondaires | Long-tail | Intent | Volume SEMrush/Ads | Parent SEO |
|---|---|---|---|---|---|---|
| `/nettoyage-frontaliers-suisse` | nettoyage frontalier Suisse | entreprise nettoyage transfrontalier, ménage frontalier Genève | société française nettoyage Suisse | Hub Suisse | Niche stratégique | / |
| `/nettoyage-geneve` | entreprise de nettoyage Genève | nettoyage Genève, société nettoyage Genève, ménage Genève | nettoyage maison Genève crédit impôt | Trans premium | Ads 70+25 imp + 6+4 clics | /nettoyage-frontaliers-suisse |
| `/nettoyage-fin-de-bail-geneve` | nettoyage fin de bail Genève | nettoyage état des lieux Genève, remise des clés Genève | fin de bail express 48h Genève | Trans urgence niche | Ads 9 imp | /nettoyage-geneve |
| `/nettoyage-vitres-geneve` | nettoyage de vitres Genève | laveur vitres Genève, lavage vitres Genève | vitres véranda Genève | Trans premium | SEMrush 90 KD 6 + Ads | /nettoyage-geneve |
| `/nettoyage-canape-geneve` | nettoyage canapé Genève | nettoyage tapis Genève, détachage canapé Genève | nettoyage matelas Genève | Trans premium | SEMrush 110 KD 7 + Ads 7 imp | /nettoyage-geneve |
| `/nettoyage-carouge` | entreprise de nettoyage Carouge | nettoyage Carouge, ménage Carouge | nettoyage appartement Carouge | Trans | SEMrush 160 KD 5 | /nettoyage-geneve |
| `/nettoyage-meyrin` | entreprise de nettoyage Meyrin | nettoyage Meyrin, ménage Meyrin | nettoyage maison Meyrin | Trans | SEMrush 20 | /nettoyage-geneve |
| `/nettoyage-lausanne` | entreprise de nettoyage Lausanne | nettoyage Lausanne, société nettoyage Lausanne | nettoyage maison Lausanne | Trans | Marché concurrentiel | / |
| `/nettoyage-fin-de-bail-lausanne` | nettoyage fin de bail Lausanne | état des lieux Lausanne | fin de bail 48h Lausanne | Trans urgence niche | SEMrush 110 KD 5 | /nettoyage-lausanne |
| `/nettoyage-canape-lausanne` | nettoyage canapé Lausanne | nettoyage tapis Lausanne | détachage canapé Lausanne | Trans premium | SEMrush 110 KD 7 | /nettoyage-lausanne |
| `/nettoyage-morges` | entreprise de nettoyage Morges | nettoyage Morges, ménage Morges | nettoyage rive Léman Morges | Trans | SEMrush 130 KD 17 | / |
| `/nettoyage-nyon` | entreprise de nettoyage Nyon | nettoyage Nyon, ménage Nyon | nettoyage frontalier Nyon | Trans | SEMrush 100 | / |
| `/nettoyage-vevey` | entreprise de nettoyage Vevey | nettoyage Vevey, ménage Vevey | nettoyage Riviera Vevey | Trans | SEMrush 90 KD 5 | / |
| `/nettoyage-aigle` | entreprise de nettoyage Aigle | nettoyage Aigle | ménage Aigle | Trans | SEMrush 140 KD 5 | / |
| `/nettoyage-montreux` | entreprise de nettoyage Montreux | nettoyage Montreux, ménage Montreux | nettoyage Riviera Montreux | Trans | SEMrush 70 | / |

### Phase 4, blog informationnel (capture intent informationnel + back-link interne)

| Slug | MC principal | Intent | Pousse vers (lien interne) |
|---|---|---|---|
| `/blog/prix-nettoyage-canape-domicile` | prix nettoyage canapé à domicile | Info, comparatif | /nettoyage-textiles-thonon |
| `/blog/tarif-femme-de-menage-2026` | tarif femme de ménage 2026 | Info, comparatif | /menage-thonon-les-bains |
| `/blog/credit-impot-services-personne` | crédit impôt services à la personne | Info légal | /menage-thonon-les-bains |
| `/blog/checklist-fin-de-bail-7-points` | checklist fin de bail | Info pratique | /etat-des-lieux-sortant-thonon |
| `/blog/nettoyage-terrasse-bois-pierre` | nettoyer une terrasse en bois et pierre | Info pratique | /entretien-espaces-verts-thonon |
| `/blog/eau-osmosee-vitres-pro` | qu'est-ce que l'eau osmosée pour les vitres | Info technique | /nettoyage-vitres-thonon |
| `/blog/diogene-comment-aider` | syndrome de Diogène, comment aider un proche | Info empathique | /debarras-thonon |

---

## 6. Règles anti-cannibalisation

Pour chaque nouvelle page, validation obligatoire de cette checklist :

| Critère | Règle |
|---|---|
| Title (≤ 60 c) | Unique, contient le MC principal en début |
| H1 | Unique, contient le MC principal |
| Meta description (≤ 155 c) | Unique, mentionne le MC principal + USP + CTA |
| URL / slug | Contient le MC principal |
| Canonical | Auto-référent (jamais pointer vers une autre page) |
| Hreflang | `fr-FR` sur pages FR, `fr-CH` sur pages Suisse, `x-default` sur la home |
| Intent | Une seule intention par page (transactionnel local OU comparatif info OU hub agrégateur) |
| MC principal différent de toute autre page existante | Vérifié dans cette matrice avant création |
| 70 % du contenu unique par rapport aux pages cousines | Vérifié à la rédaction, pas de copier-coller des sections |
| Au moins 3 données uniques (témoignage géolocalisé, tarif, quartier nommé, FAQ ville-spécifique) | Obligatoire |

**Test de cannibalisation post-pub** : 4 semaines après mise en ligne, taper `site:ghservices.fr "votre mot-clé"` dans Google. Si plusieurs pages remontent pour la même requête, faire un audit et fusionner ou différencier.

---

## 7. Règles de contenu unique (survivre au Helpful Content)

Chaque page doit cocher au minimum 4 cases sur 7 :

1. **Tarif spécifique à la ville** (à partir de X €, fourchette, ou clair "devis sous 24 h")
2. **Au moins 1 quartier ou lieu-dit nommé** dans le corps de texte (par ex. "rives Léman à Yvoire", "Carouge centre-ville")
3. **FAQ ville-spécifique** d'au moins 2 questions sur 8 qui mentionnent la ville
4. **Témoignage client géolocalisé** (récupéré des vrais avis Google quand possible)
5. **Photo ou visuel spécifique** (photo réelle si on en a, sinon photo générique mais pas la même que la page cousine)
6. **Mention contexte local** (saisonnalité, climat, type de bâti, contraintes locales : embruns Léman, pollen Chablais, parquet huilé chalets, etc.)
7. **Bloc maillage interne** pointant vers 3 pages cousines pertinentes

**Plafond de boilerplate** : pas plus de 30 % du contenu visible d'une page peut être identique à une autre page du site. Le footer et le header ne comptent pas.

**Volume cible** : 1 200 à 1 500 mots de contenu visible par page service hub, 800 à 1 200 mots par page ville secondaire.

---

## 8. Cocon sémantique, le maillage interne

### Vue d'ensemble

```
HOME (autorité racine)
   │
   ├─► 9 hubs services Thonon                  [PageRank concentré]
   │      ↑↓ (cross-link entre services connexes)
   │
   ├─► 3 hubs niches (ménage, chalets, état des lieux)
   │      ↑↓ (cross-link avec services et villes pertinents)
   │
   ├─► Hubs villes FR (Évian, Annemasse, ...) ─┐
   │      ↓                                    │
   │      └─► Combos service × ville FR        │ (chaque hub ville agrège
   │                                           │  les services de SA ville)
   ├─► Hub Suisse frontaliers ─► hubs villes CH (Genève, Lausanne, Carouge...)
   │                                ↓
   │                                └─► Combos service × ville CH
   │
   └─► Blog ─► pointe vers hubs services et combos
```

### Règles de maillage par type de page

| Type de page | Reçoit de | Envoie vers |
|---|---|---|
| Hub service Thonon | Home, 2 hubs services cousins, blog pertinent | 3 services cousins + 2 villes proches |
| Hub niche (ménage, chalets, etat-lieux) | Home, hubs services cousins | 3-5 hubs services cousins |
| Hub ville FR (Évian, Annemasse) | Home, hubs services cousins, hub niche pertinent | 4-6 hubs services + combo service × cette ville (si existant) |
| Combo service × ville FR | Hub service correspondant, hub ville correspondant | Hub service parent + hub ville parent + 1 ville cousine |
| Hub Suisse frontaliers | Home, hub Léman | Hub Genève, hub Lausanne, FAQ frontalier |
| Hub ville CH (Genève, Lausanne) | Hub Suisse frontaliers, home | Services principaux + combos CH si existants |
| Blog | Pages services pertinentes | 1-2 hubs services + blog connexe |

### Ancres recommandées (varier, ne jamais sur-utiliser l'exact match)

| Cible | Ancre principale | Variations naturelles |
|---|---|---|
| /nettoyage-vitres-thonon | nettoyage de vitres à Thonon | laveurs de vitres pros, lavage de vitres sans traces |
| /nettoyage-evian-les-bains | entreprise de nettoyage à Évian | nettoyage Évian-les-Bains, services de propreté à Évian |
| /nettoyage-geneve | entreprise de nettoyage à Genève | nettoyage Genève, services de nettoyage Genève |
| /nettoyage-frontaliers-suisse | nettoyage transfrontalier Suisse | services pour frontaliers, intervention transfrontière |

Éviter les ancres génériques type "cliquez ici", "en savoir plus" qui gaspillent le PageRank interne.

---

## 9. Schema.org par type de page

| Type | Schemas à injecter |
|---|---|
| Home | `LocalBusiness` (parent global avec `areaServed` étendu + `aggregateRating`) + `FAQPage` + `WebSite` (avec sitelinks search box) |
| Hub service (les 9 + 3 bonus) | `Service` (référence le LocalBusiness parent) + `FAQPage` + `BreadcrumbList` + `AggregateRating` |
| Hub ville FR | `LocalBusiness` enfant (avec `address` Thonon + `areaServed` = ville cible) + `BreadcrumbList` + `Service` array |
| Combo service × ville | `Service` (avec `serviceType` précis + `areaServed` = ville) + `FAQPage` + `BreadcrumbList` |
| Hub Suisse, hubs villes CH | Idem hub ville FR mais avec `availableLanguage: "fr"` et hreflang `fr-CH` |
| Blog post | `Article` + `BreadcrumbList` + (optionnel) `HowTo` ou `Recipe` selon contenu |

**Note importante** : Google a déprécié l'affichage des `FAQPage` rich results pour la plupart des sites non-gouvernementaux en août 2023. On garde le schema (toujours utile pour le knowledge graph) mais on n'attend plus de gain CTR via les rich snippets FAQ.

---

## 10. Hreflang, implémentation propre

Dans `app/layout.tsx`, ajouter dans `metadata.alternates.languages` :

```ts
alternates: {
  canonical: SITE_URL,
  languages: {
    "fr-FR": SITE_URL,
    "x-default": SITE_URL,
  },
},
```

Sur chaque page Suisse, dans son `metadata` propre :

```ts
alternates: {
  canonical: `${SITE_URL}/nettoyage-geneve`,
  languages: {
    "fr-CH": `${SITE_URL}/nettoyage-geneve`,
    "fr-FR": `${SITE_URL}/nettoyage-frontaliers-suisse`,
  },
},
```

Mentions à ajouter dans le pied de chaque page Suisse (bloc texte court) :

> Prestataire français basé à Thonon-les-Bains, à 5 minutes de la frontière suisse. Intervention transfrontière régulière depuis 2011. TVA française appliquée, contrat de droit français. RC pro reconnue en Suisse romande.

---

## 11. Phasage et calendrier (4 mois)

### Phase 1 (terminée) : Fondations 12 pages services
**Statut** : ✅ Live. Délai d'indexation Google : 2 à 6 semaines, on monitore via GSC.

### Phase 2 : Léman / Chablais français (juin 2026)
- 8 hubs villes FR
- 7 combos service × ville FR
- Total : 15 nouvelles pages
- Cadence : 4 pages / semaine
- À déployer : juin 2026, lancement progressif

### Phase 3 : Niches Suisse + premium villes (juillet 2026)
- 1 hub Suisse frontaliers
- 4 pages Genève
- 2 pages Lausanne
- 8 pages villes CH 2e tier (Carouge, Meyrin, Morges, Nyon, Vevey, Aigle, Montreux, +1)
- Total : 15 nouvelles pages
- Cadence : 4 pages / semaine
- Pré-requis : hreflang en place, mentions légales mises à jour

### Phase 4 : Blog informationnel + consolidation (août-septembre 2026)
- 7 nouveaux blog posts
- Audit GSC : repérer pages avec impressions et 0 clic, optimiser title/meta
- Audit cannibalisation : 6 semaines après Phase 3
- Audit Helpful Content : vérifier qu'aucune pénalité algo n'a frappé

### Au-delà
- Si Phases 1-4 OK et trafic en croissance : Phase 5 pour ouvrir 20+ pages combos micro-niches (service × commune × secteur, par ex. /nettoyage-vitres-hotels-evian si volume Ads le justifie)
- Si pénalité ou stagnation : on consolide, on fusionne les pages faibles, pas d'ajout massif

---

## 12. Checklist d'implémentation par page

Avant de publier une page, valider :

- [ ] MC principal absent de la matrice cannibalisation (cherché dans ce document)
- [ ] Title 60 c max, MC en début, marque en fin
- [ ] Meta description 155 c max, MC + USP + CTA
- [ ] Slug = MC principal (kebab-case)
- [ ] H1 unique avec MC
- [ ] H2 secondaires couvrent les MC secondaires (3 à 5)
- [ ] 1 200 à 1 500 mots de contenu visible pour hub, 800 à 1 200 pour combo
- [ ] Au moins 4 données uniques sur les 7 de la grille (section 7)
- [ ] Maillage interne entrant (au moins 2 pages cousines pointent vers cette page)
- [ ] Maillage interne sortant (cette page envoie vers 3 pages cousines)
- [ ] Schema Service + FAQPage + BreadcrumbList injectés (3 scripts JSON-LD)
- [ ] Hreflang correct (fr-FR pour FR, fr-CH pour CH)
- [ ] Canonical auto-référent
- [ ] Image hero présente, alt rempli
- [ ] Formulaire `ServiceQuoteForm` ou équivalent inline
- [ ] CTA téléphone visible (tel: + bandeau anti-recrutement sur les pages contact)
- [ ] Page ajoutée à `sitemap.ts`
- [ ] Bouton sur le hub parent qui pointe vers cette page
- [ ] Typecheck propre (`npm run typecheck`)
- [ ] Page testée en local sur `localhost:3000`

---

## 13. KPIs et monitoring

Une fois la Phase 2 publiée, suivre dans Google Search Console toutes les 2 semaines :

| KPI | Cible 8 semaines | Cible 16 semaines |
|---|---|---|
| Impressions totales (28 jours) | +30 % vs baseline 12 pages | +80 % |
| Clics totaux (28 jours) | +25 % | +60 % |
| CTR moyen | > 1,2 % | > 1,5 % |
| Position moyenne sur "entreprise nettoyage [ville FR]" | < 10 sur 80 % des villes | < 5 sur 50 % |
| Position moyenne sur "nettoyage [ville CH 2e tier]" | < 20 | < 10 |
| Pages indexées (sur les ajoutées) | > 85 % | > 95 % |
| Pages avec 0 impression à 6 semaines | < 20 % du total créé | < 10 % |

**Si pénalité algorithmique soupçonnée** (chute brutale > 30 % du trafic) :
1. Vérifier dans GSC, onglet "Actions manuelles" et "Problèmes de sécurité"
2. Auditer 5 pages au hasard avec `site:ghservices.fr/[slug]` : si désindexées, c'est algo
3. Identifier les pages les plus faibles (<300 mots, similarité élevée) et soit les enrichir, soit les `noindex`
4. Attendre 2-3 mois, Google recrawle

---

## 14. Garde-fous légaux et opérationnels

| Risque | Précaution |
|---|---|
| Dépassement seuil TVA Suisse (100 k CHF / an) | Tableau de bord CA CH mensuel. Si on approche 80 k CHF, lancer la procédure de représentant fiscal CH |
| RC Pro pas reconnue en Suisse | Vérifier avec l'assureur que la police couvre les interventions en CH. Demander attestation écrite |
| Mention légale incorrecte sur pages CH | Inclure le bloc "Prestataire français basé Thonon, TVA FR, droit français" en footer de toute page CH |
| Photos clients utilisées sans accord | Obtenir accord écrit pour photos avant/après publiées |
| Avis Google copiés pour les pages | OK car ce sont des avis publics du même établissement, mais ne jamais inventer un avis |

---

## 15. Synthèse exécutive

| Question stratégique | Réponse |
|---|---|
| Quel modèle d'architecture ? | Hubs services + agrégation villes (style Centre Services / O2) |
| Combien de pages au total ? | 55 environ (12 ✅ + 43 à créer) sur 4 mois |
| Risque de pénalité Google ? | Faible si on respecte les règles de uniqueness et le phasage |
| Risque expansion Suisse ? | Moyen sur Genève / Lausanne, faible sur villes 2e tier |
| Faut-il viser Genève en SERP frontale ? | Non, on cible la niche frontalière + 2e tier (Carouge, Meyrin, Morges, Nyon) |
| Faut-il un ccTLD `.ch` séparé ? | Non, hreflang `fr-CH` suffit pour ce volume |
| Quelle est la prochaine action ? | Lancer la Phase 2 (8 hubs villes FR + 7 combos), juin 2026 |

---

*Document maintenu vivant. Mettre à jour le tableau d'inventaire après chaque page publiée, et le bloc KPIs après chaque audit GSC.*
