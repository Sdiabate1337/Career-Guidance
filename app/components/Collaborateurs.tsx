"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useContext,
  memo,
  useEffect,
} from "react";
import { motion, AnimatePresence, useMotionValue, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LanguageContext } from "../contexts/LanguageContext";

// Collaborator type definition adapted to real data
type Collaborator = {
  id: string;
  name: string;
  role: string;
  bio?: string;
};

// Données réelles des collaborateurs
const collaborators: Collaborator[] = [
  {
    id: "collab-1",
    name: "M. TAHA CHRAIBI",
    role: "RH chez VEEPEE PARIS",
    bio: "Ex-RH chez MANPOWER. Ex-RH chez CENTRALE DANONE."
  },
  {
    id: "collab-2",
    name: "M. IDRISSI JANATI",
    role: "Juriste Social chez ARMA"
  },
  {
    id: "collab-3",
    name: "M. ABDOUL AZIZ BALDE",
    role: "Assistant Comptable chez AB LENS"
  },
  {
    id: "collab-4",
    name: "Mme. LEONCE KOUAKOU",
    role: "Responsable des Partenariats chez Presse Numérique de Côte D’Ivoire.",
    bio: "Ex-Responsable Marketing et Communication chez AFRICA RADIO"
  },
  {
    id: "collab-5",
    name: "M. MACK ARIEL KOFFI",
    role: "Chargé de Recrutement chez BARRY CALLEBAUT GROUP.",
    bio: "Ex-HR Business Partner & Communication chez ORANGE."
  },
  {
    id: "collab-6",
    name: "M. ISMAEL BALOGUN",
    role: "Chef de Département Comptabilité et Fiscalité chez AIR COTE D’IVOIRE"
  }
];

// Carousel custom hook (optimisé)
const useCarousel = (itemsCount: number, itemsPerView: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev' | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const dragXMotionValue = useMotionValue(0);

  const totalSlides = useMemo(() =>
    Math.ceil(itemsCount / itemsPerView),
    [itemsCount, itemsPerView]
  );

  const handleTransitionEnd = useCallback(() => setIsAnimating(false), []);

  const slideWithAnimation = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setCurrentSlide(prev =>
      direction === "next"
        ? prev < totalSlides - 1 ? prev + 1 : 0
        : prev > 0 ? prev - 1 : totalSlides - 1
    );
    setTimeout(handleTransitionEnd, 600);
  }, [isAnimating, totalSlides, handleTransitionEnd]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide || index >= totalSlides || index < 0) return;
    setHasInteracted(true);
    setIsAnimating(true);
    setSlideDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setTimeout(handleTransitionEnd, 600);
  }, [currentSlide, isAnimating, totalSlides, handleTransitionEnd]);

  const goToNextSlide = useCallback(() => {
    setHasInteracted(true);
    slideWithAnimation("next");
  }, [slideWithAnimation]);

  const goToPrevSlide = useCallback(() => {
    setHasInteracted(true);
    slideWithAnimation("prev");
  }, [slideWithAnimation]);

  return {
    currentSlide,
    totalSlides,
    isAnimating,
    dragStartX,
    dragOffset,
    isDragging,
    hasInteracted,
    slideDirection,
    touchStartXRef,
    dragXMotionValue,
    setDragStartX,
    setDragOffset,
    setIsDragging,
    setHasInteracted,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
    slideWithAnimation,
    handleTransitionEnd
  };
};

