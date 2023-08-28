import { useMemo, useEffect, useState } from 'react'


function SelectComponent(props) {
    const max = (props.max > 10) ? props.max : 10
    let options = [];
    for (let i = 1; i <= max; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
}

function Cart({ cart, setCart, order, setOrder }) {
    const [textarea, setTextarea] = useState('');
    const deleteCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    const changNum = (id, e) => {
        setCart(
            cart.map((item) => ({
                ...item,
                num: id === item.id ? +e.target.value : item.num,
            }))
        );
    };
    const totalPrice = useMemo(() => {
        return cart.reduce(
            (total, product) => (total += product.price * product.num),
            0
        );
    }, [cart]);

    const handleCreateOrder = (value) => {
        setOrder([...order, ...value]);
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" width="50">操作</th>
                        <th scope="col">品項</th>
                        <th scope="col">描述</th>
                        <th scope="col" width="90">數量</th>
                        <th scope="col">單價</th>
                        <th scope="col">小計</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) =>
                            <tr key={item.id}>
                                <td>
                                    <button type="button" className="btn btn-sm"
                                        onClick={() => deleteCart(item.id)}
                                    >x</button>
                                </td>
                                <td>{item.name}</td>
                                <td><small>{item.description}</small></td>
                                <td>
                                    <select
                                        className='form-select form-select-sm'
                                        value={item.num}
                                        onChange={(e) => changNum(item.id, e)}>
                                        <SelectComponent max={item.num} />
                                    </select>
                                </td>
                                <td>${item.price}</td>
                                <td>${item.price * item.num}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
            <div className="text-end mb-3">
                <h5>總計: <span>${totalPrice}</span></h5>
            </div>
            <textarea
                name='message'
                id='userMessage'
                cols='30'
                rows='4'
                placeholder='請填寫訂單備註'
                className='form-control'
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <div className="text-end mt-3">
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={() => {
                        handleCreateOrder([
                            {
                                id: new Date().getTime(),
                                cart: cart,
                                message: textarea,
                                totalPrice: totalPrice,
                            },
                        ]);
                        setCart([]);
                        setTextarea('');
                    }}
                >
                    送出訂單
                </button>
            </div>
        </>
    )
}

export default Cart