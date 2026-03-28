import heroBg from './assets/hero-bg.png'
import anthonyImg from './assets/anthony.png'
import deborahImg from './assets/deborah.png'
import aliciaImg from './assets/alicia.png'
import hugoImg from './assets/hugo.png'

const coaches = [
  {
    name: 'Anthony',
    image: anthonyImg,
    bio: 'Fondateur & coach',
    specialty: 'Coaching personnalisé, remise en forme et suivi individualisé.'
  },
  {
    name: 'Déborah',
    image: deborahImg,
    bio: 'Coach',
    specialty: 'Fitness, renforcement, bien-être et accompagnement global.'
  },
  {
    name: 'Alicia',
    image: aliciaImg,
    bio: 'Coach',
    specialty: 'Cardio, mobilité, tonification et énergie positive.'
  },
  {
    name: 'Hugo',
    image: hugoImg,
    bio: 'Coach',
    specialty: 'Musculation, performance et progression structurée.'
  }
]

const formulas = [
  {
    label: '1 séance',
    title: 'Cours personnalisés',
    description: 'Une séance découverte avec votre coach dédié.',
    price: '60€',
    cta: 'Réserver'
  },
  {
    label: 'Pack 5 séances',
    title: 'Cours personnalisés',
    description: 'Cinq séances pour progresser avec un vrai cadre.',
    price: '280€',
    oldPrice: '300€',
    cta: 'Réserver ce pack',
    featured: true,
    badge: 'Populaire'
  },
  {
    label: 'Pack 10 séances',
    title: 'Cours personnalisés',
    description: 'Un accompagnement complet pour installer vos habitudes.',
    price: '520€',
    oldPrice: '600€',
    cta: 'Réserver ce pack'
  }
]

const subscriptions = [
  {
    plan: 'Essentiel',
    title: 'Accès libre',
    price: '59€',
    suffix: '/mois',
    items: ['Accès salle en illimité', 'Cours collectifs inclus', '1 coach au choix'],
    cta: 'Choisir Essentiel'
  },
  {
    plan: 'Coach',
    title: 'Suivi personnalisé',
    price: '89€',
    suffix: '/mois',
    items: ['Test d’entrée', '2 séances coachées / mois', 'Programme personnalisé', 'Suivi des progrès'],
    cta: 'Choisir Coach',
    featured: true,
    badge: 'Recommandé'
  },
  {
    plan: 'Premium',
    title: 'Expérience complète',
    price: '129€',
    suffix: '/mois',
    items: ['Tout l’offre Coach', 'Accès prioritaire aux nouveautés', 'Suivi nutritionnel ponctuel'],
    cta: 'Choisir Premium'
  }
]

const reviews = [
  {
    name: 'Julien M.',
    text: 'Une salle élégante et une équipe au top. Anthony m’a aidé à reprendre confiance.'
  },
  {
    name: 'Sophie R.',
    text: 'Déborah est très professionnelle et bienveillante. Le suivi est motivant.'
  },
  {
    name: 'Thomas L.',
    text: 'L’abonnement premium est super pratique et l’ambiance de la salle est vraiment haut de gamme.'
  }
]

const steps = [
  {
    number: '1',
    title: 'Choisissez',
    text: 'Votre cours, votre formule et votre coach parmi Anthony, Déborah, Alicia ou Hugo.'
  },
  {
    number: '2',
    title: 'Remplissez',
    text: 'Vos informations personnelles puis validez votre inscription.'
  },
  {
    number: '3',
    title: 'Payez en ligne',
    text: 'Paiement sécurisé via Stripe puis confirmation immédiate.'
  }
]

function Logo() {
  return (
    <div className="logoWrap">
      <div className="logoMark">SG</div>
      <div>
        <div className="logoText">SAINT-GINIEZ</div>
        <div className="logoSub">MARSEILLE</div>
      </div>
    </div>
  )
}

function Stars() {
  return <div className="stars">★★★★★</div>
}

