import { Dispatch } from 'react';
import { formatCurrency } from '../helpers';
import { OrderItem } from "../types"
import { OrderActions } from '../reducers/order-reducer';

type orderContentProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}
export default function OrderContens({order, dispatch}: orderContentProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {
                order.map(item =>(
                    <div 
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-400 py-5 last-of-type:border-b"
                    >
                        <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                        </div>
                        <button
                            className="bg-red-500 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => dispatch({ type:'remove-item', payload: {id: item.id}})}
                        >
                            x
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