// Carte Collaborateur
const CollaboratorCard = memo(({
  collaborator,
  onClick,
  isActive,
  index,
  slideDirection
}: {
  collaborator: Collaborator;
  onClick: () => void;
  isActive: boolean;
  index: number;
  slideDirection: 'next' | 'prev' | null;
}) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
        transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
      }}
    >
      <motion.div
        className="group bg-white dark:bg-[#1f2937] rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl border border-[#f0f0f0] dark:border-[#374151] transition-all duration-500 h-full flex flex-col"
        whileHover={{ y: -8, scale: 1.02 }}
        animate={isActive ? {
          scale: slideDirection ? [1, 0.98, 1] : 1,
          transition: { duration: 0.5, ease: "easeOut" }
        } : { scale: 1 }}
      >
        <div className="relative h-72 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] dark:from-[#2d3748] dark:to-[#1f2937]">
          <span className="text-[#e0e0e0] dark:text-[#4a5568] text-8xl">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-bold text-[#1f2937] dark:text-white mb-1">{collaborator.name}</h4>
          <p className="text-[#ff914d] font-medium mb-2">{collaborator.role}</p>
          {collaborator.bio && (
            <p className="text-[#4b5563] dark:text-[#e5e7eb] text-sm leading-relaxed line-clamp-3 flex-grow">{collaborator.bio}</p>
          )}
          <motion.button
            onClick={onClick}
            className="mt-6 inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#fff8f3] dark:bg-[#ff914d]/10 text-[#ff914d] text-xs font-medium self-end"
            whileHover={{
              backgroundColor: "#ffebd9",
              scale: 1.05,
              paddingRight: "1.25rem"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Voir les détails pour ${collaborator.name}`}
          >
            Voir Détails
            <motion.svg
              className="ml-1 w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
});
CollaboratorCard.displayName = "CollaboratorCard";

// Modal Collaborateur
const CollaboratorModal = memo(({
  collaborator,
  onClose,
  modalRef
}: {
  collaborator: Collaborator;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={modalRef}
        className="bg-white dark:bg-[#1f2937] rounded-[30px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl modal-content"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="relative">
          {/* Header */}
          <motion.div
            className="h-52 bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-t-[30px] flex items-end relative overflow-hidden modal-header"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/20"
              whileHover={{
                backgroundColor: "rgba(0,0,0,0.4)",
                scale: 1.1,
                rotate: [0, 10, -10, 0]
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fermer les détails"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            <motion.div
              className="absolute bottom-0 left-8 transform translate-y-1/2 w-36 h-36 rounded-full border-4 border-white dark:border-[#1f2937] shadow-xl bg-white dark:bg-[#1f2937] flex items-center justify-center"
              whileHover={{ scale: 1.05, y: "40%" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <svg className="w-20 h-20 text-[#ff914d]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
          {/* Content */}
          <div className="pt-24 px-10 pb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1f2937] dark:text-white mb-1">{collaborator.name}</h3>
            <p className="text-[#ff914d] font-medium text-lg mb-3">{collaborator.role}</p>
            {collaborator.bio && (
              <div className="mb-8">
                <h4 className="text-sm font-bold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wider mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Biographie
                </h4>
                <p className="text-[#4b5563] dark:text-[#e5e7eb] leading-relaxed">{collaborator.bio}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});
CollaboratorModal.displayName = "CollaboratorModal";

// Carousel Arrow
const CarouselArrow = memo(({
  direction,
  onClick,
  disabled
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'prev' ? 'left-4 md:-left-5' : 'right-4 md:-right-5'} z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-[#1f2937]/90 backdrop-blur-sm shadow-lg text-[#4b5563] dark:text-[#e5e7eb] flex items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ff914d] hover:text-white'} border border-[#f0f0f0] dark:border-[#374151]`}
    whileHover={!disabled ? { scale: 1.1, backgroundColor: "#ff914d", color: "#ffffff" } : {}}
    whileTap={!disabled ? { scale: 0.9 } : {}}
    initial={{ opacity: 0, x: direction === 'prev' ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
  >
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </motion.button>
));
CarouselArrow.displayName = "CarouselArrow";

// Dots Indicator
const DotsIndicator = memo(({
  totalSlides,
  currentSlide,
  goToSlide,
  isAnimating
}: {
  totalSlides: number;
  currentSlide: number;
  goToSlide: (index: number) => void;
  isAnimating: boolean;
}) => (
  <div className="flex justify-center mt-10 space-x-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <motion.button
        key={index}
        onClick={() => { if (!isAnimating) goToSlide(index); }}
        className={`transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#ff914d]/40 rounded-full ${
          currentSlide === index
            ? "bg-[#ff914d] h-3"
            : "bg-[#e5e7eb] dark:bg-[#4b5563] h-3 hover:bg-[#d1d5db] dark:hover:bg-[#6b7280]"
        }`}
        aria-label={`Go to slide ${index + 1}`}
        aria-current={currentSlide === index ? "true" : "false"}
        disabled={isAnimating}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          width: currentSlide === index ? 40 : 12,
        }}
        transition={{
          duration: 0.3,
          delay: 0.1 + index * 0.05,
        }}
        whileHover={!isAnimating && currentSlide !== index ? { scale: 1.2 } : {}}
        whileTap={!isAnimating ? { scale: 0.9 } : {}}
      />
    ))}
  </div>
));
DotsIndicator.displayName = "DotsIndicator";

