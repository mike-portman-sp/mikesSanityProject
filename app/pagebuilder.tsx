import Row from "./components/layout/row";
import Hero from "./components/hero/hero";
import BlogList from "./components/blog/blogList";
export default function PageBuilder({ blocks }: { blocks: any[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} hero={block} />;
          case "row":
            return (
              <Row
                key={block._key}
                columns={block.contentBuilder}
                columnLayout={block.columnLayout}
                title={block.title}
               backgroundColor={block.backgroundColor ? `${block.backgroundColor}` : undefined}  // ← Add bg- prefix
              />
            );
          case "blogList":
            return <BlogList key={block._key} />;
          default:
            return null;
        }
      })}
    </>
  );
}
