// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser(
  $name: String
  $email: String
  $password: String
  $location: String
  $create_at: AWSTimestamp
) {
  onCreateUser(
    name: $name
    email: $email
    password: $password
    location: $location
    create_at: $create_at
  ) {
    id
    name
    email
    location
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
    id
    name
    email
    location
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
    id
    name
    email
    location
    create_at
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
    organizationName
    urlLogo
    focusType
    year
    description
    adminName
    contactPersonPhone
    isOrganizationVerified
    bankAccountHolder
    bankAccountNumber
    bankIconImg
    bankName
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
    organizationName
    urlLogo
    focusType
    year
    description
    adminName
    contactPersonPhone
    isOrganizationVerified
    bankAccountHolder
    bankAccountNumber
    bankIconImg
    bankName
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
    organizationName
    urlLogo
    focusType
    year
    description
    adminName
    contactPersonPhone
    isOrganizationVerified
    bankAccountHolder
    bankAccountNumber
    bankIconImg
    bankName
  }
}
`;
