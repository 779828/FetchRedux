import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUser", async () => {
    const response = await fetch("https://apirest-production-f957.up.railway.app/api/products");
    const result = response.json();

    // console.log(result);

    return result;
})

export const gitUser = createSlice({
    name: "gitUser",
    initialState:{
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllData.fulfilled, (state,action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getAllData.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default gitUser.reducer;