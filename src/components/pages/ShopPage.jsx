import { useState, useEffect } from "react";
import { fetchData } from "../../utils/utils.js";

import NavBar from "../elements/NavBar";
import Loading from "../elements/Loading.jsx";
import Button from "../elements/Button.jsx";
import ItemCard from "../elements/ItemCard.jsx";
import Modal from "../elements/Modal.jsx";

import s from "../../styles/shopPage.module.css";

//https://dummyjson.com/docs/products#products-limit_skip
const BASE_URL = "https://dummyjson.com/";
const CATEGORIES = "/products/categories";

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async function () {
      setLoadingCategory(true);
      const data = await fetchData(BASE_URL + CATEGORIES);
      if (data) {
        setCategoryInfo(data);
        setLoadingCategory(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    (async function () {
      setLoadingItems(true);
      const data = await fetchData(selectedCategory.url);
      if (data) {
        setSelectedItems(data.products);
        setLoadingItems(false);
      }
    })();
  }, [selectedCategory]);

  function itemCardClick(info) {
    setOpenModal(true);
    setModalInfo(info);
  }

  return (
    <>
      <NavBar />
      <main>
        {modalInfo? <Modal open={openModal} setOpen={setOpenModal} info={modalInfo}/> : null}
        <div className={s.mainDiv}>
          <h1>Shop</h1>
          <div className={s.shopDiv}>
            <aside className={s.categoriesAside}>
              <h2>Categories</h2>
              {loadingCategory ? <Loading /> : null}
              <div role="group" className={s.categoriesDiv}>
                {categoryInfo.map((category, index) => (
                  <Button
                    text={category.name}
                    manageClick={() => setSelectedCategory(category)}
                    key={`${category.slug}-${index}`}
                  />
                ))}
              </div>
            </aside>
            <section className={s.itemsSection}>
              <h2>Products</h2>
              <p>{selectedCategory?.name}</p>
              {loadingItems ? <Loading /> : null}
              <ul className={s.itemsGrid}>
                {selectedItems.map((item) => (
                  <ItemCard info={item} key={'shop-' + item.id} manageClick={itemCardClick} />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShopPage;
