import {
    filtredForRatingLowToHigh,
    filtredForRatingHightoLow,
    filtredForPriceLowToHigh,
    filtredForPriceHightoLow,
    filtredByZtoA,
    filtredByAtoZ,
    getProductsAll,
} from "../../redux/actions";

import { useSelector, useDispatch } from "react-redux";

const Sort = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Ordenar por:</h1>
            <select>
                <option
                    key={"select-price"}
                    value={0}
                    onClick={() => dispatch(getProductsAll())}
                >
                    Ordenamiento por precio
                </option>
                <option
                    key={"select-price 1"}
                    value={1}
                    onClick={() => dispatch(filtredForPriceLowToHigh(products))}
                >
                    Menor a Mayor
                </option>
                <option
                    key={"select-price 2"}
                    value={2}
                    onClick={() => dispatch(filtredForPriceHightoLow(products))}
                >
                    Mayor a Menor
                </option>
            </select>
            <select>
                <option
                    key={"select-rating"}
                    value={0}
                    onClick={() => dispatch(getProductsAll())}
                >
                    Ordenamiento por Rating
                </option>
                <option
                    key={"select-rating 1"}
                    value={1}
                    onClick={() =>
                        dispatch(filtredForRatingLowToHigh(products))
                    }
                >
                    Menor a Mayor
                </option>
                <option
                    key={"select-rating 2"}
                    value={2}
                    onClick={() =>
                        dispatch(filtredForRatingHightoLow(products))
                    }
                >
                    Mayor a Menor
                </option>
            </select>
            <select>
                <option
                    key={"select-price"}
                    value={0}
                    onClick={() => dispatch(getProductsAll())}
                >
                    Ordenar Alfabeticamente
                </option>
                <option
                    key={"select-price 1"}
                    value={1}
                    onClick={() => dispatch(filtredByAtoZ(products))}
                >
                    De la A a la Z
                </option>
                <option
                    key={"select-price 2"}
                    value={2}
                    onClick={() => dispatch(filtredByZtoA(products))}
                >
                    De la Z a la A
                </option>
            </select>
        </>
    );
};

export default Sort;
