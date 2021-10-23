import React from "react";

const SoundCloudEmbed = React.memo(({ className, title, url }) => (
  <>
    <iframe
      className={`${className} mb-3`}
      title={title}
      width="100%"
      height="290"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      sameSite1
      src={`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
    ></iframe>
  </>
));

export default SoundCloudEmbed;
