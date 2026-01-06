import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqDetail({ data }) {
  const [openFaqId, setOpenFaqId] = useState(null);

  const faqopen = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  const faqcontents = data.items;

  return (
    <>
      <div className="faqmaincontainer">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="videosectionmain">
            <div className="firstheading lengthfirstHeading">
              <h2 className="stroke-fill-text mainheadingfont redcolorfont">
                {data.headingFirst}
              </h2>
            </div>
            <div className="secondheading lengthsecondHeading">
              <h2 className="stroke-fill-text1 mainheadingfont bluecolorfont">
                {data.headingSecond}
              </h2>
            </div>
          </div>
        </div>

        <div className="paravideosection">
          <p className="paragraphtext">
           {data.description}
          </p>
        </div>

        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="mainfaqcontainer">
            {faqcontents.map((item, index) => (
              <div
                key={index}
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
