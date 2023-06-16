/*'use client';
import { useRouter } from 'next/navigation';
import { addQuantity, subtractQuantity } from './actions';

type Props = {
  quantity: string;
  product: number;
};

export default function ChangeQuantity(props: Props) {
  const router = useRouter();
  return (
    <div>
      <button
        name="subtract-quantity"
        formAction={async () => {
          router.refresh();
          await subtractQuantity(props.product);
        }}
      >
        -
      </button>
      {props.product.quantity}
      <button
        formAction={async () => {
          router.refresh();
          await addQuantity(props.product);
        }}
      >
        +
      </button>
    </div>
  );
}
*/
