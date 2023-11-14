import { baseUrl } from '../app/shared/baseUrl'

export const mapDataListURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            dataList: baseUrl + item.dataList
        }
    })
}
