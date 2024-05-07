"use client"

import {
    Card,
    CardHeader,
    Typography
} from "@material-tailwind/react";

function ContentProject({image} : any) {
  console.log(image)
  return (
    <div className="ml-80 p-5">
      <Typography>
        Projects
      </Typography>
      <div className="grid grid-cols-3 gap-4 justify-items-stretch">
        {
          image.map((item: any) => (
            <Card color="transparent" shadow={false} className="w-96 justify-self-center">
              <CardHeader floated={false} className="h-80">
                <img
                  src={item}
                  alt={"projects" + item}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default ContentProject;