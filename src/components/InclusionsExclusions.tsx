import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const inclusions = [
  'Private vehicle transfers',
  'Accommodation with mentioned meals',
  'Toll, parking & driver charges',
  'Pickup & drop services',
  '5% GST included'
];

const exclusions = [
  'Personal expenses, tips, permits',
  'Meals not mentioned in itinerary',
  'Extra activities outside itinerary',
  'Rohtang Pass charges',
  'Medical emergencies & force majeure'
];

export const InclusionsExclusions = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">What's Included & Excluded</h2>
        <p className="text-muted-foreground">Clear breakdown of what your package covers</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-card border-0 bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                <Check className="h-5 w-5" />
              </div>
              Package Inclusions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-card-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-destructive/10 to-destructive/5">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              <div className="p-2 rounded-full bg-destructive text-destructive-foreground">
                <X className="h-5 w-5" />
              </div>
              Package Exclusions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {exclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-card-foreground">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};