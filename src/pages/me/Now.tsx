import PrimaryContainer from '../../templates/PrimaryContainer';
import SingleContent from '../../templates/SingleContent';

export default function Now() {
  return (
    <PrimaryContainer>
			<h1>Now</h1>
      <SingleContent folder="now" />
    </PrimaryContainer>
  );
}
