class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


  window.onload = function(){

    var map;

    function initialize(){
      var mapProp = {
        center: new google.maps.LatLng(-9.665812385085598, -35.69642460921745),
        scrollWheel:false,
        zoom:15,
        MaptypeId: google.maps.MapTypeId.ROADMAP
      }

      map = new google.maps.Map(document.getElementById("mapa"),mapProp);

    }

    function addMarker(lat,long,icon,content){
      var latLng = {"lat":lat,"lng":long}
  
      var marker = new google.maps.Marker({
        position:latLng,
        map:map,
        icon:icon
  
      });
  
      var infoWindow = new google.maps.InfoWindow({
        content:content,
        maxWidth:200,
        pixelOffset: new google.maps.Size(0,20)
      });

      infoWindow.open(map,marker);
    }
    
    initialize();

    var conteudo = 
    addMarker(-9.665812385085598, -35.69642460921745,'',conteudo)


  }

  