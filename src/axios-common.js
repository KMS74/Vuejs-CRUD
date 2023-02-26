import axios from 'axios'
const TOKEN =
  'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY3NzM5ODkzNywiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.Sosxz8rzXEp0delKUmq-fMbmT8YQEsdwv-fDessUk5w'

export default axios.create({
  baseURL: 'http://40.127.194.127:777/api/Emergency',
  headers: {
    'Content-type': 'application/json',
    Authorization: `bearer ${TOKEN}`
  }
})
