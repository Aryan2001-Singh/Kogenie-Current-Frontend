'use client';
import Testimonial from "@/components/home-page/home-3/Testimonial";
import Block from "@/components/services/Block";
import Team1 from "@/components/team/Team1";
import Link from "next/link";
import Header from "@/components/home-page/home-6/Header";
import Image from "next/image";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
const AboutUsV1 = () => {
  const features = [
    { text: "Driver by data." },
    { text: "Innovating AI solutions" },
    { text: "24/7 customer support." },
  ];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Feature Section Fifty One */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-7" data-aos="fade-right"> */}
          <div className="title-style-five mb-65 md-mb-40">
            <h2
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
              className="main-title fw-500 tx-dark font-recoleta"
            >
              About Us
            </h2>
            {/* </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto"> */}
          <div className="fancy-feature-three pt-150 lg-pt-120 md-pt-120 sm-pt-120">
            <div
              style={{ backgroundColor: "rgba(74, 90, 187, 0.05)", borderRadius: "5px" }}
              className="container">
              <div className="row align-items-center">
                {/* Left Content Section */}
                <div
                  className="col-lg-6 col-md-6"
                  style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "justify" }}
                >
                  <div className="title-style-three">
                    <div
                      className="sc-title text-uppercase"
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "rgb(84, 106, 236)",
                        letterSpacing: "1px",
                        marginTop: "20px"
                      }}
                    >
                      Our Journey
                    </div>
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        color: "#333",
                        marginBottom: "auto",
                      }}
                      className="max-w-xs main-title fw-200"
                    >
                      Democratizing the Power of Marketing
                    </h2>
                  </div>
                  <p
                    className="text-lg mt-15 mb-60 lg-mb-40"
                    style={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.74)",
                      lineHeight: "1.7",
                      marginBottom: "30px",
                    }}
                  >
                    <p>
                      In this crowded, noisy world, it&apos;s not about having the loudest
                      voice—it&apos;s about having the most meaningful one. Today,
                      the greatest products and solutions, those that truly solve real problems,
                      often go unheard because they lack the budget to compete with superficial noise.
                      But at KOgenie, we&apos;re changing that. We&apos;re democratizing the power of marketing and branding,
                      making it accessible to every dreamer and innovator. We&apos;re the microphone that amplifies
                      the voices of those who dare to create something truly valuable.
                      With KOgenie, it&apos;s not about how much money you have—it&apos;s about the brilliance of
                      your ideas. We&apos;re here to ensure that the solutions people need are discovered and
                      that the dreamers who create them are heard. We&apos;re not just revolutionizing marketing;
                      we&apos;re levelling the playing field. In this cluttered world, we&apos;re the signal in the noise,
                      giving everyone the chance to shine.
                    </p>


                  </p>

                </div>

                {/* Right Image Section */}
                <div
                  className="col-lg-6 col-md-6"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxHeight: "500px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      marginTop: "20px",
                      marginLeft: "30px",
                      marginRight: "30px",
                      backgroundColor: "whitesmoke"

                    }}
                  >
                    <Image
                      src=""
                      alt="Professional Illustration"
                      width={400}
                      height={300}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-feature-three pt-150 lg-pt-120 md-pt-120 sm-pt-120">
            <div style={{ backgroundColor: "rgba(74, 90, 187, 0.05)", borderRadius: "5px" }} className="container">
              <div className="row align-items-center">
                {/* Left Image Section */}
                <div
                  className="col-lg-6 col-md-6"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxHeight: "500px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      marginTop: "20px",
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginBottom: "20PX"
                    }}
                  >
                    <Image
                      src="/path-to-your-ceo-image.jpg"
                      alt="CEO Image"
                      width={400}
                      height={300}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                      <h3 style={{ fontSize: "20px", fontWeight: "400", color: "rgba(0, 0, 0, 0.34)" }}>
                        CEO Name
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Right Text Section */}
                <div
                  className="col-lg-6 col-md-6"
                  style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                >
                  <div className="title-style-three">
                    <div
                      className="sc-title text-uppercase"
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "rgb(84, 106, 236)",
                        letterSpacing: "1px",
                        marginTop: "20px"
                      }}
                    >
                      Our CEO
                    </div>
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        color: "#333",
                        marginBottom: "auto",
                      }}
                      className="max-w-md main-title fw-200"
                    >
                      Leadership Driven by Purpose
                    </h2>
                  </div>
                  <p
                    className="text-lg mt-15 mb-60 lg-mb-40"
                    style={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.74)",
                      lineHeight: "1.7",
                      marginBottom: "30px",
                      textAlign: "justify", // Justify the text for alignment
                    }}
                  >
                    Most people start a business to make money. And sure, money is important.
                    But if money is your only goal, the journey? It’s hollow. Forgettable.
                    Starting a business—running a business—is about something much bigger.
                    It’s about solving real problems. Making people’s lives better.
                    Every dollar we earn comes from someone whose problem we’ve solved.
                    And we don’t stop there. We take that success, that trust, and we use it to
                    solve even more problems—digging deeper, reaching further, and helping more people.
                    That’s who we are. That’s what we stand for. And it’s what we’ll always stand for.
                    We’re not just building a business. We’re building a way to make life better. For everyone.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fancy-feature-three pt-150 lg-pt-120 md-pt-120 sm-pt-120">
            <div className="container">
              <div className="row align-items-center">
                {/* Text Content Section */}
                <div
                  className="col-lg-12 col-md-12"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="title-style-three">
                    <div
                      className="sc-title text-uppercase"
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "rgb(84, 106, 236)",
                        letterSpacing: "1px",
                        marginBottom: "10px",
                      }}
                    >
                      What we do? What are we trying to solve?
                    </div>
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        color: "#333",
                        marginBottom: "20px",
                      }}
                      className="max-w-md main-title fw-200"
                    >
                      Solving Real Problems with Real Solutions
                    </h2>
                  </div>
                  <p
                    className="text-lg mt-15 mb-60 lg-mb-40"
                    style={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.74)",
                      lineHeight: "1.7",
                      marginBottom: "30px",
                      maxWidth: "600px",
                      textAlign: "justify",
                    }}
                  >
                    Here’s to the end of marketing as we know it. Marketing—that clumsy,
                    bloated, and outdated word—is on its way out. And it should be. Why?
                    Because it’s time for something better. Something seamless. Something
                    inevitable.
                  </p>
                  <Link
                    href="/pages-menu/solutions"
                    className="btn-four fw-500"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: " #4a5abb",
                      color: "#fff",
                      fontWeight: "500",
                      textDecoration: "none",
                      borderRadius: "5px",
                      boxShadow: "0 4px 20px rgba(84, 107, 236, 0.57)",
                      transition: "all 0.3s ease",
                      fontSize: "18px",
                      textAlign: "center",
                      width: "400px",
                      height: "70px",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgb(64, 86, 216)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "rgb(84, 106, 236)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Get Free Demo
                  </Link>
                </div>
              </div>
              {/* Three Text Columns Section */}
              <div
                className="row"
                style={{
                  marginTop: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "20px",
                  flexWrap: "wrap", // Ensures responsiveness
                }}
              >
                <div
                  className="col-lg-3 col-md-6"
                  style={{
                    textAlign: "center",
                    padding: "15px",
                    //  border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    //  backgroundColor: "rgba(74, 90, 187, 0.1)", // Light transparent background
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#4a5abb",
                      marginBottom: "10px",
                    }}
                  >
                    Personalized Messaging
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                    Deliver ads tailored to the individual, creating deeper connections
                    with your audience.
                  </p>
                </div>
                <div
                  className="col-lg-3 col-md-6"
                  style={{
                    textAlign: "center",
                    padding: "15px",
                    // border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    //  backgroundColor: "rgba(74, 90, 187, 0.1)", // Light transparent background
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#4a5abb",
                      marginBottom: "10px",
                    }}
                  >
                    Seamless Integration
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                    Our tools integrate effortlessly with your business, enabling
                    streamlined solutions.
                  </p>
                </div>
                <div
                  className="col-lg-3 col-md-6"
                  style={{
                    textAlign: "center",
                    padding: "15px",
                    //  border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    // backgroundColor: "rgba(74, 90, 187, 0.1)", // Light transparent background
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#4a5abb",
                      marginBottom: "10px",
                    }}
                  >
                    Measurable Results
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.7)" }}>
                    See the impact of your campaigns with real-time analytics and
                    insights.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div style={{ marginBottom: "60px" }} className="fancy-feature-three pt-150 lg-pt-120 md-pt-120 sm-pt-120">
            <div className="container">
              <div className="row align-items-center">
                {/* Left Text Section */}
                <div
                  className="col-lg-6 col-md-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="title-style-three">
                    <div
                      className="sc-title text-uppercase"
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "rgb(84, 106, 236)",
                        letterSpacing: "1px",
                        marginBottom: "10px",
                      }}
                    >
                      Challenges We Faced
                    </div>
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        color: "#333",
                        marginBottom: "20px",
                      }}
                      className="max-w-md main-title fw-200"
                    >
                      Obstacles on the Path to Revolutionizing Marketing
                    </h2>
                  </div>
                  <p
                    className="text-lg mt-15 mb-60 lg-mb-40"
                    style={{
                      fontSize: "16px",
                      color: "gray",
                      lineHeight: "1.7",
                      marginBottom: "30px",
                      textAlign: "justify",
                    }}
                  >
                    In the beginning, it wasn&apos;t easy. Finding people as crazy as I
                    am—people who believed we could change how the world does
                    marketing—felt impossible. The ones I found were too logical,
                    too... safe. They were built for organizations that run on
                    predictability, where the goal isn&apos;t to create something new but
                    to execute what already exists well. But that&apos;s not us. That&apos;s
                    KOgenie.
                  </p>
                  <p
                    className="text-lg mt-15 mb-60 lg-mb-40"
                    style={{
                      fontSize: "16px",
                      color: "gray",
                      lineHeight: "1.7",
                      marginBottom: "30px",
                      textAlign: "justify",
                    }}
                  >
                    KOgenie&apos;s journey started with one obstacle: finding those bold
                    enough to dream differently—people who did not want to fit into the
                    mold but wanted to break it. Now, KOgenie is not just a team; it&apos;s
                    a tribe of misfits, rebels, and visionaries united by a simple idea:
                    to help startups, especially D2C brands, market their products and
                    services in ways the world hasn&apos;t seen before. We are not here to
                    tweak the old. We&apos;re here to revolutionize it. We are here to turn
                    marketing into something personal, intimate, and unforgettable.
                  </p>
                </div>

                {/* Right Section with Image and Two Columns */}
                <div
                  className="col-lg-6 col-md-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Top Rectangle (Image) */}
                  <div
                    style={{
                      width: "100%",
                      maxHeight: "100px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      marginBottom: "20px",
                    }}
                  >
                    <Image
                      src="/path-to-upper-image.jpg" // Replace with your image path
                      alt="Top Illustration"
                      width={400}
                      height={150}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  {/* Middle Rectangle (Existing Image) */}
                  <div
                    style={{
                      width: "100%",
                      maxHeight: "500px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      marginBottom: "20px",
                    }}
                  >
                    <Image
                      src="/path-to-your-image.jpg" // Replace with your image path
                      alt="Challenges Illustration"
                      width={400}
                      height={300}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  {/* Bottom Rectangle (Text) */}
                  <div
                    style={{
                      width: "100%",
                      maxHeight: "150px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      padding: "20px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "gray",
                        lineHeight: "1.5",
                        textAlign: "justify",
                        margin: 0,
                        fontStyle: "italic"
                      }}
                    >
                      This is where we highlight the key takeaways or inspirational message
                      related to the challenges and vision of KOgenie. Keep it concise yet impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "20px",
              gap: "20px",
            }}
          >
            {/* Left Section with Blurred Image */}
            <div
              style={{
                position: "relative",
                width: "40%",
                minWidth: "300px", // Ensures the image doesn't shrink too much on small screens
                height: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Image
                src="/path-to-your-image.jpg" // Replace with your image path
                alt="Blurred Background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(8px)",
                  transform: "scale(1.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Innovation Starts Here
              </div>
            </div>

            {/* Right Section with Text Containers and Connections */}
            <div
              style={{
                width: "50%",
                minWidth: "300px", // Ensures the text containers are responsive
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
              }}
            >
              {/* Connection Line */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "20px",
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#ddd",
                  zIndex: "-1",
                }}
              ></div>

              {/* Text Container 1 */}
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#5470EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6 style={{ margin: "0 0 10px 0", fontSize: "16px", fontWeight: "600", color: "#333" }}>
                    Where are we going?
                  </h6>
                  <p style={{ margin: 0, fontSize: "14px", color: "gray", lineHeight: "1.7" }}>
                    Most companies focus on themselves. We care about one thing: you.
                  </p>
                </div>
              </div>

              {/* Text Container 2 */}
              <div
                style={{
                  backgroundColor: "#f5f5ff",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#5A9EFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  <i className="fas fa-cogs"></i>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "14px", color: "gray", lineHeight: "1.7" }}>
                    Our job? To give you the tools to make your product better and sharper.
                  </p>
                </div>
              </div>

              {/* Text Container 3 */}
              <div
                style={{
                  backgroundColor: "#fff0f0",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#FF7070",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  <i className="fas fa-star"></i>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "14px", color: "gray", lineHeight: "1.7" }}>
                    It&apos;s not about us. It&apos;s about what you can achieve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "50px",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "20px", // Adds margin from the top
              marginLeft: "20px", // Adds margin from the left
              marginBottom: "20px", // Adds margin from the bottom
            }}
          >
            {/* Text Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between", // Make sure text and image are on opposite sides
                alignItems: "flex-start", // Align items at the top
                gap: "20px", // Space between text and image
                marginTop: "40px",
                position: "relative", // Set relative position to align the bottom text
              }}
            >
              <div
                style={{
                  maxWidth: "500px",
                  paddingRight: "20px",
                }}
              >
                <div
                  className="sc-title text-uppercase"
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(84, 106, 236)",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  Personal Story
                </div>
                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                  className="max-w-md main-title fw-200"
                >
                  Dreams, Detours, and Destinations (Personal story)
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#333",
                    marginBottom: "20px",
                    textAlign: "justify",
                  }}
                >
                  Podcasting operational change management inside of workflows to
                  establish a framework. Taking seamless key performance indicators
                  offline to maximise the long tail.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "250px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#8693e3", // Corrected background color to match the image
                  zIndex: "-1",
                }}
              ></div>
              <Image
                src="/images/assets/ils_07.png" // Corrected path for the image
                alt="Person"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Text & Link in the Right Bottom Corner */}
            <div
              style={{
                position: "absolute", // Makes the div positioned relative to its closest positioned ancestor
                bottom: "20px", // Position it 20px from the bottom of the parent container
                right: "20px", // Position it 20px from the right of the parent container
                color: "#333", // Text color
                fontSize: "14px", // Font size for readability
                marginRight: "50px",

              }}
            >
              <a
                href="#"
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  color: "rgba(0, 0, 0, 0.58)", // Default color for the text
                  textDecoration: "none",
                  fontStyle: "italic",

                }}
              >
                With KOgenie, the world will see you.{" "}
                <span
                  style={{
                    color: "#546aec", // Blue color for this part of the text
                    transition: "color 0.3s ease", // Smooth transition for the hover effect
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#0056b3")} // Darker blue on hover
                  onMouseLeave={(e) => (e.target.style.color = "#546aec")} // Reverts to original blue color
                >
                  And they’ll click.
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>



      {/* Feature Section Thirty Seven */}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(84, 106, 236)",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                    marginTop: "10px"
                  }} className="sc-title-two text-uppercase">
                    WHY KOgenie?
                  </div>
                  <h2 style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "1.5",
                    color: "#333",
                    marginBottom: "10px",
                  }} className="main-title fw-500 tx-dark">
                    Empowering brands to hyper-targeted influence
                  </h2>
                </div>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#333",
                  marginTop: "30px",
                  marginBottom: "10px",
                  textAlign: "justify",
                }} >
                  KOgenie offers a complete suite of services from e-commerce
                  integration to digital marketing strategies designed to boost
                  your online sales and brand visibility.
                </p>
                <ul style={{
                  backgroundColor: "whitesmoke",
                  padding: "10px",
                  marginLeft: "10px",
                  marginTop: "30px",
                }}
                  className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
                <div className="d-inline-flex align-items-center mt-35 lg-mt-20">
                  {/* <ul className="d-flex style-none rating">{starRating}</ul> */}
                  <div className="fs-20 ms-2">
                    {/* <strong className="fw-500 tx-dark">4.9</strong> */}
                    {/* <span className="tx-dark fs-16 opacity-50">
                      (15k Reviews)
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Meet Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Team1 />
            </div>
            {/* <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              Our
              <span className="text-decoration-underline fw-500">2,500+</span>
              dedicated professionals are here to help your business succeed.
            </p> */}
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View Full Team
              </Link>
            </div>
          </div>
        </div>
        {/* <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={100}
          height={100}
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        /> */}
      </div>

      {/* Client Feedback Section */}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2
              style={{
                fontSize: "50px",
              }}
              className="main-title fw-500 tx-dark m0 font-recoleta"
            >
              Client Feedback
            </h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default AboutUsV1;
