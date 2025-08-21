import { TripOverview } from '@/components/TripOverview';
import { HotelCard } from '@/components/HotelCard';
import { TransportSchedule } from '@/components/TransportSchedule';
import { DayWiseItinerary } from '@/components/DayWiseItinerary';
import { InclusionsExclusions } from '@/components/InclusionsExclusions';
import { TermsConditions } from '@/components/TermsConditions';

// Import destination images
import shimlaImg from '@/assets/shimla.jpg';
import sanglaImg from '@/assets/sangla.jpg';
import kalpaImg from '@/assets/kalpa.jpg';
import kazaImg from '@/assets/kaza.jpg';
import chandratalImg from '@/assets/chandrataal.jpg';
import manaliImg from '@/assets/manali.jpg';

const hotelData = [
  {
    night: '1st Night',
    date: '17th Aug',
    location: 'Shimla',
    hotelName: 'Resort (as per selection)',
    roomType: 'Deluxe Rooms',
    roomCount: '2',
    meals: 'As per selection',
    image: shimlaImg
  },
  {
    night: '2nd Night',
    date: '18th Aug',
    location: 'Sangla',
    hotelName: 'Sangla Mansion',
    roomType: 'Deluxe Rooms',
    roomCount: '2',
    meals: 'Dinner + Breakfast',
    image: sanglaImg
  },
  {
    night: '3rd Night',
    date: '19th Aug',
    location: 'Kalpa',
    hotelName: 'Kalpa Mansion',
    roomType: 'Deluxe Rooms',
    roomCount: '2',
    meals: 'Dinner + Breakfast',
    image: kalpaImg
  },
  {
    night: '4th & 5th Night',
    date: '20–21 Aug',
    location: 'Kaza',
    hotelName: 'Dekit Homestay',
    roomType: 'Deluxe Rooms',
    roomCount: '2',
    meals: 'Dinner + Breakfast',
    image: kazaImg
  },
  {
    night: '6th Night',
    date: '22nd Aug',
    location: 'Chandrataal',
    hotelName: 'Chandrataal Camps',
    roomType: 'Deluxe Rooms',
    roomCount: '2',
    meals: 'Dinner + Breakfast',
    image: chandratalImg
  },
  {
    night: '7th Night',
    date: '23rd Aug',
    location: 'Manali',
    hotelName: 'River Pine Resorts & Spa',
    roomType: 'Deluxe Rooms',
    roomCount: '2',
    meals: 'Dinner + Breakfast',
    image: manaliImg
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <TripOverview
          travelerName="Majid Khan"
          destination="Himachal Pradesh"
          startDate="17 August 2025"
          duration="7 Nights / 8 Days"
          pax="4 Adults"
          tripId="2047802"
          totalPrice="₹1,05,110"
        />

        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Accommodations</h2>
            <p className="text-muted-foreground">Carefully selected hotels and camps for your comfort</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelData.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>
        </section>

        <TransportSchedule />
        <DayWiseItinerary />
        <InclusionsExclusions />
        <TermsConditions />
      </div>
    </div>
  );
};

export default Index;
