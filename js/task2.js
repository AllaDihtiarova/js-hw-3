const countProps = function (obj) {
  const keys = Object.keys(obj)
  const sumKeys = keys.length
  return sumKeys
}

console.log(countProps({}))

console.log(countProps({ name: "Mango", age: 2 }))

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
