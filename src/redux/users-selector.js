import { createSelector } from 'reselect'

export const getUsersData = (state) => {
    return state.findUsersPage.usersData
};

// reselect
export const getUsersDataReselect = createSelector(getUsersData, (usersData)=>{
    return usersData.filter(u => u)
})


export const getLoaderState = (state) => {
    return state.findUsersPage.loaderState
};

export const getPageSize = (state) => {
    return state.findUsersPage.pageSize
};


export const getCurrentPage = (state) => {
    return state.findUsersPage.currentPage
};

export const getTotalCountPerson = (state) => {
    return state.findUsersPage.totalCountPerson
};


export const getArrToggles = (state) => {
    return state.findUsersPage.arrToggles
}