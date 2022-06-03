import styles from '../../styles/Slug.module.css'
import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl3wlnjlfgsrn01xi7yyo61eb/master"
)

const QUERY = gql`
query POST($slug : String!){
    post(where: {slug: $slug}){
        id,
        title,
        slug,
        datePublished,
        author{
            id,
            name,
            avater{
                url
            }
        },
        content{
            html
        },
        coverPhoto{
            id,
            url
        }
    }
}
`

const SLUGLIST = gql`
    {
        posts{
            slug
        }
    }
`


export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST);
    console.log("All Posts:", posts);
    return {
        paths: posts.map((post) => ({
            params: {slug: post.slug}
        })),
        fallback: false
    }
}

export async function getStaticProps({params}){
    console.log("Params:", params);
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post
  return{
    props:{
      post 
    },
    revalidate: 10
  }
}


export default function BlogPost({post}){
    return(
        <main className={styles.blog}>
            <img className={styles.coverImg} src={post.coverPhoto.url} alt="" />
            <div className={styles.title}>
                <img src={post.author.avater.url} className={styles.avater} alt=""/>
                <div className={styles.authtext}>
                    <h6>By {post.author.name}</h6>
                    <h6 className={styles.date}>{post.datePublished}</h6>
                </div>
            </div>
            <h2>{post.title}</h2>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.html }}>
            </div>
        </main>
    )
}