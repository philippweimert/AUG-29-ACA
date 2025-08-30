import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Rocket, Building, Building2, Users, ArrowRight } from 'lucide-react';

const segments = [
  {
    icon: <Rocket className="w-8 h-8 text-accent-500" />,
    title: 'Start-up',
    subtitle: '5-50 Mitarbeiter',
    description: 'Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum.',
  },
  {
    icon: <Building className="w-8 h-8 text-accent-500" />,
    title: 'Mittelstand',
    subtitle: '50-1000 Mitarbeiter',
    description: 'Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen.',
  },
  {
    icon: <Building2 className="w-8 h-8 text-accent-500" />,
    title: 'Konzern',
    subtitle: '1000+ Mitarbeiter',
    description: 'Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen.',
  },
];

const CustomerSegments = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-500 px-3 py-1 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="font-semibold text-sm tracking-wide uppercase">Für jede Unternehmensgröße</span>
          </div>
          <h2 className="text-h2 font-display text-text-primary">
            Unsere Kunden vertrauen uns
          </h2>
          <p className="text-lg text-text-secondary mt-4">
            Von Start-ups bis zu Konzernen – unsere digitale bAV-Plattform ist skalierbar und passt sich flexibel an Ihre individuellen Bedürfnisse an.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {segments.map((segment) => (
            <Card key={segment.title} className="text-center">
              <CardHeader className="items-center">
                {segment.icon}
                <CardTitle className="text-h3 font-display mt-4">{segment.title}</CardTitle>
                <p className="text-text-subtle">{segment.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-surface-secondary rounded-lg p-8 lg:p-12">
          <h3 className="text-h3 font-display text-text-primary mb-4">
            Unsicher, welche Lösung die richtige ist?
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr Unternehmen finden. In einem kostenlosen Beratungsgespräch analysieren wir Ihre Anforderungen.
          </p>
          <Button asChild size="lg">
            <Link to="/kontakt">
              Sprechen Sie uns an! <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;