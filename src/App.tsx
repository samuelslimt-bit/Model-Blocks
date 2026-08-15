import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ExpandableBox } from './components/ExpandableBox';
import { SpecTable } from './components/SpecTable';
import { Lightbox } from './components/Lightbox';
import { PlaceholderImage } from './components/PlaceholderImage';
import { galleryAlbums } from './data/galleryData';
import { GalleryAlbum } from './types';
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  Layers,
  Factory,
  Landmark,
  Building2,
  Church,
  Mail,
  Phone,
  User,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Track active section for top navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'what-we-do', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAlbumLightbox = (album: GalleryAlbum, initialIndex = 0) => {
    setSelectedAlbum(album);
    setCurrentPhotoIndex(initialIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNextPhoto = () => {
    if (!selectedAlbum) return;
    setCurrentPhotoIndex((prev) => (prev + 1) % selectedAlbum.photos.length);
  };

  const handlePrevPhoto = () => {
    if (!selectedAlbum) return;
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? selectedAlbum.photos.length - 1 : prev - 1
    );
  };

  const handleSelectPhotoIndex = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4EF] text-[#5B6570] font-sans">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 sm:pt-18">
        {/* SECTION 1: HOME */}
        <section
          id="home"
          className="border-b border-[#B9C2CC]/60 bg-[#FFFFFF] py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h1
              id="home-company-name"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#232B33] mb-4 leading-tight"
            >
              Modify Services Limited
            </h1>

            <p
              id="home-tagline"
              className="text-[#D96708] text-lg sm:text-xl font-medium mb-6 tracking-wide uppercase"
            >
              Securing the future of Nigerian infrastructure, one block at a time.
            </p>

            <div className="w-24 h-1 bg-[#D96708] mb-6"></div>

            <p
              id="home-description"
              className="text-base sm:text-lg text-[#5B6570] leading-relaxed max-w-2xl"
            >
              Modify Services Limited is a Nigerian infrastructure technology company that manufactures Modify Blocks (Patented Technology, Ref: 65749), an engineered concrete block designed to replace traditional sandcrete construction with a stronger, more consistent, and more efficient building material.
            </p>
          </div>
        </section>

        {/* SECTION 2: ABOUT US */}
        <section
          id="about"
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#B9C2CC]/60"
        >
          <div className="mb-10">
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B33] border-b border-[#B9C2CC] pb-2 inline-block sm:block"
            >
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Company Overview & Mission/Vision */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Building2 className="w-4 h-4 text-[#22699F]" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#232B33]">
                    Company Overview
                  </span>
                </div>
                <ExpandableBox
                  id="about-company-description"
                  previewText="Modify Services Limited is a transformative force in the Nigerian built environment, representing a strategic shift from traditional, labor-intensive construction toward a decentralized, technology-driven manufacturing model."
                  revealedText="The company treats structural components as precision-manufactured assets rather than commodities, addressing the logistics bottlenecks, inconsistent material quality, and supply-chain volatility that have historically hindered national development."
                />
              </div>

              {/* Mission and Vision Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  id="about-mission-block"
                  className="bg-[#2E3947] p-5 sm:p-6 text-white rounded-sm shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Target className="w-4 h-4 text-[#D96708]" aria-hidden="true" />
                      <span className="text-[#D96708] text-xs font-bold uppercase tracking-widest block">
                        Mission
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#DCE8F1]">
                      To redefine Nigerian infrastructure through localized innovation, delivering high-performance structural solutions that empower regional economies and ensure the long-term resilience of the nation&apos;s built environment.
                    </p>
                  </div>
                </div>

                <div
                  id="about-vision-block"
                  className="bg-[#3C4857] p-5 sm:p-6 text-white rounded-sm shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Compass className="w-4 h-4 text-[#D96708]" aria-hidden="true" />
                      <span className="text-[#D96708] text-xs font-bold uppercase tracking-widest block">
                        Vision
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#DCE8F1]">
                      To become the primary provider of structural components across all 36 states, establishing the definitive benchmark for durability and engineering efficiency in West African construction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Leadership Quote Panel */}
            <div
              id="about-leadership"
              className="bg-[#D9D7CC] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-center border border-[#B9C2CC]/60"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#232B33]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#232B33]">
                  Executive Leadership
                </span>
              </div>
              <blockquote className="italic text-[#232B33] text-base sm:text-lg leading-relaxed mb-6">
                &ldquo;Our mandate extends beyond the physical act of building. We are implementing a security-conscious operational framework that prioritizes national development and de-risks the construction process. By decentralizing our production, we are fostering regional economic resilience and ensuring that premium-grade infrastructure is attainable across every geopolitical zone.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-[#B9C2CC] flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="font-bold text-[#232B33] uppercase text-sm tracking-tight">
                    Adeyemi Ishola Paul
                  </div>
                  <div className="text-xs text-[#5B6570] mt-0.5">
                    Chief Executive Officer, Modify Services Limited
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#D96708] bg-[#232B33] px-2.5 py-1 rounded-xs border border-[#3C4857] uppercase tracking-wider font-semibold">
                  Executive Office
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE DO */}
        <section
          id="what-we-do"
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#B9C2CC]/60"
        >
          <div className="mb-8">
            <h2
              id="what-we-do-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B33] border-b border-[#B9C2CC] pb-2 inline-block sm:block"
            >
              What We Do
            </h2>
          </div>

          {/* Introductory Paragraph */}
          <div className="bg-[#FFFFFF] border-l-4 border-[#22699F] border-y border-r border-[#B9C2CC] rounded-sm p-6 mb-8 shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#22699F] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p
                  id="what-we-do-intro"
                  className="text-base sm:text-lg text-[#232B33] leading-relaxed font-medium"
                >
                  Modify Services Limited manufactures Modify Blocks (Patent Ref: 65749), an interlocking concrete block tested and certified by SGS Matrocast, a SANAS-accredited testing laboratory, under SANS 1215 standards.
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#DCE8F1] text-[#22699F] text-xs font-semibold rounded-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> SANS 1215 Certified
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FFE3C7] text-[#D96708] text-xs font-semibold rounded-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> SGS Matrocast Tested
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Specification Table */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#22699F]" aria-hidden="true" />
                <h3 className="text-base font-bold text-[#232B33] uppercase tracking-wide">
                  Technical Specifications
                </h3>
              </div>
              <span className="text-xs text-[#9AA0A6] font-mono">
                SANS 1215 Standards
              </span>
            </div>
            <SpecTable />
          </div>

          {/* Design Description Expandable Box */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2.5">
              <Layers className="w-4 h-4 text-[#D96708]" aria-hidden="true" />
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#232B33]">
                Engineering and Geometric Design
              </h3>
            </div>
            <ExpandableBox
              id="design-description-box"
              previewText="The block uses an interlocking, stackable, hollow-core design that significantly reduces mortar usage, speeds up wall erection, and ensures consistent structural alignment."
              revealedText="The precision-formed hollow cores permit internal routing of electrical and plumbing conduits without chasing walls. In addition, the internal air chambers enhance thermal insulation across living spaces and optimize total dead load on foundational footings."
            />
          </div>

          {/* Markets Served: Three Short Labeled Blocks */}
          <div className="mb-10">
            <h3 className="text-base font-bold text-[#232B33] uppercase tracking-wide mb-4">
              Markets Served
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Government Infrastructure */}
              <div
                id="market-government"
                className="border border-[#B9C2CC] p-5 bg-white rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Landmark className="w-4 h-4 text-[#22699F]" aria-hidden="true" />
                    <div className="text-[#22699F] font-bold text-xs uppercase tracking-wider">
                      Government Infrastructure
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                    Schools, healthcare facilities, and public housing developments, where certified compressive strength and high dimensional uniformity lower long-term structural maintenance costs and accelerate public delivery schedules.
                  </p>
                </div>
              </div>

              {/* Commercial and Industrial */}
              <div
                id="market-commercial"
                className="border border-[#B9C2CC] p-5 bg-white rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-[#22699F]" aria-hidden="true" />
                    <div className="text-[#22699F] font-bold text-xs uppercase tracking-wider">
                      Commercial and Industrial
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                    Shopping complexes, logistics warehouses, and event centers, where the high strength-to-weight ratio and precision interlocking joints support wide-span walling while reducing construction time and on-site material waste.
                  </p>
                </div>
              </div>

              {/* Religious Infrastructure */}
              <div
                id="market-religious"
                className="border border-[#B9C2CC] p-5 bg-white rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Church className="w-4 h-4 text-[#22699F]" aria-hidden="true" />
                    <div className="text-[#22699F] font-bold text-xs uppercase tracking-wider">
                      Religious Infrastructure
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B6570] leading-relaxed">
                    Modern worship centers and community auditoriums, where the block supports clean architectural finishes, acoustic dampening, and the load-bearing requirements of large-capacity, high-ceiling assemblies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Model Expandable Box */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Factory className="w-4 h-4 text-[#D96708]" aria-hidden="true" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#232B33]">
                  Decentralized Manufacturing Model
                </h3>
              </div>
              <ExpandableBox
                id="manufacturing-model-box"
                variant="tint"
                previewText="Modify Services Limited operates a decentralized six-zone manufacturing model, with a plant planned for each of Nigeria's geopolitical zones (North-West, North-Central, North-East, South-West, South-East, South-South)."
                revealedText="Each plant is tuned to its regional terrain and demand profile, and every plant submits monthly samples for quality validation so that a block produced in one zone matches a block produced in any other zone."
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: GALLERY */}
        <section
          id="gallery"
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[#B9C2CC]/60"
        >
          <div className="mb-8">
            <h2
              id="gallery-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B33] border-b border-[#B9C2CC] pb-2 inline-block sm:block"
            >
              Gallery
            </h2>
            <p id="gallery-intro" className="text-base text-[#5B6570] mt-3">
              A look at Modify Blocks production, product, and facilities.
            </p>
          </div>

          {/* 4 Album Cover Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryAlbums.map((album) => (
              <div
                key={album.id}
                id={`album-card-${album.id}`}
                onClick={() => openAlbumLightbox(album, 0)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openAlbumLightbox(album, 0);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open album ${album.title} with ${album.photos.length} photos`}
                className="group bg-[#FFFFFF] border border-[#B9C2CC] rounded-sm overflow-hidden shadow-xs hover:border-[#D96708] hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#D96708] cursor-pointer transition-all duration-200 flex flex-col"
              >
                {/* Cover Image */}
                <div className="relative overflow-hidden bg-[#2E3947] group-hover:bg-[#3C4857] transition-colors">
                  <PlaceholderImage photo={album.coverImage} isCover={true} />
                  <div className="absolute inset-0 bg-[#232B33]/0 group-hover:bg-[#232B33]/15 transition-colors pointer-events-none" />
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#232B33] group-hover:text-[#D96708] transition-colors line-clamp-1">
                      {album.title}
                    </h3>
                    <p className="text-xs text-[#5B6570] mt-1 line-clamp-2 leading-relaxed">
                      {album.subtitle}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#F4F4EF] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#D96708] font-semibold uppercase tracking-wider">
                      {album.photos.length} Photos
                    </span>
                    <span className="text-[10px] text-[#9AA0A6] uppercase tracking-wider">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CONTACT */}
        <section
          id="contact"
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#232B33] border-b border-[#B9C2CC] pb-2 inline-block sm:block"
            >
              Contact Information
            </h2>
            <p className="text-sm text-[#5B6570] mt-3">
              Official corporate directory and contact details.
            </p>
          </div>

          {/* Compact Information Block */}
          <div
            id="contact-info-block"
            className="rounded-sm bg-[#FFFFFF] border border-[#B9C2CC] p-5 sm:p-6 shadow-sm max-w-lg"
          >
            <div className="space-y-3.5 text-sm sm:text-base">
              {/* Company Name */}
              <div className="flex items-center justify-between border-b border-[#F4F4EF] pb-2.5">
                <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#9AA0A6]">
                  <Building2 className="w-3.5 h-3.5 text-[#22699F]" aria-hidden="true" />
                  Entity
                </span>
                <span className="text-[#232B33] font-semibold text-sm sm:text-base">
                  Modify Services Limited
                </span>
              </div>

              {/* Chief Executive Officer */}
              <div className="flex items-center justify-between border-b border-[#F4F4EF] pb-2.5">
                <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#9AA0A6]">
                  <User className="w-3.5 h-3.5 text-[#D96708]" aria-hidden="true" />
                  CEO
                </span>
                <span className="text-[#232B33] font-medium text-sm sm:text-base">
                  Adeyemi Ishola Paul
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between border-b border-[#F4F4EF] pb-2.5">
                <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#9AA0A6]">
                  <Mail className="w-3.5 h-3.5 text-[#22699F]" aria-hidden="true" />
                  Email
                </span>
                <a
                  href="mailto:info@modifyservices.com"
                  className="text-[#22699F] font-mono text-xs sm:text-sm hover:underline hover:text-[#D96708] transition-colors"
                >
                  info@modifyservices.com
                </a>
              </div>

              {/* Phone (Placeholder marked in code) */}
              <div className="flex items-center justify-between pt-0.5">
                <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#9AA0A6]">
                  <Phone className="w-3.5 h-3.5 text-[#5B6570]" aria-hidden="true" />
                  Telephone
                </span>
                {/* PLACEHOLDER: Replace with official corporate telephone number */}
                <span className="text-[#5B6570] font-mono text-xs sm:text-sm">
                  [placeholder, add real number]
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Overlay */}
      <Lightbox
        album={selectedAlbum}
        currentIndex={currentPhotoIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        onSelectIndex={handleSelectPhotoIndex}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
