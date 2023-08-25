import React, { useState, useEffect } from 'react';

const Feed = React.memo((props) => {
    React.useEffect(() => {
      const script = document.createElement('script');
  
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, []);
    
    return (
      <React.Fragment>
        <div id="fb-root"></div>
        <div
          class="fb-page"
          data-href="https://www.facebook.com/comunidadehallelam/"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/comunidadehallelam/"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/comunidadehallelam/">Your Page</a>
          </blockquote>
        </div>
      </React.Fragment>
    );
  });

  export default Feed;