import React from "react";

import './Catalog.css';

const Breadcrumbs = () => (
  <div className="breadcrumbs">
    <a href="/">главная</a>
    {' > '}
    <a href="" className="disabled">каталог</a>
  </div>
);

const SortDropdown = () => (
  <div className="dropdown">
    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      сортировка
      <i className="fa fa-angle-down" aria-hidden="true"></i>
    </a>
    <SortForm />
  </div>
);

const SortForm = () => (
  <form className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {/* Repeat this block for each sort option */}
    <div className="form-check">
      <input type="radio" className="form-check-input" name="sort" value="all" id="all" checked/>
      <label className="form-check-label" htmlFor="all">все</label>
    </div>
    {/* ... other sort options ... */}
  </form>
);

const CategoryDropdown = () => (
  <div className="dropdown">
    <a className="dropdown-toggle disabled-link" href="#" role="button" id="dropdownMenuLink"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      категории
      <i className="fa fa-angle-down" aria-hidden="true"></i>
    </a>
    <CategoryMenu />
  </div>
);

const CategoryMenu = () => (
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Action</a>
    {/* ... other categories ... */}
  </div>
);

const PriceDropdown = () => (
  <div className="dropdown">
    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      цена
      <i className="fa fa-angle-down" aria-hidden="true"></i>
    </a>
    <PriceRangeForm />
  </div>
);

const PriceRangeForm = () => (
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <form className="multi-range-field my-5 pb-5">
      <input id="multi22" className="multi-range" type="range" />
    </form>
    {/* ... other price range inputs ... */}
  </div>
);

const ProductList = () => (
  <div className="content__products-list content-list">
    {/* Product items will go here */}
  </div>
);

const MainContent = () => (
  <main className="main__content">
    <div className="container">
      <section className="main__content-products pb-5">
        <Breadcrumbs />
        <span className="main__content-count"></span>
        <div className="main__content-filters">
          <SortDropdown />
          <CategoryDropdown />
          <PriceDropdown />
          <a className="form-clean">очистить</a>
        </div>
        <ProductList />
      </section>
    </div>
  </main>
);

export default MainContent;