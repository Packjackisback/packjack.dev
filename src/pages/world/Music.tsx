import PrimaryContainer from '../../templates/PrimaryContainer';
import BlogList from '../../templates/BlogList';

export default function Music() {
  return (
    <PrimaryContainer>
			<h1>Music</h1>
      <BlogList folder="music" />
    </PrimaryContainer>
  );
}
