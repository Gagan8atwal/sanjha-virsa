import StoryReaderExperience from '../../../components/StoryReaderExperience';
import { getStory, stories } from '../../../lib/stories';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return stories.map((story) => ({ id: story.id }));
}

export default function StoryReaderPage({ params }: { params: { id: string } }) {
  const story = getStory(params.id);
  if (!story) notFound();
  return <StoryReaderExperience story={story} />;
}
