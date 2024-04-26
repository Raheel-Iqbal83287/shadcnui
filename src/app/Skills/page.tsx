import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="container">
      <Tabs defaultValue="tab1" className="w-[730px]">
        <TabsList className="grid grid-cols-6">
          <TabsTrigger value="tab1" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Skills Catalogue</TabsTrigger>
          <TabsTrigger value="tab2" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Structuring</TabsTrigger>
          <TabsTrigger value="tab3" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Design/Layout</TabsTrigger>
          <TabsTrigger value="tab4" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Programming</TabsTrigger>
          <TabsTrigger value="tab5" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">Framework</TabsTrigger>
          <TabsTrigger value="tab6" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto">UI/UX</TabsTrigger>
        </TabsList>

        <div>
          <TabsContent value="tab1">
            <Card className="grid grid-cols-5">
              <CardContent className="">
                <div className="">
                  <Card className="h-[170px] w-[160px]">
                    <CardHeader>
                      <CardTitle>Structuring</CardTitle>
                      <img src="/html.png" alt="html" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="">
                <div className="">
                  <Card className="h-[170px] w-[190px]">
                    <CardHeader>
                      <CardTitle>Design/Layout</CardTitle>
                      <img src="/tailwindcss.png" alt="css" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="">
                <div className="">
                  <Card className="h-[170px] w-[230px]">
                    <CardHeader>
                      <CardTitle>Programming</CardTitle>
                      <img src="/tscript.png" alt="typscrpit" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="">
                <div className="space-y-1">
                  <Card className="h-[175px] w-[200px]">
                    <CardHeader>
                      <CardTitle>Frameworks</CardTitle>
                      <img src="/nextjs.png" alt="nextjs" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>

              <CardContent className="">
                <div className="">
                  <Card className="h-[175px] w-[200px]">
                    <CardHeader>
                      <CardTitle>UI/UX</CardTitle>
                      <img src="/shadcnui.png" alt="shadcnui" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
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
              <CardDescription>Hyper Text Markup Language</CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="">
                <Card className="w-[200px]">
                  <CardHeader>
                    <img src="/html.png" alt="html" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab3">
          <Card>
            <CardHeader>
              <CardDescription>Tailwind CSS</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <img src="/tailwindcss.png" alt="tailwindcss" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab4">
          <Card>
            <CardHeader>
              <CardDescription>TypeScript</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <img src="/tscript.png" alt="typscrpit" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab5">
          <Card>
            <CardHeader>
              <CardDescription>NEXT.JS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <img src="/nextjs.png" alt="nextjs" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tab6">
          <Card>
            <CardHeader>
              <CardDescription>Shadcn/ui</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <Link
                      href="https://portfolioenhanced.vercel.app/"
                      target="_blank"
                    >
                      <img src="/shadcnui.png" alt="portfolio2" loading="eager" decoding="async" className="h-auto w-auto object-cover transition-all hover:scale-150 aspect-auto"/>
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

export default Skills;
