import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentAccount: {
        id: 1,
        username: 'mehmetenfa',
        fullName: './mehmetenfa',
        avatar: 'https://pbs.twimg.com/profile_images/1610177519495385090/gkpozyxi_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'mehmetenfa',
            fullName: './mehmetenfa',
            avatar: 'https://pbs.twimg.com/profile_images/1610177519495385090/gkpozyxi_400x400.jpg'
        },
        {
            id: 2,
            username: 'phocod',
            fullName: 'Phocod',
            avatar: 'https://pbs.twimg.com/profile_images/1675369390131298304/C7xT9ye5_400x400.jpg'
        },
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // state menipule etme metodlari
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload == state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer