import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Utensils } from 'lucide-react';

interface HotelCardProps {
  night: string;
  date: string;
  location: string;
  hotelName: string;
  roomType: string;
  roomCount: string;
  meals: string;
  image: string;
}

export const HotelCard = ({
  night,
  date,
  location,
  hotelName,
  roomType,
  roomCount,
  meals,
  image
}: HotelCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift card-glass border-0 relative">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={location}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
        
        <div className="absolute top-4 left-4">
          <Badge className="bg-gradient-mountain text-white border-0 font-bold px-3 py-1 shadow-lg">
            {night}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold">
            {date}
          </Badge>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{location}</h3>
          <p className="text-glacier font-semibold text-sm">{hotelName}</p>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
          <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
            <Bed className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <span className="text-sm font-semibold text-card-foreground">{roomCount} {roomType}</span>
            <p className="text-xs text-muted-foreground">Premium accommodations</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
          <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Utensils className="h-4 w-4 text-accent" />
          </div>
          <div>
            <span className="text-sm font-semibold text-card-foreground">{meals}</span>
            <p className="text-xs text-muted-foreground">Delicious local cuisine</p>
          </div>
        </div>
        
        <div className="pt-2">
          <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-mountain rounded-full transition-all duration-1000 group-hover:w-full"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};