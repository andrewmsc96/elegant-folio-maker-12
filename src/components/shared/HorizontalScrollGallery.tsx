import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

// Import gallery images
import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import gallery6 from '@/assets/gallery/gallery-6.jpg';
import gallery7 from '@/assets/gallery/gallery-7.jpg';
import gallery8 from '@/assets/gallery/gallery-8.jpg';
import gallery9 from '@/assets/gallery/gallery-9.jpg';
import gallery10 from '@/assets/gallery/gallery-10.jpg';
import gallery11 from '@/assets/gallery/gallery-11.jpg';
import gallery12 from '@/assets/gallery/gallery-12.jpg';
import gallery13 from '@/assets/gallery/gallery-13.jpg';
import gallery14 from '@/assets/gallery/gallery-14.jpg';
import gallery15 from '@/assets/gallery/gallery-15.jpg';
import gallery16 from '@/assets/gallery/gallery-16.jpg';
import gallery17 from '@/assets/gallery/gallery-17.jpg';
import gallery18 from '@/assets/gallery/gallery-18.jpg';
import gallery19 from '@/assets/gallery/gallery-19.jpg';
import gallery20 from '@/assets/gallery/gallery-20.jpg';
import gallery21 from '@/assets/gallery/gallery-21.jpg';
import gallery22 from '@/assets/gallery/gallery-22.jpg';
import gallery23 from '@/assets/gallery/gallery-23.jpg';
import gallery24 from '@/assets/gallery/gallery-24.jpg';

type ImageSize = 'large' | 'medium' | 'small';
type ImageOrientation = 'portrait' | 'landscape';

interface GalleryImage {
  src: string;
  alt: string;
  size: ImageSize;
  orientation: ImageOrientation;
  verticalOffset: 'top' | 'center' | 'bottom';
  projectSlug: string;
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: 'Northlight Studio brand composition', size: 'large', orientation: 'portrait', verticalOffset: 'center', projectSlug: 'northlight-studio' },
  { src: gallery2, alt: 'Meridian Architects typography detail', size: 'medium', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'meridian-architects' },
  { src: gallery3, alt: 'Ember & Co logo on textured paper', size: 'small', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'ember-and-co' },
  { src: gallery4, alt: 'Stillwater Journal stationery suite', size: 'large', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'stillwater-journal' },
  { src: gallery5, alt: 'Aura Wellness digital interface', size: 'medium', orientation: 'portrait', verticalOffset: 'top', projectSlug: 'aura-wellness' },
  { src: gallery6, alt: 'Forge Collective packaging detail', size: 'small', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'forge-collective' },
  { src: gallery7, alt: 'Halcyon Press brand guidelines', size: 'large', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'halcyon-press' },
  { src: gallery8, alt: 'Drift Studio environmental signage', size: 'medium', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'drift-studio' },
  { src: gallery9, alt: 'Northlight Studio color palette', size: 'small', orientation: 'portrait', verticalOffset: 'top', projectSlug: 'northlight-studio' },
  { src: gallery10, alt: 'Meridian Architects business cards', size: 'large', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'meridian-architects' },
  { src: gallery11, alt: 'Stillwater Journal editorial layout', size: 'medium', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'stillwater-journal' },
  { src: gallery12, alt: 'Ember & Co texture exploration', size: 'small', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'ember-and-co' },
  { src: gallery13, alt: 'Aura Wellness website design', size: 'large', orientation: 'portrait', verticalOffset: 'center', projectSlug: 'aura-wellness' },
  { src: gallery14, alt: 'Forge Collective letterhead', size: 'medium', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'forge-collective' },
  { src: gallery15, alt: 'Halcyon Press product photography', size: 'small', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'halcyon-press' },
  { src: gallery16, alt: 'Drift Studio poster design', size: 'large', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'drift-studio' },
  { src: gallery17, alt: 'Northlight Studio mobile app', size: 'medium', orientation: 'portrait', verticalOffset: 'center', projectSlug: 'northlight-studio' },
  { src: gallery18, alt: 'Meridian Architects monogram detail', size: 'small', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'meridian-architects' },
  { src: gallery19, alt: 'Halcyon Press book cover', size: 'large', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'halcyon-press' },
  { src: gallery20, alt: 'Aura Wellness iconography set', size: 'medium', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'aura-wellness' },
  { src: gallery21, alt: 'Forge Collective brand pattern', size: 'small', orientation: 'portrait', verticalOffset: 'center', projectSlug: 'forge-collective' },
  { src: gallery22, alt: 'Ember & Co print collateral', size: 'large', orientation: 'landscape', verticalOffset: 'center', projectSlug: 'ember-and-co' },
  { src: gallery23, alt: 'Stillwater Journal typography specimen', size: 'medium', orientation: 'portrait', verticalOffset: 'bottom', projectSlug: 'stillwater-journal' },
  { src: gallery24, alt: 'Drift Studio brand elements', size: 'small', orientation: 'landscape', verticalOffset: 'top', projectSlug: 'drift-studio' },
];

