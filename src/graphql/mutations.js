// eslint-disable
// this is an auto generated file. This will be overwritten

export const createFormResponse = `mutation CreateFormResponse($input: FormResponseInput!) {
  createFormResponse(input: $input) {
    responseID
    userID
    formID
    formResponse {
      type
      question
      answer
      options
    }
    createAt
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    createAt
  }
}
`;
export const createVolunteerForm = `mutation CreateVolunteerForm($input: CreateVolunteerFormInput!) {
  createVolunteerForm(input: $input) {
    id
    forms {
      type
      question
      options
      answer
    }
  }
}
`;
export const createActivity = `mutation CreateActivity($input: CreateActivityInput!) {
  createActivity(input: $input) {
    id
    activityName
    activityType
    imgThumbnail
    activityDescription
    organizationID
    organizationName
    organizationSmallLogo
    isOrganizationVerified
    isVirtualActivity
    location
    formID
    activityDateStart
    activityDateEnd
    createAt
    deletedAt
  }
}
`;
export const updateActivity = `mutation UpdateActivity($input: UpdateActivityInput!) {
  updateActivity(input: $input) {
    id
    activityName
    activityType
    imgThumbnail
    activityDescription
    organizationID
    organizationName
    organizationSmallLogo
    isOrganizationVerified
    isVirtualActivity
    location
    formID
    activityDateStart
    activityDateEnd
    createAt
    deletedAt
  }
}
`;
export const joinActivity = `mutation JoinActivity($input: JoinActivityInput!) {
  joinActivity(input: $input) {
    userID
    activityID
    activityType
    donationAmount
    donationTransferDetail {
      id
      bankName
      bankLogo
      bankBranch
      bankAccountNumber
      bankAccountNameHolder
    }
    stuffCategory
    stuffShippingDetail
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    createAt
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    email
    createAt
  }
}
`;
export const createAdmin = `mutation CreateAdmin($input: CreateOrganizationInput!) {
  createAdmin(input: $input) {
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
export const updateAdmin = `mutation UpdateAdmin($input: UpdateAdminInput!) {
  updateAdmin(input: $input) {
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
export const deleteAdmin = `mutation DeleteAdmin($input: DeleteAdminInput!) {
  deleteAdmin(input: $input) {
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
