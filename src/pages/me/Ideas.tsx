import PrimaryContainer from '../../templates/PrimaryContainer';
import BlogList from '../../templates/BlogList';

export default function Ideas() {
  return (
    <PrimaryContainer>
			<h1>Ideas</h1>
      <BlogList folder="ideas" />
    </PrimaryContainer>
  );
}
