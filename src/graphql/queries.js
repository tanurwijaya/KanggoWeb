// eslint-disable
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag';

export const getUser = `query GetUser($email: String!, $password: String!) {
  getUser(email: $email, password: $password) {
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
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      email
      password
      create_at
    }
    nextToken
  }
}
`;
export const getSubdivision = `query GetSubdivision($province: String!) {
  getSubdivision(province: $province) {
    province
    city
  }
}
`;
export const listSubdivisions = `query ListSubdivisions(
  $filter: TableSubdivisionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubdivisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      province
      city
    }
    nextToken
  }
}
`;
export const getAdmin = `query GetAdmin($email: String!, $password: String!) {
  getAdmin(email: $email, password: $password) {
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
export const listAdmins = `query ListAdmins(
  $filter: TableAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const queryAdminsByEmailIdIndex = gql`query QueryAdminsByEmailIdIndex($email: String!) {
  queryAdminsByEmailIdIndex(email: $email) {
    items {
      id
      email
      nama_komunitas,
      url_logo_komunitas
    }
    nextToken
  }
}
`;
