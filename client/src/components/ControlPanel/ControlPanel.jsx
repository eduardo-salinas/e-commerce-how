import { useState, useEffect, useRef } from "react";
import { StyledPanel } from "./styled.js";
import Orders from "./Orders/Orders.jsx";
import Users from "./Users/Users.jsx";
import Products from "./Products/Products.jsx";
import Newsletters from "./Newsletters/Newsletters";
import DailySells from "./DailySells/DailySells";
import Sells from "./DailySells/Sells";
import { useDispatch, useSelector } from "react-redux";
import ShowNewsletters from "./Newsletters/ShowNewsletters/ShowNewsletters.jsx";
import ItemProduct from "./Products/ItemProduct.jsx";
import Categorys from "./Categorys/Categorys.jsx";
import Search from "./Search.jsx";
import Vineyards from "./Vineyards/Vineyards.jsx";
import AddProduct from "./AddProduct.jsx";
import ItemUsers from "./Users/ItemUsers.jsx";
import ItemOrder from "./Orders/ItemOrder.jsx";
import ItemVineyard from "./Vineyards/ItemVineyard.jsx";
import FilterOrders from "./Orders/FilterOrders.jsx";
import Loading from "../Loading/Loading.jsx";
import EditAddCategory from "./Categorys/EditAddCategory/EditAddCategory";
import { getProductsAll } from "../../redux/actions/request.js";



const ControlPanel = () => {
  const store = useSelector((state) => state);
  const [vineyards, setVineyards] = useState([])
  const [visual, setVisual] = useState({});
  const dispatch = useDispatch();

  const filteredVineyards = (array) => {
    let aux = {}
    array.map((p) => {
      if (!aux[p.vineyard]) {
        return aux[p.vineyard] = 1
      } else {
        return aux[p.vineyard] += 1
      }
    })
    aux = Object.entries(aux)
    return aux.sort();
  }


  useEffect(() => {
    dispatch(getProductsAll());
    setVineyards(filteredVineyards(store.products))
  }, [visual, dispatch])


  return (
    <StyledPanel>
      {window.sessionStorage.getItem("admin") ? (
        <>
          <div className="panel">
            <Orders visual={visual} setVisual={setVisual} />
            <Users visual={visual} setVisual={setVisual} />
            <Products visual={visual} setVisual={setVisual} />
            <Vineyards visual={visual} setVisual={setVisual} />
            <Categorys visual={visual} setVisual={setVisual} />
            <Newsletters visual={visual} setVisual={setVisual} />
            <Sells visual={visual} setVisual={setVisual} />
          </div>
          {Object.keys(visual).length ? (
            <div className="content">
              {visual.products && (
                store.loading ? (
                  <Loading />
                ) : (
                  <>
                    <Search itemValue={"product"} />
                    {store.search.length > 0 ?
                      store.search.map((p) => <ItemProduct product={p} />) :
                      store.products.map((p) => <ItemProduct product={p} />)}
                  </>
                ))}
              {visual.addProduct && <AddProduct visual={visual} setVisual={setVisual} />}

              {visual.vineyards && (
                vineyards.map((v) => <ItemVineyard name={v[0]} quantity={v[1]} />)
              )}

              {visual.users && (store.loading ? <Loading /> :
                (<>
                  <Search itemValue={"user"} />
                  {store.searchUser.length > 0 ?
                    store.searchUser.map((p) => <ItemUsers user={p} />) :
                    store.users.map((p) => <ItemUsers user={p} />)}
                </>))
              }
              {visual.orders && (store.loading ? (<Loading />) : (
                <>
                  <Search itemValue={"order"} /> <FilterOrders />
                  {store.searchOrders.length > 0 ?
                    store.searchOrders.map((p) => <ItemOrder order={p} />) :
                    store.orders.map((p) => <ItemOrder order={p} />)}                  
                </>
              ))}
              {visual.categorys && <EditAddCategory />}
              {visual.dailySells && <DailySells />}
              {visual.newsletters && <ShowNewsletters />}
            </div>) : null}
        </>
      ) : null}
    </StyledPanel>
  );
};

export default ControlPanel;
