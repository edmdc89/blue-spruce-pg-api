import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Plant {
    id: Int
    commonName: String
    scientificName: String
    imageUrl: String
  }

  type Query {
    plantCatalog: [Plant]
  }
`;
