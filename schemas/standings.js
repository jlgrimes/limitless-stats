const playersPerPage = 100;
const operationName = 'EventStandings';

module.exports = {
    query: `
    query ${operationName}($eventId: ID!, $page: Int!, $perPage: Int!) {
      event(id: $eventId) {
        id
        name
        standings(query: {
          perPage: $perPage,
          page: $page
        }){
          nodes {
            placement
            entrant {
              id
              name
              participants {
                gamerTag
              }
            }
          }
        }
      }
    }
    `,
    operationName: operationName,
    variables: (eventId, page) => {
        return {
            'eventId': eventId,
            'page': page,
            'perPage': playersPerPage,
        };
    },
};
