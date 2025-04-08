import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import portfolioData from "@/data/portfolio";
import {
  Calendar,
  GraduationCap,
  Award,
  MapPin,
  ExternalLink,
  FileText,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  };

  return (
    <section
      id="education"
      className="section-padding bg-secondary/20 relative"
    >
      {/* Tech-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22rgb(255 255 255 / 0.03)%22%3E%3Cpath d=%22M0 .5H31.5V32%22/%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Education & Certifications
          </h2>
          <p className="text-foreground/80">
            My academic background and professional certifications that have
            shaped my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border border-white/10 bg-secondary/30 overflow-hidden hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="max-h-[50vh] custom-scrollbar">
                {portfolioData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="mb-6 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-colors "
                  >
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-secondary-foreground mt-1">
                      {edu.major}
                    </p>
                    <p className="text-primary mt-1">{edu.institution}</p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-foreground/70">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-2" />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-secondary/30 overflow-hidden hover:border-white/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4 max-h-[50vh] custom-scrollbar">
                {portfolioData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>

                        <p className="text-sm text-foreground/70">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-foreground/70 mr-2">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {(cert.previewLink || cert.externalLink) && (
                      <>
                        <Separator className="my-2 bg-white/10" />
                        <div className="flex gap-4">
                          {cert.previewLink && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs flex items-center hover:text-primary/70 transition-colors p-0"
                              onClick={() =>
                                setSelectedCertificate(cert.previewLink || null)
                              }
                            >
                              <FileText size={14} className="mr-1" />
                              View Certificate
                            </Button>
                          )}

                          {cert.externalLink && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs flex items-center hover:text-primary/70 transition-colors p-0"
                              onClick={() =>
                                window.open(cert.externalLink, "_blank")
                              }
                            >
                              <ExternalLink size={14} className="mr-1" />
                              Visit Provider
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* PDF Preview Dialog */}
      <Dialog
        open={!!selectedCertificate}
        onOpenChange={(open) => !open && setSelectedCertificate(null)}
      >
        <DialogContent className="bg-background border border-white/10 max-w-4xl max-h-[90vh] p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-xl">Certificate Preview</DialogTitle>
          </DialogHeader>

          <div className="relative mt-2 overflow-hidden rounded-md border border-white/10 h-[65vh] w-full">
            {selectedCertificate && (
              <iframe
                src={selectedCertificate}
                className="w-full h-full object-cover object-center"
                title="Certificate Preview"
                style={{
                  border: "none",
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "top left",
                  width: `${100 / zoomLevel}%`,
                  height: `${100 / zoomLevel}%`,
                }}
              />
            )}

            {/* Zoom controls */}
            <div className="absolute top-2 right-2 flex gap-2 bg-background/80 backdrop-blur-sm p-1 rounded-md border border-white/10">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/50 hover:bg-background"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut size={16} />
                <span className="sr-only">Zoom Out</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/50 hover:bg-background"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2}
              >
                <ZoomIn size={16} />
                <span className="sr-only">Zoom In</span>
              </Button>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setSelectedCertificate(null)}
            >
              Close
            </Button>
            {selectedCertificate &&
              portfolioData.certifications.find(
                (cert) =>
                  cert.previewLink === selectedCertificate && cert.externalLink
              )?.externalLink && (
                <Button
                  variant="default"
                  onClick={() => {
                    const cert = portfolioData.certifications.find(
                      (c) => c.previewLink === selectedCertificate
                    );
                    if (cert?.externalLink) {
                      window.open(cert.externalLink, "_blank");
                    }
                  }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Full Certificate
                </Button>
              )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Education;
