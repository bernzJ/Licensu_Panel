// FOLLOW THIS DATATYPE IF ADDING DATAPROVIDERS: docs are outdated.
export default (type, resource, params) => {
  // MUST return a function.
  // can be ommited if func call is in the html
  //return () => {
  // Which MUST return an promise.
  // can be ommited to return raw json data as long it matches.
  //return new Promise(resolve => { resolve({ data: [{ id: 123, version: "hello, world", md5: "wdaodk" }], total: 1 }) });
  return { data: [{ id: 123, version: "hello, world", md5: "wdaodk" }], total: 1 };
  //}
  //return new Promise(resolve => { resolve({ data: { id: 123, version: "hello, world", md5: "wdaodk" } }) });
};