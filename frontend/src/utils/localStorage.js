const USERS_KEY = 'innercircle_mock_users'
const SESSION_KEY = 'innercircle_mock_session'
const PROFILE_KEY = 'innercircle_mock_profile'
const NAME_INDEX_KEY = 'innercircle_mock_name_index'

function readJson(key, fallback) {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function writeJson(key, value) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getUsers() {
  return readJson(USERS_KEY, [])
}

export function saveUser(user) {
  const users = getUsers()
  const nextUsers = [...users, user]
  writeJson(USERS_KEY, nextUsers)
  return user
}

export function findUserByEmail(email) {
  return getUsers().find(
    (user) => user.email.toLowerCase() === email.trim().toLowerCase(),
  )
}

export function setSession(session) {
  writeJson(SESSION_KEY, session)
}

export function getSession() {
  return readJson(SESSION_KEY, null)
}

export function clearSession() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(SESSION_KEY)
}

export function getProfile() {
  return readJson(PROFILE_KEY, null)
}

export function saveProfile(profile) {
  writeJson(PROFILE_KEY, profile)
  return profile
}

export function assignAnonymousName(availableNames) {
  const existingProfile = getProfile()
  if (existingProfile?.anonymousName) {
    return existingProfile.anonymousName
  }

  const nameIndex = readJson(NAME_INDEX_KEY, 0)
  const nextName = availableNames[nameIndex % availableNames.length]
  writeJson(NAME_INDEX_KEY, nameIndex + 1)
  return nextName
}
