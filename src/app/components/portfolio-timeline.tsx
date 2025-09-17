"use client";

import type { PortfolioItem } from "@/app/lib/portfolio-data";
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./project-modal";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface PortfolioTimelineProps {
  projects: PortfolioItem[];
  categories: string[];
}

function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle: boolean;
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  } as T;
}

export function PortfolioTimeline({ projects, categories }: PortfolioTimelineProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [centeredCardId, setCenteredCardId] = useState<string | null>(null);
  
  const isMobile = useIsMobile();
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  const handleScroll = useCallback(() => {
    if (isMobile) {
        // On mobile, find the first fully visible card and mark it as centered
        let bestCardId: string | null = null;
        let smallestTop: number | null = null;
        cardRefs.current.forEach((cardEl) => {
            if (!cardEl) return;
            const rect = cardEl.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                if (smallestTop === null || rect.top < smallestTop) {
                    smallestTop = rect.top;
                    bestCardId = cardEl.dataset.projectId || null;
                }
            }
        });

        if (bestCardId) {
            setCenteredCardId(bestCardId);
        } else {
             // Fallback to closest to center if none are fully visible
            let minDistance = Infinity;
            let closestCardId: string | null = null;
            const viewportCenter = window.innerHeight / 2;

            cardRefs.current.forEach((cardEl) => {
                if (!cardEl) return;
                const rect = cardEl.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(viewportCenter - cardCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestCardId = cardEl.dataset.projectId || null;
                }
            });
            setCenteredCardId(closestCardId);
        }
        return;
    }
    
    let minDistance = Infinity;
    let closestCardId: string | null = null;
    const viewportCenter = window.innerHeight / 2;
    const transitionThreshold = viewportCenter * 0.4; // Shorter distance for transition

    cardRefs.current.forEach((cardEl) => {
      if (!cardEl) return;
      const rect = cardEl.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestCardId = cardEl.dataset.projectId || null;
      }
      
      const opacity = Math.max(0.4, 1 - distance / viewportCenter);
      cardEl.style.setProperty('--opacity', opacity.toString());

      const grayscaleValue = Math.min(1, distance / transitionThreshold);
      cardEl.style.setProperty('--grayscale', grayscaleValue.toString());
    });

    setCenteredCardId(closestCardId);
  }, [isMobile]);

  const throttledScroll = useMemo(() => throttle(handleScroll, 50), [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [throttledScroll, handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = cardRefs.current;
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [filteredProjects]);

  return (
    <section>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => setActiveFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div ref={timelineRef} className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

        {filteredProjects.map((project, index) => {
          const isCentered = project.id === centeredCardId;

          return (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-project-id={project.id}
              className={cn(
                "group portfolio-card relative mb-12 md:mb-24 opacity-0",
                "md:w-1/2",
                index % 2 === 0 ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto",
                 !isMobile && "md:[--opacity:0.4] md:[opacity:var(--opacity)]"
              )}
            >
              <div
                className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary hidden md:block",
                    index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2",
                    isCentered && "scale-125 bg-primary"
                )}
                style={{transition: 'transform 0.3s, background-color 0.3s'}}
              ></div>
              
              <div className="relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className={cn("relative overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl", !isCentered && "grayscale")}>
                  <Image
                    src={project.mainImage.src}
                    width={project.mainImage.width}
                    height={project.mainImage.height}
                    alt={project.title}
                    data-ai-hint={project.mainImage.hint}
                    className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4",
                      isCentered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  >
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-lg text-gray-200">{project.subtitle}</p>
                    <p className="text-lg text-gray-200 mt-2">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <style jsx>{`
        .portfolio-card {
          transition-property: opacity, transform;
        }
        .is-visible {
          opacity: 1;
        }
        @media (min-width: 768px) {
            .portfolio-card.is-visible {
                opacity: var(--opacity, 0.4);
            }
        }
      `}</style>
    </section>
  );
}
