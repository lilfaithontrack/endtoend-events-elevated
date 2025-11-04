import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Legendary Rock Festival Returns This Summer",
    excerpt: "The iconic music festival announces its biggest lineup yet with over 100 artists across 5 stages.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
  },
  {
    id: 2,
    title: "Behind The Scenes: Stadium Tour Production",
    excerpt: "An exclusive look at what it takes to produce a world-class stadium concert experience.",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
  },
  {
    id: 3,
    title: "New Venue Partnership Announced",
    excerpt: "End To End Events partners with premier venues across the country for exclusive shows.",
    date: "March 8, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-20 relative overflow-hidden">
          {/* Burgundy Spotlights */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient-luxury">Latest News</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Stay updated with the latest music events, artist announcements, and industry insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-white/50 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {article.excerpt}
                    </p>
                    <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
