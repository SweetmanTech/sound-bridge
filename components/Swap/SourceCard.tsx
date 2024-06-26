import { Card } from '../Card/Card';
import SourceBalance from './SourceBalance';
import SourceChain from './SourceChain';

const SourceCard = () => (
  <Card className="p-6 space-y-4">
    <div className=" text-sm text-start text-gray-500">Pay From</div>
    <div className="flex justify-between items-center gap-3">
      <SourceChain />
      <SourceBalance />
    </div>
  </Card>
);

export default SourceCard;
