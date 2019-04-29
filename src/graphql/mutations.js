// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createSubdivision = `mutation CreateSubdivision($input: CreateSubdivisionInput!) {
  createSubdivision(input: $input) {
    province
    city
  }
}
`;
export const updateSubdivision = `mutation UpdateSubdivision($input: UpdateSubdivisionInput!) {
  updateSubdivision(input: $input) {
    province
    city
  }
}
`;
export const deleteSubdivision = `mutation DeleteSubdivision($input: DeleteSubdivisionInput!) {
  deleteSubdivision(input: $input) {
    province
    city
  }
}
`;
export const createAdmin = `mutation CreateAdmin($input: CreateAdminInput!) {
  createAdmin(input: $input) {
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
export const updateAdmin = `mutation UpdateAdmin($input: UpdateAdminInput!) {
  updateAdmin(input: $input) {
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
export const deleteAdmin = `mutation DeleteAdmin($input: DeleteAdminInput!) {
  deleteAdmin(input: $input) {
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
