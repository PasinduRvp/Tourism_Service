import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/70.jpg",
      alt: "Temple of the Tooth",
      title: "Temple of the Tooth",
      category: "Heritage Sites",
      locationUrl: "https://maps.google.com/?q=Temple+of+the+Tooth",
    },
    {
      src: "/53.jpg",
      alt: "Coconut Tree Hill",
      title: "Coconut Tree Hill",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Coconut+Tree+Hill",
    },
    {
      src: "/5.jpg",
      alt: "Hawagala Mountain",
      title: "Hawagala Mountain",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Hawagala+Mountain",
    },
    {
      src: "/71.webp",
      alt: "Nine Arches Bridge",
      title: "Nine Arches Bridge",
      category: "Heritage Sites",
      locationUrl: "https://maps.google.com/?q=Nine+Arches+Bridge",
    },
    {
      src: "/72.jpg",
      alt: "Sigiriya Rock",
      title: "Sigiriya Rock",
      category: "Heritage Sites",
      locationUrl: "https://maps.google.com/?q=Sigiriya+Rock",
    },
    {
      src: "/37.jpg",
      alt: "Yala National Park",
      title: "Yala National Park",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Yala+National+Park",
    },
    {
      src: "/49.jpg",
      alt: "Bomburu Ella",
      title: "Bomburu Ella",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Bomburu+Ella",
    },
    {
      src: "/54.avif",
      alt: "Surfing",
      title: "Surfing Adventures",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Mirissa+Beach",
    },
    {
      src: "/51.jpg",
      alt: "Uda Walawe National Park",
      title: "UDA Walawe National Park",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Uda+Walawe+National+Park",
    },
    {
      src: "/36.jpg",
      alt: "Kubalwela Maha Meun Asapuwa",
      title: "Kubalwela Maha Meuna Asapuwa",
      category: "Heritage Sites",
      locationUrl: "https://maps.google.com/?q=Kubalwela+Maha+Meuna+Asapuwa",
    },
    {
      src: "/48.jpg",
      alt: "Wagon R",
      title: "Wagon R",
      category: "Our Vehicles",
    },
    {
      src: "/32.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/73.jpg",
      alt: "Dambulla Cave Temple",
      title: "Dambulla Cave Temple",
      category: "Heritage Sites",
      locationUrl: "https://maps.google.com/?q=Dambulla+Cave+Temple",
    },
    {
      src: "/28.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/18.jpg",
      alt: "Pidurangala Rock",
      title: "Pidurangala Rock",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Pidurangala+Rock",
    },
    {
      src: "/7.jpg",
      alt: "Hawagala Mountain",
      title: "Hawagala Mountain",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Hawagala+Mountain",
    },
    {
      src: "/1.jpg",
      alt: "Basilica of Our Lady of Lanka",
      title: "Basilica of Our Lady of Lanka",
      category: "Adventures",
      locationUrl: "https://maps.app.goo.gl/U6QSndw2VTYdUKqU6",
    },
    {
      src: "/14.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/75.jpg",
      alt: "Prius",
      title: "Prius",
      category: "Our Vehicles",
    },
    {
      src: "/65.jpg",
      alt: "Colombo Port",
      title: "Colombo Port",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Colombo+Port",
    },
    {
      src: "/19.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/47.jpg",
      alt: "Wagon R",
      title: "Wagon R",
      category: "Our Vehicles",
    },
    {
      src: "/67.jpg",
      alt: "Bomburu Ella",
      title: "Bomburu Ella",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Bomburu+Ella",
    },
    {
      src: "/38.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/63.jpg",
      alt: "Tea Plantations",
      title: "Tea Plantations",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Nuwara+Eliya+Tea+Plantations",
    },
    {
      src: "/76.jpg",
      alt: "Prius",
      title: "Prius",
      category: "Our Vehicles",
    },
    {
      src: "/55.jpg",
      alt: "Galle Fort",
      title: "Galle Fort",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Galle+Fort",
    },
    {
      src: "/83.jpg",
      alt: "Gregory Lake",
      title: "Gregory Lake",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Gregory+Lake",
    },
    {
      src: "/41.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/66.jpg",
      alt: "Galboda Waterfall",
      title: "Galboda Waterfall",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Galboda+Waterfall",
    },
    {
      src: "/57.jpg",
      alt: "Galle Fort",
      title: "Galle Fort",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Galle+Fort",
    },
    {
      src: "/39.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/11.jpg",
      alt: "Upper Lanka Ella",
      title: "Upper Lanka Ella",
      category: "Landscapes",
      locationUrl: "https://maps.google.com/?q=Upper+Lanka+Ella",
    },
    {
      src: "/90.png",
      alt: "KDH Van",
      title: "KDH Van",
      category: "Our Vehicles",
    },
    {
      src: "/26.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/68.jpg",
      alt: "Dondra Lighthouse",
      title: "Dondra Lighthouse",
      category: "Heritage Sites",
      locationUrl: "https://maps.google.com/?q=Dondra+Lighthouse",
    },
    {
      src: "/84.jpg",
      alt: "Bezza",
      title: "Bezza",
      category: "Our Vehicles",
    },
    {
      src: "/64.jpg",
      alt: "Enjoy Moments",
      title: "Sri Lanka Animals",
      category: "Adventures",
    },
    {
      src: "/59.jpg",
      alt: "Haritha Kanda",
      title: "Haritha Kanda",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Haritha+Kanda",
    },
    {
      src: "/27.jpg",
      alt: "Happy Tourists",
      title: "Happy Customers",
      category: "Experiences"
    },
    {
      src: "/74.jpg",
      alt: "Prius",
      title: "Prius",
      category: "Our Vehicles",
    },
    {
      src: "/82.jpg",
      alt: "Ambuluwawa Tower",
      title: "Ambuluwawa Tower",
      category: "Adventures",
      locationUrl: "https://maps.google.com/?q=Ambuluwawa+Tower",
    },
    {
      src: "/91.jpg",
      alt: "KDH Van",
      title: "KDH Van",
      category: "Our Vehicles",
    },
  ];

  const categories = ["All", "Heritage Sites", "Landscapes", "Our Vehicles", "Adventures", "Experiences"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Journey Through Sri Lanka
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the breathtaking landscapes, rich culture, and unforgettable moments 
            that await you on your Sri Lankan adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up stagger-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer fade-in-up stagger-${(index % 4) + 1}`}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <span className="text-sm opacity-80">{image.category}</span>
                  {image.locationUrl && (
                    <div className="flex items-center mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-xs">View Location</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <span className="text-sm text-white/80">
                      {filteredImages[selectedImage].category}
                    </span>
                  </div>
                  
                  {filteredImages[selectedImage].locationUrl && (
                    <div className="mt-4 sm:mt-0">
                      <a
                        href={filteredImages[selectedImage].locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>View on Map</span>
                      </a>
                      {filteredImages[selectedImage].coordinates && (
                        <p className="text-xs text-white/60 mt-1 text-right">
                          {filteredImages[selectedImage].coordinates}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;