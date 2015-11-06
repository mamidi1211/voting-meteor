
UI.registerHelper('shareOnFacebookLink', function() {
  return 'https://www.facebook.com/sharer/sharer.php?&u=' + window.location.href;
});
UI.registerHelper('shareOnTwitterLink', function() {
  return 'https://twitter.com/intent/tweet?url=' + window.location.href + '&text=' + document.title;
});

UI.registerHelper('shareOnGooglePlusLink', function() {
  return 'https://plus.google.com/share?url=' + window.location.href;
});

Template.socialShareBasic.helpers({
    opts: function() {
      var opts ={
        facebook: true,
        twitter: true,
        pinterest: false,
        shareData: {
          url: 'http://google.com'
        }
      };
      return opts;
    }
  });