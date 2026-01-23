export default function ContactForm() {
  const sportsList = [
    "Athletics",
    "Cricket",
    "Football",
    "Tennis",
    "Badminton",
    "Gymnastics",
    "Skating",
    "Basketball",
    "Fencing",
    "Swimming",
  ];
  return (
    <>
      <div className="conatctformstyle">
        <h3 className="paragraphtext">
          If you are interested in <span>Coaching</span> for your{" "}
          <span>child</span> please fill this form
        </h3>

        <div>
          <form>
            <div>
              <div className="contactformflex">
                <div className="inputrelativesection">
                  <input type="text" placeholder="Enter Your Name" />
                  <label className="textoftheinput" htmlFor="">
                    Name
                  </label>
                </div>
                <div className="inputrelativesection">
                  <input type="text" placeholder="Enter Your Name" />
                  <label className="textoftheinput" htmlFor="">
                   Parent’s Name
                  </label>
                </div>
                <div className="inputrelativesection">
                  <input type="text" placeholder="Enter Your Email" />
                  <label className="textoftheinput" htmlFor="">
                   Email
                  </label>
                </div>
                <div className="inputrelativesection">
                  <input type="text" placeholder="Enter Your Phone Number" />
                  <label className="textoftheinput" htmlFor="">
                    Phone Number
                  </label>
                </div>
              </div>

              <div>
                <h3 className="pleasechecktick">
                  Please check the <span>Sports</span> you are{" "}
                  <span>interested</span> in (more than one is possible)
                </h3>
              </div>

              <div className="checkboxdisplay">
                {sportsList.map((sport, index) => (
                  <div className="maintogglediv" key={index}>
                    <input
                      className="toggleclassa"
                      type="checkbox"
                      id={sport.toLowerCase()}
                      name="sports[]"
                      value={sport}
                    />
                    <label
                      className="toggleclassname"
                      htmlFor={sport.toLowerCase()}
                    >
                      {sport}
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="pleasechecktick">
                  Is The Child a Student of <br /> the
                  <span> Gaudium School</span>
                </h3>
              </div>

              <div className="checkboxdisplay yesorno">
                <div className="maintogglediv">
                  <input
                    className="toggleclassa"
                    type="checkbox"
                    name="sports[]"
                  />
                  <label className="toggleclassname" htmlFor="Yes">
                    Yes
                  </label>
                </div>
                <div className="maintogglediv">
                  <input
                    className="toggleclassa"
                    type="checkbox"
                    name="sports[]"
                  />
                  <label className="toggleclassname" htmlFor="Yes">
                    No
                  </label>
                </div>
              </div>

              <div className="discovermorebutton">
                <a  className="buttonfont highlightedtextred">Submit</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
