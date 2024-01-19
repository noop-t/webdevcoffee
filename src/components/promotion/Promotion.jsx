import React from "react";
import './Promotion.css'
import coffee_1 from '../../assets/image/coffee_1.jpg'
import coffee_2 from '../../assets/image/coffee_2.jpg'
import coffee_3 from '../../assets/image/coffee_3.jpg'
import coffee_4 from '../../assets/image/coffee_4.jpg'

export default function Promotion() {
    return (
        <section className="promo">
            <div className="product_cards">
                <article>
                    <h1 className="coffee_1">
                        $9.99
                    </h1>
                    <h2>
                        $999
                    </h2>
                    <img src={coffee_1} alt="Americano Coffe" />
                    <p>
                        Americano Coffee
                    </p>
                </article>
                <article>
                    <h1 className="coffee_2">
                        $14.99
                    </h1>
                    <h2>
                        $1,499
                    </h2>
                    <img src={coffee_2} alt="Milk Cream Coffee" />
                    <p>
                        Milk Cream Coffee
                    </p>
                </article>
                <artcle>
                    <h1 className="coffee_3">
                        $19.99
                    </h1>
                    <h2>
                        $1,999
                    </h2>
                    <img src={coffee_3} alt="Fresh Black Coffee" />
                    <p>
                        Fresh Black Coffee
                    </p>
                </artcle>
                <article>
                    <h1 className="coffee_4">
                        $24.99
                    </h1>
                    <h2>
                        $2,499
                    </h2>
                    <img src={coffee_4} alt="Cold Coffee" />
                    <p>
                        Cold Coffee
                    </p>
                </article>
            </div>
        </section>
    )
}