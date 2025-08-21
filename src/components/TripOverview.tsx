import { Calendar, Users, DollarSign, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TripOverviewProps {
  travelerName: string;
  destination: string;
  startDate: string;
  duration: string;
  pax: string;
  tripId: string;
  totalPrice: string;
}

export const TripOverview = ({
  travelerName,
  destination,
  startDate,
  duration,
  pax,
  tripId,
  totalPrice
}: TripOverviewProps) => {
  return (
    <section className="mb-16">
      <div className="relative overflow-hidden bg-gradient-dawn text-white py-20 px-6 rounded-3xl mb-12 shadow-dramatic">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-aurora rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-forest rounded-full translate-y-32 -translate-x-32 opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-snow to-glacier bg-clip-text text-transparent">
                Himachal Pradesh
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-light">Adventure Awaits</span>
            </h1>
          </div>
          <div className="space-y-3">
            <p className="text-2xl md:text-3xl font-semibold text-white/95 mb-3">
              {travelerName}'s Epic Journey
            </p>
            <div className="inline-flex items-center px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <p className="text-lg font-medium">
                Trip ID: <span className="font-mono text-glacier">{tripId}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="group hover-lift card-glass border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mountain opacity-5"></div>
          <CardHeader className="flex flex-row items-center space-y-0 pb-3 relative">
            <div className="p-3 rounded-xl bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-sm font-semibold text-muted-foreground">Destination</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-card-foreground mb-2">{destination}</div>
            <div className="h-1 w-12 bg-gradient-mountain rounded-full"></div>
          </CardContent>
        </Card>

        <Card className="group hover-lift card-glass border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-forest opacity-5"></div>
          <CardHeader className="flex flex-row items-center space-y-0 pb-3 relative">
            <div className="p-3 rounded-xl bg-secondary/10 mr-3 group-hover:bg-secondary/20 transition-colors">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <CardTitle className="text-sm font-semibold text-muted-foreground">Journey</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-card-foreground mb-1">{duration}</div>
            <p className="text-sm text-muted-foreground font-medium">Starting {startDate}</p>
            <div className="h-1 w-12 bg-gradient-forest rounded-full mt-2"></div>
          </CardContent>
        </Card>

        <Card className="group hover-lift card-glass border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-sunset opacity-5"></div>
          <CardHeader className="flex flex-row items-center space-y-0 pb-3 relative">
            <div className="p-3 rounded-xl bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="text-sm font-semibold text-muted-foreground">Travelers</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-card-foreground mb-2">{pax}</div>
            <div className="h-1 w-12 bg-gradient-sunset rounded-full"></div>
          </CardContent>
        </Card>

        <Card className="group hover-lift card-glass border-0 relative overflow-hidden md:col-span-2 lg:col-span-3">
          <div className="absolute inset-0 bg-gradient-aurora opacity-5"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-dawn rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
          <CardHeader className="flex flex-row items-center space-y-0 pb-4 relative">
            <div className="p-4 rounded-xl bg-accent/10 mr-4 group-hover:bg-accent/20 transition-colors group-hover:scale-110 transition-transform">
              <DollarSign className="h-7 w-7 text-accent" />
            </div>
            <CardTitle className="text-lg font-semibold text-muted-foreground">Total Investment</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex items-baseline gap-4 mb-3">
              <div className="text-5xl font-bold text-gradient">{totalPrice}</div>
              <div className="px-4 py-1 bg-accent/10 rounded-full">
                <span className="text-xs font-semibold text-accent">ALL INCLUSIVE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Including GST • All accommodations & transport included</p>
            <div className="h-1.5 w-24 bg-gradient-aurora rounded-full mt-3"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};