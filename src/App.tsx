import MenuItem from "./components/MenuItem"
import OrderContens from "./components/OrderContens"
import OrderTotals from "./components/OrderTotals"
import TipPorcentageForm from './components/TipPorcentageForm';

import { menuItems } from "./db/db"

import useOrder from "./hooks/useOrder"

function App() {
 const { order,addItem, removeItem , tip, setTip, placeOrder} = useOrder()
  return (
    <>
    <header className=" bg-teal-700 py-5 ">
      <h1 className="text-center text-3xl font-bold">Calculadora de Propinas y Consumos</h1>    

    </header>

    <main className=" max-w-7xl mx-auto py-10 grid md:grid-cols-2  ">
      <div className="p-5">
        <h2 className="font-black text-4xl">Menu</h2>
        <div className="mt-10 space-y-3 ">
        {menuItems.map(item =>
          (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>
      </div>

      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {order.length ? (
          <>
            <OrderContens 
              order={order}
              removeItem={removeItem}
            />

            <TipPorcentageForm
              setTip={setTip}
              tip={tip}
            />
            <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
            />
          </>
        ):(
          <p className="text-center">La Orden esta Vacia</p>

        )}
      </div>
    </main>
    </>
  )
}

export default App
