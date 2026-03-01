"use client"; // Add this for useState

import { useState } from "react";

export default function Form({ form }) {
  console.log(form.buttonStyle);

  const getButtonStyles = () => {
    switch (form.buttonStyle) {
      case "btn--sun":
        return "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:scale-105 shadow-lg hover:shadow-xl h-14 px-10 text-base";
      case "btn--outline-grey":
        return "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-card text-foreground border border-border hover:border-primary hover:scale-105 shadow-sm h-14 px-10 text-base";
      case "btn--plain":
        return "text-primary hover:underline px-0";
      default:
        return "inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline";
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast.success("Message sent! I'll get back to you soon 💌");
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Decorative */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blob" />
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-accent/20 blob-2" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-background border border-border shadow-soft">
            <p className="font-handwritten text-2xl text-muted-foreground mb-6">
              {form.formTitle} 👇
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="What's on your mind? ✨"
                required
              />

              <button type="submit" className={getButtonStyles()}>
                {form.formCTA} 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
