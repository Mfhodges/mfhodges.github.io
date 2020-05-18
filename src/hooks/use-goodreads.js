import { graphql, useStaticQuery } from 'gatsby';

const useGoodreads = () => {
    const data = useStaticQuery(graphql`
    query shelfList {
        allGoodreadsShelf {
          edges {
            node {
              id
              reviews {
                book {
                  bookID
                  isbn
                  titleWithoutSeries
                }
              }
            }
          }
        }
      }
    `)

    return data.allGoodreadsShelf.edges[0].node.reviews.map( reviews => ({
        ...reviews.book,
        image: `http://covers.openlibrary.org/b/isbn/${reviews.book.isbn}-M.jpg?default=false`
    }))
    


};

export default useGoodreads;