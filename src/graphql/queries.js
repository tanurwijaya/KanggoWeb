// eslint-disable
// this is an auto generated file. This will be overwritten

export const getFundraisingProgress = `query GetFundraisingProgress($activityID: ID!) {
  getFundraisingProgress(activityID: $activityID) {
    donationTotal
    donationTarget
  }
}
`;
export const getVolunteerForm = `query GetVolunteerForm($formID: ID!) {
  getVolunteerForm(formID: $formID) {
    id
    forms {
      type
      question
      options
    }
  }
}
`;
export const getAnsweredForm = `query GetAnsweredForm($formID: ID!, $userID: ID!) {
  getAnsweredForm(formID: $formID, userID: $userID) {
    id
    forms {
      type
      question
      options
    }
  }
}
`;
export const getBankDestination = `query GetBankDestination {
  getBankDestination {
    id
    bankName
    bankLogo
    bankBranch
    bankAccountNumber
    bankAccountNameHolder
  }
}
`;
export const checkUserEmail = `query CheckUserEmail($email: String!) {
  checkUserEmail(email: $email) {
    id
    name
    email
    location
    create_at
  }
}
`;
export const checkAdminEmail = `query CheckAdminEmail($email: String!) {
  checkAdminEmail(email: $email) {
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
export const getUser = `query GetUser($email: String!, $password: String!) {
  getUser(email: $email, password: $password) {
    id
    name
    email
    location
    create_at
  }
}
`;
export const getActivityDetail = `query GetActivityDetail($activityID: ID!) {
  getActivityDetail(activityID: $activityID) {
    id
    activityName
    activityType
    imgThumbnail
    activityDescription
    organizationID
    organizationName
    organizationSmallLogo
    isOrganizationVerified
    isOpenForPublic
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
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      location
      create_at
    }
    nextToken
  }
}
`;
export const getAdmin = `query GetAdmin($email: String!, $password: String!) {
  getAdmin(email: $email, password: $password) {
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
export const getOrganizationById = `query GetOrganizationById($organizationID: String!) {
  getOrganizationById(organizationID: $organizationID) {
    id
    email
    name
    urlogo
    focusType
    year
    description
    adminName
    contactPersonPhone
    bankAccountNumber
    bankAccountHolder
    bankName
    bankIconImg
  }
}
`;
export const getActivity = `query GetActivity($organizationID: ID, $activityType: String) {
  getActivity(organizationID: $organizationID, activityType: $activityType) {
    id
    activityName
    activityType
    imgThumbnail
    activityDescription
    organizationID
    organizationName
    organizationSmallLogo
    isOrganizationVerified
    isOpenForPublic
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
