import { useState, useEffect } from "react";
import { fetchData } from "../../utils/utils.js";

import NavBar from "../elements/NavBar";
import Loading from "../elements/Loading.jsx";
import Button from "../elements/Button.jsx";

//https://dummyjson.com/docs/products#products-limit_skip
const BASE_URL = "https://dummyjson.com/";
const CATEGORIES = "/products/categories";

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useState(() => {
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

  return (
    <>
      <NavBar />
      <main>
        <h1>Shop</h1>
        <aside>
          <h2>Categories</h2>
          {loadingCategory ? <Loading /> : null}
          {categoryInfo.map((category, index) => (
            <Button
              text={category.name}
              manageClick={() => setSelectedCategory(category)}
              key={`${category.slug}-${index}`}
            />
          ))}
        </aside>
        <section>
          <h2>Products</h2>
          <p>{selectedCategory?.name}</p>
          {loadingItems ? <Loading /> : null}
          <div>
            {selectedItems.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default ShopPage;
