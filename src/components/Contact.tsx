import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import portfolioData from "@/data/portfolio";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Optional: You can still handle custom submission logic if needed
  // For basic Netlify Forms, the form submission is handled by Netlify.
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default if you want to show a toast and reset manually
    e.preventDefault();
    setIsSubmitting(true);

    // Normally, Netlify handles the form submission automatically.
    // If you want a custom submission behavior, you can perform extra actions here.
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-foreground/80">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <Card className="border border-white/10 bg-white/5 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-4 text-primary" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${portfolioData.email}`}
                        className="text-foreground/70 hover:text-primary"
                      >
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <Phone className="mr-4 text-primary" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${portfolioData.phone}`}
                        className="text-foreground/70 hover:text-primary"
                      >
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <MapPin className="mr-4 text-primary" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-foreground/70">
                        {portfolioData.location}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="font-medium mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                      <a
                        href={
                          portfolioData.socialLinks
                            .map((link) => link.url)
                            .filter((url) => url.includes("linkedin"))[0]
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={
                          portfolioData.socialLinks
                            .map((link) => link.url)
                            .filter((url) => url.includes("github"))[0]
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={`mailto:${portfolioData.email}`}
                        className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border border-white/10 bg-white/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                {/* Netlify Form */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden input for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field */}
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-secondary/30 border-white/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="bg-secondary/30 border-white/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={5}
                      required
                      className="bg-secondary/30 border-white/10"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
