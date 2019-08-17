// eslint-disable
// this is an auto generated file. This will be overwritten

export const getFormResponseByStatus = `query GetFormResponseByStatus($formID: ID!, $status: String!) {
  getFormResponseByStatus(formID: $formID, status: $status) {
    userID
    formID
    formResponse {
      type
      question
      answer
      options
      selected
    }
    createAt
  }
}
`;
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
      answer
    }
  }
}
`;
export const getUserAnsweredForm = `query GetUserAnsweredForm($formID: ID!, $userID: ID!) {
  getUserAnsweredForm(formID: $formID, userID: $userID) {
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
    createAt
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
    createAt
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
    isVirtualActivity
    location
    fundraisingTarget
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
      createAt
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
    organizationName
    description
    urlLogo
    year
    focusType
    adminName
    contactPersonPhone
    bankAccountNumber
    bankAccountHolder
    bankName
    bankIconImg
  }
}
`;
export const getActivity = `query GetActivity(
  $organizationID: ID
  $activityType: String
  $location: String
) {
  getActivity(
    organizationID: $organizationID
    activityType: $activityType
    location: $location
  ) {
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
    fundraisingTarget
    formID
    activityDateStart
    activityDateEnd
    createAt
    deletedAt
  }
}
`;
export const getJoinHistory = `query GetJoinHistory($userID: ID) {
  getJoinHistory(userID: $userID) {
    user {
      id
      name
      email
      createAt
    }
    userID
    activityID
    activityType
    activityName
    organizationName
    formResponseID
    donationAmount
    donationTransferDetail {
      id
      bankName
      bankLogo
      bankBranch
      bankAccountNumber
      bankAccountNameHolder
    }
    status
    createAt
  }
}
`;
export const getParticipants = `query GetParticipants($activityID: ID!, $organizationID: ID!) {
  getParticipants(activityID: $activityID, organizationID: $organizationID) {
    activity {
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
      fundraisingTarget
      formID
      activityDateStart
      activityDateEnd
      createAt
      deletedAt
    }
    numberOfParticipants
    unprocessedParticipants
    participants {
      joinDate
      donationAmount
      status
    }
  }
}
`;
export const getLocation = `query GetLocation {
  getLocation {
    id
    locationName
  }
}
`;
