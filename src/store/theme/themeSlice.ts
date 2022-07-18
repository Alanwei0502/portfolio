import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from './../rootReducer'
import { createTheme, PaletteMode } from "@mui/material"

interface ThemeState {
  mode: PaletteMode
}

const initialState: ThemeState = {
  mode: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  },
})

export const selectTheme = (state: RootState) => state.theme.mode

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
