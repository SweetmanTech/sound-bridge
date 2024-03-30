import { Card } from '../Card/Card';
import DestinationChain from './DestinationChain';
import DestinationAmount from './DestinationAmount';
import CollectionInput from './CollectionInput';

const DestinationCard = () => (
  <Card className="p-6 space-y-4">
    <DestinationChain />
    <CollectionInput />
    <DestinationAmount />
  </Card>
);

export default DestinationCard;