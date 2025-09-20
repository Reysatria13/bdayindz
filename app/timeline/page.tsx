import Timeline from '../../components/Timeline';

const entries = [
  {
    icon: '💕',
    title: 'The day we first met',
    description: 'A magical moment that started it all.'
  },
  {
    icon: '🏯',
    title: 'Our trip to Kyoto',
    description: 'Exploring new places together, hand in hand.'
  },
  {
    icon: '🎂',
    title: 'Happy Birthday 2025',
    description: 'Celebrating you, today and always.'
  }
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-beige py-8">
      <h1 className="text-2xl font-playful text-terracotta text-center mb-8">Our Story, My Wishes for You</h1>
      <Timeline entries={entries} />
    </main>
  );
}
