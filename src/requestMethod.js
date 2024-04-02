import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTFlNjY1YjdlM2Q3YmI0ZTBlMWU5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzU0NjgxOCwiZXhwIjoxNjg3ODA2MDE4fQ.bHBUgjeGfEnxh8C753C2d0qTOsBkKaKOP7Z4atTsLTA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
