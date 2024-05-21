import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addTodo = createAsyncThunk(
    '__addTodo',
    async (payload, thunkAPI) => {
        await waitTwoSeconds();
        console.log(payload);
        return payload;
    }
);

export const __deleteTodo = createAsyncThunk(
    '__deleteTodo',
    async (payload, thunkAPI) => {
        await waitTwoSeconds();
        return payload;
    }
);

const initialState = {
    list: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // addTodo: (state, action) => {
        //     console.log(action);
        //     state.list.push({
        //         id: action.payload.id,
        //         title: action.payload.title,
        //         body: action.payload.body,
        //     });
        // },
        // deleteTodo: (state, action) => {
        //     console.log(action);
        //     state.list = state.list.filter((el) => el.id !== action.payload);
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(__addTodo.fulfilled, (state, action) => {
            state.list.push({
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body,
            });
        });
        builder.addCase(__deleteTodo.fulfilled, (state, action) => {
            state.list = state.list.filter((el) => el.id !== action.payload);
        });
    },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
