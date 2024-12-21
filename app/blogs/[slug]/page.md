import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import SearchBox from "@/components/blog/SearchBox";
import Category from "@/components/blog/Category";
import RecentPost from "@/components/blog/RecentPost";
import Tag from "@/components/blog/blog-details/Tag";
import SocialShare from "@/components/blog/blog-details/SocialShare";
import blogsData from "@/data/blog";
import Image from "next/image";
import styles from "./DynamicBlogDetails.module.css"; // Import CSS module

interface DynamicBlogDetailsProps {
  params: {
    slug: string;
  };
}

const DynamicBlogDetails: React.FC<DynamicBlogDetailsProps> = ({ params }) => {
  const { slug } = params;

  console.log("Received slug from URL:", slug); // Log the slug passed from the URL
  console.log("Available blogs slugs:", blogsData.map((item) => item.slug)); // List all slugs in blogsData


  // Find the blog using the slug
  const blog = blogsData.find((item) => item.slug === slug);

  if (!blog) {
    console.error("Blog not found for slug:", slug);
    return <h1>404 - Blog Not Found</h1>;
  }

  return (
    <>
      <Header />

      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                Generative AI  {blog.date}  By <br />
                <a href="#" className="fw-500">
                  Aayushi Shrivastava
                </a>
              </p>
              {/* Apply the CSS module class for the title */}
              <h2 className={`${styles.blogHeading} tx-dark`} >{blog?.title}</h2>
            </div>
          </div>
        </div>

        {/* Replace <img> with <Image /> */}
        <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={100} // specify an appropriate width
          height={100} // specify an appropriate height
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.imageSrc && (
                      <Image
                        width={816}
                        height={597}
                        layout="responsive"
                        src={blog.imageSrc}
                        alt={blog.title || "Blog Image"}
                        className="lazy-img image-meta w-100"
                      />
                    )}

                    <p>{blog.content}</p> {/* Render unique content here */}

                    {/* Render Subheadings */}
                    {blog.subheadings && blog.subheadings.map((sub, index) => (
                      <div key={index}>
                        <h3 className={styles.subheadingTitle}>{sub.title}</h3>
                        <p
                        dangerouslySetInnerHTML={{ __html: sub.content }}
                        />
                      </div>
                    ))}

                    {/* Render FAQ Section */}
                    {blog.faq && (
                      <div className={styles.faqSection}>
                        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
                        {blog.faq.map((faqItem, index) => (
                          <div key={index} className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>{faqItem.question}</h4>
                            <p className={styles.faqAnswer}>{faqItem.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                      <Tag />
                      <SocialShare />
                    </div>
                  </article>

                  {/* <div className="blog-comment-area">
                    <h3 className="blog-inner-title tx-dark pb-15">2 Comments</h3>
                    <SingleComments />
                  </div>

                  <div className="blog-comment-form">
                    <h3 className="blog-inner-title tx-dark">Leave A Comment</h3>
                    <p>
                      <Link href="/login" className="text-decoration-underline">
                        Sign
                      </Link>
                      in to post your comment or signup if you don&apos;t have an account.
                    </p>
                    <CommentBox />
                  </div> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>

                  {/* <BannerPost /> */}
                </div>
              </div>
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

export default DynamicBlogDetails;