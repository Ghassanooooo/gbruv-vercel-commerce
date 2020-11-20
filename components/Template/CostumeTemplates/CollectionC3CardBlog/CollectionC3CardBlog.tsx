import React from 'react'
import CardBlog from '../../../Component/CardBlog/CardBlog'
export default function CollectionC3CardBlog(props: any) {
  const { currentPayloads } = props
  console.log('CollectionC3CardBlog ==> ',currentPayloads )
  return (
  <section className="w-screen bg-contain  pt-15 pb-15" style={{backgroundImage:`url('/templates/CollectionC3CardBlog.svg')`, height:'100vh', width:'100vw'}}>
    <div  className=" md:container md:flex md:flex-wrap mx-auto">

      {currentPayloads.map((i:any,idx:any)=> <CardBlog payload={i} key={idx}/>)}

    
    </div>
  

    </section>)
 
}



/**
 <section className="news-area ptb-60">
      <div className="container">
        <div className="row">
          {currentPayloads.map((payload: any, idx: any) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link
                    href="/viewDoc/[viewDoc]"
                    as={'/viewDoc/' + payload.contentType + '_' + payload._id}
                  >
                    <a>
                      <Image
                        src={payload.image}
                        alt={payload.title}
                        width={350}
                        height={350}
                      />
                    </a>
                  </Link>

                  <div className="post-tag">
                    <Link href="#">
                      <a>{payload.categorie} </a>
                    </Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">{payload.date} </span>
                  <h3>
                    <Link href="/blog-details">
                      <a>{payload.title} </a>
                    </Link>
                  </h3>
                  <p>{payload.description}</p>

                  <Link
                    href="/viewDoc/[viewDoc]"
                    as={'/viewDoc/' + payload.contentType + '_' + payload._id}
                  >
                    <a className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 */
