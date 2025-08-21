import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, MapPin, ArrowRight } from 'lucide-react';

const transportData = [
  { day: 1, date: '17 Aug', route: 'Chandigarh → Shimla', description: '4–5 hrs scenic drive' },
  { day: 2, date: '18 Aug', route: 'Shimla → Sangla', description: '220 km, sightseeing en route' },
  { day: 3, date: '19 Aug', route: 'Sangla → Kalpa', description: 'via Chitkul Village' },
  { day: 4, date: '20 Aug', route: 'Kalpa → Kaza', description: '200 km via Nako Lake, Tabo' },
  { day: 5, date: '21 Aug', route: 'Kaza Local', description: 'Key Monastery, Chicham Bridge' },
  { day: 6, date: '22 Aug', route: 'Kaza → Chandrataal', description: 'via Kunzum Pass' },
  { day: 7, date: '23 Aug', route: 'Chandrataal → Manali', description: 'via Atal Tunnel' },
  { day: 8, date: '24 Aug', route: 'Manali → Chandigarh', description: '310 km, airport drop' },
];

export const TransportSchedule = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Transportation Journey</h2>
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-mountain/10 backdrop-blur-md rounded-full border border-primary/20">
          <div className="p-2 bg-primary/20 rounded-full">
            <Car className="h-5 w-5 text-primary" />
          </div>
          <span className="font-semibold text-card-foreground">Private Ertiga • Professional Driver • All Transfers Included</span>
        </div>
      </div>

      <div className="space-y-6">
        {transportData.map((item, index) => (
          <Card key={index} className="group hover-lift card-glass border-0 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-mountain"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-mountain-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Badge className="bg-gradient-mountain text-white border-0 text-base px-4 py-2 font-bold shadow-lg">
                      Day {item.day}
                    </Badge>
                    <div className="absolute -inset-1 bg-gradient-mountain rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge className="bg-white/10 backdrop-blur-md text-card-foreground border border-border/50 font-semibold px-3 py-1">
                      {item.date}
                    </Badge>
                    <div className="flex items-center gap-3 text-xl font-bold text-card-foreground">
                      {item.route.includes('→') ? (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                              <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <span className="group-hover:text-primary transition-colors">{item.route.split(' → ')[0]}</span>
                          </div>
                          <div className="px-3">
                            <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                              <MapPin className="h-5 w-5 text-secondary" />
                            </div>
                            <span className="group-hover:text-secondary transition-colors">{item.route.split(' → ')[1]}</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <span className="group-hover:text-primary transition-colors">{item.route}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium group-hover:text-card-foreground transition-colors duration-300">{item.description}</p>
                  
                  <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-mountain rounded-full transition-all duration-1000 group-hover:w-full"
                      style={{ width: `${(index + 1) * 12.5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};