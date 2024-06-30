import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import image1 from '../../assets/shop/i1.svg';
import image2 from '../../assets/shop/i2.svg';
import image3 from '../../assets/shop/i3.svg';
import image4 from '../../assets/shop/i4.svg';
import image5 from '../../assets/shop/i5.svg';
import image6 from '../../assets/shop/i6.svg';
import image7 from '../../assets/shop/i7.svg';
import image8 from '../../assets/shop/i8.svg';
import Navbar from '../Navbar/Navbar';

const shopData = [
  {
    id: 1,
    name: 'Tata Salt (packet)',
    price: 50,
    quantity: '(1 kg)',
    img: image1,
  },
  {
    id: 8,
    name: 'Maagie (packet)',
    price: 30,
    quantity: '(100 gms)',
    img: image8,
  },
  {
    id: 3,
    name: 'Nescafe Gold (bottle)',
    price: 250,
    quantity: '(300 gm)',
    img: image3,
  },
  {
    id: 4,
    name: 'Almonds (packet)',
    price: 500,
    quantity: '(500 gms)',
    img: image4,
  },
  {
    id: 5,
    name: 'Aashirvaad Atta (packet)',
    price: 120,
    quantity: '(1 kg)',
    img: image5,
  },
  {
    id: 6,
    name: 'Saffola gold oil (packet)',
    price: 100,
    quantity: '(1 L)',
    img: image6,
  },
  {
    id: 7,
    name: 'Amul Taaza (packet)',
    price: 30,
    quantity: '(500 ml)',
    img: image7,
  },
  {
    id: 2,
    name: 'Surf Excel Matic (bottle)',
    price: 138,
    quantity: '(1 L)',
    img: image2,
  },
];



function Shop() {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFECCF 45.22%)',
      }}
    >
      <Navbar />
      <div className="w-4/5 mt-4 bg-white border-2 border-grey rounded-md p-3 shadow-lg shadow-black m-auto">
        <div className="flex flex-row gap-3 p-3 mb-10">
          <div className="p-2 rounded-md w-36 text-left border-black bg-black text-white">
            All filters
          </div>
            <div className="p-2 rounded-md w-36 text-left border-black bg-black text-white">
              Sort by
              <ArrowDropDownIcon />
            </div>
          <input
            placeholder="search"
            className="border-2 border-gray-300 rounded-md p-2 w-1/4 focus:outline-none focus:border-blue-500"
          />
          <div className="ml-auto self-end justify-self-end p-2 rounded-md w-36 text-left border-black bg-black text-white flex flex-row justify-between">
            <div>Cart</div>
            <ShoppingCartIcon />
          </div>
        </div>
        <div className="flex m-auto flex-row justify-center gap-10 text-left flex-wrap">
          {shopData.map((item) => {
            return (
              <div
                className="flex flex-col justify-between w-1/5 border-2 p-3 rounded-md bg-slate-100"
                key={item.id}
              >
                <img
                  className="w-4/5 rounded-md self-center object-cover"
                  src={item.img}
                  alt={item.name}
                />
                <div>
                  <h2 className="mt-2">{item.name}</h2>
                  <p>{item.quantity}</p>
                  <div className="flex basis-1/3 mt-5 flex-row justify-between">
                    <p>₹ {item.price}</p>
                    <button className="bg-white text-black border-black border-2 w-2/5 p-1 text-sm rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
