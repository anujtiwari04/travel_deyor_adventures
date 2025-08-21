import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Camera } from 'lucide-react';

const itineraryData = [
  {
    day: 1,
    date: '17 Aug',
    title: 'Chandigarh → Shimla',
    description: '4–5 hrs scenic drive through colonial charm and pine forests',
    highlights: ['Colonial Architecture', 'Pine Forests', 'Mountain Views'],
    image: '/src/assets/shimla.jpg'
  },
  {
    day: 2,
    date: '18 Aug',
    title: 'Shimla → Sangla',
    description: '220 km journey along Baspa River with Kinner Kailash Range views',
    highlights: ['Baspa River', 'Kinner Kailash Range', 'Bering Nag Temple'],
    image: '/src/assets/sangla.jpg'
  },
  {
    day: 3,
    date: '19 Aug',
    title: 'Sangla → Kalpa',
    description: 'Journey via Chitkul village, Kinnaur Kailash Range, and scenic viewpoints',
    highlights: ['Chitkul Village', 'Suicide Point', 'Roghi Village'],
    image: '/src/assets/kalpa.jpg'
  },
  {
    day: 4,
    date: '20 Aug',
    title: 'Kalpa → Kaza',
    description: '200 km adventure through Nako Lake, Tabo Monastery, and Pin Valley',
    highlights: ['Nako Lake', 'Tabo Monastery', 'Pin Valley'],
    image: '/src/assets/kaza.jpg'
  },
  {
    day: 5,
    date: '21 Aug',
    title: 'Explore Kaza',
    description: 'Full day exploring Key Monastery, Sakya Tangyud Monastery, and local attractions',
    highlights: ['Key Monastery', 'Chicham Bridge', 'Local Cafes & Market'],
    image: '/src/assets/kaza.jpg'
  },
  {
    day: 6,
    date: '22 Aug',
    title: 'Kaza → Chandrataal',
    description: 'Journey via Kunzum Pass to the pristine Chandrataal Lake for camping',
    highlights: ['Kunzum Pass', 'Chandrataal Lake', 'High Altitude Camping'],
    image: '/src/assets/chandrataal.jpg'
  },
  {
    day: 7,
    date: '23 Aug',
    title: 'Chandrataal → Manali',
    description: 'Scenic drive through Batal, Atal Tunnel, pine forests, and riverside cafes',
    highlights: ['Atal Tunnel', 'Pine Forests', 'Riverside Cafes'],
    image: '/src/assets/manali.jpg'
  },
  {
    day: 8,
    date: '24 Aug',
    title: 'Manali → Chandigarh',
    description: '310 km journey through scenic Kullu Valley with airport drop',
    highlights: ['Kullu Valley', 'Airport Drop', 'Journey Completion'],
    image: '/src/assets/manali.jpg'
  }
];

export const DayWiseItinerary = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Day-wise Journey</h2>
        <p className="text-muted-foreground">Experience the best of Himachal Pradesh across 8 memorable days</p>
      </div>

      <div className="grid gap-6">
        {itineraryData.map((day, index) => (
          <Card key={index} className="overflow-hidden shadow-card border-0 bg-card hover:shadow-elevation transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-primary text-primary-foreground">
                      Day {day.day}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {day.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {day.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground">{day.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2 flex items-center gap-2">
                      <Camera className="h-4 w-4 text-accent" />
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {day.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};