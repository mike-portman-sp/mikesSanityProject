import { client } from "../../../studio/client";
import { groq } from "next-sanity";
import Link from "next/link";

const blogsQuery = groq`
  *[_type == "blogs"] | order(publishedDate desc) {
    title,
    subTitle,
    "slug": slug.current,
    publishedDate
  }
`;

export default async function BlogList() {
  const blogs = await client.fetch(blogsQuery);

  return (
    <section className="max-w-6xl mx-auto container">
      {blogs.map((blog: any, index: number) => {
        const gradientIndex = (index % 4) + 1;

        return (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div
              className={`group p-8 rounded-3xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mb-8 bg-gradient-${gradientIndex}`}
            >
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h2>
              <p className="text-lg text-muted-foreground">{blog.subTitle}</p>
              <div className="flex items-center gap-2 text-sm  text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <p className="text-xs text-muted-foreground  mb-0">
                  {" "}
                  {new Date(blog.publishedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
