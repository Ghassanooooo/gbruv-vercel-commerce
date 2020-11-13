import type { GetStaticPropsContext } from 'next'
export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = 'en'
  const pages = null
  return {
    props: { pages },
  }
}

export default function Blog() {
  return (
    <div className="pb-20">
      <div className="text-center pt-40 pb-56 bg-violet">
        <div className="mx-auto max-w-8xl px-6">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to Acme, the simplest way to start publishing with Next.js
          </h2>
          <p className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
            ‘Carbon’ iteration, and now release details have been locked in for
            this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
            shoe was originally called ‘Abez’, which translated to ‘Tin’ in
            Hebrew. It’s now undergone a name change, and will be referred to as
            ‘Natura`
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://vercel.com/api/www/avatar/61182a9f6bda512b4d9263c9c8a60aabe0402f4c?s=204"
                  alt="Avatar"
                />
              </div>
              <div className="ml-4">
                <div className="leading-6 font-medium text-white">
                  José Rodriguez
                </div>
                <div className="leading-6 font-medium text-gray-200">
                  CEO, Acme
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
