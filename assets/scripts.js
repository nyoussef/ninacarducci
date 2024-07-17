$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// Définir les données structurées en JavaScript
const data = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Nina Carducci - Photographe",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "68 avenue Alsace-Lorraine",
      "postalCode": "33200",
      "addressLocality": "Bordeaux"
    }
  };
  const jsonData = JSON.stringify(data);

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = jsonData;
  document.head.appendChild(script);
