function findMatching(drivers, string) {
  return drivers.filter((driver) => {
    console.log(driver.toLowerCase())
    return driver.toLowerCase() === string
  })
}
