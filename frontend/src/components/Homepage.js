import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import CustomerSegments from './CustomerSegments';
import GoogleReviews from './GoogleReviews';
import Footer from './Footer';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'; // Assuming these are available from shadcn
import { Award, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const expertiseAreas = [
  {
    title: 'bAV',
    subtitle: 'Betriebliche Altersvorsorge',
    description: 'Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise.',
    link: '/die-bav',
    icon: <TrendingUp className="w-8 h-8 text-accent-500" />,
  },
  {
    title: 'bKV',
    subtitle: 'Betriebliche Krankenversicherung',
    description: 'Gesundheitsvorsorge als Mitarbeiterbenefit – professionell implementiert.',
    link: '/bkv',
    icon: <Users className="w-8 h-8 text-accent-500" />,
  },
  {
    title: 'bUV',
    subtitle: 'Betriebliche Unfallversicherung',
    description: 'Umfassender Schutz für Ihre Mitarbeitenden – über das Gesetz hinaus.',
    link: '/buv',
    icon: <Award className="w-8 h-8 text-accent-500" />,
  },
];

const benefits = [
  'Über 30 Jahre Marktexpertise',
  'Komplette Digitalisierung aller Prozesse',
  'Individuelle Lösungen für jede Unternehmensgröße',
  'Rechtssichere Implementierung',
];

const Homepage = () => {
  return (
    <div className="bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-surface-secondary py-20 lg:py-32">
          <div className="container text-center">
            <h1 className="text-h1 font-display text-text-primary mb-4">
              Ihre Experten für betriebliche Vorsorge
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Wir helfen Unternehmen dabei, alle Herausforderungen in der bAV, bKV und bUV zu meistern. Einfach, digital und rechtssicher.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg">
              <Link to="/kontakt">Jetzt Beratung anfordern</Link>
            </Button>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-h2 font-display text-text-primary">Unsere Kernkompetenzen</h2>
                <p className="text-lg text-text-secondary mt-4">
                    Wir bieten maßgeschneiderte Lösungen in den drei zentralen Bereichen der betrieblichen Vorsorge.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area) => (
                <Card key={area.title} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-h3 font-display">{area.title}</CardTitle>
                      {area.icon}
                    </div>
                    <p className="text-text-subtle pt-1">{area.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-6">{area.description}</p>
                    <Button asChild variant="secondary" className="group">
                      <Link to={area.link}>
                        Mehr erfahren <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer & Reviews Sections */}
        <div className="bg-surface-secondary">
            <CustomerSegments />
            <GoogleReviews />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;