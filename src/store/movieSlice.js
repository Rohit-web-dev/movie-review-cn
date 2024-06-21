import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "https://image.tmdb.org/t/p/w500"
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload
    }
  }
})

export const { setBannerData, setImageURL } = movieSlice.actions

export default movieSlice.reducer
