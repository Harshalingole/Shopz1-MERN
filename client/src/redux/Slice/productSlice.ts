import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productSliceProp } from '../../types/types';
import { ProductsProps } from '../../pages/AllProducts/Product';

export interface ProductState {
  value: number;
  products: ProductsProps[] | null;
  product: productSliceProp | null;
  productsCount: number;
  filteredProductsCount: number;
  resultPerPage: number;
}

const initialState: ProductState = {
  value: 0,
  products: null,
  product: null,
  productsCount: 0,
  filteredProductsCount: 0,
  resultPerPage: 12,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state,action: PayloadAction<productSliceProp>) => {
        state.product = action.payload;
    },
    setAllProducts: (state,action: PayloadAction<ProductsProps[]>) => {
        state.products = action.payload;
        state.productsCount = state.products?.length;
    }
  },
})
// Action creators are generated for each case reducer function
export const { setProduct,setAllProducts } = productSlice.actions

export default productSlice.reducer