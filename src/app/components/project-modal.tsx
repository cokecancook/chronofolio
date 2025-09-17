"use client";

import type { PortfolioItem } from "@/app/lib/portfolio-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) {
    return null;
  }

  return (
    <Dialog open={!!project} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90svh] overflow-y-auto p-0">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold font-headline">{project.title}</DialogTitle>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex gap-2 flex-wrap">
                {project.categories.map((category, index) => (
                  <Badge key={index} variant="secondary">{category}</Badge>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
          </DialogHeader>
        </div>
        <div className="flex flex-col gap-8 px-6 pb-6">
          <Carousel className="w-full">
            <CarouselContent>
              {[project.mainImage, ...project.gallery].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={`${project.title} - image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                      sizes="100vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-none" />
            <CarouselNext className="right-2 border-none"/>
          </Carousel>
          <DialogDescription className="text-base leading-relaxed text-foreground/80 max-w-3xl mx-auto">
            {project.description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
