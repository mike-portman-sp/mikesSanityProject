import Column from "./column";
import Card from "./card";
import CardBG from "./cardBG";

type RowProps = {
  columns?: any[];
  columnLayout?: string;
  title?: string;
};

export default function InnerRow({ columns, columnLayout, title }: RowProps) {
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

  const colCount = parseInt(columnLayout || "1");
  const gridClass = gridColsMap[columnLayout || "1"] || "md:grid-cols-2";
  const isOrphan = !!columns?.length && columns.length % colCount === 1;

  const renderItem = (item: any) => {
    if (item._type === "card") {
      if (item.cardStyle === "card-image-bg") return <CardBG card={item} />;
      return <Card card={item} />;
    }
    return <Column column={item} />;
  };

  return (
    <section
      id={title?.toLowerCase()}
      className="row inner-row pb-lg w-full mx-auto"
    >
      <div
        className={`grid ${gridClass} gap-8 md:gap-14 container-custom mx-auto`}
      >
        {columns?.map((item, index) => {
          if (isOrphan && index === columns.length - 1) {
            return (
              <div key={item._key} className="col-span-full flex justify-center">
                <div style={{ width: `${(100 / colCount).toFixed(3)}%` }}>
                  {renderItem(item)}
                </div>
              </div>
            );
          }

          if (item._type === "card") {
            if (item.cardStyle === "card-image-bg") return <CardBG key={item._key} card={item} />;
            return <Card key={item._key} card={item} />;
          }

          return <Column key={item._key} column={item} />;
        })}
      </div>
    </section>
  );
}
