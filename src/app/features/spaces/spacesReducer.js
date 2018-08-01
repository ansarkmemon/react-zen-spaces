import { FETCH_SPACES } from './spacesActions';

const initialState = [
  {
    id: "001",
    header: "In5",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am",
    contactDetails: "+971 4 234 5678",
    location: "Al Sufuoh Road, Jumeirah",
    overview:
      "<p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.</p><p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>"
  },
  {
    id: "002",
    header: "In10",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am",
    contactDetails: "+971 4 234 5678",
    location: "Al Sufuoh Road, Jumeirah",
    overview:
      "<p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.</p><p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>"
  },
  {
    id: "003",
    header: "In20",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am",
    contactDetails: "+971 4 234 5678",
    location: "Al Sufuoh Road, Jumeirah",
    overview:
      "<p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.</p><p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>"
  },
  {
    id: "004",
    header: "In5",
    description: "Amazing Co-working space near Jumeirah",
    meta: "Timings: 10 am - 1 am",
    contactDetails: "+971 4 234 5678",
    location: "Al Sufuoh Road, Jumeirah",
    overview:
      "<p>Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.</p><p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>"
  }
];

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACES:
      return action.payload.spaces;
    default:
      return state;
  }
}

export default spacesReducer;