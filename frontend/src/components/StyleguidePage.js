import React from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Star, Award, Users, TrendingUp, ArrowRight } from 'lucide-react';

const ColorBox = ({ colorName, hex, variable }) => (
  <div className="flex flex-col space-y-2">
    <div className={`w-full h-24 rounded-lg shadow-inner`} style={{ backgroundColor: hex }}></div>
    <div className="text-center">
      <p className="font-semibold text-text-primary">{colorName}</p>
      <p className="text-sm text-text-subtle">{hex}</p>
      <p className="text-xs text-text-subtle font-mono">{variable}</p>
    </div>
  </div>
);

const StyleguidePage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-surface-secondary border-b border-border-subtle py-4">
        <div className="container">
          <h1 className="text-h1 font-display">Design System Style Guide</h1>
          <p className="text-lg text-text-secondary">A living document for our new visual identity.</p>
        </div>
      </header>
      <main className="container py-12 space-y-16">
        {/* Colors Section */}
        <section>
          <h2 className="text-h2 font-display border-b border-border-default pb-2 mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ColorBox colorName="Primary 900" hex="#001f3d" variable="--color-primary-900" />
            <ColorBox colorName="Primary 400" hex="#88a9c3" variable="--color-primary-400" />
            <ColorBox colorName="Primary 50" hex="#e3ebf2" variable="--color-primary-50" />
            <ColorBox colorName="White" hex="#ffffff" variable="--color-white" />
            <ColorBox colorName="Accent 500" hex="#fa9939" variable="--color-accent-500" />
            <ColorBox colorName="Accent 100" hex="#f8dcbf" variable="--color-accent-100" />
          </div>
          <h3 className="text-h3 font-display mt-8 mb-4">Neutrals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <ColorBox colorName="Neutral 900" hex="#1d2630" variable="--color-neutral-900" />
            <ColorBox colorName="Neutral 800" hex="#353e48" variable="--color-neutral-800" />
            <ColorBox colorName="Neutral 700" hex="#5b636b" variable="--color-neutral-700" />
            <ColorBox colorName="Neutral 500" hex="#92979c" variable="--color-neutral-500" />
            <ColorBox colorName="Neutral 300" hex="#d5d8da" variable="--color-neutral-300" />
            <ColorBox colorName="Neutral 200" hex="#e9eaeb" variable="--color-neutral-200" />
            <ColorBox colorName="Neutral 100" hex="#f3f4f5" variable="--color-neutral-100" />
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-h2 font-display border-b border-border-default pb-2 mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <p className="text-text-subtle font-mono">H1 - Tenor Sans, 56px</p>
              <h1 className="text-h1 font-display">The quick brown fox jumps over the lazy dog</h1>
            </div>
            <div>
              <p className="text-text-subtle font-mono">H2 - Tenor Sans, 40px</p>
              <h2 className="text-h2 font-display">The quick brown fox jumps over the lazy dog</h2>
            </div>
            <div>
              <p className="text-text-subtle font-mono">H3 - Tenor Sans, 28px</p>
              <h3 className="text-h3 font-display">The quick brown fox jumps over the lazy dog</h3>
            </div>
            <div>
              <p className="text-text-subtle font-mono">H4 - Tenor Sans, 22px</p>
              <h4 className="text-h4 font-display">The quick brown fox jumps over the lazy dog</h4>
            </div>
            <div>
              <p className="text-text-subtle font-mono">Body (lg) - Open Sans, 18px</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog. This is a paragraph of body text, used for long-form content. It should be easy to read and have a comfortable line height.</p>
            </div>
            <div>
              <p className="text-text-subtle font-mono">Body (base) - Open Sans, 16px</p>
              <p className="text-base">The quick brown fox jumps over the lazy dog. This is a paragraph of body text, used for long-form content. It should be easy to read and have a comfortable line height.</p>
            </div>
             <div>
              <p className="text-text-subtle font-mono">Caption - Open Sans, 14px</p>
              <p className="text-caption">The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section>
          <h2 className="text-h2 font-display border-b border-border-default pb-2 mb-6">Components</h2>
          <div className="space-y-8">
            {/* Buttons */}
            <div>
              <h3 className="text-h3 font-display mb-4">Buttons</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg">Large Button</Button>
                <Button>Default Button</Button>
                <Button size="sm">Small Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-h3 font-display mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Card Title</span> <Award className="w-6 h-6 text-accent-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">This is a standard card component. It has a header and content.</p>
                    <Button className="w-full">Card Action</Button>
                  </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader className="items-center">
                        <Users className="w-8 h-8 text-accent-500" />
                        <CardTitle className="text-h3 font-display mt-4">Centered Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-text-secondary">This card has centered content, useful for feature highlights.</p>
                    </CardContent>
                </Card>
                 <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-h3 font-display">Hover Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-6">This card has a subtle shadow effect on hover.</p>
                    <Button asChild variant="secondary" className="group">
                        <a href="#">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StyleguidePage;
