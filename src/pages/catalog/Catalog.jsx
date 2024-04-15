import React from "react";

import './Catalog.css';

export default function Catalog() {

    return(
        <main className="main__content">
        <div className="container">
            <section className="main__content-products pb-5">
                <div className="breadcrumbs">
                    <a href="/">главная</a>
                    >
                    <a href="" className="disabled">каталог</a>
                </div>
                <span className="main__content-count"></span>
                <div className="main__content-filters">
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            сортировка
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
                        <form className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" value="all" id="all" checked/>
                                <label className="form-check-label" htmlFor="all">
                                    все
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" value="new" id="new"/>
                                <label className="form-check-label" htmlFor="new">
                                    сначала новые
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" disabled value="stock" id="stock"/>
                                <label className="form-check-label" htmlFor="stock">
                                    по величине скидки
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" value="priceUp" id="priceUp"/>
                                <label className="form-check-label" htmlFor="priceUp">
                                    по возростанию цены
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" value="priceDown" id="priceDown"/>
                                <label className="form-check-label" htmlFor="priceDown">
                                    по убыванию цены
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" value="popular" id="popular"/>
                                <label className="form-check-label" htmlFor="popular">
                                    по популярности
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="sort" disabled value="feedback" id="feedback"/>
                                <label className="form-check-label" htmlFor="feedback">
                                    сначала с отзывами
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="dropdown">
                        <a className="dropdown-toggle disabled-link" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            категории
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
    
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            цена
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </a>
            
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <form className="multi-range-field my-5 pb-5">
                                <input id="multi22" className="multi-range" type="range" />
                              </form>
                              
                              {/* <!-- Example --> */}
                              <label htmlFor="ex3">Example</label>
                              <input type="text" id="ex3" className="form-control" disabled/>
                              <label htmlFor="ex4">Example</label>
                              <input type="text" id="ex4" className="form-control" disabled/>
                        </div>
                    </div>
                    <a className="form-clean"> очистить</a>
                </div>
                <div className="content__products-list content-list">
                    {/* <!-- products here --> */}
                </div>
            </section>
        </div>
    </main>
    )
}