"use client";

import type { PortfolioItem } from "@/app/lib/portfolio-data";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./project-modal";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface PortfolioTimelineProps {
  projects: PortfolioItem[];
  categories: string[];
}

export function PortfolioTimeline({ projects, categories }: PortfolioTimelineProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  
  const isMobile = useIsMobile();
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);
  
  const activeCardId = hoveredCardId;

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

      <div 
        ref={timelineRef} 
        className="relative w-full max-w-4xl mx-auto"
        onMouseLeave={() => setHoveredCardId(null)}
      >
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

        {filteredProjects.map((project, index) => {
          const isActive = project.id === activeCardId;

          return (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-project-id={project.id}
              className={cn(
                "portfolio-card relative mb-12 md:mb-24",
                "md:w-1/2",
                index % 2 === 0 ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto"
              )}
              onMouseEnter={() => !isMobile && setHoveredCardId(project.id)}
            >
              <div
                className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary hidden md:block",
                    index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2",
                    isActive && "bg-primary"
                )}
                style={{transition: 'transform 0.1s, background-color 0.1s'}}
              ></div>
              
              <div className="relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className={cn("relative overflow-hidden shadow-lg")}>
                  <Image
                    src={project.mainImage.src}
                    width={project.mainImage.width}
                    height={project.mainImage.height}
                    alt={project.title}
                    data-ai-hint={project.mainImage.hint}
                    className="w-full h-auto"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4",
                      !isActive && "hidden"
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
    </section>
  );
}
