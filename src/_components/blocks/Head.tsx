import { stripHtmlTags } from "../../utils/index.ts";

interface HeadProps {
  resume: {
    name: string;
    about: string;
  };
  title: string | undefined;
}

export default ({ resume, title }: HeadProps) => {
  const about = stripHtmlTags(resume.about);

  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={about} />
      <meta name="author" content={resume.name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={about} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={about} />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="./images/favicon.ico" />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <link rel="stylesheet" href="./styles.css" />
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
          });

          document.addEventListener('keydown', function(e) {
            if (e.keyCode === 123) {
              e.preventDefault();
              return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
              e.preventDefault();
              return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
              e.preventDefault();
              return false;
            }
            if (e.ctrlKey && e.keyCode === 85) {
              e.preventDefault();
              return false;
            }
            if (e.ctrlKey && e.keyCode === 83) {
              e.preventDefault();
              return false;
            }
            if (e.ctrlKey && e.keyCode === 65) {
              e.preventDefault();
              return false;
            }
            if (e.ctrlKey && e.keyCode === 67) {
              e.preventDefault();
              return false;
            }
          });

          document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
          });

          document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
          });

          document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            images.forEach(function(img) {
              img.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
              });
              img.style.userSelect = 'none';
              img.style.webkitUserSelect = 'none';
              img.style.mozUserSelect = 'none';
              img.style.msUserSelect = 'none';
            });
          });

          window.addEventListener('beforeprint', function(e) {
            e.preventDefault();
            return false;
          });

          setInterval(function() {
            console.clear();
          }, 1000);

          let devtools = {
            open: false,
            orientation: null
          };
          
          setInterval(function() {
            if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
              if (!devtools.open) {
                devtools.open = true;
                document.body.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;z-index:99999;">Access Denied</div>';
              }
            } else {
              devtools.open = false;
            }
          }, 500);
        `
      }} />
    </head>
  );
};
