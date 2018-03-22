var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

fuction destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value;
}