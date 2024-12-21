import Testimonial from "@/components/home-page/home-3/Testimonial";
import Block from "@/components/services/Block";
import Team1 from "@/components/team/Team1";
import Link from "next/link";
import VideoBlock from "@/components/about/VideoBlock";
import Header from "@/components/home-page/home-6/Header";
// import Image from "next/image";
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
          <div className="ps-xxl-5" data-aos="fade-left">
            <h6  className="mb-30">
              Our Journey &amp; Vision
            </h6>

            <p className="text-lg tx-dark">
              In this crowded, noisy world, it&apos;s not about having the loudest
              voice—it&apos;s about having the most meaningful one. Today, the
              greatest products and solutions, those that truly solve real
              problems, often go unheard because they lack the budget to compete
              with superficial noise. But at KOgenie, we&apos;re changing that. We&apos;re
              democratizing the power of marketing and branding, making it
              accessible to every dreamer and innovator. We&apos;re the microphone
              that amplifies the voices of those who dare to create something
              truly valuable. With KOgenie, it&apos;s not about how much money you
              have—it&apos;s about the brilliance of your ideas. We&apos;re here to ensure
              that the solutions people need are discovered and that the
              dreamers who create them are heard. We&apos;re not just revolutionizing
              marketing; we&apos;re levelling the playing field. In this cluttered
              world, we&apos;re the signal in the noise, giving everyone the chance
              to shine.
            </p>
            <div className="row">{/* <Counter /> */}</div>
          </div>
          {/* </div>
          </div> */}
          <div className="ps-xxl-5" data-aos="fade-left">
            <h6
              style={{
                marginTop: "20px",
              }}
              className="mb-30"
            >
              Our CEO
            </h6>

            <p className="text-lg tx-dark">
              Most people start a business to make money. And sure, money is
              important. But if money is your only goal, the journey? It&apos;s
              hollow. Forgettable. Starting a business—running a business—is
              about something much bigger. It&apos;s about solving real problems.
              Making people&apos;s lives better. Every dollar we earn comes from
              someone whose problem we&apos;ve solved. And we don&apos;t stop there. We
              take that success, that trust, and we use it to solve even more
              problems—digging deeper, reaching further, and helping more
              people. That&apos;s who we are. That&apos;s what we stand for. And it&apos;s what
              we&apos;ll always stand for. We&apos;re not just building a business. We&apos;re
              building a way to make life better. For everyone. What we do? What
              are we trying to solve? Here&apos;s to the end of marketing as we know
              it. Marketing—that clumsy, bloated, and outdated word—is on its
              way out. And it should be. Why? Because it&apos;s time for something
              better. Something seamless. Something inevitable. Imagine a world
              where “relevant people knowing you” doesn&apos;t require campaigns,
              pitches, or strategies. Imagine a world where your business
              doesn&apos;t win because you marketed better but because you are
              better. That&apos;s the world we&apos;re building. How? By creating ads that
              are so hyper-targeted, so uniquely personal, that the right people
              will feel like they were made just for them. Not an ad, but a
              moment of clarity. Not marketing, but connection. No noise, no
              fluff, no gimmicks—just the right message, for the right person,
              at the right time. When we&apos;re done, the word &quot;marketing&quot; won&apos;t
              even be necessary. Business owners won&apos;t be asking, &quot;How do I
              market better?&quot; They&apos;ll be asking, “Do I have the best product?”
              And that&apos;s the only question that should matter. We&apos;re not trying
              to improve marketing. We&apos;re making it disappear.
            </p>
            <div className="row">{/* <Counter /> */}</div>
          </div>

          <div className="ps-xxl-5" data-aos="fade-left">
            <h6
              style={{
                marginTop: "20px",
              }}
              className="mb-30"
            >
              Obstacles
            </h6>

            <p className="text-lg tx-dark">
              In the beginning, it was&apos;nt easy. Finding people as crazy as I
              am—people who believed we could change how the world does
              marketing—felt impossible. The ones I found were too logical,
              too... safe. They were built for organizations that run on
              predictability, where the goal isn&apos;t to create something new but
              to execute what already exists well. But that&apos;s not us. That&apos;s not
              KOgenie. KOgenie&apos;s journey started with one obstacle: finding
              those bold enough to dream differently—people who did not want to
              fit into the mould but wanted to break it. Now, KOgenie is not just
              a team; it&apos;s a tribe of misfits, rebels, and visionaries united by
              a simple idea: to help startups, especially D2C brands, market
              their products and services in ways the world has&apos;nt seen before.
              We are not here to tweak the old. We&apos;re here to revolutionize it.
              We are here to turn marketing into something personal, intimate,
              and unforgettable. Because the people who are crazy enough to
              think they can change the world... are the ones who do.
            </p>
            <div className="row">{/* <Counter /> */}</div>
          </div>
          <div className="ps-xxl-5" data-aos="fade-left">
            <h6
              style={{
                marginTop: "20px",
              }}
              className="mb-30"
            >
              Where are we going?
            </h6>

            <p className="text-lg tx-dark">
              You know, most companies focus on themselves. Their goals. Their
              milestones. Their profits. But here&apos;s the truth—we don&apos;t care
              about that. At all. What we care about is one thing: you. What
              you&apos;re building. What you&apos;re creating for the world. Our job? It&apos;s
              simple. To give you the tools to make your product better,
              sharper, more impactful. So you can stop worrying about the noise
              and focus entirely on what you do best—building something
              incredible. Because at the end of the day, it&apos;s not about us. It&apos;s
              about what you can achieve. And that&apos;s all we care about.
            </p>
            <div className="row">{/* <Counter /> */}</div>
          </div>
          <div className="ps-xxl-5" data-aos="fade-left">
            <h6
              style={{
                marginTop: "20px",
              }}
              className="mb-30"
            >
              Dreams, Detours, and Destinations (Personal Story)
            </h6>

            <p className="text-lg tx-dark">
              I&apos;ve seen it happen, more times than I care to admit. Brilliant
              people. Wonderful products. Incredible services. Yet, no one uses
              them. No one even notices them. And it&apos;s not because they weren&apos;t
              good enough. Far from it. I saw it firsthand. A close friend
              poured his soul into a startup—sleepless nights, relentless hard
              work, a vision so pure it could change lives. I used his service.
              I loved it. It was everything a product should be. But it failed.
              Not because it wasn&apos;t valuable, but because people didn&apos;t see it.
              His message didn&apos;t connect. His ads—those tiny, fleeting windows
              into his dream—went unseen, unclicked, ignored. He didn&apos;t fail
              because of his idea. He failed because the world didn&apos;t even get a
              chance to try it. You see, we live in a noisy world. People are
              bombarded with messages, ads, and content every second of every
              day. Cutting through that noise isn&apos;t easy—it&apos;s a science, an art,
              a battle. And too many brilliant people lose that battle before
              they&apos;ve even begun. That&apos;s why we started KOgenie. At KOgenie,
              we&apos;re here to make sure great ideas don&apos;t go unnoticed. We&apos;re here
              to ensure the right message reaches the right person at the right
              time—not as noise, but as something personal, something
              meaningful. Because no one with a dream, a vision, and something
              to offer the world should fail simply because the world didn&apos;t see
              them. This isn&apos;t just a mission. It&apos;s a promise. A promise to
              every creator, innovator, and dreamer out there. With KOgenie, the
              world will see you. And they&apos;ll click. Letter to the people
              working at KOgenie *Here&apos;s to the dreamers.* We&apos;re building not
              just a product that will solve problems for millions—though that&apos;s
              part of the vision—but a product so compelling it doesn&apos;t just
              attract users, it attracts investors, innovators, and even our
              competitors admiration. It&apos;s a moonshot, I know. Lofty goals are
              the only kind worth having. But here&apos;s the truth: none of it is
              possible without a team that&apos;s extraordinary—not individually, but
              together. A team isn&apos;t a collection of the best people in the
              world. It&apos;s a group of people who bring out the best in each
              other. Look at The Beatles—Paul, John, Ringo, and George. None of
              them were the greatest musicians of their time, but together?
              Together, they changed music, changed culture, changed history.
              That&apos;s what we&apos;re building here—a team so phenomenal that it&apos;s
              impossible to ignore. But let&apos;s be honest: this won be easy.
              Building a great team—one for the history books—requires more than
              talent. It demands relentless effort. It requires each of us to
              work harder, learn faster, and support one another like no one
              else will. It demands kindness without condescension, honesty
              without cruelty, and leadership by example. If you want to inspire
              your team to be great, show them greatness through your own
              actions. And no, we are not a family. Families come with
              unconditional love. Organizations? They come with mutual respect
              and shared purpose. We are a team—a group of individuals united by
              the belief that together, we can build something radical,
              something history will remember. That&apos;s my promise to you. Now, my
              role in this is simple: to make sure that everyone on this team
              can thrive. Work isn&apos;t life—it&apos;s just one part of it. But if I can
              align your personal goals with KOgenie&apos;s success, then we can
              build something meaningful—together. My job is to give you the
              tools, the space, and the support to be your absolute best. And
              here&apos;s the truth: the only thing that matters is doing something
              that will truly help people—something that changes how the world
              works. Money? It&apos;s secondary. If I get rich, everyone gets rich.
              If I don&apos;t, no one does. That&apos;s the deal. Because leadership isn&apos;t
              about standing above—it&apos;s about standing in the trenches,
              shoulder-to-shoulder with your team. That&apos;s how we win. You agree
              with me? Cool. I&apos;d love to be your teammate. If you don&apos;t, that&apos;s
              cool too. Everyone is different, and I respect that. But if this
              doesn&apos;t resonate with you, KOgenie probably isn&apos;t the right
              fit—and that&apos;s perfectly fine. So here&apos;s the deal: we&apos;re going to
              work like maniacs. We&apos;re going to out-learn and outthink everyone
              else. We&apos;re going to stay kind, stay honest, and stay human. And
              we&apos;re going to create something so radically different, so
              undeniably impactful, that it will make the world sit up and take
              notice. This is our chance to build a better future, not just for
              us, but for everyone. Let&apos;s make history. Are you ready?
            </p>
            <div className="row">{/* <Counter /> */}</div>
          </div>

          <div className="ps-xxl-5" data-aos="fade-left">
            <h6
              style={{
                marginTop: "20px",
              }}
              className="mb-30"
            >
              Letter to Customers
            </h6>

            <p className="text-lg tx-dark">
              Here&apos;s the thing about technology: building something excellent is
              fulfilling. For some of us, just the act of creation is enough—the
              elegance of great code, the brilliance of a perfect system. But
              here&apos;s the truth: if it&apos;s not useful. If it doesn&apos;t help people
              accomplish something, then it&apos;s just noise. At KOgenie, our
              philosophy for product is simple—so simple it almost feels
              obvious. Great products aren&apos;t just about innovation; they&apos;re
              about impact. They exist to make life easier, better, more
              meaningful. Our mantra? It&apos;s simple yet profound: make useful
              things for people. That&apos;s it. We don&apos;t build for the sake of
              building. We create to serve—to solve real problems, to make life
              smoother, to leave the world a little better than we found it.
              That&apos;s what drives us. And here&apos;s the magic: when you focus on
              making something truly useful, everything else falls into place.
              The design, the functionality, the growth—it all aligns when the
              mission is clear. This is who we are. This is what we do. And
              we&apos;re just getting started. Let&apos;s go.
            </p>
            <div className="row">{/* <Counter /> */}</div>
          </div>

          <div className="ps-xxl-5" data-aos="fade-left">
            <h6
              style={{
                marginTop: "20px",
              }}
              className="mb-30"
            >
              Letter to Investors
            </h6>

            <p className="text-lg tx-dark">
              At KOgenie, we are building on three essential pillars: the people
              who bring KOgenie to life, the customers who will find value in
              our solutions, and the investors who believe in our vision. These
              are not just stakeholders; they are the foundation of the company
              we&apos;re creating. If one falters, the entire structure collapses. As
              CEO, my role is to ensure that we strike a balance between these
              pillars—a balance where everyone grows and thrives together.
            </p>
            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              Dreaming Big, Starting Now
            </h6>
            <p>
              We are just starting, but our dream is bold: to solve problems
              that matter deeply. I&apos;ve always believed in the power of solving
              problems, but I know I can&apos;t do it alone. The purpose of my life
              is to solve problems with people—to belong to a team that shares
              this mission. KOgenie is that team. Together, we aim not just to
              solve problems but to solve them in ways that create real impact.
            </p>
            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              Earning Trust, Building Scale
            </h6>
            <p>
              We understand that investors are a vital part of this equation.
              Their trust doesn&apos;t come from lofty ideas; it comes from tangible
              results. And those results come when we solve problems at scale.
              Scale isn&apos;t just about reaching more people—it&apos;s about creating a
              greater impact. We know that investing in startups is risky, and
              we are committed to creating solutions so transformative and
              scalable that the rewards far outweigh the risks. At KOgenie, our
              vision is not just to solve problems for individuals, but for
              millions
            </p>
            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              Creating a KOgenie Advantage
            </h6>
            <p>
              We know that as we grow, competition will come. It&apos;s inevitable.
              Many companies fall into the trap of competing on price, turning
              their vision into a commodity. That&apos;s not us. At KOgenie, we are
              not competing on price but on value. And the value we create is
              real, not just perceived. Our goal is to build a product that
              doesn&apos;t just solve problems but gets better with every user who
              adopts it. The more people use KOgenie, the smarter it becomes,
              the stronger it becomes, the more indispensable it becomes. That&apos;s
              how we will create something that competitors won&apos;t be able to
              replicate—something that makes them pause before stepping into our
              space.
            </p>
            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              Redefining the norm
            </h6>
            <p>
              But we also recognise a deeper challenge: the status quo. Why
              would anyone take a chance on a new company like ours when big,
              established players dominate the market? It&apos;s a valid question,
              and we have a clear answer: we&apos;re not just aiming to be
              better—we&apos;re aiming to be different. Not apples to better apples,
              but apples to oranges. At KOgenie, our goal is to redefine what&apos;s
              possible, creating solutions so unique that they stand apart from
              anything else out there.
            </p>

            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              Building the Team for the Journey
            </h6>
            <p>
              To achieve this vision, we need an extraordinary team. Right now,
              we&apos;re assembling a group of people who are optimistic, endlessly
              curious, and deeply collaborative. People who don&apos;t just work
              together but grow together. At KOgenie, every team member is part
              of something bigger. Ideas are only as powerful as the people who
              bring them to life, and execution is only possible with the right
              team. Together, we&apos;re building a culture where everyone belongs,
              contributes, and thrives.
            </p>

            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              Focus on the Drivers
            </h6>
            <p>
              We also know this: building an innovative product is just the
              beginning. Success doesn&apos;t come from building; it comes from
              people using what we build. That&apos;s why our focus isn&apos;t just on
              creating—it&apos;s on reaching. Reaching the right people, in the right
              way, with a solution that feels like it was made just for them.
              We&apos;re not chasing outcomes; we&apos;re focusing on drivers. If we take
              care of our team, if we delight our customers, the results will
              follow. If we build trust with our investors, they&apos;ll see the
              returns they deserve. That&apos;s the foundation we&apos;re laying at
              KOgenie.
            </p>
            <h6
              style={{
                marginTop: "20px",
                color: "black",
                fontWeight: "bolder",
              }}
              className="mb-30"
            >
              One Dream, One Mission
            </h6>
            <p>
              KOgenie is just getting started, but our ambition is clear. We&apos;re
              here to solve problems—not just for today but for the future.
              We&apos;re here to build something extraordinary. Something that grows.
              Something that lasts. Something that changes the game. This is
              only the beginning, and the best is yet to come.
            </p>
          </div>
        </div>

        {/* <Image
          src="/images/shape/shape_171.svg"
          alt="shape"
          width={100}
          height={100}
          className="lazy-img shapes shape-one"
        /> */}
        {/* <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={100}
          height={100}
          className="lazy-img shapes shape-two"
        /> */}
      </div>

      {/* Video Block Section */}
      <VideoBlock />

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
                  <div className="sc-title-two text-uppercase">
                    WHY KOgenie?
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    Empowering brands to hyper-targeted influence
                  </h2>
                </div>
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  KOgenie offers a complete suite of services from e-commerce
                  integration to digital marketing strategies designed to boost
                  your online sales and brand visibility.
                </p>
                <ul className="style-none list-item">
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
