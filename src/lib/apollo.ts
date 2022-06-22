import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4owqaup15d301xn6gq85ut0/master',
    cache: new InMemoryCache()
})