import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const Introduction = () => {
  return (
    <div className="container">
      <div className="text-justify">
        <Tabs defaultValue="account" className="w-[800px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="account"
              className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-auto"
            >
              Introduction
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-auto"
            >
              About Me
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card id="intro">
              <CardHeader>
                <CardDescription>
                  As a web developer, I seamlessly blend creativity with
                  technical prowess, crafting digital landscapes that captivate
                  and engage. My expertise extend beyond mere code; I possess an
                  intuitive understanding of user experience, ensuring that
                  every interface I create is not just functional, but
                  delightful to navigate. My passion for innovation drive me to
                  stay abreast of the latest technologies, constantly pushing
                  boundaries to deliver cutting-edge solutions. With meticulous
                  attention to detail, transform concepts into sleek, responsive
                  websites, each line of code a testament to my dedication to
                  excellence.
                </CardDescription>
                <CardDescription>
                  As a seasoned web developer, my proficiency transcends
                  conventional boundaries, delving into the realms of advanced
                  programming paradigms and intricate architectural designs. My
                  mastery of language like typescript enables me to architect
                  complex web applications with seamless functionality and
                  unparalleled efficiency. My expertise in framework like Next
                  JS empowers me to craft dynamic user interfaces that respond
                  intuitively to user interactions. I effortlessly navigate the
                  intricacies of backend development, employing technologies
                  such as Node.js to build robust server-side systems capable of
                  handling immense traffic loads with grace.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card id="aboutme">
              <CardHeader>
                <CardDescription>
                  Born and raised in the vibrant metropolis of Karachi, I
                  possess a rich cultural heritage intertwined with the bustling
                  energy of city lights. Educated in the esteemed institutions
                  of Karachi, I have acquired a solid foundation of knowledge,
                  culminating in impressive qualifications reflective of my
                  dedication and intellect. Beyond academia, my true passion
                  lies in leveraging technology to drive positive change,
                  fueling my aspirations to contribute meaningfully to society.
                  In my spare time, immerse myself in a diverse array of
                  hobbies, ranging from exploring the culinary delights of
                  Karachi bustling streets to delving into the intricacies of
                  life. My interests span a wide spectrum, music, reading,
                  travelling, programming, astronomy, philosophy, technology,
                  physics, space and so on, reflecting a keen curiosity and a
                  drive to make a difference in the world around me.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Introduction;
