import { extendType, objectType, stringArg } from 'nexus';

export const viewer = objectType({
  name: 'Viewer',
  definition(t) {
    t.string('id');
    t.string('firstName');
    t.string('lastName');
    t.string('email');
  }
});

export const viewerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('viewer', {
      type: viewer,
      async resolve(_, __, context) {
        const user = await context.dataSources.userAPI.getCurrentUser();

        return {
          id: user.sub,
          email: user.email as string,
          firstName: user.given_name as string,
          lastName: user.family_name as string
        };
      }
    });
  }
});

// {
//   "birthdate": "2022-07-10T00:00:00.000Z",
//   "family_name": "Lopez",
//   "gender": "male",
//   "given_name": "Guillermo",
//   "locale": "us",
//   "middle_name": "Enmanuel",
//   "name": "Guillermo Enmanuel Lopez",
//   "nickname": "guillermo",
//   "picture": "http://guillermolopez.com/picture.png",
//   "preferred_username": null,
//   "profile": "http://guillermolopez.com",
//   "website": "http://guillermolopez.com/blog",
//   "zoneinfo": "us",
//   "iss": "http://localhost:3000",
//   "exp": 1659829115,
//   "aud": "cl05amov600137o9kit49f4cz",
//   "sub": "cl5ece4hr0000269k7xeyol8l",
//   "iat": 1659828515,
//   "jti": "cl6ij1je3000j4emn9v0uhak5"
// }
