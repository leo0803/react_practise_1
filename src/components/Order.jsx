function Order({ order, setOrder }) {
    console.log(order);
    return (
        <>
            {
                order.map((item) =>
                    <div key={item.id} className="card  mt-3 mb-3">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>訂單編號{item.id}</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">品項</th>
                                            <th scope="col">數量</th>
                                            <th scope="col">小計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.cart.map(product => (
                                                <tr key={product.id}>
                                                    <td>{product.name}</td>
                                                    <td>{product.num}</td>
                                                    <td>{product.price * product.num}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                                <div className="text-end">
                                    <h5>總計: <span>${item.totalPrice}</span></h5>
                                </div>
                                <hr />
                                <div className="">備註: <span>{item.message}</span></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Order