import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Shield, AlertTriangle, Scale } from 'lucide-react';

const paymentMethods = [
  { method: 'UPI', details: 'deyor.adventures@icici' },
  { method: 'Bank Transfer', details: 'HDFC Bank, Acc: 50200020693595, IFSC: HDFC0000485' }
];

const terms = [
  'Hotels may be shifted to similar category based on availability',
  'Bookings confirmed only after payment receipt',
  'Changes/cancellations may have penalties as per policy',
  'Travel insurance is highly recommended for all travelers',
  'All disputes governed under Gurgaon jurisdiction'
];

export const TermsConditions = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Payment & Terms</h2>
        <p className="text-muted-foreground">Important information for your booking</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="shadow-card border-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {paymentMethods.map((payment, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {payment.method}
                  </Badge>
                </div>
                <p className="text-sm font-mono text-muted-foreground">
                  {payment.details}
                </p>
              </div>
            ))}
            <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-accent-foreground font-medium flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Secure payment processing • Instant confirmation
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0 bg-gradient-to-br from-earth/10 to-earth/5">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              <Scale className="h-6 w-6 text-earth" />
              Terms & Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {terms.map((term, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg border">
                <AlertTriangle className="h-4 w-4 text-earth mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">{term}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-card border-0 bg-gradient-to-r from-accent/10 to-sunrise/10">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-accent" />
            <span className="font-semibold text-card-foreground">Ready to Start Your Adventure?</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Contact us for booking confirmation and any queries about your Himachal Pradesh journey
          </p>
        </CardContent>
      </Card>
    </section>
  );
};