import React from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const reviews = [
    {
      id: 1,
      name: "Michael Weber",
      rating: 5,
      text: "ACENCIA hat unsere bAV-Verwaltung komplett digitalisiert. Der Service ist hervorragend und das Team sehr kompetent. Absolute Empfehlung!",
      initials: "MW",
      date: "vor 2 Monaten"
    },
    {
      id: 2,
      name: "Dr. Petra Schneider",
      rating: 5,
      text: "Endlich eine bAV-Lösung, die wirklich funktioniert! ACENCIA hat unser HR-Team entlastet und unsere Mitarbeiter sind begeistert.",
      initials: "PS",
      date: "vor 6 Wochen"
    },
    {
      id: 3,
      name: "Thomas Müller",
      rating: 5,
      text: "Exzellente Betreuung bei der Einrichtung unserer betrieblichen Altersvorsorge. Sehr zu empfehlen für alle Unternehmen!",
      initials: "TM",
      date: "vor 3 Wochen"
    },
    {
      id: 4,
      name: "Sandra Hoffmann",
      rating: 4,
      text: "Professionelle Beratung und reibungslose Abwicklung. Die digitale Plattform macht alles so viel einfacher. Kleinere Startschwierigkeiten, aber insgesamt top!",
      initials: "SH",
      date: "vor 1 Monat"
    },
    {
      id: 5,
      name: "Jürgen Maier",
      rating: 5,
      text: "Als Geschäftsführer kann ich ACENCIA nur empfehlen. Die rechtssichere Umsetzung und der digitale Ansatz überzeugen vollständig.",
      initials: "JM",
      date: "vor 5 Tagen"
    },
    {
      id: 6,
      name: "Lisa Wagner",
      rating: 5,
      text: "ACENCIA überzeugt durch Kompetenz und Innovation. Die bAV-Lösung ist genau das, was wir gesucht haben. Perfekt!",
      initials: "LW",
      date: "vor 2 Wochen"
    },
    {
      id: 7,
      name: "Robert Klein",
      rating: 5,
      text: "Fantastische Zusammenarbeit! Das Team von ACENCIA hat uns bei jedem Schritt perfekt begleitet. Sehr empfehlenswert!",
      initials: "RK",
      date: "vor 1 Woche"
    },
    {
      id: 8,
      name: "Christine Bauer",
      rating: 4,
      text: "Sehr gute digitale Lösung für unsere bAV. Der Implementierungsprozess war durchdacht und das Support-Team hilfsbereit.",
      initials: "CB",
      date: "vor 8 Tagen"
    },
    {
      id: 9,
      name: "Anna Schmidt",
      rating: 5,
      text: "Die digitale bAV-Verwaltung von ACENCIA ist ein Gamechanger. Effizient, modern und sehr benutzerfreundlich!",
      initials: "AS",
      date: "vor 4 Tagen"
    },
    {
      id: 10,
      name: "Markus Richter",
      rating: 5,
      text: "30 Jahre Erfahrung spürt man in jedem Beratungsgespräch. ACENCIA macht bAV wirklich einfach und verständlich.",
      initials: "MR",
      date: "vor 3 Tagen"
    }
];

const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`}
            />
        ))}
    </div>
);

const GoogleReviews = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full mb-4">
                <Star className="w-4 h-4" />
                <span className="font-semibold text-sm tracking-wide uppercase">Google Bewertungen</span>
            </div>
            <h2 className="text-h2 font-display text-text-primary">
                Das sagen unsere Kunden
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-4">
                <StarRating rating={5} />
                <span className="font-semibold text-lg text-text-primary ml-2">4.9</span>
                <span className="text-text-secondary">• 100+ Bewertungen</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="flex flex-col">
              <CardHeader className="flex-row items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{review.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-text-primary">{review.name}</h4>
                  <p className="text-sm text-text-subtle">{review.date}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <StarRating rating={review.rating} />
                <p className="text-text-secondary mt-4 flex-grow">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button asChild variant="outline">
                <a href="https://share.google/Jond28GXjbVpDUfkj" target="_blank" rel="noopener noreferrer">
                    Alle Bewertungen auf Google ansehen
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;