export default function App() {
  return (
    <div className="pageShell">
      <header className="siteHeader fade-in-up">
        <Logo />

        <nav className="mainNav">
          <a href="#accueil">Accueil</a>
          <a href="#cours">Cours</a>
          <a href="#formules">Formules</a>
          <a href="#coachs">Coachs</a>
          <a href="#abonnements">Abonnements</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerCta" href="#formules">
          Réserver un cours
        </a>
      </header>

      <main>
        <section id="accueil" className="heroCard fade-in-up">
          <div className="heroBackground" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="heroOverlay" />

          <button className="carouselArrow left" aria-label="Image précédente">
            ‹
          </button>
          <button className="carouselArrow right" aria-label="Image suivante">
            ›
          </button>

          <div className="heroContent">
            <div className="heroMonogram">SG</div>
            <div className="heroBrand">SAINT-GINIEZ</div>
            <h1>Votre salle de sport à Marseille, moderne, humaine et accessible.</h1>
            <p>
              Choisissez votre formule, votre coach et commencez dès aujourd’hui.
            </p>

            <div className="heroActions">
              <a href="#formules" className="btn btnGold">
                Découvrir les formules
              </a>
              <a href="#coachs" className="btn btnDark">
                Réserver un cours
              </a>
            </div>

            <div className="heroDots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section id="coachs" className="section darkSection coachesSection fade-in-up">
          <div className="sectionIntro">
            <div className="eyebrow">Choisissez votre coach</div>
            <h2>Une équipe passionnée, à votre écoute</h2>
            <p>
              Sélectionnez le coach qui vous correspond et démarrez votre accompagnement sur mesure.
            </p>
          </div>

          <div className="coachGrid">
            {coaches.map((coach, index) => (
              <article
                className="coachCard fade-in-up"
                key={coach.name}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <img src={coach.image} alt={coach.name} className="coachImage" />
                <div className="coachBody">
                  <h3>{coach.name}</h3>
                  <p className="coachRole">{coach.bio}</p>
                  <p className="coachText">{coach.specialty}</p>
                  <button className="pillButton">Choisir {coach.name}</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="formules" className="section lightSection formulasSection fade-in-up">
          <div className="sectionIntro narrow darkText">
            <div className="eyebrow eyebrowDark">Nos formules</div>
            <h2>Trouvez l’offre qui vous correspond</h2>
          </div>

          <div className="tabsRow">
            <button className="tab active">Cours personnalisés</button>
            <button className="tab">Cours collectifs</button>
            <button className="tab">Abonnements</button>
          </div>

          <div className="formulaGrid">
            {formulas.map((formula, index) => (
              <article
                className={`formulaCard fade-in-up ${formula.featured ? 'featured' : ''}`}
                key={formula.label}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {formula.badge && <div className="cardBadge">{formula.badge}</div>}
                <div className="formulaLabel">{formula.label}</div>
                <h3>{formula.title}</h3>
                <p>{formula.description}</p>

                <div className="priceRow">
                  <span className="priceMain">{formula.price}</span>
                  {formula.oldPrice && <span className="priceOld">{formula.oldPrice}</span>}
                </div>

                <button className={`ctaWide ${formula.featured ? 'gold' : ''}`}>
                  {formula.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section darkSection stepsSection fade-in-up">
          <div className="sectionIntro narrow">
            <div className="eyebrow">Comment ça marche ?</div>
            <h2>Votre inscription en 3 étapes</h2>
          </div>

          <div className="stepsRow">
            {steps.map((step, index) => (
              <div className="stepItem fade-in-up" key={step.number} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="stepIcon">{step.number}</div>
                <h3>
                  {step.number}. {step.title}
                </h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <div className="stepArrow">→</div>}
              </div>
            ))}
          </div>
        </section>

        <section id="abonnements" className="section subscriptionsSection fade-in-up">
          <div className="glow glowLeft" />
          <div className="glow glowRight" />

          <div className="sectionIntro narrow">
            <div className="eyebrow">Abonnements mensuels</div>
            <h2>Entraînez-vous sans interruption</h2>
            <p>
              Choisissez la formule qui correspond à votre rythme et renouvelez automatiquement chaque mois.
            </p>
          </div>

          <div className="subscriptionGrid">
            {subscriptions.map((plan, index) => (
              <article
                className={`subscriptionCard fade-in-up ${plan.featured ? 'featuredPlan' : ''}`}
                key={plan.plan}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {plan.badge && <div className="cardBadge">{plan.badge}</div>}
                <div className="planLabel">{plan.plan}</div>
                <h3>{plan.title}</h3>

                <div className="planPrice">
                  {plan.price}
                  <span>{plan.suffix}</span>
                </div>

                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <button className={`ctaWide ${plan.featured ? 'gold' : ''}`}>{plan.cta}</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section lightSection reviewsSection fade-in-up">
          <div className="sectionIntro narrow darkText">
            <div className="eyebrow eyebrowDark">Avis clients</div>
            <h2>Ils ont rejoint Saint-Giniez</h2>
          </div>

          <div className="reviewGrid">
            {reviews.map((review, index) => (
              <article
                className="reviewCard fade-in-up"
                key={review.name}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Stars />
                <p>{review.text}</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="ctaSection fade-in-up">
          <div className="ctaOverlay" />
          <div className="ctaInner">
            <div className="logoMini">SG</div>
            <h2>Prêt à commencer ?</h2>
            <p>
              Réservez votre première formule et démarrez votre accompagnement sur mesure chez Saint-Giniez.
            </p>
            <a href="#formules" className="btn btnGold">
              Commencer maintenant
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="siteFooter fade-in-up">
        <div className="footerTop">
          <div className="footerCol">
            <Logo />
            <p className="footerText">
              Votre salle de sport à Marseille, moderne, humaine et accessible.
            </p>
          </div>

          <div className="footerCol">
            <h4>Navigation</h4>
            <a href="#accueil">Accueil</a>
            <a href="#cours">Cours</a>
            <a href="#formules">Formules</a>
            <a href="#coachs">Coachs</a>
            <a href="#abonnements">Abonnements</a>
          </div>

          <div className="footerCol">
            <h4>Contact</h4>
            <span>Adresse : à compléter</span>
            <span>Téléphone : à compléter</span>
            <span>Email : contact@saint-giniez.fr</span>
            <span>Horaires : 6h - 22h</span>
          </div>

          <div className="footerCol">
            <h4>Réseaux</h4>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">TikTok</a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 Saint-Giniez</span>
          <div className="footerLinks">
            <a href="/">Mentions légales</a>
            <a href="/">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}