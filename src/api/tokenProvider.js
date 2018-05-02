import qlclient from 'graphql-client';
import jwt from 'jsonwebtoken';

let format_data = data => {

};
let auth = (email, password) => {
  let client = qlclient({
    url: 'http://127.0.0.1:4000/graphql'
  });
  return client.query(`mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email
      jwt
    }
  }`, { "email": email, "password": password }, (req, res) => {
      /*console.log(req);
      console.log(res);*/
      if (res.status === 401) {
        throw new Error('Not authorized')
      }
    }).then(body => {
      return body;
    })
    .catch(err => {
      console.log(err.message)
    });
};
export default {
  /**
   * @returns {Promise}
   * @param {String} type, type of the request.
   * @param {String} resource, resource fetched from the api.
   * @param {Object} params, params to be passed to the ql schema.
   * @param {graphql-client} client, client to be passed if authentification is needed.
   */
  query: async (type, resource, params, token) => {
    if (!token) {
      token = await auth("t@cunt.com", "test", ).then(authData => {
        //console.log(authData);
        return authData.data.login.jwt;
      }).catch(err => {
        console.log(err);
      });
    }
    let client = qlclient({
      url: 'http://127.0.0.1:4000/graphql',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    return client.query(`query GetPrograms {
      getPrograms {
         _id
        name
        version
        md5
      }
    }`).then(api_json => {
        //console.log(api_json);
        let ret = api_json.data.getPrograms;
        return {data: ret, total: ret.length};
        //return {api_json, count: };
      })
      .catch(error => error);

  }
}