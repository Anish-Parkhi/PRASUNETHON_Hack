import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Cart() {
  const location = useLocation();
  console.log(location.state.cart);
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFECCF 45.22%)',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <div className="border-2 mt-10 text-center rounded-md shadow-md w-3/5 m-auto p-4 bg-white">
        <div className="text-3xl">Your cart</div>
        <div>
          {location?.state?.cart?.map((item) => (
            <div key={item.id} className="flex justify-center gap-20 my-4">
              <div>
                <img src={item.img} alt={item.name} className="w-24 h-24" />
              </div>
              <div>
                <div className="text-xl text-left">{item.name}</div>
                <div className="text-xl text-left">₹ {item.price}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-center border-2 bg-black text-white rounded-md p-2 m-auto">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
