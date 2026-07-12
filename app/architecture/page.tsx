import type { Metadata } from 'next';
import PunjabiArchitectureMuseum from '../../components/PunjabiArchitectureMuseum';

export const metadata: Metadata = {
  title: 'Punjabi Architecture Museum | Sanjha Virsa',
  description: 'Explore Punjabi forts, gurdwaras, havelis, historic gates, temples, and civic landmarks.',
};

export default function ArchitecturePage() {
  return <PunjabiArchitectureMuseum />;
}
