import axios from './axios-common'

export function getArrivers(pageNumber = 0) {
  return axios.get('/GetAllArrivingMethods', {
    params: {
      first: 0,
      page: pageNumber,
      rows: 10
    }
  })
}

export function createArriver(arabicName, englishName) {
  return axios.post('/AddOrUpdateArrivingMethod', {
    accountId: 1,
    arrivingArabicName: arabicName,
    arrivingEnglishName: englishName,
    sort: 1
  })
}

export function updateArriver(id, newAarabicName, newEnglishName) {
  return axios.post('/AddOrUpdateArrivingMethod', {
    id,
    accountId: 1,
    arrivingArabicName: newAarabicName,
    arrivingEnglishName: newEnglishName,
    sort: 1
  })
}

export function deleteArriver() {
  return axios.post('/DeleteArrivingMethod', {
    //   number /*id for the row*/
  })
}
