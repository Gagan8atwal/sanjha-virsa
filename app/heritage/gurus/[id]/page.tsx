import GuruProfilePage from '../../../../components/GuruProfilePage';
import { getGuru, gurus } from '../../../../lib/sikh-history';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return gurus.map((guru) => ({ id: guru.id }));
}

export default function GuruPage({ params }: { params: { id: string } }) {
  const guru = getGuru(params.id);
  if (!guru) notFound();
  return <GuruProfilePage guru={guru} />;
}
