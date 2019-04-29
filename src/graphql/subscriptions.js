// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser(
  $name: String
  $email: String
  $password: String
  $location: LocationInput
  $create_at: AWSTimestamp
) {
  onCreateUser(
    name: $name
    email: $email
    password: $password
    location: $location
    create_at: $create_at
  ) {
    name
    email
    password
    location {
      latitude
      longitude
    }
    create_at
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser(
  $name: String
  $email: String
  $password: String
  $location: AWSJSON
  $create_at: AWSTimestamp
) {
  onUpdateUser(
    name: $name
    email: $email
    password: $password
    location: $location
    create_at: $create_at
  ) {
    name
    email
    password
    location {
      latitude
      longitude
    }
    create_at
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser(
  $name: String
  $email: String
  $password: String
  $location: AWSJSON
  $create_at: AWSTimestamp
) {
  onDeleteUser(
    name: $name
    email: $email
    password: $password
    location: $location
    create_at: $create_at
  ) {
    name
    email
    password
    location {
      latitude
      longitude
    }
    create_at
  }
}
`;
export const onCreateSubdivision = `subscription OnCreateSubdivision($province: String, $city: AWSJSON) {
  onCreateSubdivision(province: $province, city: $city) {
    province
    city
  }
}
`;
export const onUpdateSubdivision = `subscription OnUpdateSubdivision($province: String, $city: AWSJSON) {
  onUpdateSubdivision(province: $province, city: $city) {
    province
    city
  }
}
`;
export const onDeleteSubdivision = `subscription OnDeleteSubdivision($province: String, $city: AWSJSON) {
  onDeleteSubdivision(province: $province, city: $city) {
    province
    city
  }
}
`;
export const onCreateAdmin = `subscription OnCreateAdmin(
  $id: ID
  $email: String
  $password: String
  $nama_komunitas: String
  $url_logo_komunitas: String
) {
  onCreateAdmin(
    id: $id
    email: $email
    password: $password
    nama_komunitas: $nama_komunitas
    url_logo_komunitas: $url_logo_komunitas
  ) {
    id
    email
    password
    nama_komunitas
    url_logo_komunitas
    bidang_komunitas
    tahun_dibentuk
    deskripsi
    nama_admin
    contact_person_phone
    nomor_rekening
  }
}
`;
export const onUpdateAdmin = `subscription OnUpdateAdmin(
  $id: ID
  $email: String
  $password: String
  $nama_komunitas: String
  $url_logo_komunitas: String
) {
  onUpdateAdmin(
    id: $id
    email: $email
    password: $password
    nama_komunitas: $nama_komunitas
    url_logo_komunitas: $url_logo_komunitas
  ) {
    id
    email
    password
    nama_komunitas
    url_logo_komunitas
    bidang_komunitas
    tahun_dibentuk
    deskripsi
    nama_admin
    contact_person_phone
    nomor_rekening
  }
}
`;
export const onDeleteAdmin = `subscription OnDeleteAdmin(
  $id: ID
  $email: String
  $password: String
  $nama_komunitas: String
  $url_logo_komunitas: String
) {
  onDeleteAdmin(
    id: $id
    email: $email
    password: $password
    nama_komunitas: $nama_komunitas
    url_logo_komunitas: $url_logo_komunitas
  ) {
    id
    email
    password
    nama_komunitas
    url_logo_komunitas
    bidang_komunitas
    tahun_dibentuk
    deskripsi
    nama_admin
    contact_person_phone
    nomor_rekening
  }
}
`;
