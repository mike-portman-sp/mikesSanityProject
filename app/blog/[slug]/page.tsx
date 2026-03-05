import { client } from "../../../studio/client";
import MainMenu from "../../components/layout/mainMenu";
import { groq } from "next-sanity";
import { PortableText } from "next-sanity";
import { getSiteSettings } from "../../queries/getSiteSettings";
import { generateMetadata as genMeta } from "../../queries/generateMetaData";
import { Metadata } from "next";

/* ----------------------------------
   GROQ queries
---------------------------------- */
const blogPostQuery = groq`
  *[_type == "blogs" && slug.current == $slug][0]{
    title,
    subTitle,
    publishedDate,
    body{
      content
    },
    seo{
      metaTitle,
      metaDescription,
      metaImage{
        asset->{
          url
        }
      }
    }
  }
`;

const mainMenuQuery = groq`
  *[_type == "mainMenu"][0]{
    title,
    menuItems[]{
      _key,
      _type,
      title,
      link{
        _type,
        linkType,
        external,
        internal->,
        file{
          asset->
        }
      }
    }
  }
`;

/* ----------------------------------
   Static params
---------------------------------- */
export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blogs" && defined(slug.current)]{
      "slug": slug.current
    }`,
  );

  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

/* ----------------------------------
   Generate Metadata
---------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [blog, settings] = await Promise.all([
    client.fetch(blogPostQuery, { slug }),
    getSiteSettings(),
  ]);


  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return genMeta({
    title: blog.title,
    description: blog.subTitle,
    seo: blog.seo,
    defaultSeo: settings?.defaultSeo,
    siteName: settings?.siteName,
    siteUrl: settings?.siteUrl,
    path: `/blog/${slug}`,
  });
}

/* ----------------------------------
   Page component
---------------------------------- */
type BlogSubPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogSubPage({ params }: BlogSubPageProps) {
  const { slug } = await params;

  const [blog, mainMenu] = await Promise.all([
    client.fetch(blogPostQuery, { slug }),
    client.fetch(mainMenuQuery),
  ]);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <MainMenu mainMenu={mainMenu} />

      <article className="max-w-6xl mx-auto container py-16">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        {blog.subTitle && (
          <p className="text-xl text-muted-foreground mb-6">{blog.subTitle}</p>
        )}

        {blog.publishedDate && (
          <p className="text-sm text-gray-500 mb-10">
            {new Date(blog.publishedDate).toLocaleDateString()}
          </p>
        )}

        <div className="prose max-w-none">
          {blog.body?.content ? (
            <PortableText value={blog.body.content} />
          ) : (
            <p>No content available - add content in Sanity Studio</p>
          )}
        </div>
      </article>
    </>
  );
}
