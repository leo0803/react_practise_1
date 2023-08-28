import Cart from "./components/Cart"
import Order from "./components/Order"
import Product from "./components/Product"
import { useEffect, useState } from 'react';
function App() {

  const iniDatas = [
    {
      id: 1,
      name: "珍珠奶茶",
      description: "香濃奶茶搭配QQ珍珠",
      price: 50
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      description: "清新冬瓜配上新鮮檸檬",
      price: 45
    },
    {
      id: 3,
      name: "翡翠檸檬",
      description: "綠茶與檸檬的完美結合",
      price: 55
    },
    {
      id: 4,
      name: "四季春茶",
      description: "香醇四季春茶，回甘無比",
      price: 45
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      description: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50
    },
    {
      id: 6,
      name: "檸檬冰茶",
      description: "檸檬與冰茶的清新組合",
      price: 45
    },
    {
      id: 7,
      name: "芒果綠茶",
      description: "芒果與綠茶的獨特風味",
      price: 55
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      description: "抹茶與鮮奶的絕配",
      price: 60
    }
  ];
  const [products, setProducts] = useState(iniDatas);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  //console.log(cart)
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <h2>產品列表</h2>
            <div className="list-group">
            <Product products={products} cart={cart} setCart={setCart} />
            </div>
          </div>
          <div className="col-lg-8">
            <h2>購物車列表</h2>
            {
              cart.length ? (
                <Cart cart={cart} setCart={setCart} order={order} setOrder={setOrder} />
              ) : (
                <div className='alert alert-primary' role='alert'>
                  請選擇商品
                </div>
              )
            }
          </div>
        </div>
        <hr className=" mt-5" />
        <div className="row justify-content-center mt-5 ">
          <div className="col-12">
            <h2>訂單列表</h2>
            {
              order.length ? (
                <Order order={order} setOrder={setOrder} />
              ) : (
                <div className='alert alert-warning' role='alert'>
                  尚未建立訂單
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
