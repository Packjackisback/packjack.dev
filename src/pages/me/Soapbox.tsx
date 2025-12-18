import PrimaryContainer from '../../templates/PrimaryContainer';
import BlogList from '../../templates/BlogList';

export default function Soapbox() {
  return (
    <PrimaryContainer>
			<h1>Soapbox</h1>
      <BlogList folder="soapbox" />
    </PrimaryContainer>
  );
}
