const CheckoutBox = (props) => {

    return (
        <div>
            <p>Numbers selected:</p>
                <section>
                    {props.numbers.map((number) => (
                        <li><b>Mark: {number}</b></li>
                    ))}
                </section>
            <p>${props.price}</p>
        </div>
    )

}

export default CheckoutBox