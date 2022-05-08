export default function partition(array: any, isValid: any) {
  if (!Array.isArray(array)) {
    return isValid(array) ? [[array], []] : [[], [array]];
  }
  return array.reduce(
    ([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []]
  );
}
