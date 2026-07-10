import StoryLibraryExperience from '../../components/StoryLibraryExperience';
import { stories } from '../../lib/stories';

export default function StorybookPage() {
  return <StoryLibraryExperience stories={stories} />;
}
