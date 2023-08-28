import { useEffect } from 'react'

function Product({ products, cart, setCart }) {

    const addCart = (product) => {
        if (cart.find((item) => item.id === product.id)) {
            setCart(
                cart.map((item) => ({
                    ...item,
                    num: item.id === product.id ? item.num + 1 : item.num,
                }))
            );
        } else {
            setCart([...cart, { ...product, num: 1 }]);
        }
    };

    console.log(cart)
    return (<>
        {
            products.map((item) =>
                <div
                    key={item.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => addCart(item)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{item.name}</h5>
                        <small>${item.price}</small>
                    </div>
                    <p className="mb-1">{item.description}</p>
                </div>
            )
        }
    </>)
}

export default Product