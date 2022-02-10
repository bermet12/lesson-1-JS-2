import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import './styles/index.scss'

const productList = getProductList(20);


renderGoodsList(productList);