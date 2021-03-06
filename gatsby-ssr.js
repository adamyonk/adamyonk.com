const React = require(`react`)

exports.onPreRenderHTML = ({
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  const postBodyComponents = getPostBodyComponents()
  // Add Apple Affiliate auto-linker
  postBodyComponents.push(
    <script
      key="apple-affiliate"
      dangerouslySetInnerHTML={{
        __html: `var _merchantSettings=_merchantSettings || [];_merchantSettings.push(['AT', '1001lJ7Y']);(function(){var autolink=document.createElement('script');autolink.type='text/javascript';autolink.async=true; autolink.src= ('https:' == document.location.protocol) ? 'https://autolinkmaker.itunes.apple.com/js/itunes_autolinkmaker.js' : 'http://autolinkmaker.itunes.apple.com/js/itunes_autolinkmaker.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(autolink, s);})();`,
      }}
    />,
  )
  replacePostBodyComponents(postBodyComponents)
}
