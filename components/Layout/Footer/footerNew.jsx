import React, { memo } from 'react'
import Link from 'next/link'
const infoPages = [
  { path: '/info/about', title: 'about' },
  { path: '/info/faq', title: 'QAndA' },

  { path: '/info/affiliate', title: 'Affiliate' },

  { path: '/info/our-team', title: 'OurTeam' },

  { path: '/info/privacy-policy', title: 'PrivacyPolicy' },
  { path: '/info/contact', title: 'Contact' },
]
function Footer({ footerData }) {
  return (
    <footer>
      <div className="footer-gray">
        <div className="footer-custom">
          <div className="footer-lists">
            {footerData &&
              footerData.map((page, idx) => (
                <div key={idx} className="footer-list-wrap">
                  <p className="ftr-hdr">{page.title}</p>
                  <ul className="ftr-links-sub">
                    {page.options.map((article, idxx) => (
                      <li key={idxx}>
                        <Link
                          aria-label={article.title}
                          href="/page/[page]"
                          as={article.path}
                        >
                          <a
                            className="text-current "
                            aria-label={article.title}
                            href={article.path}
                          >
                            {article.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="footer-legal">
            <p>
              &copy; {new Date().getFullYear()} gbruv.com Inc. All Rights
              Reserved. |{' '}
              {infoPages.map((info, idx) => {
                return (
                  <span>
                    <Link aria-label={info.title} href={info.path} key={idx}>
                      <a
                        className="text-current"
                        aria-label={info.title}
                        href={info.path}
                      >
                        {info.title}
                      </a>
                    </Link>{' '}
                    |{' '}
                  </span>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
