import axios from 'axios'


export const fetchData = (url) => {
    return axios.get(url).then( ({data}) => {
        return data
    })
} 

export const testPromise = (isOrNot) => {
    return new Promise((resolve,reject) => {
        if(isOrNot){
            resolve('Do it!')
        }else{
            reject(new Error('Error!'))
        }
    })
}
