import Column from "./column";
import Card from "./card";
import CardBG from "./cardBG";
import InnerRow from "./innerRow";
type RowProps = {
  columns?: any[];
  columnLayout?: string;
  title?: string; // Keep this
  backgroundColor?: string; // ← Add this
  row?: any; // Add this for the entire row data
};

export default function Row({ columns, columnLayout, title, backgroundColor  }: RowProps) {
  // Changed rowQuery to title
  const gridColsMap: Record<string, string> = {
    "1": "md:grid-cols-1",
    "2": "md:grid-cols-2",
    "3": "md:grid-cols-3",
    "4": "md:grid-cols-4",
    "5": "md:grid-cols-5",
    "6": "md:grid-cols-6",
    "7": "md:grid-cols-7",
    "8": "md:grid-cols-8",
    "9": "md:grid-cols-9",
    "10": "md:grid-cols-10",
    "11": "md:grid-cols-11",
    "12": "md:grid-cols-12",
  };

  const gridClass = gridColsMap[columnLayout || "1"] || "md:grid-cols-2";

  return (
    <section id={title?.toLowerCase()} className={`row pb-lg mx-auto ${backgroundColor}`} >
      <div
        className={`grid ${gridClass} gap-8 md:gap-14 container-custom mx-auto px-6`}
      >
        {columns?.map((item) => {
          // Check if it's a card type first
          if (item._type === "card") {
            // Check for image background card
            if (item.cardStyle === "card-image-bg") {
              return <CardBG key={item._key} card={item} />;
            }
            // Check for gradient cards
            if (item.cardStyle?.startsWith("bg-gradient-")) {
              return <Card key={item._key} card={item} />;
            }
            // Default card rendering
            return <Card key={item._key} card={item} />;
          }

          // Handle innerRow
          if (item._type === "innerRow") {
            return (
              <InnerRow
                key={item._key}
                columns={item.contentBuilder}
                columnLayout={item.columnLayout}
                title={item.title}
              />
            );
          }
          return <Column key={item._key} column={item} />;
        })}
      </div>
    </section>
  );
}
