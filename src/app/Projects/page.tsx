import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container">
      <Tabs defaultValue="tab1" className="w-[700px]">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="tab1" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Projects Catalogue</TabsTrigger>
          <TabsTrigger value="tab2" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">AI Website</TabsTrigger>
          <TabsTrigger value="tab3" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Personal Website</TabsTrigger>
          <TabsTrigger value="tab4" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Portfolio 1</TabsTrigger>
          <TabsTrigger value="tab5" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Portfolio 2</TabsTrigger>
        </TabsList>

        <div>
          <TabsContent value="tab1">
            <Card className="grid grid-cols-5 justify-self-start">
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>AI Website</CardTitle>
                      <Link
                        href="https://allaboutaidomain.vercel.app/"
                        target="_blank"
                      >
                        <img src="/Proj1screenshot.png" alt="aiwebsite" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto" />
                      </Link>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>Personal Website</CardTitle>
                      <Link
                        href="https://personalwebsite-my.vercel.app/"
                        target="_blank"
                      >
                        <img src="/Proj2screenshot.png" alt="personalweb" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                      </Link>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>Portfolio Website 1</CardTitle>
                      <Link
                        href="https://portfoliowebsite-my.vercel.app/"
                        target="_blank"
                      >
                        <img src="/Proj3screenshot.png" alt="portfolio1" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                      </Link>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>Portfolio Website 2</CardTitle>
                      <Link
                        href="https://portfolioenhanced.vercel.app/"
                        target="_blank"
                      >
                        <img src="/Proj4screenshot.png" alt="portfolio2" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                      </Link>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>

        <TabsContent value="tab2">
          <Card>
            <CardHeader>
              <CardDescription>
                A website regarding information from the world of Artificial
                Intelligence.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <Link
                      href="https://allaboutaidomain.vercel.app/"
                      target="_blank"
                    >
                      <img src="/Proj1screenshot.png" alt="aiweb" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </Link>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab3">
          <Card>
            <CardHeader>
              <CardDescription>A simple Personal Website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <Link
                      href="https://personalwebsite-my.vercel.app/"
                      target="_blank"
                    >
                      <img src="/Proj2screenshot.png" alt="personalweb" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </Link>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab4">
          <Card>
            <CardHeader>
              <CardDescription>My First Portfolio Website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <Link
                      href="https://portfoliowebsite-my.vercel.app/"
                      target="_blank"
                    >
                      <img src="/Proj3screenshot.png" alt="portfolio1" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </Link>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab5">
          <Card>
            <CardHeader>
              <CardDescription>My Second Portfolio Website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <Link
                      href="https://portfolioenhanced.vercel.app/"
                      target="_blank"
                    >
                      <img src="/Proj4screenshot.png" alt="portfolio2" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </Link>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
