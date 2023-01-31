const client = (baseUri: string) => async (endpoint: string, config?: any) => {
  const response = await window.fetch(`${baseUri}/${endpoint}`, {
    method: "GET",
    ...config,
  })
  if (response.ok) {
    return await response.json()
  } else {
    const errorMessage = await response.text()
    return Promise.reject(new Error(errorMessage))
  }
}

export default client
