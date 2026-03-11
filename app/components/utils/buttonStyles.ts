export const getButtonStyles = (style?: string): string => {
  switch (style) {
    case "btn--sun":
      return "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-accent text-primary-foreground  hover:scale-105 shadow-lg hover:shadow-xl h-12 px-5 text-base";
    case "btn--outline-grey":
      return "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full  ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-card text-foreground border border-border hover:border-primary hover:scale-105 shadow-sm h-12 px-5 text-base";
    case "btn--plain":
      return "text-primary hover:underline px-0";
    default:
      return "inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline";
  }
};
