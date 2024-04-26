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
    <div>
      <Tabs defaultValue="tab1" className="w-[900px]">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="tab1">Catalogue</TabsTrigger>
          <TabsTrigger value="tab2">AI Website</TabsTrigger>
          <TabsTrigger value="tab3">Personal Website</TabsTrigger>
          <TabsTrigger value="tab4">Portfolio 1</TabsTrigger>
          <TabsTrigger value="tab5">Portfolio 2</TabsTrigger>
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
                        <img src="/Proj1screenshot.png" alt="aiwebsite" />
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
                        <img src="/Proj2screenshot.png" alt="personalweb" />
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
                        <img src="/Proj3screenshot.png" alt="portfolio1" />
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
                        <img src="/Proj4screenshot.png" alt="portfolio2" />
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
                      <img src="/Proj1screenshot.png" alt="aiweb" />
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
                      <img src="/Proj2screenshot.png" alt="personalweb" />
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
                      <img src="/Proj3screenshot.png" alt="portfolio1" />
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
                      <img src="/Proj4screenshot.png" alt="portfolio2" />
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
