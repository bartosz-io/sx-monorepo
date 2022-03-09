export default `
type Proposal {
  id: Int
  space: String
  author: String
  execution: String
  metadata: String
  title: Text
  body: Text
  start: Int
  end: Int
  snapshot: Int
  created: Int
  tx: String
}

type Vote {
  id: String
  voter: String
  proposal: String
  choice: Int
  created: Int
}
`;
