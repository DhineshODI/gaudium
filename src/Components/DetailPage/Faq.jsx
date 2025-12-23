import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqDetail() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqopen = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  const faqcontents = [
    {
      id: 1,
      faqQuestion: "Physical Development Benefits",
      faqAnswer: [
        "Extraordinary self-discipline through adherence to rigorous training schedules.",
        "Enhanced mental toughness through challenging match situations.",
        "Development of internal motivation and self-driven excellence.",
        "Improved emotional regulation through controlled breathing and focus during matches.",
        "Enhanced self-confidence through measurable skill and performance progression.",
        "Development of performance routines applicable to non-badminton challenges.",
        "Stress reduction through the meditative aspects of rhythmic play.",
        "Improved sleep quality supporting overall cognitive and emotional functioning.",
        "Anxiety reduction through controlled breathing techniques.",
        "Enhanced resilience through overcoming performance plateaus and setbacks.",
        "Development of healthy perfectionism and attention to technical detail.",
      ],
    },
    {
      id: 2,
      faqQuestion: "Cognitive Development Benefits",
      faqAnswer: [
        "Extraordinary self-discipline through adherence to rigorous training schedules.",
        "Enhanced mental toughness through challenging match situations.",
        "Development of internal motivation and self-driven excellence.",
        "Improved emotional regulation through controlled breathing and focus during matches.",
        "Enhanced self-confidence through measurable skill and performance progression.",
        "Development of performance routines applicable to non-badminton challenges.",
        "Stress reduction through the meditative aspects of rhythmic play.",
        "Improved sleep quality supporting overall cognitive and emotional functioning.",
        "Anxiety reduction through controlled breathing techniques.",
        "Enhanced resilience through overcoming performance plateaus and setbacks.",
        "Development of healthy perfectionism and attention to technical detail.",
      ],
    },
    {
      id: 3,
      faqQuestion: "Psychological Development Benefits",
      faqAnswer: [
        "Extraordinary self-discipline through adherence to rigorous training schedules.",
        "Enhanced mental toughness through challenging match situations.",
        "Development of internal motivation and self-driven excellence.",
        "Improved emotional regulation through controlled breathing and focus during matches.",
        "Enhanced self-confidence through measurable skill and performance progression.",
        "Development of performance routines applicable to non-badminton challenges.",
        "Stress reduction through the meditative aspects of rhythmic play.",
        "Improved sleep quality supporting overall cognitive and emotional functioning.",
        "Anxiety reduction through controlled breathing techniques.",
        "Enhanced resilience through overcoming performance plateaus and setbacks.",
        "Development of healthy perfectionism and attention to technical detail.",
      ],
    },
    {
      id: 4,
      faqQuestion: "Social Development Benefits",
      faqAnswer: [
        "Extraordinary self-discipline through adherence to rigorous training schedules.",
        "Enhanced mental toughness through challenging match situations.",
        "Development of internal motivation and self-driven excellence.",
        "Improved emotional regulation through controlled breathing and focus during matches.",
        "Enhanced self-confidence through measurable skill and performance progression.",
        "Development of performance routines applicable to non-badminton challenges.",
        "Stress reduction through the meditative aspects of rhythmic play.",
        "Improved sleep quality supporting overall cognitive and emotional functioning.",
        "Anxiety reduction through controlled breathing techniques.",
        "Enhanced resilience through overcoming performance plateaus and setbacks.",
        "Development of healthy perfectionism and attention to technical detail.",
      ],
    },
    {
      id: 5,
      faqQuestion: "Lifestyle Benefits",
      faqAnswer: [
        "Extraordinary self-discipline through adherence to rigorous training schedules.",
        "Enhanced mental toughness through challenging match situations.",
        "Development of internal motivation and self-driven excellence.",
        "Improved emotional regulation through controlled breathing and focus during matches.",
        "Enhanced self-confidence through measurable skill and performance progression.",
        "Development of performance routines applicable to non-badminton challenges.",
        "Stress reduction through the meditative aspects of rhythmic play.",
        "Improved sleep quality supporting overall cognitive and emotional functioning.",
        "Anxiety reduction through controlled breathing techniques.",
        "Enhanced resilience through overcoming performance plateaus and setbacks.",
        "Development of healthy perfectionism and attention to technical detail.",
      ],
    },
  ];

  return (
    <>
      <div className="faqmaincontainer">
        <div className="videosectionmain">
          <div className="firstheading">
            <h2 className="stroke-fill-text mainheadingfont redcolorfont">
              Why Badminton
            </h2>
          </div>
          <div className="secondheading">
            <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
              Training Matters
            </h2>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">
            Lorem ipsum dolor sit amet consectetur. Facilisi scelerisque
            pellentesq uescelerisque libero malesuada tristique Ultricies leo
            viverra.
          </p>
        </div>

        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="mainfaqcontainer">
            {faqcontents.map((item, index) => (
              <div key={index}
                onClick={() => faqopen(item.id)}
                className={`cursor-pointer containerFaq faq-arrowimage ${
                  openFaqId === item.id ? "activefaq" : ""
                }`}
              >
                <div className="listfaq">
                  <p className="paragraphtext">{item.faqQuestion}</p>
                  <img
                    onClick={() => faqopen(item.id)}
                    className="cursor-pointer faqimagearroww"
                    src="/images/icons/active-arrow-right-circle.svg"
                    alt=""
                  />
                </div>

                <AnimatePresence initial={false}>
                  {openFaqId === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: "easeInOut" },
                        opacity: { duration: 0.25 },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul className="faq-answer">
                        {item.faqAnswer.map((answer, index) => (
                          <li key={index}>{answer}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
