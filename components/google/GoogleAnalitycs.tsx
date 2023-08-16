import Script from 'next/script'
 
function Google() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YJWFN1FKCZ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YJWFN1FKCZ');
        `}
      </Script>
    </div>
  )
}
 
export default Google