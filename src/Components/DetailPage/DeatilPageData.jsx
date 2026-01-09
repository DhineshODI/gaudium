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
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque libero malesuada tristique Ultricies leo viverra.",

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
          sport: "Safe flooring",
          title: "Court",
          description:
            "MFMA- (maple flooring manufacturers association) Approved Maple woods used for flooring. It gives proper, equal movements, bounce while playing and avoid knee injuries.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BWF-Standard Courts & Lighting",
          title: "Griunds",
          description:
            "International-standard courts with professional lighting ensure optimal visibility and match-ready playing conditions at all times.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready Arena",
          title: "Court",
          description:
            "High-capacity spectator galleries create an authentic competitive atmosphere, preparing athletes for high-pressure tournament environments.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 4",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 5",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
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
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque libero malesuada tristique Ultricies leo viverra.",

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
          sport: "Safe flooring",
          title: "Court",
          description:
            "MFMA- (maple flooring manufacturers association) Approved Maple woods used for flooring. It gives proper, equal movements, bounce while playing and avoid knee injuries.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BWF-Standard Courts & Lighting",
          title: "Griunds",
          description:
            "International-standard courts with professional lighting ensure optimal visibility and match-ready playing conditions at all times.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready Arena",
          title: "Court",
          description:
            "High-capacity spectator galleries create an authentic competitive atmosphere, preparing athletes for high-pressure tournament environments.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 4",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 5",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
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
          eventnumber: "Event - 03",
          eventcontent: "Viper Cup 2024.",
          eventslinks: "/events1link",
        },
        {
          eventnumber: "Event - 03",
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
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque libero malesuada tristique Ultricies leo viverra.",

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
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Safe flooring",
          title: "Court",
          description:
            "MFMA- (maple flooring manufacturers association) Approved Maple woods used for flooring. It gives proper, equal movements, bounce while playing and avoid knee injuries.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BWF-Standard Courts & Lighting",
          title: "Griunds",
          description:
            "International-standard courts with professional lighting ensure optimal visibility and match-ready playing conditions at all times.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready Arena",
          title: "Court",
          description:
            "High-capacity spectator galleries create an authentic competitive atmosphere, preparing athletes for high-pressure tournament environments.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 4",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 5",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
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
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque libero malesuada tristique Ultricies leo viverra.",

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
          sport: "Safe flooring",
          title: "Court",
          description:
            "MFMA- (maple flooring manufacturers association) Approved Maple woods used for flooring. It gives proper, equal movements, bounce while playing and avoid knee injuries.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BWF-Standard Courts & Lighting",
          title: "Griunds",
          description:
            "International-standard courts with professional lighting ensure optimal visibility and match-ready playing conditions at all times.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready Arena",
          title: "Court",
          description:
            "High-capacity spectator galleries create an authentic competitive atmosphere, preparing athletes for high-pressure tournament environments.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 4",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 5",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
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
        "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque libero malesuada tristique Ultricies leo viverra.",

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
          sport: "Safe flooring",
          title: "Court",
          description:
            "MFMA- (maple flooring manufacturers association) Approved Maple woods used for flooring. It gives proper, equal movements, bounce while playing and avoid knee injuries.",
        },
        {
          id: 2,
          image: "/images/detail-page/badminton/football-img-1.jpg",
          sport: "BWF-Standard Courts & Lighting",
          title: "Griunds",
          description:
            "International-standard courts with professional lighting ensure optimal visibility and match-ready playing conditions at all times.",
        },
        {
          id: 3,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Competition-Ready Arena",
          title: "Court",
          description:
            "High-capacity spectator galleries create an authentic competitive atmosphere, preparing athletes for high-pressure tournament environments.",
        },
        {
          id: 4,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 4",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
        },
        {
          id: 5,
          image: "/images/detail-page/badminton/badminton-slider.jpg",
          sport: "Badminton 5",
          title: "Court",
          description:
            "Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque pellentesque scelerisque libero malesuada tristique urna.",
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
};
export default DetailsData;
