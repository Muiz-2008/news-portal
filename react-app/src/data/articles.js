// articles.js — local demo data
// Used when no API key is configured, or as a fallback if the API fails.
// Each article has: id, title, description, content, author, publishedAt,
// image, category, source.

export const articles = [
  // ─── GENERAL / WORLD ───────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Global Leaders Sign Historic Climate Agreement at Geneva Summit',
    description:
      'Over 190 countries signed a landmark deal to reduce carbon emissions by 60% before 2035 — the most ambitious climate commitment in history.',
    content:
      'In a historic moment for international diplomacy, representatives from 192 nations gathered in Geneva to sign the landmark Climate Commitment Act of 2026. The agreement, brokered after three years of intense negotiations, pledges to reduce global carbon emissions by 60% relative to 2005 levels by the year 2035.\n\nThe accord includes binding targets for the world\'s top twenty polluters and establishes a $500 billion green energy transition fund to help developing nations shift away from fossil fuels. UN Secretary-General described the moment as "the last real chance humanity has to keep warming below 1.5 degrees."\n\nCritics argue the enforcement mechanisms remain too weak, but supporters say the political will demonstrated today is itself unprecedented. Markets reacted positively, with clean energy stocks surging more than 8% in after-hours trading.',
    author: 'Sarah Mitchell',
    publishedAt: '2026-05-17T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    category: 'general',
    source: { name: 'World News Network' },
  },
  {
    id: 2,
    title: 'G20 Summit Agrees on New Global Minimum Tax Framework',
    description:
      'Finance ministers from the world\'s largest economies reached a breakthrough deal to prevent multinational tax avoidance, setting a floor of 15% corporate tax.',
    content:
      'Finance ministers from the G20 nations concluded their three-day summit with a landmark agreement to implement a 15% global corporate minimum tax, dealing a significant blow to tax-haven strategies employed by multinational corporations.\n\nThe deal, building on earlier OECD negotiations, is expected to generate an additional $220 billion in tax revenues annually worldwide. The United States, European Union, and China all signalled support, though smaller jurisdictions with historically low tax rates expressed reservations.\n\nImplementation is expected to begin in 2027, with individual nations required to pass domestic legislation to bring the framework into law. Tax justice advocates called it a generational shift in how the global economy distributes its wealth.',
    author: 'James Okonkwo',
    publishedAt: '2026-05-16T14:30:00Z',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'general',
    source: { name: 'Global Tribune' },
  },
  {
    id: 3,
    title: 'United Nations Launches Largest Peacekeeping Mission in a Decade',
    description:
      'A 15,000-strong UN force has been deployed to stabilise a conflict zone in Central Africa, marking the body\'s biggest military commitment since 2014.',
    content:
      'The United Nations Security Council voted unanimously to authorise a 15,000-strong peacekeeping mission, the largest deployment of blue helmets in over a decade. Troops from 34 member states will operate under a Chapter VII mandate, giving them authority to use force to protect civilians.\n\nThe mission, designated MINUSCA-II, will be stationed across five provinces and is expected to run for an initial period of 18 months. The operation\'s annual budget of $1.2 billion will be shared among UN member states according to the standard peacekeeping assessment scale.\n\nHumanitarian organisations on the ground welcomed the decision but cautioned that without a parallel political dialogue, a military presence alone cannot resolve the underlying grievances driving the conflict.',
    author: 'Amina Hassan',
    publishedAt: '2026-05-15T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1586347905152-6e0d7d3bb0b8?w=800&q=80',
    category: 'general',
    source: { name: 'Reuters Global' },
  },
  {
    id: 4,
    title: 'WHO Declares End to Three-Year Global Health Emergency',
    description:
      'The World Health Organisation officially lifted the international public health emergency designation, citing sustained declines in hospitalisation rates worldwide.',
    content:
      'The World Health Organisation\'s emergency committee voted Thursday to officially end the international public health emergency that has been in force for the past three years. The decision reflects a sustained and significant decline in severe illness and hospitalisations across all regions.\n\nDirector-General Dr. Priya Sundaram called the moment "a transition point, not a finish line," urging countries to maintain surveillance systems and pandemic preparedness infrastructure built during the emergency.\n\nSeveral governments announced plans to redirect emergency health funding towards long-term primary care investment, while vaccine manufacturers began transitioning production lines towards seasonal variants. Global tourism indices rose sharply on the news, with airline bookings jumping 12% within hours of the announcement.',
    author: 'Christelle Dubois',
    publishedAt: '2026-05-14T09:15:00Z',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    category: 'general',
    source: { name: 'Health Affairs Daily' },
  },

  // ─── TECHNOLOGY ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'AI Models Now Outperform Human Experts in Complex Medical Diagnosis',
    description:
      'A landmark study reveals that advanced AI systems detect rare diseases with greater accuracy than experienced physicians in controlled trials.',
    content:
      'A peer-reviewed study published in Nature Medicine this week demonstrated that a new generation of large multimodal AI models can detect a panel of 47 rare diseases from routine clinical data with an accuracy of 94.3%, compared to 87.1% for specialist physicians working under the same time constraints.\n\nThe system, developed jointly by researchers at MIT, Stanford, and a consortium of European hospitals, was trained on anonymised records from over 12 million patients. It integrates medical imaging, lab results, genetic markers, and clinical notes into a unified diagnostic recommendation.\n\nExperts caution that the technology is designed to assist, not replace, clinicians. Regulatory bodies in the US and EU are reviewing fast-track approval pathways, with pilot deployments expected in major teaching hospitals by early 2027.',
    author: 'Dr. Kwame Asante',
    publishedAt: '2026-05-17T06:00:00Z',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    category: 'technology',
    source: { name: 'Tech Horizon' },
  },
  {
    id: 6,
    title: 'Quantum Computing Milestone: First 1,000-Qubit Processor Shipped',
    description:
      'A Silicon Valley startup has delivered the world\'s first commercially available 1,000-qubit quantum processor, a milestone thought to be years away.',
    content:
      'QuantumCore, a five-year-old startup based in San Jose, announced Wednesday that it has shipped its first commercially available 1,000-qubit quantum processor to a consortium of pharmaceutical research institutions. The delivery marks a significant milestone in the race toward practical quantum advantage.\n\nThe processor, codenamed Helix, operates at near absolute zero using superconducting circuit architecture and achieves an error rate of 0.08% per gate operation — roughly ten times better than previous generation devices. Initial applications will focus on molecular simulation for drug discovery, where quantum systems can model complex protein folding interactions intractable for classical supercomputers.\n\nIBM and Google both acknowledged the achievement while noting they are months away from competing announcements. Analysts estimate the global quantum computing market will exceed $50 billion by 2030.',
    author: 'Lena Fischer',
    publishedAt: '2026-05-16T11:00:00Z',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    category: 'technology',
    source: { name: 'Tech Horizon' },
  },
  {
    id: 7,
    title: 'EU Passes World\'s Strictest Self-Driving Car Safety Regulations',
    description:
      'The European Parliament voted to require Level 4 autonomous vehicles to meet a new safety standard six times stricter than human-driven equivalents.',
    content:
      'The European Parliament passed the Autonomous Mobility Safety Act with a sweeping majority, introducing the world\'s most demanding safety requirements for self-driving vehicles. Under the new law, Level 4 autonomous systems must demonstrate a fatality rate at least six times lower than the EU average for human-driven vehicles before receiving market approval.\n\nManufacturers will have until 2029 to comply, with interim benchmarks set for 2027. The regulation also mandates real-time data logging accessible to national transport authorities and establishes mandatory liability frameworks that place primary responsibility on vehicle manufacturers rather than passengers.\n\nThe automotive industry responded with a mix of support and concern. Tesla, Waymo, and Volkswagen\'s autonomous division all released statements welcoming the clarity while flagging concerns about the timeline. Consumer groups called the legislation a landmark win for road safety.',
    author: 'Marco Bianchi',
    publishedAt: '2026-05-15T13:00:00Z',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    category: 'technology',
    source: { name: 'Digital Europe' },
  },
  {
    id: 8,
    title: 'SpaceX Launches 500th Starlink Satellite Batch, Achieving Global Coverage',
    description:
      'SpaceX completed its 500th Starlink mission this week, finalising a constellation that now provides broadband connectivity to every point on Earth.',
    content:
      'SpaceX marked a historic milestone Saturday as its Falcon 9 rocket delivered the final batch of satellites needed to complete global Starlink coverage. The 500th mission, launching from Cape Canaveral, placed 23 satellites into low Earth orbit, filling the last gap in a constellation of over 6,800 active units.\n\nThe achievement means Starlink can now offer uninterrupted broadband service at any location on the planet, including previously underserved polar regions. CEO Elon Musk described the moment as "day one of truly global internet."\n\nThe company announced new pricing tiers targeting emerging markets, with a $15-per-month plan aimed at rural communities in Africa, South Asia, and Latin America. Telecom incumbents saw share prices drop between 3% and 7% in markets where Starlink competition is now imminent.',
    author: 'Priya Nair',
    publishedAt: '2026-05-14T16:00:00Z',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80',
    category: 'technology',
    source: { name: 'Space & Tech Weekly' },
  },

  // ─── SPORTS ────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Champions League Final Sets New Record with 500 Million Viewers',
    description:
      'Last night\'s thrilling final drew the largest ever global audience for a club football match, surpassing the previous record by 80 million.',
    content:
      'The UEFA Champions League final between Real Madrid and Bayern Munich shattered audience records, drawing an estimated 500 million viewers across television and streaming platforms worldwide — an 18% increase on the previous year\'s record.\n\nThe match itself delivered on every promise, with Madrid equalising in the 89th minute before sealing a 3-2 victory in extra time. Vinicius Jr. was awarded the Golden Ball for his performance across the tournament, while goalkeeper Lunin was named best goalkeeper of the competition.\n\nStreaming data released by UEFA showed that 210 million viewers watched via digital platforms, up from 140 million the previous year, reflecting the accelerating shift in sports consumption. The final was broadcast in 194 countries across 71 broadcasters.',
    author: 'Carlos Fernandez',
    publishedAt: '2026-05-17T07:30:00Z',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    category: 'sports',
    source: { name: 'Sports World' },
  },
  {
    id: 10,
    title: 'Los Angeles 2028 Olympics: Venues Revealed in Stunning Showcase',
    description:
      'Organisers unveiled the full venue map for the 2028 Los Angeles Olympics, featuring a mix of iconic sites and ambitious new construction.',
    content:
      'The LA28 organising committee staged a lavish presentation at the Coliseum to unveil the complete venue plan for the 2028 Olympic Games. The plan features 32 competition venues across greater Los Angeles, including the refurbished Rose Bowl for football, SoFi Stadium for athletics, and a new aquatics centre in Long Beach.\n\nThe Olympic Village, designed by a consortium of renowned architects, will house 16,000 athletes and officials in a purpose-built complex on the former Hollywood Park site. After the Games, the village will be converted into 5,000 affordable housing units — a commitment the committee framed as the "Olympic Legacy" project.\n\nTicket sales open in August 2026 with prices ranging from $25 for preliminary rounds to $2,500 for the 100-metre final. Transport authorities announced an expanded metro network that will be operational before the Games begin.',
    author: 'Jessica Park',
    publishedAt: '2026-05-16T09:00:00Z',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    category: 'sports',
    source: { name: 'Sports World' },
  },
  {
    id: 11,
    title: 'Roland Garros: Iga Swiatek Claims Fifth French Open Title',
    description:
      'The Polish world number one delivered a dominant display to claim her fifth Roland Garros crown, cementing her place among the clay-court greats.',
    content:
      'Iga Swiatek added another chapter to her extraordinary French Open story with a 6-2, 7-5 victory in the final, claiming a fifth Roland Garros title in six years. The match, played under the iconic roof of Court Philippe-Chatrier, took 87 minutes and showcased the world number one at the absolute peak of her powers.\n\nSwiatek\'s topspin forehand proved impossible to handle throughout the fortnight. She dropped just one set across seven matches and conceded a total of only 34 games — the lowest tally since Steffi Graf in 1988.\n\n"I feel like this court is my home," Swiatek said during the trophy presentation. "Every year I come back I want to prove something different to myself." With 28 Grand Slam titles now on her trophy shelf, comparisons with the all-time greats of the game are no longer premature.',
    author: 'Antoine Leroy',
    publishedAt: '2026-05-15T18:00:00Z',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
    category: 'sports',
    source: { name: 'Tennis Weekly' },
  },
  {
    id: 12,
    title: 'NBA Finals Preview: Thunder vs Celtics Set for Epic Showdown',
    description:
      'The Oklahoma City Thunder and Boston Celtics have both sealed their conference finals in six games, setting up what analysts call a dream matchup.',
    content:
      'The stage is set for what many are calling the most eagerly anticipated NBA Finals in a decade. The Oklahoma City Thunder, led by second-year sensation Victor Wembanyama, will face the veteran-laden Boston Celtics starting Friday at the TD Garden.\n\nOKC arrives on the back of a dominant Western Conference run, averaging 126 points per game and surrendering the fewest points in the league during the postseason. Boston\'s defensive intensity and playoff experience make them many analysts\' pick despite being the slight underdogs in the early betting markets.\n\nAll six games of the series are expected to sell out within minutes of ticket release. NBC Sports, which holds the broadcast rights, is projecting a combined viewership of over 200 million across the series — which would be the highest since the 2016 Golden State-Cleveland matchup.',
    author: 'Malik Johnson',
    publishedAt: '2026-05-14T14:00:00Z',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    category: 'sports',
    source: { name: 'Hoops Insider' },
  },

  // ─── BUSINESS ──────────────────────────────────────────────────────────────
  {
    id: 13,
    title: 'Stock Markets Surge as Inflation Drops to Two-Year Low',
    description:
      'Wall Street celebrated its best week in six months after fresh data showed consumer prices cooling faster than economists had predicted.',
    content:
      'US stock markets surged to record highs Friday after the Bureau of Labor Statistics reported that the Consumer Price Index rose just 2.1% year-on-year in April — the lowest reading in two years and comfortably within the Federal Reserve\'s 2% target range.\n\nThe S&P 500 jumped 2.4%, the Dow Jones Industrial Average gained 1.9%, and the Nasdaq Composite added 3.1%. Technology stocks led the rally, with the sector posting its best weekly performance since November 2024.\n\nThe cooling inflation data fuelled expectations that the Federal Reserve will begin cutting interest rates as early as July. Fed Chair commentary scheduled for next week is now the market\'s most watched event. Economists at JPMorgan revised their year-end S&P 500 target upward by 8%, citing the improved macro backdrop.',
    author: 'Rachel Goldman',
    publishedAt: '2026-05-17T15:00:00Z',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    category: 'business',
    source: { name: 'Financial Times' },
  },
  {
    id: 14,
    title: 'Electric Vehicle Sales Overtake Petrol Cars in Europe for First Time',
    description:
      'For the first time in automotive history, electric vehicles outsold internal combustion engine cars across the European Union in a single quarter.',
    content:
      'New registration data from the European Automobile Manufacturers Association shows that battery electric vehicles accounted for 51.3% of all new car sales across the EU in Q1 2026 — the first time EVs have achieved majority market share in any major global region.\n\nThe milestone reflects the combined effect of tightened emissions regulations, expanded charging infrastructure, and a new generation of affordable EV models priced below €25,000. Germany and France led the shift, while Poland and Hungary still show petrol dominance outside major cities.\n\nThe figures triggered a sharp reaction in oil markets, with Brent crude falling 4.2% to its lowest level since 2021 on concerns about long-term demand destruction. Legacy automakers saw mixed reactions — Volkswagen and Renault rallied while Ford\'s European arm fell on concerns about its slower electrification timeline.',
    author: 'Hannah Weber',
    publishedAt: '2026-05-16T08:30:00Z',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    category: 'business',
    source: { name: 'Auto & Business Review' },
  },
  {
    id: 15,
    title: 'Amazon Acquires Logistics Giant for $18 Billion in Biggest Deal of 2026',
    description:
      'Amazon has agreed to acquire XPO Logistics\' last-mile delivery division in a deal that will give it direct control over delivery in 40 countries.',
    content:
      'Amazon announced Monday it has agreed to acquire the last-mile delivery division of XPO Logistics for $18 billion in cash and stock — the largest deal in Amazon\'s history and the biggest corporate acquisition globally so far this year.\n\nThe transaction gives Amazon direct ownership of 45,000 delivery vehicles, 12,000 distribution points, and existing delivery relationships in 40 countries across Europe, Asia-Pacific, and Latin America. The deal is expected to close in Q4 2026, pending regulatory approval.\n\nAmazon\'s logistics head said the acquisition will allow delivery windows as tight as two hours to be extended across all metropolitan areas in the acquired network by the end of 2027. Analysts estimate the move could reduce Amazon\'s per-package delivery cost by up to 22%, significantly widening its margin advantage over retail competitors.',
    author: 'Tom Bradley',
    publishedAt: '2026-05-15T11:00:00Z',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'business',
    source: { name: 'Business Insider' },
  },
  {
    id: 16,
    title: 'Apple Reports Record Q2 Revenue of $142 Billion, Services Lead Growth',
    description:
      'Apple\'s second quarter results exceeded every analyst estimate, driven by a 34% surge in services revenue that now contributes 28% of total income.',
    content:
      'Apple Inc. reported second-quarter revenue of $142.3 billion Thursday, surpassing Wall Street\'s consensus estimate of $136 billion by a significant margin. Net income came in at $38.1 billion, or $2.51 per diluted share.\n\nThe standout performer was the services segment — encompassing the App Store, Apple Music, iCloud, Apple TV+, and Apple Pay — which grew 34% year-on-year to $39.8 billion, the fastest growth rate for the division in five years. CEO Tim Cook attributed the acceleration to the global rollout of Apple Intelligence features and a record number of paid subscriptions crossing 1.2 billion for the first time.\n\nHardware revenue remained healthy, with iPhone sales of $58 billion broadly flat year-on-year while Mac sales jumped 18% on the back of strong M4 Pro MacBook demand. Apple shares rose 6.2% in after-hours trading following the earnings call.',
    author: 'Daniel Cho',
    publishedAt: '2026-05-14T20:00:00Z',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    category: 'business',
    source: { name: 'MarketWatch' },
  },

  // ─── ENTERTAINMENT ─────────────────────────────────────────────────────────
  {
    id: 17,
    title: 'Cannes 2026: Full List of Award Winners and Red Carpet Highlights',
    description:
      'The world\'s most prestigious film festival wrapped up with surprising upsets and standing ovations for debut directors from three continents.',
    content:
      'The 79th Cannes Film Festival concluded Saturday night with the Palme d\'Or awarded to Ifeoma Chukwu\'s debut feature "Saltwater Season" — a story of a fishing community on the Nigerian delta coping with the dual pressures of climate change and political corruption. The award represents only the third time a debut director has won the festival\'s top prize.\n\nThe Grand Prix went to South Korean director Park Ji-young for "Borrowed Light," while the Best Director award recognised Lucia Moretti of Italy for her striking adaptation of Italo Calvino\'s "Invisible Cities."\n\nThe red carpet saw its share of memorable moments, with Zendaya, Cate Blanchett, and a resurgent Johnny Depp — present for his French production "Les Fantômes" — drawing the largest crowds in recent memory. Festival president Juliette Binoche described the year\'s selection as "the most geographically diverse and politically urgent programme in the festival\'s history."',
    author: 'Claire Moreau',
    publishedAt: '2026-05-17T19:00:00Z',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
    category: 'entertainment',
    source: { name: 'Arts & Culture Desk' },
  },
  {
    id: 18,
    title: 'Netflix Surpasses 400 Million Subscribers Following Crackdown Success',
    description:
      'Netflix reported 400 million paid subscribers in its latest earnings — up from 260 million two years ago — crediting password-sharing enforcement and ad-supported tier.',
    content:
      'Netflix announced it crossed 400 million paid subscribers globally for the first time, a milestone that would have seemed impossible during the subscriber slump of 2022. The growth comes after an aggressive two-year strategy that included ending password sharing and launching a highly successful ad-supported tier priced at $6.99 per month.\n\nThe ad-supported plan now accounts for 38% of new subscriber sign-ups globally and has attracted blue-chip advertisers willing to pay premium CPMs for the platform\'s engaged, verified audience.\n\nContent investment has also escalated, with Netflix committing $24 billion to original programming in 2026 — up from $17 billion in 2023. The company\'s recent slate has delivered several cultural phenomena, with the second season of "The Diplomat" and the historical epic "Medici: Blood and Gold" both generating significant awards season buzz.',
    author: 'Sofia Reyes',
    publishedAt: '2026-05-16T12:00:00Z',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
    category: 'entertainment',
    source: { name: 'Entertainment Weekly' },
  },
  {
    id: 19,
    title: 'Beyoncé\'s "Renaissance Tour II" Breaks All-Time Concert Revenue Record',
    description:
      'With 85 sold-out shows across 30 countries, Beyoncé\'s latest world tour has grossed $2.8 billion — more than any concert tour in history.',
    content:
      'Beyoncé\'s Renaissance Tour II officially became the highest-grossing concert tour of all time after its final night at London\'s Wembley Stadium, where 90,000 fans witnessed a three-hour production widely described by critics as a sensory landmark in live music.\n\nThe tour grossed $2.8 billion across 85 shows, surpassing Taylor Swift\'s Eras Tour record of $2.08 billion. The production employed over 10,000 people across staging, sound, lighting, and logistics, making it the largest touring operation in music history.\n\nBeyoncé used the closing night to announce the release of a visual album companion to "Renaissance Act III," due on June 21st. Streaming pre-save numbers broke records within hours of the announcement, with Spotify reporting 14 million saves in the first 24 hours — a new platform record.',
    author: 'Marcus Williams',
    publishedAt: '2026-05-15T22:00:00Z',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    category: 'entertainment',
    source: { name: 'Rolling Stone' },
  },
  {
    id: 20,
    title: 'Oscar Nominations 2027: "Saltwater Season" Leads with 11 Nods',
    description:
      'The Academy announced nominations with the Nigerian debut feature leading the field, alongside four major studio films and two Netflix originals.',
    content:
      'The Academy of Motion Picture Arts and Sciences unveiled nominations for the 99th Academy Awards, with Ifeoma Chukwu\'s "Saltwater Season" leading all films with 11 nominations including Best Picture, Best Director, Best Original Screenplay, and Best Actress.\n\nClose behind with nine nominations each are Steven Spielberg\'s sci-fi epic "Meridian" and the Netflix family drama "What Remains," which has been the surprise critical darling of the season.\n\nThis year\'s acting categories are notable for their diversity — of the 20 acting nominees, 13 are first-time nominees and the list includes actors from Nigeria, South Korea, Brazil, and Pakistan. The ceremony will be held at the Dolby Theatre in Los Angeles on March 15th, 2027, hosted by John Mulaney and Quinta Brunson.',
    author: 'Lisa Zhang',
    publishedAt: '2026-05-13T15:00:00Z',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b92543f?w=800&q=80',
    category: 'entertainment',
    source: { name: 'Variety' },
  },

  // ─── SCIENCE ───────────────────────────────────────────────────────────────
  {
    id: 21,
    title: 'NASA Artemis Crew Successfully Lands Near Lunar South Pole',
    description:
      'Four astronauts touched down near the Shackleton Crater, beginning humanity\'s first crewed mission to the Moon\'s southern region and the first lunar landing in 54 years.',
    content:
      'NASA\'s Artemis IV mission achieved a historic lunar landing Saturday as the Starship HLS lander touched down approximately 1.2 kilometres from the rim of Shackleton Crater at the Moon\'s south pole — the first humans to set foot on the Moon since Apollo 17 in 1972.\n\nMission commander Colonel Ayesha Rahman became the first woman and first person of South Asian descent to walk on the lunar surface. Joining her are mission specialist Dr. Carlos Rivera, geologist Dr. Yuki Tanaka, and pilot Major James Cole.\n\nThe crew will spend 14 days at the lunar surface, conducting geological surveys and deploying the first elements of the Lunar Gateway surface infrastructure. Initial soil samples confirm the presence of water ice in the permanently shadowed regions — a critical resource for any future long-term lunar presence.',
    author: 'Dr. Neil Okafor',
    publishedAt: '2026-05-17T03:00:00Z',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    category: 'science',
    source: { name: 'Science & Space Today' },
  },
  {
    id: 22,
    title: 'James Webb Telescope Discovers Exoplanet with Liquid Ocean and Oxygen Atmosphere',
    description:
      'Astronomers using the James Webb Space Telescope have detected water vapour, oxygen, and methane simultaneously in the atmosphere of a planet 124 light-years away.',
    content:
      'In what many scientists are calling the most significant astronomical discovery of the century, NASA\'s James Webb Space Telescope has detected simultaneous signatures of water vapour, free oxygen, and methane in the atmosphere of the exoplanet Kepler-452f — a finding that biosignature researchers have long described as the "holy grail" of extraterrestrial life detection.\n\nThe planet, orbiting a sun-like star 124 light-years from Earth in the constellation Cygnus, is approximately 1.4 times the size of Earth and sits comfortably within the star\'s habitable zone. Spectroscopic analysis of starlight filtered through the atmosphere during 22 transit observations between 2024 and 2026 revealed the unmistakable chemical fingerprints.\n\nThe scientific community has responded with a combination of excitement and rigorous caution. The findings have been independently verified by teams in Europe and Japan but require further confirmation before conclusions about biological activity can be drawn. A dedicated follow-up mission is already under discussion.',
    author: 'Prof. Elena Vasquez',
    publishedAt: '2026-05-16T17:00:00Z',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80',
    category: 'science',
    source: { name: 'Nature Astronomy' },
  },
  {
    id: 23,
    title: 'mRNA Cancer Vaccine Enters Phase III Trials with 91% Success Rate',
    description:
      'A personalised mRNA cancer vaccine developed by Moderna and Merck has achieved a 91% reduction in recurrence risk in Phase II trials for melanoma.',
    content:
      'Moderna and Merck announced the advancement of their personalised mRNA cancer vaccine mRNA-4157/V940 into Phase III clinical trials, following extraordinary Phase II results showing a 91% reduction in melanoma recurrence risk when combined with Keytruda immunotherapy.\n\nThe vaccine works by analysing each patient\'s tumour genetics and manufacturing a personalised mRNA sequence that trains the immune system to recognise and destroy that specific cancer\'s unique protein markers. Because it is tailored to the individual\'s tumour, it effectively creates a bespoke weapon against cells that have already demonstrated the ability to evade standard immune surveillance.\n\nThe Phase III trial will enrol 10,000 participants across 200 sites in 25 countries and is expected to report interim results in 2028. Analysts estimate that if Phase III confirms Phase II results, the treatment could be available within five years for melanoma and potentially extended to lung, colorectal, and pancreatic cancers within a decade.',
    author: 'Dr. Amanda Torres',
    publishedAt: '2026-05-14T11:00:00Z',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    category: 'science',
    source: { name: 'Medical Science Today' },
  },
  {
    id: 24,
    title: 'Ocean Plastic Collection Hits 100,000-Tonne Milestone After Five Years',
    description:
      'The Ocean Cleanup project celebrated removing 100,000 metric tonnes of plastic from the Pacific Ocean, ahead of its projected 2030 milestone.',
    content:
      'The Ocean Cleanup organisation announced it has removed 100,000 metric tonnes of plastic from the Great Pacific Garbage Patch — a milestone the project initially projected for 2030 that has arrived four years early thanks to a fleet of 60 autonomous collection systems operating simultaneously.\n\nThe recovered plastic, which ranges from large fishing nets to microplastic particles, is processed at partner facilities in South Korea and the Netherlands where it is shredded, pelletised, and sold to manufacturers producing consumer goods. Revenue from plastic sales now funds approximately 40% of the organisation\'s operating costs.\n\nBoyan Slat, the project\'s founder, called the milestone "proof that large-scale cleanup is technically and economically viable." He announced plans to deploy a second-generation fleet with three times the collection capacity by 2028, targeting the Indian Ocean and Mediterranean Sea as the next priorities.',
    author: 'Emma Jensen',
    publishedAt: '2026-05-13T09:00:00Z',
    image: 'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?w=800&q=80',
    category: 'science',
    source: { name: 'Environmental Science' },
  },

  // ─── HEALTH ────────────────────────────────────────────────────────────────
  {
    id: 25,
    title: 'New Study Links 30 Minutes of Daily Walking to 40% Lower Dementia Risk',
    description:
      'A 20-year longitudinal study of 60,000 adults found that a modest daily walk dramatically reduces the risk of developing Alzheimer\'s and related dementias.',
    content:
      'A landmark 20-year study tracking 60,000 adults aged 40-70 across the United Kingdom, United States, and Australia has found that just 30 minutes of brisk walking daily is associated with a 40% reduction in the risk of developing Alzheimer\'s disease and other dementias, even after adjusting for genetic risk factors.\n\nThe research, published in JAMA Neurology, found the protective effect was observable within five years of beginning a regular walking routine and was consistent across all age groups, genders, and body mass categories. Participants who achieved 7,500 or more daily steps showed the strongest protective association.\n\nNeuroscientists believe the mechanism involves both improved cerebrovascular blood flow and the stimulation of brain-derived neurotrophic factor (BDNF), a protein that promotes the growth and maintenance of neurons. The findings have prompted the WHO to update its physical activity guidelines, adding a specific recommendation for adults over 50 to prioritise at least 30 minutes of moderate walking daily.',
    author: 'Dr. Robert Singh',
    publishedAt: '2026-05-17T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80',
    category: 'health',
    source: { name: 'Health & Wellness Today' },
  },
  {
    id: 26,
    title: 'Scientists Discover New Class of Antibiotics That Evade Drug Resistance',
    description:
      'Researchers have identified a novel family of antibiotics that attacks bacteria through a previously unknown mechanism, making resistance evolution extremely unlikely.',
    content:
      'Scientists at the Broad Institute and Uppsala University have announced the discovery of a new class of antibiotics called odilorhabdins, which kill bacteria by binding to an entirely novel site on the bacterial ribosome — a target that bacteria have never before encountered and for which no pre-existing resistance mechanisms exist.\n\nLaboratory testing showed the new compounds are effective against 32 of the most dangerous antibiotic-resistant bacterial strains classified by the WHO as "critical priority" pathogens, including carbapenem-resistant Klebsiella pneumoniae and methicillin-resistant Staphylococcus aureus (MRSA).\n\nThe lead compound, OD-58, is expected to enter human clinical trials in late 2027. Experts in infectious disease called the development "the most significant antibiotic discovery since the introduction of vancomycin in 1958," noting that no new antibiotic class has successfully reached clinical use in over 30 years.',
    author: 'Dr. Sophie Laurent',
    publishedAt: '2026-05-15T14:00:00Z',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    category: 'health',
    source: { name: 'Lancet' },
  },
  {
    id: 27,
    title: 'WHO Updates Global Mental Health Guidelines: Therapy Before Medication',
    description:
      'Revised WHO guidelines recommend psychotherapy and lifestyle interventions as first-line treatment for depression and anxiety before pharmaceutical options.',
    content:
      'The World Health Organisation has published revised global guidelines for the treatment of depression and anxiety disorders, recommending that psychotherapy and structured lifestyle interventions — including sleep optimisation, regular exercise, and social connection — should be offered as first-line treatment before pharmaceutical options are considered.\n\nThe guidance applies to mild and moderate cases, which account for the vast majority of global mental health burden. For severe cases, the guidelines continue to recommend a combination of medication and psychological treatment.\n\nThe revision reflects a growing body of evidence that cognitive-behavioural therapy (CBT) delivered in group formats and digital self-guided CBT apps achieve outcomes equivalent to medication for mild-moderate depression with substantially fewer side effects and at a fraction of the cost. The WHO simultaneously released an implementation framework to help low- and middle-income countries expand access to psychological care through community health worker training programmes.',
    author: 'Dr. Fatima Al-Rashid',
    publishedAt: '2026-05-14T08:00:00Z',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    category: 'health',
    source: { name: 'Global Health Review' },
  },
  {
    id: 28,
    title: 'Ultra-Processed Food Consumption Linked to Accelerated Biological Aging',
    description:
      'A new study of 100,000 adults found that diets high in ultra-processed foods accelerate biological aging by up to eight years compared to whole-food diets.',
    content:
      'A comprehensive study analysing the dietary habits and biological age markers of 100,000 adults across 12 countries has found that individuals who derive more than 40% of their calories from ultra-processed foods show DNA methylation patterns consistent with a biological age up to eight years older than their chronological age.\n\nBiological age — measured through epigenetic clocks that analyse chemical modifications to DNA — is considered a more accurate predictor of disease risk and longevity than calendar age. The study controlled for physical activity, smoking, alcohol consumption, socioeconomic status, and genetic factors.\n\nThe foods with the strongest associations with accelerated aging were carbonated soft drinks, packaged snacks with more than five additives, instant noodles, and reconstituted meat products. Conversely, a Mediterranean-style diet rich in vegetables, legumes, whole grains, and olive oil was associated with a biological age up to four years younger than chronological age.',
    author: 'Prof. Mario Oliveira',
    publishedAt: '2026-05-13T12:00:00Z',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    category: 'health',
    source: { name: 'Nutrition Science Journal' },
  },
]
