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
              <Badge variant="secondary">{project.category}</Badge>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
          </DialogHeader>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-6">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {[project.mainImage, ...project.gallery].map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative rounded-lg overflow-hidden border">
                      <Image
                        src={image.src}
                        alt={`${project.title} - image ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2"/>
            </Carousel>
          </div>
          <div>
            <DialogDescription as="div">
                <p className="text-base leading-relaxed text-foreground/80">{project.description}</p>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