// Counter Animation
const CounterAnimation = memo(({ target, label }: { target: string | number; label: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.toString().replace(/[^0-9]/g, ""), 10);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, target]);

  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const displayValue = target.toString().includes("+") ? `${formattedCount}+` : formattedCount;

  return (
    <motion.div
      ref={ref}
      className="text-center transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl font-bold text-[#ff914d] mb-1 counter-anim">{displayValue}</p>
      <p className="text-[#4b5563] dark:text-[#e5e7eb] font-medium">{label}</p>
    </motion.div>
  );
});
CounterAnimation.displayName = "CounterAnimation";

// Main Collaborateurs Component
const Collaborateurs = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const modalRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter collaborators
  const filteredCollaborators = useMemo(() => {
    if (!searchTerm) return collaborators;
    const lowercasedTerm = searchTerm.toLowerCase();
    return collaborators.filter((c) =>
      c.name.toLowerCase().includes(lowercasedTerm) ||
      c.role.toLowerCase().includes(lowercasedTerm) ||
      (c.bio && c.bio.toLowerCase().includes(lowercasedTerm))
    );
  }, [searchTerm]);

  // Carousel hook
  const {
    currentSlide,
    totalSlides,
    isAnimating,
    dragStartX,
    dragOffset,
    isDragging,
    hasInteracted,
    slideDirection,
    touchStartXRef,
    dragXMotionValue,
    setDragStartX,
    setDragOffset,
    setIsDragging,
    setHasInteracted,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
    slideWithAnimation
  } = useCarousel(filteredCollaborators.length, cardsPerView);

  const controls = useAnimation();

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll
  const [scrollY, setScrollY] = useState(0);
  const scrollYMotionValue = useMotionValue(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      scrollYMotionValue.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYMotionValue]);

  // Section in view
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: sectionInViewRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const setSectionRefs = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node;
      sectionInViewRef(node);
    },
    [sectionInViewRef]
  );

  // Search form handlers
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);
  const clearSearch = useCallback(() => {
    setSearchTerm('');
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (input) input.value = '';
  }, []);
  const toggleAutoplay = useCallback(() => setAutoplay(prev => !prev), []);

  // Mouse and touch handlers for drag/swipe
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    e.preventDefault();
  }, [isAnimating, setIsDragging, setDragStartX, setDragOffset]);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || isAnimating) return;
    let newOffset = e.clientX - dragStartX;
    if ((currentSlide === 0 && newOffset > 0) || (currentSlide === totalSlides - 1 && newOffset < 0)) {
      newOffset = (e.clientX - dragStartX) / 3;
    }
    setDragOffset(newOffset);
  }, [isDragging, isAnimating, currentSlide, dragStartX, totalSlides, setDragOffset]);
  const handleMouseUp = useCallback(() => {
    if (!isDragging || isAnimating) return;
    if (dragOffset > 100) slideWithAnimation('prev');
    else if (dragOffset < -100) slideWithAnimation('next');
    else setDragOffset(0);
    setIsDragging(false);
    setHasInteracted(true);
  }, [isDragging, isAnimating, dragOffset, slideWithAnimation, setDragOffset, setIsDragging, setHasInteracted]);
  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setDragOffset(0);
      setIsDragging(false);
    }
  }, [isDragging, setDragOffset, setIsDragging]);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (isAnimating) return;
    touchStartXRef.current = e.touches[0].clientX;
  }, [isAnimating, touchStartXRef]);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartXRef.current === null || isAnimating) return;
    const touchCurrentX = e.touches[0].clientX;
    let newOffset = -(touchStartXRef.current - touchCurrentX);
    if ((currentSlide === 0 && touchCurrentX > touchStartXRef.current) ||
        (currentSlide === totalSlides - 1 && touchCurrentX < touchStartXRef.current)) {
      newOffset = -(touchStartXRef.current - touchCurrentX) / 3;
    }
    setDragOffset(newOffset);
  }, [touchStartXRef, isAnimating, currentSlide, totalSlides, setDragOffset]);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartXRef.current === null || isAnimating) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 80) slideWithAnimation('next');
    else if (diff < -80) slideWithAnimation('prev');
    else setDragOffset(0);
    touchStartXRef.current = null;
    setHasInteracted(true);
  }, [touchStartXRef, isAnimating, slideWithAnimation, setDragOffset, setHasInteracted]);

  // Animate carousel on slide change
  useEffect(() => {
    dragXMotionValue.set(dragOffset);
  }, [dragOffset, dragXMotionValue]);
  useEffect(() => {
    if (!isAnimating && carouselRef.current) {
      controls.start({
        x: -currentSlide * 100 * (carouselRef.current.clientWidth || 1) / 100 + dragOffset
      });
    }
  }, [currentSlide, controls, dragOffset, isAnimating]);

  return (
    <motion.section
      ref={setSectionRefs}
      className="py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#f9fafb] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#111827]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background (can être ajouté ici si souhaité) */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1f2937] dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {language === "en" ? "Our Collaborators" : "Nos Collaborateurs"}
          </motion.h2>
          <motion.p
            className="text-xl lg:text-2xl text-[#4b5563] dark:text-[#d1d5db]/80 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {language === "en"
              ? "Meet the exceptional individuals sharing their experiences and knowledge with African youth"
              : "Découvrez les personnes exceptionnelles qui partagent leurs expériences et connaissances avec la jeunesse africaine"}
          </motion.p>
          {/* Search */}
          <motion.div
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative w-full max-w-md group">
              <input
                type="text"
                onChange={handleSearchChange}
                placeholder={
                  language === "en"
                    ? "Search by name or expertise..."
                    : "Rechercher par nom ou expertise..."
                }
                className="w-full py-3.5 px-5 pl-14 rounded-full bg-white dark:bg-[#1f2937] text-[#4b5563] dark:text-white border-2 border-[#f0f0f0] dark:border-[#374151] shadow-lg focus:outline-none focus:ring-3 focus:ring-[#ff914d]/30 focus:border-[#ff914d]/30 transition-all duration-300 group-hover:shadow-xl"
                aria-label={
                  language === "en"
                    ? "Search collaborators"
                    : "Rechercher des collaborateurs"
                }
              />
              <motion.svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#9ca3af] group-hover:text-[#ff914d] transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </motion.svg>
              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    onClick={clearSearch}
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#f3f4f6] dark:bg-[#374151] text-[#4b5563] dark:text-[#e5e7eb] hover:bg-[#e5e7eb] dark:hover:bg-[#4b5563] flex items-center justify-center"
                    aria-label={
                      language === "en" ? "Clear search" : "Effacer la recherche"
                    }
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
        {/* No Results */}
        <AnimatePresence>
          {filteredCollaborators.length === 0 && (
            <motion.div
              className="text-center py-16 bg-white dark:bg-[#1f2937] rounded-[30px] shadow-xl border-2 border-[#f0f0f0] dark:border-[#374151] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-[#f3f4f6] dark:bg-[#374151] rounded-full flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg className="w-10 h-10 text-[#9ca3af] dark:text-[#d1d5db]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <motion.h4
                className="text-xl font-bold text-[#1f2937] dark:text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {language === "en" ? "No collaborators found" : "Aucun collaborateur trouvé"}
              </motion.h4>
              <motion.p
                className="text-[#6b7280] dark:text-[#9ca3af] max-w-md mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {language === "en"
                  ? "Try adjusting your search criteria to find collaborators."
                  : "Essayez d'ajuster vos critères de recherche pour trouver des collaborateurs."}
              </motion.p>
              <motion.button
                onClick={clearSearch}
                className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full bg-[#ff914d] text-white font-medium text-sm transition-all duration-300 hover:bg-[#ff8133] shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <svg className="mr-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>{language === "en" ? "Reset search" : "Réinitialiser la recherche"}</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Carousel */}
        <AnimatePresence>
          {filteredCollaborators.length > 0 && (
            <motion.div
              className="relative px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(cardsPerView)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="animate-pulse bg-white dark:bg-[#1f2937] rounded-[28px] overflow-hidden shadow-xl border border-[#f0f0f0] dark:border-[#374151] h-[570px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 }
                      }}
                    >
                      <div className="h-72 bg-[#f3f4f6] dark:bg-[#2d3748]"></div>
                      <div className="p-6">
                        <div className="h-6 bg-[#f3f4f6] dark:bg-[#374151] rounded-lg w-3/4 mb-4"></div>
                        <div className="h-4 bg-[#f3f4f6] dark:bg-[#374151] rounded-lg w-1/2 mb-6"></div>
                        <div className="flex gap-2 mb-4">
                          <div className="h-6 bg-[#f3f4f6] dark:bg-[#374151] rounded-full w-16"></div>
                          <div className="h-6 bg-[#f3f4f6] dark:bg-[#374151] rounded-full w-20"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-[#f3f4f6] dark:bg-[#374151] rounded-lg w-full"></div>
                          <div className="h-3 bg-[#f3f4f6] dark:bg-[#374151] rounded-lg w-full"></div>
                          <div className="h-3 bg-[#f3f4f6] dark:bg-[#374151] rounded-lg w-3/4"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <>
                  <CarouselArrow
                    direction="prev"
                    onClick={goToPrevSlide}
                    disabled={isAnimating || totalSlides <= 1}
                  />
                  <motion.div
                    ref={carouselRef}
                    className="overflow-hidden carousel-perspective"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <motion.div
                      className="flex"
                      animate={controls}
                      style={{ x: dragXMotionValue }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {filteredCollaborators.map((collaborator, index) => (
                        <CollaboratorCard
                          key={collaborator.id}
                          collaborator={collaborator}
                          onClick={() => setSelectedCollaborator(collaborator)}
                          isActive={
                            index >= currentSlide * cardsPerView &&
                            index < (currentSlide + 1) * cardsPerView
                          }
                          index={index}
                          slideDirection={slideDirection}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                  <CarouselArrow
                    direction="next"
                    onClick={goToNextSlide}
                    disabled={isAnimating || totalSlides <= 1}
                  />
                  {totalSlides > 1 && (
                    <DotsIndicator
                      totalSlides={totalSlides}
                      currentSlide={currentSlide}
                      goToSlide={goToSlide}
                      isAnimating={isAnimating}
                    />
                  )}
                  <motion.div
                    className={`absolute bottom-0 right-0 bg-white/80 dark:bg-[#1f2937]/80 backdrop-blur-sm rounded-tl-lg rounded-br-3xl px-3 py-1 text-xs font-medium text-[#4b5563] dark:text-[#e5e7eb]`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${currentSlide}-${totalSlides}`}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentSlide + 1} / {totalSlides}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Call to Action */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto bg-white dark:bg-[#1f2937] rounded-[32px] p-10 md:p-14 shadow-2xl border border-[#ffebd9] dark:border-[#ff914d]/20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#1f2937] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === "en"
              ? "Join Our Collaborator Network"
              : "Rejoignez Notre Réseau de Collaborateurs"}
          </motion.h3>
          <motion.p
            className="text-lg text-[#4b5563] dark:text-[#d1d5db]/80 font-medium mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === "en"
              ? "Are you passionate about sharing your expertise and experiences with African youth? We're always looking for new collaborators to join our mission."
              : "Êtes-vous passionné par le partage de votre expertise et de vos expériences avec la jeunesse africaine ? Nous recherchons toujours de nouveaux collaborateurs pour rejoindre notre mission."}
          </motion.p>
          <motion.button
            className="group relative inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-lg font-bold shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            viewport={{ once: true }}
          >
            <span className="relative z-10">
              {language === "en"
                ? "Apply to Become a Collaborator"
                : "Postuler pour Devenir Collaborateur"}
            </span>
            <motion.svg
              className="ml-2 w-6 h-6 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] -z-10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-[#f0f0f0] dark:border-[#374151]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <CounterAnimation target={collaborators.length} label={language === "en" ? "Active Collaborators" : "Collaborateurs Actifs"} />
            <CounterAnimation target={12} label={language === "en" ? "Countries Represented" : "Pays Représentés"} />
            <CounterAnimation target="5,000+" label={language === "en" ? "Youth Impacted" : "Jeunes Impactés"} />
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedCollaborator && (
          <CollaboratorModal
            collaborator={selectedCollaborator}
            onClose={() => setSelectedCollaborator(null)}
            modalRef={modalRef}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Collaborateurs;