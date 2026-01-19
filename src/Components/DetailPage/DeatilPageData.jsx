const redsvg = (
  <svg
    class="custom-svg svgshowcard "
    width="402"
    height="424"
    viewBox="0 0 402 424"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="bg-path"
      d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
      stroke="#BE1E2D"
      stroke-width="3"
    />

    <path
      class="trapezoid-path"
      d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
      stroke="#BE1E2D"
      stroke-width="3"
    />
  </svg>
);

const bluesvg = (
  <svg
    class="custom-svg svgshowcard "
    width="402"
    height="424"
    viewBox="0 0 402 424"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="bg-path"
      d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
      stroke="#005E96"
      stroke-width="3"
    />

    <path
      class="trapezoid-path"
      d="M400.297 1.5L346.716 422.5H1.69531L53.3105 1.5H400.297Z"
      stroke="#005E96"
      stroke-width="3"
    />
  </svg>
);

const DetailsData = {
  badminton: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Badminton",
      bannertitle: "Badminton",
      bannerContent:
        "Fast-paced racquet sport that builds agility, reflexes, endurance and sharp tactical thinking skills.",
      banneroverlaycontent: "Badminton",
      backgroundClass: "badmintonbannerdetail",
    },

    SecondSectionDetail: {
      backgoundclass: "badminton",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Badminton Excellence",
      firstparagraphtext:
        "The Badminton Centre of Excellence at Gaudium Sportopia is led by India’s most successful badminton coach, Mr. Pullela Gopichand, Chief Indian National Coach with his experience shaping Olympic and world champions including P.V. Sindhu and Saina Nehwal. Empower the next generation of Indian badminton champions to rise and inspire on the global stage.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "BADMINTON",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Bhanu",
        },
        {
          sport: "BADMINTON",
          role: "COACH",
          img: "/images/homepage/thestrengthimagetwo.png",
          name: "Shaik Babulal",
        },
        {
          sport: "BADMINTON",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Sanupha Rani",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "World-class badminton facilities designed to inspire excellence, precision training and championship-level performance.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Safe",
          title: "flooring",
          description:
            "MFMA- (maple flooring manufacturers association) Approved Maple woods used for flooring. It gives proper, equal movements, bounce while playing and avoid knee injuries.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BWF-Standard Courts and",
          title: "Lighting",
          description:
            "International-standard courts with professional lighting ensure optimal visibility and match-ready playing conditions at all times.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready",
          title: "Arena",
          description:
            "High-capacity spectator galleries create an authentic competitive atmosphere, preparing athletes for high-pressure tournament environments.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Athlete Comfort and",
          title: "Safety",
          description:
            "Secure lockers, dedicated changing rooms, and outdoor shower facilities support hygiene, recovery, and seamless training transitions.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "High-Performance Training",
          title: "Support",
          description:
            "Professional practice equipment, shuttle machines, rebound nets, and well-placed hydration stations enable focused, efficient, and intense training sessions.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Badminton",
      headingSecond: "Training Matters",
      description:
        "Explore numerous benefits of playing badminton and how it helps every aspect of the player’s lifestyle.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds exceptional cardiovascular endurance through combined aerobic and anaerobic training.",
            "Develops balanced upper- and lower-body strength with sport-specific movements.",
            "Enhances agility, speed, and quick directional changes.",
            "Improves flexibility and range of motion through dynamic stroke mechanics.",
            "Strengthens core stability and overall body control.",
            "Boosts coordination using bilateral movement patterns.",
            "Promotes proper posture and healthy spinal alignment.",
            "Supports bone density development in a low-impact training environment.",
            "Improves metabolism and healthy body composition.",
            "Reduces risk of obesity and lifestyle-related health issues.",
            "Encourages lifelong fitness habits and active living.",
          ],
        },
        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Enhances neural pathway development through complex, coordinated movement patterns.",
            "Improves concentration through sustained focus during training and match play.",
            "Develops strategic thinking through tactical shot selection and gameplay decisions.",
            "Strengthens spatial intelligence via court awareness and positioning.",
            "Increases processing speed through rapid decision-making during rallies.",
            "Builds time-management skills through match pacing and game control.",
            "Enhances memory by recalling strategies, drills, and training sequences.",
            "Encourages mathematical thinking through scoring, angles, and game strategies.",
            "Develops effective goal-setting and achievement planning skills.",
            "Sharpens focus by training the mind to eliminate external distractions.",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds strong self-discipline through structured, demanding training routines.",
            "Enhances mental toughness by navigating high-pressure match situations.",
            "Fosters intrinsic motivation and self-driven pursuit of excellence.",
            "Improves emotional regulation using controlled breathing and focused play.",
            "Boosts self-confidence through measurable skill and performance progression.",
            "Develops performance routines transferable to academics and life challenges.",
            "Reduces stress through the rhythmic, meditative nature of play.",
            "Improves sleep quality, supporting emotional and cognitive well-being.",
            "Lowers anxiety through breathing control and focused movement.",
            "Strengthens resilience by overcoming setbacks and performance plateaus.",
            "Encourages healthy perfectionism and attention to technical detail.",
          ],
        },
        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within an individually competitive sport.",
            "Develops strong training partnerships and supportive peer relationships.",
            "Enhances sportsmanship through match play and competitive etiquette.",
            "Improves communication skills via interaction with coaches and fellow athletes.",
            "Encourages respect for shared spaces, rules, and facility protocols.",
            "Teaches how individual performance contributes to collective team outcomes.",
            "Develops healthy, balanced competitive attitudes.",
            "Trains athletes to give and receive constructive feedback.",
            "Builds connections across different age groups and skill levels.",
            "Provides exposure to tournament operations through participation and volunteering.",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Encourages lifelong participation in a sport accessible across all ages.",
            "Builds understanding of physical conditioning transferable to other activities.",
            "Develops advanced knowledge of hydration and performance nutrition.",
            "Instills goal-setting habits and appreciation for progressive achievement.",
            "Strengthens time-management skills balancing training and academics.",
            "Establishes disciplined morning routines through early training sessions.",
            "Teaches importance of rest, recovery, and injury prevention.",
            "Opens potential educational opportunities through badminton scholarships.",
            "Creates career pathways in competitive play, coaching, and sports management.",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "The Gaudium Annual Badminton Championship 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "ISSO Badminton National 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "The Gaudium Junior Badminton Championship 2023.",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our badminton athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the badminton champions whose achievements define our excellence.",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject3.png",
          title: "CHAARVI",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "/images/homepage/showcaseproject4.png",
          title: "ARCHITA",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 3,
          image: "/images/homepage/showcaseproject4.png",
          title: "ANVITHA",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 4,
          image: "/images/homepage/showcaseproject4.png",
          title: "SRAVAS",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 5,
          image: "/images/homepage/showcaseproject4.png",
          title: "ASHMIT",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 6,
          image: "/images/homepage/showcaseproject4.png",
          title: "AARAV",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 7,
          image: "/images/homepage/showcaseproject4.png",
          title: "SHANKAR",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
        {
          id: 8,
          image: "/images/homepage/showcaseproject4.png",
          title: "ARYAN",
          description: "BHEL Cluster Tournament",
          svgCard: bluesvg,
        },
        {
          id: 9,
          image: "/images/homepage/showcaseproject4.png",
          title: "GUNA",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
        {
          id: 10,
          image: "/images/homepage/showcaseproject4.png",
          title: "SHARAN",
          description: "BHEL Cluster Tournament",
          svgCard: bluesvg,
        },
        {
          id: 11,
          image: "/images/homepage/showcaseproject4.png",
          title: "AYAAN",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
      ],
    },
  },

  basketball: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Basketball",
      bannertitle: "Basketball",
      bannerContent:
        "Dynamic team sport focusing on speed, coordination, strategy, and high-intensity athletic performance levels.",
      banneroverlaycontent: "Basketball",
      backgroundClass: "basketballbg",
    },

    SecondSectionDetail: {
      backgoundclass: "basketball",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Basketball Excellence",
      firstparagraphtext:
        "The Basketball Centre of Excellence at Gaudium Sportopia delivers elite training in world-class facilities, building skill, strength, agility and endurance. With uncompromising standards and professional coaching, young athletes are prepared for national and international competition, inspired by India’s basketball trailblazers and empowered to rise as the next generation of champions.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "basketball",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Karnika choubey",
        },
        {
          sport: "basketball",
          role: "COACH",
          img: "/images/homepage/thestrengthimagetwo.png",
          name: "Abhijeet",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "World-class basketball facilities designed to inspire teamwork, skill mastery, intensity and championship-level performance daily.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "FIBA-Standard Indoor and ",
          title: "Outdoor Courts",
          description:
            "Indoor wooden court with cushioned flooring and an outdoor synthetic court, both built for high-performance play.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "Professional Match",
          title: "Environment",
          description:
            "High-capacity spectator gallery creates a competitive, game-day atmosphere for players.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Athlete Comfort and",
          title: "Facilities",
          description:
            "Dedicated changing rooms, secure lockers, and outdoor showers support hygiene, recovery, and smooth transitions.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Elite Training",
          title: "Equipment",
          description:
            "Professional shooting machines, rebound nets, and competition-grade equipment enable focused skill development.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Lighting & Hydration ",
          title: "Support",
          description:
            "Advanced court lighting and strategically placed hydration stations ensure optimal training conditions at all times.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Basketball",
      headingSecond: "Training Matters",
      description:
        "Discover the physical, mental, and lifestyle benefits of basketball, building skills, fitness, teamwork and lifelong athletic development.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds exceptional cardiovascular endurance through aerobic and anaerobic basketball training.",
            "Develops balanced strength across upper and lower body muscle groups.",
            "Enhances agility, speed, and explosive movement patterns.",
            "Improves flexibility and range of motion through shooting, dribbling, and defensive mechanics.",
            "Strengthens core stability for balance and body control.",
            "Improves coordination through bilateral movement and ball-handling skills.",
            "Promotes proper posture and spinal alignment through correct playing techniques.",
            "Supports healthy bone density through regular, impact-controlled activity.",
            "Improves metabolism and overall body composition.",
            "Reduces risk of childhood obesity and lifestyle-related conditions.",
            "Encourages lifelong fitness habits and active living.",
          ],
        },
        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Enhances neural pathway development through complex, coordinated movement patterns.",
            "Improves concentration through sustained focus during games and drills.",
            "Develops strategic thinking through gameplay, positioning, and shot selection.",
            "Strengthens spatial intelligence through court awareness and movement anticipation.",
            "Increases processing speed through rapid decision-making during plays.",
            "Builds time-management skills through understanding game pacing and transitions.",
            "Enhances memory by recalling plays, strategies, and training sequences.",
            "Encourages mathematical thinking through scoring systems and tactical calculations.",
            "Develops effective goal-setting and achievement planning skills.",
            "Sharpens focus by training the mind to block external distractions.",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds strong self-discipline through structured and demanding training schedules.",
            "Enhances mental toughness by performing under high-pressure game situations.",
            "Encourages intrinsic motivation and self-driven pursuit of excellence.",
            "Improves emotional regulation through controlled breathing and focused gameplay.",
            "Boosts self-confidence through measurable skill development and performance improvement.",
            "Develops performance routines transferable to academics and life challenges.",
            "Reduces stress through the rhythmic, focused flow of play.",
            "Improves sleep quality supporting emotional balance and cognitive functioning.",
            "Lowers anxiety through breathing control and mental focus techniques.",
            "Strengthens resilience by overcoming setbacks and performance plateaus.",
            "Encourages healthy perfectionism and attention to technical detail.",
          ],
        },
        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within a highly collaborative sport.",
            "Develops strong training partnerships and supportive peer relationships.",
            "Enhances sportsmanship through competition, rules, and game etiquette.",
            "Improves communication skills through regular interaction with coaches and teammates.",
            "Encourages respect for shared spaces, rules, and facility protocols.",
            "Teaches how individual performance contributes to collective team success.",
            "Develops healthy, balanced competitive attitudes.",
            "Trains athletes to give and receive constructive feedback.",
            "Builds connections across age groups within basketball programs.",
            "Provides exposure to tournament operations through participation and volunteering.",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Encourages lifelong participation in basketball across all age groups.",
            "Builds understanding of physical conditioning transferable to other sports.",
            "Develops advanced knowledge of hydration and performance nutrition.",
            "Instills goal-setting habits and appreciation for progressive achievement.",
            "Strengthens time-management skills balancing training and academics.",
            "Establishes disciplined routines through regular training schedules.",
            "Teaches importance of rest, recovery, and injury prevention.",
            "Opens potential educational opportunities through basketball scholarships.",
            "Creates career pathways in competitive basketball, coaching, and sports management.",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "BHEL Cluster 2024.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "ISSO U-14 & 19 National 2024.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "ISSO U-11 National 2024.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 04",
          eventcontent: "Viper Cup 2024.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 05",
          eventcontent: "Birla Open Mind Tournament U-14 2024.",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our basketball athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the basketball champions whose achievements define our excellence.",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject3.png",
          title: "CHAARVI",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "/images/homepage/showcaseproject4.png",
          title: "ARCHITA",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 3,
          image: "/images/homepage/showcaseproject4.png",
          title: "ANVITHA",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 4,
          image: "/images/homepage/showcaseproject4.png",
          title: "SRAVAS",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 5,
          image: "/images/homepage/showcaseproject4.png",
          title: "ASHMIT",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 6,
          image: "/images/homepage/showcaseproject4.png",
          title: "AARAV",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 7,
          image: "/images/homepage/showcaseproject4.png",
          title: "SHANKAR",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
        {
          id: 8,
          image: "/images/homepage/showcaseproject4.png",
          title: "ARYAN",
          description: "BHEL Cluster Tournament",
          svgCard: bluesvg,
        },
        {
          id: 9,
          image: "/images/homepage/showcaseproject4.png",
          title: "GUNA",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
        {
          id: 10,
          image: "/images/homepage/showcaseproject4.png",
          title: "SHARAN",
          description: "BHEL Cluster Tournament",
          svgCard: bluesvg,
        },
        {
          id: 11,
          image: "/images/homepage/showcaseproject4.png",
          title: "AYAAN",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
      ],
    },
  },

  fencing: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Fencing",
      bannertitle: "Fencing",
      bannerContent:
        "Precision-based combat sport developing lightning reflexes, strategy, discipline and intense mental focus skills.",
      banneroverlaycontent: "Fencing",
      backgroundClass: "fencingbg",
    },

    SecondSectionDetail: {
      backgoundclass: "fencing",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "fencing  Excellence",
      firstparagraphtext:
        "The Fencing Centre of Excellence at Gaudium Sportopia delivers elite training in world-class facilities, developing agility, strength and mental sharpness. Guided by uncompromising standards and expert coaching, young athletes are prepared for national and international success, inspired by India’s rising fencing stars and empowered to emerge as the next generation of champions on the global stage.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "fencing",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Smita",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "Precision-designed fencing facilities that inspire focus, technique and competitive excellence in every bout.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/fencing/fencing-arena.jpg",
          sport: "State-of-the-Art",
          title: "Fencing Arena",
          description:
            "Federation-aligned arena with age-appropriate equipment designed for safe, progressive, and high-performance fencing training.",
        },
        {
          id: 2,
          image: "/images/detail-page/fencing/fencing-flooring.jpg",
          sport: "Professional Flooring &",
          title: "Training Aids",
          description:
            "Maple MAT-finish flooring with double cushioning and mirrored walls support technique refinement, safety, and optimal movement.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready",
          title: "Environment",
          description:
            "High-capacity spectator gallery simulates real match conditions, preparing fencers for competitive pressure.",
        },
        {
          id: 4,
          image: "/images/detail-page/fencing/fencing-comfort.jpg",
          sport: "Athlete Comfort &",
          title: "Support",
          description:
            "Secure lockers, dedicated changing rooms, proper lighting, and hydration monitoring ensure seamless, focused training sessions.",
        },
        {
          id: 5,
          image: "/images/detail-page/fencing/fencing-equipment.jpg",
          sport: "Elite Equipment & Cross-Training ",
          title: "Access",
          description:
            "Competition-grade fencing gear and access to High-Performance Centres enable comprehensive skill development and conditioning.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Fencing",
      headingSecond: "Training Matters",
      description:
        "Discover the physical, mental and lifestyle benefits of Fencing, building skills, fitness, teamwork and lifelong athletic development.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds exceptional strength through bodyweight conditioning and fencing-specific drills.",
            "Enhances flexibility and range of motion through regular stretching and technique practice.",
            "Develops superior core strength for balance, stability, and controlled movement.",
            "Improves coordination through precise footwork and blade-control patterns.",
            "Promotes proper posture and healthy spinal alignment through correct fencing techniques.",
            "Supports healthy bone density in a low-impact training environment.",
            "Improves metabolic efficiency and overall body composition.",
            "Reduces risk of childhood obesity and lifestyle-related health conditions.",
            "Encourages lifelong fitness habits and active living.",
          ],
        },
        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Enhances neural pathway development through complex, coordinated movement patterns.",
            "Improves concentration through sustained focus during fencing bouts.",
            "Develops strategic thinking through tactical bout play and technique selection.",
            "Strengthens spatial intelligence through piste awareness and positioning.",
            "Increases processing speed through rapid decision-making during bouts.",
            "Builds time-management skills through understanding bout pacing and timing.",
            "Enhances memory by recalling strategies, combinations, and training sequences.",
            "Encourages mathematical thinking through scoring, timing, and tactical calculations.",
            "Develops effective goal-setting and achievement planning skills.",
            "Sharpens focus by training the mind to block external distractions.",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds strong self-discipline through structured, demanding training schedules.",
            "Enhances mental toughness by adapting to challenging training protocols.",
            "Encourages intrinsic motivation and self-driven pursuit of excellence.",
            "Improves emotional regulation through controlled breathing and focused execution.",
            "Boosts self-confidence through measurable skill and performance progression.",
            "Develops performance routines transferable to academics and life challenges.",
            "Reduces stress through the rhythmic, meditative nature of fencing techniques.",
            "Improves sleep quality supporting emotional balance and cognitive functioning.",
            "Lowers anxiety through breathing control and mental focus techniques.",
            "Strengthens resilience by overcoming setbacks and performance plateaus.",
            "Encourages healthy perfectionism and attention to technical detail.",
          ],
        },
        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within an individually competitive sport.",
            "Develops strong training partnerships and supportive peer relationships.",
            "Enhances sportsmanship through competition and proper bout etiquette.",
            "Improves communication skills through interaction with coaches and teammates.",
            "Encourages respect for shared spaces and facility protocols.",
            "Teaches how individual performance contributes to overall team outcomes.",
            "Develops healthy, balanced competitive attitudes.",
            "Trains athletes to give and receive constructive feedback.",
            "Builds connections across age groups within fencing programs.",
            "Provides exposure to meet operations through participation and volunteering.",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Encourages lifelong participation in fencing across all age groups.",
            "Builds understanding of physical conditioning transferable to other sports.",
            "Develops advanced knowledge of hydration and performance nutrition.",
            "Instills goal-setting habits and appreciation for progressive achievement.",
            "Strengthens time-management skills balancing training and academics.",
            "Establishes disciplined routines through regular training schedules.",
            "Teaches importance of rest, recovery, and injury prevention.",
            "Opens potential educational opportunities through fencing scholarships.",
            "Creates career pathways in competitive fencing, coaching, and sports management.",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "State Championship HYD 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "The Gaudium Open fencing Tournament (2nd Edition).",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our Fencing athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the fencing champions whose achievements define our excellence.",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject3.png",
          title: "CHAARVI",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "/images/homepage/showcaseproject4.png",
          title: "ARCHITA",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 3,
          image: "/images/homepage/showcaseproject4.png",
          title: "ANVITHA",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 4,
          image: "/images/homepage/showcaseproject4.png",
          title: "SRAVAS",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 5,
          image: "/images/homepage/showcaseproject4.png",
          title: "ASHMIT",
          description: "ISSO National Badminton Championships",
          svgCard: redsvg,
        },
        {
          id: 6,
          image: "/images/homepage/showcaseproject4.png",
          title: "AARAV",
          description: "ISSO National Badminton Championships",
          svgCard: bluesvg,
        },
        {
          id: 7,
          image: "/images/homepage/showcaseproject4.png",
          title: "SHANKAR",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
        {
          id: 8,
          image: "/images/homepage/showcaseproject4.png",
          title: "ARYAN",
          description: "BHEL Cluster Tournament",
          svgCard: bluesvg,
        },
        {
          id: 9,
          image: "/images/homepage/showcaseproject4.png",
          title: "GUNA",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
        {
          id: 10,
          image: "/images/homepage/showcaseproject4.png",
          title: "SHARAN",
          description: "BHEL Cluster Tournament",
          svgCard: bluesvg,
        },
        {
          id: 11,
          image: "/images/homepage/showcaseproject4.png",
          title: "AYAAN",
          description: "BHEL Cluster Tournament",
          svgCard: redsvg,
        },
      ],
    },
  },

  gymnastics: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Gymnastics",
      bannertitle: "Gymnastics",
      bannerContent:
        "Foundation sport enhancing strength, flexibility, balance, coordination, body control and technical movement mastery.",
      banneroverlaycontent: "Gymnastics",
      backgroundClass: "gymnasticsbg",
    },

    SecondSectionDetail: {
      backgoundclass: "gymnastics",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Gymnastics Excellence",
      firstparagraphtext:
        "The Gymnastics Centre of Excellence at Gaudium Sportopia delivers elite training in world-class facilities, developing strength, flexibility, endurance, and precision. Inspired by India’s gymnastics pioneers and rising stars, our uncompromising standards and expert coaching prepare young athletes for national and international success which empower them to emerge as confident and competitive champions on the global stage.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "gymnastics",
          role: "MENTOR",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Manoj Rana",
        },
        {
          sport: "gymnastics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Sona K.B",
        },
        {
          sport: "gymnastics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Rithik Mishra",
        },
        {
          sport: "gymnastics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Rishabh Singh",
        },
        {
          sport: "gymnastics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Lilia padalka",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "State-of-the-art gymnastics facilities designed to inspire strength, precision, flexibility and confident performance at every level.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Olympic-Size FIG-Approved",
          title: "Arena",
          description:
            "A 21,500 sq. ft. state-of-the-art arena equipped with GYMNOVA and SPIETH apparatus, meeting FIG standards.",
        },
        {
          id: 2,
          image: "/images/detail-page/gymnastics/flooring-safety.jpg",
          sport: "High-Performance Flooring ",
          title: "and Safety",
          description:
            "Cushioned gymnastics flooring with 19 mm wooden pads ensures resilience, safety, and optimal performance.",
        },
        {
          id: 3,
          image: "/images/detail-page/gymnastics/competition-environment.jpg",
          sport: "Competition-Ready",
          title: "Environment",
          description:
            "Large spectator gallery simulates real competitive settings, preparing gymnasts for pressure situations.",
        },
        {
          id: 4,
          image: "/images/detail-page/gymnastics/athlete-comfort.jpg",
          sport: "Athlete Comfort and",
          title: "Support",
          description:
            "Secure lockers, dedicated changing rooms, proper lighting and hydration monitoring enable seamless training.",
        },
        {
          id: 5,
          image: "/images/detail-page/gymnastics/elite-equipment.jpg",
          sport: "Elite Equipment & Cross-Training",
          title: "Access",
          description:
            "Professional-grade apparatus and access to High-Performance Centres support complete skill development and conditioning.",
        },
      ],
    },

    faq: {
      headingFirst: "Why gymnastics",
      headingSecond: "Training Matters",
      description:
        "Discover the physical, mental and lifestyle benefits of Gymnastics, building skills, fitness, teamwork and lifelong athletic development.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds exceptional strength through bodyweight conditioning and apparatus-based training.",
            "Enhances flexibility and range of motion through structured stretching and routine practice.",
            "Develops superior core strength for balance, stability, and controlled execution.",
            "Improves coordination through precise movement patterns and choreographed routines.",
            "Promotes proper posture and healthy spinal alignment through correct gymnastics techniques.",
            "Supports healthy bone density within a low-impact training environment.",
            "Improves metabolic efficiency and overall body composition.",
            "Reduces risk of childhood obesity and lifestyle-related health conditions.",
            "Encourages lifelong fitness habits and active living.",
          ],
        },
        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Enhances neural pathway development through complex, coordinated movement patterns.",
            "Improves concentration through sustained focus during gymnastics routines.",
            "Develops sequential processing skills through structured routine progression.",
            "Strengthens spatial intelligence through three-dimensional movement awareness.",
            "Increases processing speed through rapid decision-making during routines.",
            "Builds time-management skills through understanding routine pacing and timing.",
            "Enhances memory by recalling sequences, elements, and training sets.",
            "Encourages mathematical thinking through scoring systems and routine calculations.",
            "Develops effective goal-setting and achievement planning skills.",
            "Sharpens focus by training the mind to block external distractions.",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds strong self-discipline through structured, demanding training schedules.",
            "Enhances mental toughness by adapting to challenging training protocols.",
            "Encourages intrinsic motivation and self-driven pursuit of excellence.",
            "Improves emotional regulation through controlled breathing and focused execution.",
            "Boosts self-confidence through measurable skill and performance progression.",
            "Develops performance routines transferable to academics and life challenges.",
            "Reduces stress through the rhythmic, meditative nature of gymnastics routines.",
            "Improves sleep quality supporting emotional balance and cognitive functioning.",
            "Lowers anxiety through breathing control and mental focus techniques.",
            "Strengthens resilience by overcoming setbacks and performance plateaus.",
            "Encourages healthy perfectionism and attention to technical detail.",
          ],
        },
        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within an individually competitive sport.",
            "Develops strong training partnerships and supportive peer relationships.",
            "Enhances sportsmanship through competition and proper routine etiquette.",
            "Improves communication skills through interaction with coaches and teammates.",
            "Encourages respect for shared spaces and facility protocols.",
            "Teaches how individual performance contributes to overall team outcomes.",
            "Develops healthy, balanced competitive attitudes.",
            "Trains athletes to give and receive constructive feedback.",
            "Builds connections across age groups within gymnastics programs.",
            "Provides exposure to meet operations through participation and volunteering.",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Encourages lifelong participation in gymnastics across all age groups.",
            "Builds understanding of physical conditioning transferable to other activities.",
            "Develops advanced knowledge of hydration and performance nutrition.",
            "Instills goal-setting habits and appreciation for progressive achievement.",
            "Strengthens time-management skills balancing training and academics.",
            "Establishes disciplined routines through regular training schedules.",
            "Teaches importance of rest, recovery, and injury prevention.",
            "Opens potential educational opportunities through gymnastics scholarships.",
            "Creates career pathways in competitive gymnastics, coaching, or sports management.",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "CBSE Gymnastics National 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "ISSO Gymanstics National 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Gymnastics Fest 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 04",
          eventcontent: "GYMQUINN 2024.",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our gymnastics athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the gymnastics champions whose achievements define our excellenceKhelo India Junior nationals – Nishka Agarwal",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject3.png",
          title: "Narayani Madhusudhan",
          description: "CBSE National",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "/images/homepage/showcaseproject4.png",
          title: "Sai Sarayu Madasu",
          description: "ISSO National",
          svgCard: bluesvg,
        },
        {
          id: 3,
          image: "/images/homepage/showcaseproject4.png",
          title: "Meha Mauthik",
          description: "ISSO National",
          svgCard: redsvg,
        },
        {
          id: 4,
          image: "/images/homepage/showcaseproject4.png",
          title: "Shikha Pragnya",
          description: "ISSO National",
          svgCard: bluesvg,
        },
      ],
    },
  },

  skating: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Skating",
      bannertitle: "Skating",
      bannerContent:
        "Skill-driven sport improving balance, speed, control, confidence, coordination and overall movement efficiency development.",
      banneroverlaycontent: "Skating",
      backgroundClass: "skatingbg",
    },

    SecondSectionDetail: {
      backgoundclass: "Skating",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "skating Excellence",
      firstparagraphtext:
        "The Skating Centre of Excellence at Gaudium Sportopia delivers elite training in world-class facilities, developing balance, agility, speed and endurance. Inspired by India’s rising skating champions and international achievements, our uncompromising standards and expert coaching prepare young athletes for national and global success-empowering them to emerge as confident, competitive champions on the world stage.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "Skating",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Valli Sri Sataya Vadlapatla",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "State-of-the-art skating facilities designed to inspire speed, balance, precision and championship-level performance.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "High-Performance Indoor",
          title: "Skating Rink",
          description:
            "A 25-meter oval indoor rink with a polished finish ensures safety, speed, and optimal performance.",
        },
        {
          id: 2,
          image: "/images/detail-page/skating/skating-environment.jpg",
          sport: "Competition-Ready",
          title: "Environment",
          description:
            "Arena grande spectator gallery creates an authentic race-day atmosphere, preparing skaters for competitive pressure.",
        },
        {
          id: 3,
          image: "/images/detail-page/skating/skating-comfort.jpg",
          sport: "Athlete Comfort &",
          title: "Support",
          description:
            "Natural ventilation, secure lockers, dedicated changing rooms and proper lighting support focused training sessions.",
        },
        {
          id: 4,
          image: "/images/detail-page/skating/skating-equipment.jpg",
          sport: "Professional Training",
          title: "Equipment",
          description:
            "Competition-grade cones, barriers and timing systems enable precise skill development and performance tracking.",
        },
        {
          id: 5,
          image: "/images/detail-page/skating/skating-conditioning.jpg",
          sport: "Elite Conditioning",
          title: "Access",
          description:
            "Hydration monitoring and access to High-Performance Centres support cross-training, recovery and overall athletic conditioning.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Skating",
      headingSecond: "Training Matters",
      description:
        "Discover the physical, mental and lifestyle benefits of Gymnastics, building skills, fitness, teamwork and lifelong athletic development.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds exceptional strength through bodyweight conditioning and skating-specific drills.",
            "Enhances flexibility and range of motion through structured stretching and routine practice.",
            "Develops superior core strength for balance, stability, and controlled movement.",
            "Improves coordination through precise footwork and skating patterns.",
            "Promotes proper posture and healthy spinal alignment through correct skating techniques.",
            "Supports healthy bone density within a low-impact training environment.",
            "Improves metabolic efficiency and overall body composition.",
            "Reduces risk of childhood obesity and lifestyle-related health conditions.",
            "Encourages lifelong fitness habits and active living.",
          ],
        },
        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Enhances neural pathway development through complex, coordinated movement patterns.",
            "Improves concentration through sustained focus during skating routines.",
            "Develops sequential processing skills through structured routine progression.",
            "Strengthens spatial intelligence through three-dimensional movement awareness.",
            "Increases processing speed through rapid decision-making during routines.",
            "Builds time-management skills through understanding routine pacing and timing.",
            "Enhances memory by recalling sequences, elements, and training sets.",
            "Encourages mathematical thinking through scoring systems and routine calculations.",
            "Develops effective goal-setting and achievement planning skills.",
            "Sharpens focus by training the mind to block external distractions.",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds strong self-discipline through structured, demanding training schedules.",
            "Enhances mental toughness by adapting to challenging training protocols.",
            "Encourages intrinsic motivation and self-driven pursuit of excellence.",
            "Improves emotional regulation through controlled breathing and focused execution.",
            "Boosts self-confidence through measurable skill and performance progression.",
            "Develops performance routines transferable to academics and life challenges.",
            "Reduces stress through the rhythmic, meditative nature of skating routines.",
            "Improves sleep quality supporting emotional balance and cognitive functioning.",
            "Lowers anxiety through breathing control and mental focus techniques.",
            "Strengthens resilience by overcoming setbacks and performance plateaus.",
            "Encourages healthy perfectionism and attention to technical detail.",
          ],
        },
        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within an individually-focused sport.",
            "Develops strong training partnerships and supportive peer relationships.",
            "Enhances sportsmanship through competition and proper routine etiquette.",
            "Improves communication skills through interaction with coaches and teammates.",
            "Encourages respect for shared spaces and facility protocols.",
            "Teaches how individual performance contributes to overall outcomes.",
            "Develops healthy, balanced competitive attitudes.",
            "Trains athletes to give and receive constructive feedback.",
            "Builds connections across age groups within skating programs.",
            "Provides exposure to meet operations through participation and volunteering.",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Encourages lifelong participation in skating across all age groups.",
            "Builds understanding of physical conditioning transferable to other activities.",
            "Develops advanced knowledge of hydration and performance nutrition.",
            "Instills goal-setting habits and appreciation for progressive achievement.",
            "Strengthens time-management skills balancing training and academics.",
            "Establishes disciplined routines through regular early training sessions.",
            "Teaches importance of rest, recovery, and injury prevention.",
            "Opens potential educational opportunities through skating scholarships.",
            "Creates career pathways in competitive skating, coaching, or sports management.",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "CBSE Gymnastics National 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "ISSO Gymanstics National 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Gymnastics Fest 2023.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 04",
          eventcontent: "GYMQUINN 2024.",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our gymnastics athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the gymnastics champions whose achievements define our excellenceKhelo India Junior nationals – Nishka Agarwal",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject3.png",
          title: "Narayani Madhusudhan",
          description: "CBSE National",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "/images/homepage/showcaseproject4.png",
          title: "Sai Sarayu Madasu",
          description: "ISSO National",
          svgCard: bluesvg,
        },
        {
          id: 3,
          image: "/images/homepage/showcaseproject4.png",
          title: "Meha Mauthik",
          description: "ISSO National",
          svgCard: redsvg,
        },
        {
          id: 4,
          image: "/images/homepage/showcaseproject4.png",
          title: "Shikha Pragnya",
          description: "ISSO National",
          svgCard: bluesvg,
        },
      ],
    },
  },

  athletics: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "athletics",
      bannertitle: "athletics",
      bannerContent:
        "Track-and-field sport enhancing speed, endurance, strength, agility, coordination and competitive performance across multiple events.",
      banneroverlaycontent: "athletics",
      backgroundClass: "athleticsbg",
    },

    SecondSectionDetail: {
      backgoundclass: "athletics",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Athletics Excellence",
      firstparagraphtext:
        "The Athletics Centre of Excellence at Gaudium Sportopia embodies a bold vision to redefine Indian athletics. Going beyond training, we nurture future Olympic champions through comprehensive programs and world-class coaching. Inspired by India’s legendary athletes, our mission is to transform potential into podium success and help India achieve lasting glory on the global athletics stage.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "athletics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Ramulu Korra",
        },
        {
          sport: "athletics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Likki Teja Vardhan Reddy",
        },
        {
          sport: "athletics",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Laxmiram",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "SWorld-class athletics facilities designed to inspire speed, endurance, precision and podium-ready performance across disciplines.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Engineered ",
          title: "Track Base",
          description:
            "Compacted asphalt foundation with anti-termite treatment and Wet Mix Macadam ensures long-term stability and durability.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "Professional",
          title: "Surface Layers",
          description:
            "Bituminous and asphaltic concrete layers with seal dust deliver a smooth, competition-ready running surface.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "IAAF-Standard",
          title: "Synthetic Track",
          description:
            "Premium 6-lane, 15mm synthetic track with international-standard line markings for elite training familiarity.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "All-Weather ",
          title: "Performance",
          description:
            "Advanced drainage systems maintain optimal track conditions across varying weather conditions.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Safety & Precision",
          title: "Design",
          description:
            "Professionally built kerb walls ensure safety, clear track definition and race-ready precision.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Athletics ",
      headingSecond: "Training Matters",
      description:
        "Explore numerous benefits of athletics and how it helps every aspect of the player’s lifestyle.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Benefits",
          faqAnswer: [
            "Builds strong cardiovascular endurance and aerobic fitness",
            "Develops muscular strength, speed, and explosive power",
            "Enhances flexibility, mobility, and full range of motion",
            "Improves coordination, balance, and body awareness",
            "Sharpens agility, reaction time, and overall athleticism",
            "Supports healthy bone density during key growth years",
            "Promotes correct posture and efficient biomechanical alignment",
          ],
        },
        {
          id: 2,
          faqQuestion: "Cognitive Benefits",
          faqAnswer: [
            "Enhances concentration, attention span, and mental focus",
            "Supports improved academic performance through increased cerebral oxygen flow",
            "Develops strategic thinking and tactical decision-making skills",
            "Strengthens memory retention and recall abilities",
            "Sharpens spatial awareness and perceptual skills",
            "Boosts neural connectivity through diverse and coordinated movement patterns",
          ],
        },

        {
          id: 3,
          faqQuestion: "Psychological Benefits",
          faqAnswer: [
            "Builds self-confidence and a positive self-image",
            "Supports stress reduction and effective anxiety management",
            "Encourages goal-setting with a strong achievement mindset",
            "Develops resilience and mental strength when facing challenges",
            "Fosters healthy competitiveness and sustained motivation",
            "Enhances mindfulness and present-moment awareness",
            "Cultivates pride in personal growth and accomplishments",
          ],
        },

        {
          id: 4,
          faqQuestion: "Social Benefits",
          faqAnswer: [
            "Strengthens teamwork and collaborative abilities",
            "Nurtures leadership skills and responsibility",
            "Instils respect for rules, officials, and opponents",
            "Enhances communication across diverse settings",
            "Develops healthy conflict-resolution skills",
            "Builds a sense of community and belonging",
            "Encourages cross-cultural understanding through the universal language of sport",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Builds lifelong healthy habits and active routines",
            "Encourages understanding of nutrition and physical well-being",
            "Develops strong time management and prioritization skills",
            "Promotes a balanced approach to competition and recreation",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "Hyderabad Runners - stadium Run 12hr - 2021.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "Hyderabad Runners - stadium Run 24hr - 2022.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Hyderabad Runners - stadium Run 24hr - 2023.",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the athletics champions whose achievements define our excellence.",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject1.png",
          title: "SKANDHA",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "/images/homepage/showcaseproject2.png",
          title: "DIVYANSHI MISHRA",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: bluesvg,
        },
        {
          id: 3,
          image: "/images/homepage/showcaseproject3.png",
          title: "MISCHA J",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: redsvg,
        },
        {
          id: 4,
          image: "/images/homepage/showcaseproject4.png",
          title: "NAINIKA",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: bluesvg,
        },
        {
          id: 5,
          image: "/images/homepage/showcaseproject5.png",
          title: "DIVYANSHI MISHRA",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: redsvg,
        },
        {
          id: 6,
          image: "/images/homepage/showcaseproject6.png",
          title: "SKANDHA",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: bluesvg,
        },
        {
          id: 7,
          image: "/images/homepage/showcaseproject7.png",
          title: "MISCHA J",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: redsvg,
        },
        {
          id: 8,
          image: "/images/homepage/showcaseproject8.png",
          title: "DIVYANSHI MISHRA",
          description:
            "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
          svgCard: bluesvg,
        },
      ],
    },
  },

  cricket: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Cricket",
      bannertitle: "Cricket",
      bannerContent:
        "Strategic team sport developing batting, bowling, fielding skills, teamwork, focus and match awareness consistently.",
      banneroverlaycontent: "Cricket",
      backgroundClass: "cricketbg",
    },

    SecondSectionDetail: {
      backgoundclass: "cricket",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Cricket Excellence",
      firstparagraphtext:
        "The Cricket Centre of Excellence at Gaudium Sportopia is dedicated to shaping the next generation of cricketing talent. Our professional-grade facilities and technology-driven practice nets recreate real match conditions, helping young players train like elite professionals. Here, early passion is refined into skill, discipline and confidence, thus laying the foundation for future performances on national and international stages.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship, and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "Cricket",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Omer",
        },
        {
          sport: "Cricket",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Sathish",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "World-class cricket facilities designed to simulate professional match conditions, inspiring young players to train, perform and excel confidently.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "International-Standard  ",
          title: "Ground",
          description:
            "Full-sized 70-yard cricket ground with natural lawn grass and professionally prepared pitch and outfield.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BCCI-Compliant",
          title: "Nets",
          description:
            "Six high-quality practice nets built to BCCI standards for batting, bowling and fielding drills.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Technology-Driven",
          title: "Training",
          description:
            "Ball-tracking and video analysis systems to assess technique, speed, trajectory, and performance.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Specialised Skill",
          title: "Development",
          description:
            "Advanced training equipment and dedicated fitness zones for cricket-specific strength and conditioning.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Weather Proof ",
          title: "Infrastructure",
          description:
            "Scientific drainage and surface design ensuring consistent performance and year-round usability.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Cricket",
      headingSecond: "Training Matters",
      description:
        "Explore numerous benefits of cricket and how it helps every aspect of the player’s lifestyle.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Enhanced hand–eye coordination through batting, bowling, and fielding drills",
            "Improved cardiovascular endurance from running between wickets and dynamic fielding",
            "Targeted muscle development through bowling actions and batting techniques",
            "Increased flexibility and agility via cricket-specific movement patterns",
            "Better balance, body control and coordination during complex game skills",
            "Improved throwing power and precision",
            "Overall physical fitness through the sport’s varied physical demands",
          ],
        },

        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Strategic thinking developed through field placements and match situations",
            "Enhanced concentration during extended batting and bowling spells",
            "Improved spatial awareness through positioning, movement, and shot selection",
            "Stronger tactical analysis by reading and responding to game dynamics",
            "Memory development through recalling opponent-specific plans and strategies",
            "Sharpened problem-solving skills when adapting to changing match conditions",
            "Improved decision-making under pressure and time constraints",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Resilience developed by overcoming failures, setbacks, and competitive challenges",
            "Increased confidence through consistent skill mastery and match performances",
            "Strong self-discipline fostered through regular practice and structured preparation",
            "Enhanced mental toughness from performing under pressure situations",
            "Growth mindset encouraged through continuous technique refinement and improvement",
            "Patience and perseverance built through long-format training and match play",
            "Positive self-identity shaped through sporting achievements and team belonging",
          ],
        },

        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Strong communication skills built through constant on-field coordination",
            "Respect for authority cultivated via interactions with coaches and umpires",
            "Clear understanding of team roles and shared responsibilities",
            "Appreciation for diversity through inclusive team environments",
            "Conflict resolution skills learned through competitive situations",
            "Sense of collective achievement and mutual support during wins and losses",
            "Lifelong friendships formed through shared sporting journeys",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Knowledge of proper nutrition and hydration for peak performance",
            "Appreciation for regular physical activity and long-term health benefits",
            "Strong time-management skills balancing training with academics",
            "Encouragement of goal-setting and achievement-oriented mindset",
            "Development of a healthy competitive spirit",
            "Enhanced media literacy through match analysis and cricket broadcasts",
            "Exposure to potential career pathways in playing, coaching, administration, or sports science",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "U-16 HCA school Tournament - 2024 ",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "Tnter house weekend cricket League Agakhan - 2024",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Tnter house weekend cricket League DRS - 2024",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our cricket athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the cricket champions whose achievements define our excellence.",

      showcaseData: [
        // {
        //   id: 1,
        //   image: "/images/homepage/showcaseproject1.png",
        //   title: "SKANDHA",
        //   description:
        //     "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
        //   svgCard: redsvg,
        // },
        // {
        //   id: 2,
        //   image: "/images/homepage/showcaseproject2.png",
        //   title: "DIVYANSHI MISHRA",
        //   description:
        //     "HYDERABAD SAHODAYA SCHOOLS CLUSTER ATHLETIC MEET Under age 16 2024-25",
        //   svgCard: bluesvg,
        // },
      ],
    },
  },

  football: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "football",
      bannertitle: "football",
      bannerContent:
        "High-intensity team sport improving stamina, coordination, tactical understanding, ball control, teamwork and competitive spirit.",
      banneroverlaycontent: "football",
      backgroundClass: "footballbg",
    },

    SecondSectionDetail: {
      backgoundclass: "football",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Football Excellence",
      firstparagraphtext:
        "The Football Centre of Excellence at Gaudium Sportopia nurtures young talent with a bold vision of national and international success. Supported by elite, national-level coaches and innovative training methodologies, our programme aligns with India’s growing football ecosystem. With rising opportunities through AIFF initiatives and leagues like the ISL, aspiring footballers gain the platform to progress faster and aim for early national representation.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "Football",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Chintha Guruprasad",
        },
        {
          sport: "Football",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Sai",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "World-class football infrastructure designed to ignite passion, elevate performance, and prepare players for elite competition.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "FIFA-Standard Playing",
          title: "Surface",
          description:
            "International artificial turf by LIMONTA SPORT with advanced drainage and professional floodlighting for all-weather play.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "Authentic Match",
          title: "Environment",
          description:
            "Spectator seating for 800–1000, creating real competitive atmospheres that prepare players for match pressure.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "High-Performance",
          title: "Integration",
          description:
            "Direct access to elite strength, conditioning, recovery and performance analysis facilities.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Advanced Training",
          title: "Ecosystem",
          description:
            "Technical analysis zones with video review and specialized areas for shooting, passing, and goalkeeping.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Holistic Athletic",
          title: "Development",
          description:
            "Proximity to a 400m synthetic track and age-appropriate training pitches supporting multi-stage youth development.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Football",
      headingSecond: "Training Matters",
      description:
        "Explore numerous benefits of football and how it helps every aspect of the player’s lifestyle.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds strong cardiovascular endurance through sustained, high-intensity play.",
            "Enhances agility, balance, speed, and rapid change-of-direction ability.",
            "Develops lower-body strength, power, and explosive movement capacity.",
            "Improves coordination and ball control through complex skill execution.",
            "Supports healthy bone density during key growth and development stages.",
            "Strengthens both aerobic and anaerobic energy systems.",
            "Enhances spatial awareness, proprioception, and sport-transferable movement patterns.",
          ],
        },

        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Strengthens quick decision-making under time and pressure constraints.",
            "Enhances tactical awareness and pattern recognition during gameplay.",
            "Develops anticipatory skills and the ability to “read the game”.",
            "Improves concentration and sustained attention across match durations.",
            "Builds problem-solving skills by adapting to changing game scenarios.",
            "Enhances spatial intelligence through positioning and movement awareness.",
            "Improves working memory for retaining tactics and instructions.",
            "Encourages cognitive flexibility across varied game situations.",
            "Develops self-regulation, focus, and inhibitory control.",
          ],
        },
        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds resilience by overcoming challenges, setbacks, and competitive pressures",
            "Strengthens confidence through skill mastery and match-day success",
            "Encourages goal-setting via structured, progressive skill development",
            "Develops mental toughness through consistent performance under pressure",
            "Fosters a growth mindset through continuous technique refinement",
            "Supports identity formation through team belonging and sporting achievement",
            "Enhances emotional regulation during competitive situations",
            "Improves stress management in high-pressure game environments",
            "Sustains motivation and persistence through long-term development pathways",
          ],
        },

        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Strengthens communication through constant on-field coordination",
            "Develops leadership skills via captaincy and defined team roles",
            "Encourages cooperation through shared team objectives",
            "Builds conflict-resolution skills in competitive situations",
            "Fosters empathy by understanding teammates’ perspectives",
            "Instills respect for coaches, officials, and game rules",
            "Clarifies roles and responsibilities within team structures",
            "Promotes appreciation of diversity through varied team composition",
            "Creates lasting friendships through shared sporting experiences",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Builds strong understanding of nutrition and hydration for peak performance",
            "Encourages lifelong appreciation for regular physical activity",
            "Develops time management by balancing sport with academics",
            "Instills discipline through consistent training routines",
            "Nurtures a healthy and positive competitive spirit",
            "Enhances media literacy through football coverage and match analysis",
            "Opens potential career pathways in playing, coaching, or sports science",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "Farmer Market - Football Championship 2021",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "TFarmer Market - Football Championship 2022",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Farmer Market - Football Championship 2023",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our football  athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the football champions whose achievements define our excellence .",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject1.png",
          title: "Ammena Ahmed Babukhan",
          description: "Selected for Telanga Jr National football team",
          svgCard: redsvg,
        },
        {
          id: 2,
          image: "",
          title: "",
          description: "",
          svgCard: "",
        },
      ],
    },
  },

  swimming: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Swimming",
      bannertitle: "Swimming",
      bannerContent:
        "Full-body water sport building strength, endurance, technique, flexibility, speed and aquatic confidence for all levels.",
      banneroverlaycontent: "Swimming",
      backgroundClass: "swimmingbg",
    },

    SecondSectionDetail: {
      backgoundclass: "swimming",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Swimming Excellence",
      firstparagraphtext:
        "The Swimming Centre of Excellence at Gaudium Sportopia is designed to nurture the next generation of competitive swimmers. Our world-class pool and expert coaching create an ideal environment for developing technique, strength, and endurance. With India seeking its next international swimming champion, our uncompromising training standards and advanced facilities empower young swimmers to rise, compete, and bring national glory.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "Swimming",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "Muthyala Hemasri",
        },
        {
          sport: "Swimming",
          role: "COACH",
          img: "/images/homepage/thestrengthimageone.png",
          name: "C. Jacob Vijay Kumar",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "World-class swimming facilities designed for safety, performance, endurance training and nurturing future champions with confidence.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Elite Training",
          title: "Pool",
          description:
            "6-lane, 25-meter outdoor pool with varied depths for both competitive training and skill development.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "Race-Ready",
          title: "Infrastructure",
          description:
            "FINA-spec starting blocks, wave-reduction lane dividers, pace clocks, and electronic timing systems.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Athlete & Spectator",
          title: "Amenities",
          description:
            "Gallery for 200 spectators, dedicated changing rooms, outdoor showers, and secure lockers.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Controlled Aquatic",
          title: "Environment",
          description:
            "Advanced water quality systems and optimal lighting for consistent, all-day training.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Focused",
          title: "Design",
          description:
            "High-performance facilities that mirror championship conditions and prepare swimmers for elite competition.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Swimming",
      headingSecond: "Training Matters",
      description:
        "Explore numerous benefits of swimming and how it helps every aspect of the player’s lifestyle.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds extraordinary cardiovascular endurance through consistent aerobic training",
            "Promotes balanced muscular development across upper and lower body",
            "Enhances pulmonary capacity and efficient oxygen utilization",
            "Improves flexibility and range of motion through stroke mechanics",
            "Develops superior core strength via stabilization requirements",
            "Strengthens coordination through bilateral movement patterns",
            "Supports proper posture and spinal alignment in swimming positions",
            "Encourages healthy bone density in a low-impact environment",
            "Boosts metabolic efficiency and optimizes body composition",
            "Reduces risk of childhood obesity and related health issues",
            "Fosters lifelong exercise habits for sustained health and fitness",
          ],
        },

        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Strengthens neural pathways through complex swimming movements and drills",
            "Improves concentration during sustained training sets and routines",
            "Develops sequential processing through progressive stroke techniques",
            "Enhances spatial intelligence with three-dimensional awareness in water",
            "Boosts processing speed via sprint and interval training",
            "Encourages time-management skills through structured pace training",
            "Improves memory by recalling interval sets and training sequences",
            "Builds mathematical thinking through calculating splits, distances, and timings",
            "Supports goal-setting and achievement-oriented planning",
            "Enhances focus by minimizing external distractions during swim practice",
          ],
        },

        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds extraordinary self-discipline through consistent, rigorous training schedules",
            "Strengthens mental toughness via challenging swimming protocols",
            "Fosters internal motivation and self-driven excellence",
            "Enhances emotional regulation through controlled breathing techniques",
            "Boosts self-confidence with measurable skill and performance progression",
            "Develops performance routines transferable to non-swimming challenges",
            "Reduces stress through meditative aspects of rhythmic swimming",
            "Supports improved sleep quality for cognitive and emotional health",
            "Lowers anxiety through focused breathing practices",
            "Cultivates resilience by overcoming performance plateaus and setbacks",
            "Encourages healthy perfectionism and attention to technical detail",
          ],
        },

        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within an individually-focused sport",
            "Fosters training partnerships and supportive peer relationships",
            "Encourages sportsmanship through competition and race etiquette",
            "Strengthens communication skills with coaches and teammates",
            "Instills respect for shared spaces and facility protocols",
            "Highlights how individual performance impacts team outcomes",
            "Develops appropriate competitive attitudes and behaviors",
            "Teaches giving and receiving constructive feedback",
            "Promotes connections across age groups within swimming clubs",
            "Provides insight into meet operations through participation and volunteering",
          ],
        },
        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Develops essential water safety skills with lifelong applicability",
            "Builds understanding of physical conditioning principles transferable to other sports",
            "Promotes advanced knowledge of hydration and nutrition for optimal performance",
            "Encourages goal-setting and progressive achievement habits",
            "Strengthens time management by balancing training with academics",
            "Cultivates healthy morning routines through early training sessions",
            "Teaches principles of rest and recovery for sustainable performance",
            "Opens potential educational opportunities via swimming scholarships",
            "Prepares for career pathways in competitive swimming, coaching, or aquatic management",
            "Supports lifelong recreational activity and fitness across all ages",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "ISSO National 2024",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "DRS Inter school 2025",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Inter-state Sikkim 2024",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 04",
          eventcontent: "Inter school Agakhan 2024",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our swimming  athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the swimming champions whose achievements define our excellence.",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject1.png",
          title: "Ammena Ahmed Babukhan",
          description: "Selected for Telanga Jr National football team",
          svgCard: redsvg,
        },
      ],
    },
  },

  tennis: {
    DetailPageBanner: {
      breadcrumbstextfirst: "Home",
      breadcrumbstextSecond: "Tennis",
      bannertitle: "Tennis",
      bannerContent:
        "Full-body water sport building strength, endurance, technique, flexibility, speed and aquatic confidence for all levels.",
      banneroverlaycontent: "Tennis",
      backgroundClass: "tennisbg",
    },

    SecondSectionDetail: {
      backgoundclass: "tennis",
      secondsportstitlefirst: "The vision of",
      secondsportstitlesecond: "Tennis Excellence",
      firstparagraphtext:
        "The Tennis Centre of Excellence at Gaudium Sportopia offers elite training pathways for young athletes aiming for national and international success. Our world-class facilities foster advanced tennis skills while building agility, strength, and endurance. With uncompromising coaching standards and professional infrastructure, we create an environment where talent is refined, confidence is built, and future champions are shaped for the global stage.",
      secondparagraphtext: "",
    },

    experTeamDetail: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "An elite team of nationally certified coaches delivering world-class training, mentorship and performance-driven development for aspiring athletes.",

      members: [
        {
          sport: "Tennis",
          role: "Mentor",
          img: "/images/homepage/thestrengthimageone.png",
          name: "V.VIJAY KUMAR",
        },
      ],
    },

    facility: {
      headingFirst: "Facilities",
      headingSecond: "That Inspire",

      facilitytwoline:
        "World-class tennis courts and performance-driven infrastructure designed to inspire excellence, precision, resilience and championship-level competitive play.",

      slides: [
        {
          id: 1,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "ITF-Standard",
          title: "Courts",
          description:
            "Three ITF-classified synthetic acrylic courts with eight-layer systems meeting international tournament standards.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "Match-Ready",
          title: "Environment",
          description:
            "Spectator gallery for 400 viewers, simulating competitive pressure and real-match conditions.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Player Comfort and",
          title: "Safety",
          description:
            "Dedicated changing rooms, outdoor showers, secure lockers and well-maintained court surroundings.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Advanced Training ",
          title: "Equipment",
          description:
            "Professional ball machines and rebound nets designed for precision practice and skill refinement.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "All-Day Play",
          title: "Support",
          description:
            "High-quality court lighting and strategically placed hydration stations for extended training sessions.",
        },
      ],
    },

    faq: {
      headingFirst: "Why Tennis",
      headingSecond: "Training Matters",
      description:
        "Explore numerous benefits of Tennis and how it helps every aspect of the player’s lifestyle.",

      items: [
        {
          id: 1,
          faqQuestion: "Physical Development Benefits",
          faqAnswer: [
            "Builds strong cardiovascular endurance through sustained aerobic and high-intensity anaerobic play",
            "Promotes balanced muscle development across upper and lower body groups",
            "Enhances agility, speed and quick directional changes on court",
            "Improves flexibility and range of motion through dynamic stroke execution",
            "Strengthens core stability for better balance and power generation",
            "Develops coordination through bilateral movement and footwork patterns",
            "Encourages correct posture and spinal alignment through proper technique",
            "Supports healthy bone density within a controlled, low-impact environment",
            "Improves metabolism and overall body composition",
            "Reduces risk of childhood obesity and lifestyle-related health concerns",
            "Establishes lifelong fitness habits through regular physical activity",
          ],
        },

        {
          id: 2,
          faqQuestion: "Cognitive Development Benefits",
          faqAnswer: [
            "Strengthens neural pathways through complex, coordinated movement patterns",
            "Improves concentration through sustained focus during matches and drills",
            "Develops strategic thinking via shot selection and match situations",
            "Enhances spatial intelligence through court awareness and positioning",
            "Boosts processing speed through rapid decision-making during rallies",
            "Builds time-management skills through match pacing and point construction",
            "Enhances memory by recalling strategies, patterns, and training routines",
            "Encourages mathematical thinking through scoring, angles, and game tactics",
            "Improves goal-setting and structured achievement planning",
            "Sharpens focus by training the mind to block external distractions",
          ],
        },

        {
          id: 3,
          faqQuestion: "Psychological Development Benefits",
          faqAnswer: [
            "Builds exceptional self-discipline through consistent adherence to structured training schedules",
            "Strengthens mental toughness by navigating high-pressure match situations",
            "Encourages internal motivation and a mindset of self-driven excellence",
            "Improves emotional regulation through focused breathing and match awareness",
            "Boosts self-confidence through visible skill improvement and performance growth",
            "Develops performance routines transferable to academics and life challenges",
            "Reduces stress through the rhythmic, meditative nature of play",
            "Supports better sleep quality, enhancing emotional and cognitive health",
            "Lowers anxiety through controlled breathing and focused movement",
            "Enhances resilience by overcoming plateaus, losses, and competitive setbacks",
            "Cultivates healthy perfectionism and attention to technical detail",
          ],
        },

        {
          id: 4,
          faqQuestion: "Social Development Benefits",
          faqAnswer: [
            "Builds understanding of team dynamics within an individually focused sport",
            "Encourages strong training partnerships and supportive peer relationships",
            "Promotes sportsmanship through competitive play and match etiquette",
            "Enhances communication skills via regular interaction with coaches and teammates",
            "Instills respect for shared spaces and facility protocols",
            "Highlights how individual performance contributes to overall team success",
            "Develops healthy, respectful competitive attitudes",
            "Teaches giving and receiving constructive feedback effectively",
            "Builds connections across different age groups within tennis communities",
            "Familiarizes players with tournament operations through participation and volunteering",
          ],
        },

        {
          id: 5,
          faqQuestion: "Lifestyle Benefits",
          faqAnswer: [
            "Encourages lifelong recreational activity suitable across all ages",
            "Builds understanding of physical conditioning transferable to other sports",
            "Develops advanced knowledge of hydration and performance nutrition",
            "Fosters goal-setting mindset and appreciation for progressive achievement",
            "Enhances time management by balancing training and academics",
            "Instills disciplined morning routines through structured training schedules",
            "Promotes awareness of rest, recovery, and injury prevention",
            "Opens potential educational opportunities through tennis scholarships",
            "Introduces career pathways in competitive tennis, coaching, and sports management",
          ],
        },
      ],
    },

    eventsAndTournaments: {
      headingFirst: "Events & Tournaments",
      headingSecond: "@ Gaudium Sportopia",
      description:
        "Stay updated on upcoming events, tournaments, competitions and key sporting moments at Gaudium Sportopia.",

      items: [
        {
          eventnumber: "Event - 01",
          eventcontent: "Tennis work shop 2023",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 02",
          eventcontent: "The Gaudium HDTA 2024",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
          eventcontent: "Junior Championship -Circuit 2025",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 04",
          eventcontent: "PYP Hyd Network Indus School 2024",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 05",
          eventcontent: "ISSO Tennis 2024",
          eventslinks: "/events1link",
        },
      ],
    },

    journey: {
      headingFirst: "The Strength",
      headingSecond: "Behind the Squad",
      description:
        "A visual journey capturing training, competition and defining moments from our Tennis athletes’ path to excellence.",

      marqueeRow1: [
        "/images/detail-page/badminton/marquee/marquee-1.jpg",
        "/images/detail-page/badminton/marquee/marquee-2.jpg",
        "/images/detail-page/badminton/marquee/marquee-3.jpg",
        "/images/detail-page/badminton/marquee/marquee-4.jpg",
        "/images/detail-page/badminton/marquee/marquee-5.jpg",
      ],

      marqueeRow2: [
        "/images/detail-page/badminton/marquee/marquee-6.jpg",
        "/images/detail-page/badminton/marquee/marquee-8.jpg",
        "/images/detail-page/badminton/marquee/marquee-7.jpg",
        "/images/detail-page/badminton/marquee/marquee-10.jpg",
        "/images/detail-page/badminton/marquee/marquee-9.jpg",
      ],
    },

    success: {
      headingFirst: "success",
      headingSecond: "stories",
      description:
        "Take a glance at the Tennis champions whose achievements define our excellence.",

      showcaseData: [
        {
          id: 1,
          image: "/images/homepage/showcaseproject1.png",
          title: "Ammena Ahmed Babukhan",
          description: "Selected for Telanga Jr National football team",
          svgCard: redsvg,
        },
      ],
    },
  },
};
export default DetailsData;