const getImageDimensions = (size: ImageSize, orientation: ImageOrientation): { width: number; height: number } => {
  const dimensions = {
    large: orientation === 'portrait' ? { width: 420, height: 560 } : { width: 560, height: 420 },
    medium: orientation === 'portrait' ? { width: 320, height: 400 } : { width: 400, height: 320 },
    small: orientation === 'portrait' ? { width: 240, height: 300 } : { width: 300, height: 240 },
  };
  return dimensions[size];
};

const getGap = (index: number): number => {
  const gaps = [40, 28, 56, 36, 80, 32, 48, 60];
  return gaps[index % gaps.length];
};

export const HorizontalScrollGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Calculate track width on mount and resize
  useEffect(() => {
    const calculateTrackWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };

    calculateTrackWidth();
    window.addEventListener('resize', calculateTrackWidth);
    return () => window.removeEventListener('resize', calculateTrackWidth);
  }, []);

  // Handle scroll to translate vertical scroll into horizontal position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the section we've scrolled
      const scrollableDistance = container.offsetHeight - windowHeight;
      const scrolled = -rect.top;
      
      // Clamp progress between 0 and 1
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate how much we need to scroll the track
  const horizontalScrollAmount = trackWidth - window.innerWidth;
  const translateX = -scrollProgress * Math.max(0, horizontalScrollAmount);

  return (
    <section
      ref={containerRef}
      className="relative w-screen -ml-[calc((100vw-100%)/2)]"
      style={{ 
        // Height determines how long the scroll-hijack lasts
        // More height = slower horizontal scroll
        height: `${Math.max(300, horizontalScrollAmount * 0.6 + window.innerHeight)}px`
      }}
      aria-label="Image gallery, 24 items"
      role="region"
    >
      {/* Skip link */}
      <a
        href="#after-gallery"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2"
      >
        Skip gallery
      </a>

      {/* Sticky container that stays fixed while scrolling */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-dvh w-full overflow-hidden bg-secondary"
      >
        {/* Section header - fixed to left */}
        <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="-rotate-90 origin-center whitespace-nowrap">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
              Selected Work
            </span>
          </div>
        </div>

        {/* Mobile header */}
        <div className="absolute left-6 top-8 z-10 lg:hidden">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Selected Work
          </span>
        </div>

        {/* Scroll track that translates horizontally */}
        <div
          ref={trackRef}
          className="h-full flex items-center pl-20 md:pl-28 lg:pl-36 pr-20"
          style={{ 
            transform: `translateX(${translateX}px)`,
            transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out',
            willChange: 'transform',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          {galleryImages.map((image, index) => {
            const { width, height } = getImageDimensions(image.size, image.orientation);
            const gap = getGap(index);
            const project = projects.find(p => p.slug === image.projectSlug);
            
            let alignSelf = 'center';
            if (image.verticalOffset === 'top') alignSelf = 'flex-start';
            if (image.verticalOffset === 'bottom') alignSelf = 'flex-end';

            return (
              <Link
                key={index}
                to={`/work/${image.projectSlug}`}
                className="flex-shrink-0 relative group cursor-pointer block"
                style={{ 
                  marginRight: `${gap}px`,
                  alignSelf,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: hoveredIndex === index 
                      ? '0 25px 80px rgba(0,0,0,0.12)' 
                      : '0 8px 30px rgba(0,0,0,0.06)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                
                {/* Hover title - shows project name */}
                <div
                  className="absolute -bottom-8 left-0 transition-all duration-300"
                  style={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(-4px)'
                  }}
                >
                  <span className="text-sm text-muted-foreground font-sans">
                    {project?.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/5">
          <div
            className="h-full bg-foreground/20"
            style={{ 
              width: `${scrollProgress * 100}%`,
              transition: prefersReducedMotion ? 'none' : 'width 0.1s ease-out'
            }}
          />
        </div>

        {/* Scroll hint */}
        <div 
          className="absolute bottom-8 right-8 flex items-center gap-2 text-muted-foreground transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.1 ? 1 : 0 }}
        >
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="animate-pulse">
            <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Anchor for skip link */}
      <div id="after-gallery" className="absolute bottom-0" />
    </section>
  );
};

export default HorizontalScrollGallery;
