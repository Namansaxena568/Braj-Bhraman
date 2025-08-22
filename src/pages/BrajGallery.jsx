import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  {
    url: "../image/banke-bihari-temple.jpg",
    title: "Shri Banke Bihari Mandir, Vrindavan",
  },
  {
    url: "../image/goverdhan-parikarma.jpg",
    title: "Govardhan Parikrama Marg",
  },
  {
    url: "../image/yamuna-2.jpg",
    title: "Yamuna Ji at Vrindavan",
  },
  {
    url: "../image/ISKCON_Pune_Main_Temple.jpg",
    title: "ISKCON Temple, Vrindavan",
  },
  {
    url: "../image/Kusum_Sarovar.jpg",
    title: "Kusum Sarovar, Govardhan",
  },
];

export default function BrajGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <section className="container mx-auto py-10">
      {/* <h2 className="text-3xl font-bold text-center mb-8">📸 Braj Gallery</h2> */}
      <Slider {...settings} className="rounded-2xl shadow-lg overflow-hidden">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative">
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 bg-black/50 text-white w-full text-center py-3 text-lg">
              {img.title}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
